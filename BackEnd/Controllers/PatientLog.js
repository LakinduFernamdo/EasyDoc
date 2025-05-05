import { HospitalDataBase } from "../Config/DatabaseConnection.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import fs from "fs";  // Make sure you import 'fs' for file reading

// Function to load environment variables manually from a specific file
function loadEnv(filePath) {
    if (!fs.existsSync(filePath)) {
        throw new Error(`Environment file not found: ${filePath}`);
    }
    const envVars = dotenv.parse(fs.readFileSync(filePath));
    
    // Load parsed environment variables into process.env
    for (const [key, value] of Object.entries(envVars)) {
        process.env[key] = value;
    }
}

loadEnv("./AllDBData.env");  // Load environment variables from the file

export const loginPatient = async (req, res) => {
    const { Phone, Password } = req.body;

    if (!Phone || !Password) {
        return res.status(400).json({ error: "Phone and Password are required" });
    }

    try {
        const query = `SELECT * FROM public."PatientDataTest" WHERE "Phone" = $1`;
        const result = await HospitalDataBase.query(query, [Phone]);

        if (!result.rows.length || result.rows[0].Password !== Password) {
            return res.status(401).json({ error: "Invalid Phone or Password" });
        }

        const user = result.rows[0];

        // Debugging JWT_SECRET
        console.log("JWT_SECRET:", process.env.JWT_SECRET);

        // Ensure the secret exists before signing the token
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined");
        }

        // Create the JWT token using the secret
        const token = jwt.sign({ Phone: user.Phone }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN || "1h",
        });

        return res.status(200).json({ message: "Login successful", token, user });
    } catch (error) {
        console.error("Database query error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
