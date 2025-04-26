
import { HospitalDataBase} from "../Config/DatabaseConnection.js";

export const ViewDoctorsData = async (req, res) => {
  try {
    const getDocQuery = `
      SELECT 
        D."Doc_ID",
        D."Name",
        D."Gender",
        D."Phone",
        D."Specialization",
        D."Availability",
        DA."Dates",
        DA."StartTime",
        DA."EndTime"
      FROM public."DoctorDeatails" D
      LEFT JOIN public."DoctorAvailability" DA
        ON D."Doc_ID" = DA."Doc_ID";
    `;

    const result = await HospitalDataBase.query(getDocQuery);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "No doctor data found" });
    }
    //  Use a Map to group each doctor by their Doc_ID
    const doctorMap = new Map();

    result.rows.forEach((row) => {   // Iterate over each row in the results and group them by Doc_ID
      const docID = row.Doc_ID;

      if (!doctorMap.has(docID)) { // If the doctor doesn't exist in the map, create a new entry
        doctorMap.set(docID, {
          Doc_ID: row.Doc_ID,
          Name: row.Name,
          Gender: row.Gender,
          Phone: row.Phone,
          Specialization: row.Specialization,
          Availability: row.Availability,
          schedule: [], // Initialize an empty schedule array .this contains Dates, StartTime, and EndTime
        });
      }

      if (row.Dates && row.StartTime && row.EndTime) {
        doctorMap.get(docID).schedule.push({
          day: row.Dates,
          startTime: row.StartTime,
          endTime: row.EndTime,
        });
      }
    });

    const doctors = Array.from(doctorMap.values());
    res.status(200).json(doctors);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




// Search for a doctor by Doc_ID
export const SearchDoctorsData = async (req, res) => {
  const searchID = req.query.Doc_ID;

  // Validate if Doctor ID is provided
  if (!searchID) {
    return res.status(400).json({ error: "Doctor ID is required" });
  }

  try {
    // SQL query to get doctor details + schedule using LEFT JOIN
    const searchQuery = `
      SELECT 
        D."Doc_ID",
        D."Name",
        D."Gender",
        D."Phone",
        D."Specialization",
        D."Availability",
        DA."Dates",
        DA."StartTime",
        DA."EndTime"
      FROM public."DoctorDeatails" D
      LEFT JOIN public."DoctorAvailability" DA
        ON D."Doc_ID" = DA."Doc_ID"
      WHERE D."Doc_ID" = $1
    `;

    const results = await HospitalDataBase.query(searchQuery, [searchID]);

    if (results.rows.length === 0) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    // Return full array of results (for all date/time entries for this doctor)
    return res.status(200).json(results.rows);

  } catch (error) {
    console.error("Error in SearchDoctorsData:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// update doctor data
export const UpdateDoctor = async (req, res) => {
  const {
    Doc_ID,
    Name,
    Gender,
    Phone,
    Specialization,
    Availability,
    Schedule
  } = req.body;

  if (!Doc_ID) {
    return res.status(400).json({ error: "Doctor ID is required" });
  }

  try {
    // 1. Update DoctorDetails table
    const updateDoctorQuery = `
      UPDATE public."DoctorDeatails"
      SET 
        "Name" = $2,
        "Gender" = $3,
        "Phone" = $4,
        "Specialization" = $5,
        "Availability" = $6
      WHERE "Doc_ID" = $1
      RETURNING *
    `;

    const doctorValues = [
      Doc_ID,
      Name,
      Gender,
      Phone,
      Specialization,
      Availability
    ];

    const updatedDoctor = await HospitalDataBase.query(updateDoctorQuery, doctorValues);

    if (updatedDoctor.rowCount === 0) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    // 2. Update DoctorAvailability table
    if (Array.isArray(Schedule) && Schedule.length > 0) {
      for (const { Dates, StartTime, EndTime } of Schedule) {
        const updateScheduleQuery = `
   UPDATE public."DoctorAvailability"
   SET "Dates" = $2, "StartTime" = $3, "EndTime" = $4
   WHERE "Doc_ID" = $1 
`;
        const result = await HospitalDataBase.query(updateScheduleQuery, [
          Doc_ID,
          Dates,
          StartTime,
          EndTime,
          
        ]);


      }
    }

    // 3. Return updated data
    const updatedScheduleQuery = `SELECT * FROM public."DoctorAvailability" WHERE "Doc_ID" = $1`;
    const updatedSchedule = await HospitalDataBase.query(updatedScheduleQuery, [Doc_ID]);

    res.status(200).json({
      message: "Doctor and schedule updated successfully",
      updatedDoctor: updatedDoctor.rows[0],
      updatedSchedule: updatedSchedule.rows,
    });

  } catch (error) {
    console.error("Error in UpdateDoctor:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

//Delete doctor data from DoctorDeatails and DoctorAvailability tables
export const DeleteDoctor = async (req, res) => {
  const docID = req.query.Doc_ID;

  if (!docID) {
    return res.status(400).json({ message: "Doctor ID is required for deletion" });
  }

  try {
    // First, delete from DoctorAvailability (due to foreign key constraints)
    const deleteScheduleQuery = `DELETE FROM public."DoctorAvailability" WHERE "Doc_ID" = $1`;
    await HospitalDataBase.query(deleteScheduleQuery, [docID]);

    // Then, delete from DoctorDeatails
    const deleteDoctorQuery = `DELETE FROM public."DoctorDeatails" WHERE "Doc_ID" = $1 RETURNING *`;
    const result = await HospitalDataBase.query(deleteDoctorQuery, [docID]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Doctor not found or already deleted" });
    }

    res.status(200).json({ message: "Doctor and schedule deleted successfully", deletedDoctor: result.rows[0] });

  } catch (error) {
    console.error("Error deleting doctor:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

