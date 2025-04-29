import { HospitalDataBase } from "../Config/DatabaseConnection.js";

export const GetSupervisorData = async (req, res) => {
    try {
      const selectQuery = `
        SELECT "Sup_ID", "UserName", "Password"
        FROM public."SupervisorsDeatails"
      `;
  
      const result = await HospitalDataBase.query(selectQuery);
  
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "No supervisor data found." });
      }
  
      res.status(200).json(result.rows);
    } catch (error) {
      console.error("Error fetching supervisor data:", error);
      res.status(500).json({ error: error.message });
    }
  };
  