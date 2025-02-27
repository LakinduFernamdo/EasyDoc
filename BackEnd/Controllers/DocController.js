import pool from "../Config/DocDB.js";
export const getDoctors = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM doctors");
    res.json(rows);
  } catch (err) {
    console.error("Error fetching doctors:", err.message);
    res.status(500).send("Server error");
  }
};
