import { patientDB } from "../Config/DatabaseConnection.js"; // Make sure this has the correct database connection

export const ViewPatientData = async (req, res) => {
    try {
        const query = `SELECT * FROM public."PatientDataTest"`;  // Your query to select all records from the PatientDataTest table
        const result = await patientDB.query(query);  // Execute the query

        if (result.rows.length === 0) {
            // If no rows are returned, respond with a 404 Not Found status
            return res.status(404).json({ message: "No patient data found" });
        }

        // Send the fetched data as a JSON response
        res.status(200).json(result.rows);
    } catch (error) {
        // Handle any errors that occur during the query execution
        console.error("Error fetching patient data:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Search for a patient by ID
export const SearchPatientData = async (req, res) => {
    const patientId = req.query.P_ID;  // Get the patient ID from the query parameter

    if (!patientId) {
        return res.status(400).json({ error: "Patient ID is required" });
    }

    try {
        const query = `SELECT * FROM public."PatientDataTest" WHERE "P_ID" = $1`;
        const result = await patientDB.query(query, [patientId]);
        

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Patient not found" });
        }

        console.log("Patient found:", result.rows[0]); // Log before response
        res.status(200).json(result.rows[0]);

    } catch (error) {
        console.error("Error fetching patient data:", error.message);
        res.status(500).json({ error: error.message });
    }
};
// Update patient data
export const UpdatePatient = async (req, res) => {
    const { P_ID, F_name, L_name, Email, Phone, Gender, Address, DOB, Password } = req.body;

    if (!P_ID) {
        return res.status(400).json({ error: "Patient ID is required" });
    }

    try {
        // Check if patient exists
        const checkQuery = `SELECT * FROM public."PatientDataTest" WHERE "P_ID" = $1`;
        const checkResult = await patientDB.query(checkQuery, [P_ID]);

        if (checkResult.rows.length === 0) {
            return res.status(404).json({ error: "Patient not found" });
        }

        // Update patient data
        const query = `
            UPDATE public."PatientDataTest"
            SET "F_name" = $1, "L_name" = $2, "Email" = $3, "Phone" = $4, "Gender" = $5, 
                "Address" = $6, "DOB" = $7, "Password" = $8
            WHERE "P_ID" = $9
        `;
        const values = [F_name, L_name, Email, Phone, Gender, Address, DOB, Password, P_ID];

        await patientDB.query(query, values);
        res.status(200).json({ message: "Patient data updated successfully" });

    } catch (error) {
        console.error("Error updating patient data:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
// Delete a patient by ID
export const DeletePatient = async (req, res) => {
    const patientId = req.query.P_ID;
    if (!patientId) {
        return res.status(400).json({ error: "Patient ID is required" });
    }
    try {
        // Check if patient exists
        const checkQuery = `SELECT * FROM public."PatientDataTest" WHERE "P_ID" = $1`;
        const checkResult = await patientDB.query(checkQuery, [patientId]);
        if (checkResult.rows.length === 0) {
            return res.status(404).json({ error: "Patient not found" });
        }
        // Delete patient
        const query = `DELETE FROM public."PatientDataTest" WHERE "P_ID" = $1`;
        await patientDB.query(query, [patientId]);
        console.log("Patient deleted:", patientId);
        res.status(200).json({ message: "Patient deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting patient:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
