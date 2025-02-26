import express from "express";
import { loginPatient } from "../Controllers/PatientLog.js"; // Import the Controller.when request comes to this 
// route, it will call the loginPatient function from the Controller.js file.

const router = express.Router();

router.post("/", loginPatient);

export default router;
