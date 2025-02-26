import DB from "../Config/PatientDB.js";




export const registerPatient = async (req, res) => {
  const { F_name, L_name, Email, Phone, Gender, Address, DOB, Password } = req.body;
  console.log("BackEnd received Registration Data:", req.body);

  if (!F_name || !L_name || !Email || !Phone || !Gender || !Address || !DOB || !Password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const query = `
    INSERT INTO public."PatientDataTest" 
    ("F_name", "L_name", "Email", "Phone", "Gender", "Address", "DOB", "Password") 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
    RETURNING *;
  `;

  try {
    const result = await DB.query(query, [F_name, L_name, Email, Phone, Gender, Address, DOB, Password]);
    console.log("Patient registered successfully:", result.rows[0]);
    res.status(201).json({ message: "Patient registered successfully", user: result.rows[0] });
  } catch (error) {
    console.error("Error inserting patient details:", error.message);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};
