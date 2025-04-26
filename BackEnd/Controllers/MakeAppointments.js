import { HospitalDataBase } from "../Config/DatabaseConnection.js";

export const x = async (req, res) => {
  const { P_ID, Doc_ID, Dates, Time } = req.body;
  if (!P_ID || !Doc_ID || !Dates || !Time) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Step 1: Count existing appointments for the same doctor on the same date
    const countQuery = `
      SELECT COUNT(*) 
      FROM public."AppointmentData"
      WHERE "Doc_ID" = $1 AND "Dates" = $2
    `;
    const countResult = await HospitalDataBase.query(countQuery, [Doc_ID, Dates]);
    const queueNumber = parseInt(countResult.rows[0].count) + 1;

    // Step 2: Insert the new appointment with QueueNumber
    const insertQuery = `
      INSERT INTO public."AppointmentData" ("P_ID", "Doc_ID", "Dates", "Time", "QueueNumber")
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `;
    const insertResult = await HospitalDataBase.query(insertQuery, [
      P_ID,
      Doc_ID,
      Dates,
      Time,
      queueNumber,
    ]);

    res.status(200).json({
      message: "Appointment booked successfully",
      appointment: insertResult.rows[0],
    });
  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({ error: error.message });
  }
};
