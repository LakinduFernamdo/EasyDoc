import { HospitalDataBase } from "../Config/DatabaseConnection.js";

export const UserAppointmentHistory = async (req, res) => {
  let { P_ID } = req.query;

  // Check if P_ID is missing or empty
  if (!P_ID || isNaN(P_ID)) {
    return res.status(400).json({ error: "Invalid or missing patient ID (P_ID)." });
  }

  try {
    // Convert to integer (optional: use BigInt if needed)
    P_ID = parseInt(P_ID);

    const query = `SELECT * FROM public."AppointmentData" WHERE "P_ID" = $1`;
    const result = await HospitalDataBase.query(query, [P_ID]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "No appointment history found for this patient." });
    }

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching appointment history:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
