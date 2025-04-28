import { HospitalDataBase } from "../Config/DatabaseConnection.js";
//This is for user data
export const AppointmentCreate = async (req, res) => {
  const { specialization, patient_id, doctor_id, date, time } = req.body;

  try {
    // Check if an appointment already exists
    const { rows: existingAppointments } = await HospitalDataBase.query(
      `SELECT * FROM public."AppointmentData"
       WHERE "Doc_ID" = $1 AND "Dates" = $2 AND "Time" = $3`,
      [doctor_id, date, time]
    );

    if (existingAppointments.length > 0) {
      return res.status(400).json({ message: "This time slot is already booked." });
    }

    // Insert the new appointment
    await HospitalDataBase.query(
      `INSERT INTO public."AppointmentData" ("Specialization", "P_ID", "Doc_ID", "Dates", "Time")
       VALUES ($1, $2, $3, $4, $5)`,
      [specialization, patient_id, doctor_id, date, time]
    );

    res.status(201).json({ message: "Appointment booked successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
