import DB from "../Config/PatientDB.js";


export const loginPatient = async (req, res) => {
  const { Phone, Password } = req.body;
  console.log("Received Login Request:", { Phone, Password });

  if (!Phone || !Password) {
    return res.status(400).json({ error: "Phone and Password are required" });
  }

  try {
    const query = 'SELECT "Phone", "Password" FROM public."PatientDataTest" WHERE "Phone" = $1';
    const result = await DB.query(query, [Phone]);

    if (result.rows.length === 0 || result.rows[0].Password !== Password) {
      return res.status(401).json({ error: "Invalid Phone or Password" });
    }

    console.log("Password Matched! User Authenticated.");
    return res.status(200).json({ message: "Login successful", user: result.rows[0] });
  } catch (error) {
    console.error("Database query error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
