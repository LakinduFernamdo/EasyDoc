import {HospitalDataBase} from "../Config/DatabaseConnection.js";

export const UserDataRender = async (req, res) => {
    try {
      const query = `
        SELECT "F_name", "L_name", "P_ID", "Phone", "Email", "DOB"
        FROM public."PatientDataTest"
        LIMIT 1
      `;
      
      const result = await HospitalDataBase.query(query);
  
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "No user data found" });
      }
  
      return res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error("Database query error:", error);
      return res.status(500).json({ error: error.message });
    }
  };