import { HospitalDataBase } from "../Config/DatabaseConnection.js";

export const AppointmentRender = async (req, res) => {
  try {
    const viewAppointmentQuery = `
      SELECT 
        a."App_ID", 
        a."Dates", 
        a."Time", 
        a."P_ID",
        a."Doc_ID",
        a."QueueNumber", 
        p."F_name"     
      FROM public."AppointmentData" a 
      INNER JOIN public."PatientDataTest" p
      ON a."P_ID" = p."P_ID";     
        
    `;
    const result = await HospitalDataBase.query(viewAppointmentQuery);
    console.log("Fetched Appointment data:", result.rows);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching Appointment data:", error);
    res.status(500).json({ error: error.message });
  }
};
