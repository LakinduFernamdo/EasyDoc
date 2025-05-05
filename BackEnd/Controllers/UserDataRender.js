import { HospitalDataBase } from "../Config/DatabaseConnection.js";

// Render specific logged-in user's data
export const UserDataRender = async (req, res) => {
  const phone = req.user?.Phone;

  if (!phone) {
    return res.status(401).json({ error: "Unauthorized: Missing user phone" });
  }

  try {
    const query = `
      SELECT "F_name", "L_name", "P_ID", "Phone", "Email", "DOB"
      FROM public."PatientDataTest"
      WHERE "Phone" = $1
    `;

    const result = await HospitalDataBase.query(query, [phone]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user: result.rows[0] });
  } catch (error) {
    console.error("Database query error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
