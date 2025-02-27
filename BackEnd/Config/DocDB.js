// DocDB.js
import pkg from "pg";
const {Pool}=pkg; // Correct import for ES modules
import dotenv from "dotenv";

dotenv.config({path: "./Data.env"}); // Load environment variables from the specified .env file

const pool=new Pool({
  user: process.env.DB_USER||"postgres", // Use environment variables or defaults
  host: process.env.DB_HOST||"localhost",
  database: process.env.DB_NAME2||"sampleDocs",
  password: process.env.DB_PASSWORD||"your-password", // Replace with your PostgreSQL password
  port: process.env.DB_PORT||5432,
});
pool.query("SELECT NOW()",(err,res) =>
{
  if(err)
  {
    console.log("Database connection failed:",err.stack);
  } else
  {
    console.log("Database connected:",res.rows[0]);
  }
});

export default pool; // Export pool so it can be used elsewhere in the app
