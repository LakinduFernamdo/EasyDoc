import { HospitalDataBase } from "../Config/DatabaseConnection.js";

export const RegisterDoctor = async (req, res) => {
   const { Doc_Name, Gender, Phone, Specialization, Availability } = req.body;

   const insertDocDetailsQuery = `
    INSERT INTO  public."DoctorDeatails"("Name", "Gender", "Phone", "Specialization", "Availability")
    VALUES ($1, $2, $3, $4, $5) RETURNING *;`;

   try {
      const result = await HospitalDataBase.query(insertDocDetailsQuery, [
         Doc_Name, Gender, Phone, Specialization, Availability
      ]);
      console.log(result.rows[0]);
      res.status(200).json({ message: "Doctor Registered Successfully" });
   } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Internal Server Error", details: error.message });
   }
};

export const RegisterDoctorSchedule = async (req, res) => {
   const { Doc_ID, Schedule } = req.body;

   const insertScheduleQuery = `
    INSERT INTO public."DoctorAvailability"("Doc_ID", "Dates", "StartTime", "EndTime")
    VALUES ($1, $2, $3, $4) RETURNING *;`;

   try {
      const result = await HospitalDataBase.query(insertScheduleQuery, [
         Doc_ID,
         Schedule.Date,
         Schedule.StartTime,
         Schedule.EndTime
      ]);
      console.log(result.rows[0]);
      res.status(200).json({ message: "Doctor Schedule Registered Successfully" });
   } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Internal Server Error", details: error.message });
   }
};
