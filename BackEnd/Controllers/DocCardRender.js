import {doctorDB} from "../Config/DatabaseConnection.js";
export const ViewDocCards = async (req, res) => {
  try {
    const query = `
      SELECT 
        d."Doc_ID",
        d."Name",
        d."Specialization",
        a."Dates",
        a."StartTime",
        a."EndTime",
        d."Availability"
      FROM public."DoctorDeatails" d
      INNER JOIN public."DoctorAvailability" a 
      ON d."Doc_ID" = a."Doc_ID";
    `;

    const result = await doctorDB.query(query);
    console.log("Fetched doctor data:", result.rows);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching doctor data:", error);
    res.status(500).json({ error: error.message });
  }
};
