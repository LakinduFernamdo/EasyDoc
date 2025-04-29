import { HospitalDataBase } from "../Config/DatabaseConnection.js";

export const GetAppointment = async (req, res) => {
    const selectQuery = `SELECT * FROM public."BillsData"`;
  
    try {
      const result = await HospitalDataBase.query(selectQuery);
  
      const formattedResult = result.rows.map(row => {
        const localDate = new Date(row.Date); // assuming your column is named "Dates"
        const formattedDate = localDate.toLocaleDateString('en-GB'); // "DD/MM/YYYY"
        return {
          ...row,
          Date: formattedDate
        };
      });
  
      res.status(200).json(formattedResult);
    } catch (error) {
      console.error("Error fetching data from the database:", error);
      res.status(500).json({ message: "Failed to fetch appointments" });
    }
  };
  