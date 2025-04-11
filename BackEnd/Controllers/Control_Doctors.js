import { doctorDB } from "../Config/DatabaseConnection.js";

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

    const result = await doctorDB.query(getDocQuery);

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
