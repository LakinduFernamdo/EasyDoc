import pkg from "pg";
const { Client } = pkg;
import dotenv from "dotenv";
dotenv.config({ path: "./Data.env" }); 
console.log("DB_USER:", process.env.DB_USER); // Debugging



const mydatabase = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: String(process.env.DB_PASSWORD), 
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432, 
});

mydatabase
    .connect()
    .then(() => {
        console.log("✅ Connected to the Patient Database on port: " + process.env.DB_PORT);
    })
    .catch((error) => {
        console.error("❌ Error connecting to the patient database:", error.message);
        console.log("DB_USER:", process.env.DB_USER); // Debugging line
        console.log("DB_PASSWORD:", process.env.DB_PASSWORD); // Debugging line
        console.log("DB_NAME:", process.env.DB_NAME); // Debugging line
        console.log("DB_HOST:", process.env.DB_HOST); // Debugging line
    });

export default mydatabase;
