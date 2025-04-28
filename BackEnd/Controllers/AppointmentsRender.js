import { HospitalDataBase } from "../Config/DatabaseConnection.js";
//Renser all appointments from DB
export const AppointmentRender = async (req, res) => {
  try {
    const viewAppointmentQuery = `
      SELECT 
        a."App_ID", 
        a."Dates", 
        a."Time", 
        a."P_ID",
        a."Doc_ID",
        p."F_name" ,
        p."L_name"
      FROM public."AppointmentData" a 
      INNER JOIN public."PatientDataTest" p
      ON a."P_ID" = p."P_ID";     
    `;

    const result = await HospitalDataBase.query(viewAppointmentQuery);

    // Format Dates field for every row without the timezone shift
    const formattedResult = result.rows.map(row => {
      const localDate = new Date(row.Dates);
      const formattedDate = localDate.toLocaleDateString('en-GB'); // Format to "DD/MM/YYYY" or "YYYY-MM-DD" depending on locale
      return {
        ...row,
        Dates: formattedDate
      };
    });

    console.log("Fetched Appointment data:", formattedResult);
    res.status(200).json(formattedResult);

  } catch (error) {
    console.error("Error fetching Appointment data:", error);
    res.status(500).json({ error: error.message });
  }
};
