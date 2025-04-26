import {HospitalDataBase } from "../Config/DatabaseConnection.js";

export const SupervisorLoginPage = async (req, res) => {
    const { UserName, Password } = req.body;
    console.log(" BackEnd Received Login Request:", { UserName, Password });
    

    if (!UserName || !Password) {
        return res.status(400).json({ error: "Username and Password are required" });
    }

    try {
        const query = `SELECT "UserName", "Password" FROM public."SupervisorsDeatails" WHERE "UserName" = $1`;

        const result = await HospitalDataBase.query(query, [UserName]);


        if (result.rows[0].UserName !== UserName || result.rows[0].Password !== Password) {
            return res.status(401).json({ error: "Invalid Username or Password" });
        } else {
            console.log("Supervispr Login successful");
            return res.status(200).json({ message: "Login successful", user: result.rows[0] });
                
        }
    } catch (error) {
        console.error("Database query error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};