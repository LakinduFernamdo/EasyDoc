import { HospitalDataBase } from "../Config/DatabaseConnection.js";

// Assumptions: User cannot change Doctor if already booked. 
// User cannot change Date and Time if already booked.
export const UpdatePatientAppointment = async (req, res) => {
  const {
    PatientName,
    P_ID,
    AppId,
    Doc_ID,
    Date,
    Time,
  } = req.body;

  if (!P_ID || !AppId || !Doc_ID || !Date || !Time) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    console.log("Data received in backend:", req.body);

    // First, check if appointment conflict exists
    const { rows: existingAppointments } = await HospitalDataBase.query(
      `SELECT * FROM public."AppointmentData"
       WHERE "Doc_ID" = $1 AND "Dates" = $2 AND "Time" = $3 AND "App_ID" != $4`,
      [Doc_ID, Date, Time, AppId]
    );

    if (existingAppointments.length > 0) {
      console.log("Appointment conflict found!");
      return res.status(400).json({ message: "Another appointment already exists for this doctor at the selected date and time." });
    }

    // If no conflict, update the appointment
    const { rowCount } = await HospitalDataBase.query(
      `UPDATE public."AppointmentData"
       SET "P_ID" = $1, "Dates" = $2, "Time" = $3
       WHERE "App_ID" = $4`,
      [P_ID, Date, Time, AppId]
    );

    if (rowCount === 0) {
      return res.status(404).json({ message: "Appointment not found or no changes made." });
    }

    return res.status(200).json({ message: "Appointment updated successfully." });

  } catch (error) {
    console.error("Error updating appointment:", error);
    return res.status(500).json({ message: error.message });
  }
};

export const DeleteAppointment = async (req, res) => {
  const { Doc_ID } = req.body; // <-- read from body

  try {
    const { rowCount } = await HospitalDataBase.query(
      `DELETE FROM public."AppointmentData" WHERE "Doc_ID" = $1`,
      [Doc_ID]
    );

    if (rowCount === 0) {
      return res.status(404).json({ message: "Appointment not found." });
    }

    return res.status(200).json({ message: "Appointment deleted successfully." });
  } catch (error) {
    console.error('Error deleting appointment:', error);
    return res.status(500).json({ message: "Server error during deletion." });
  }
};
