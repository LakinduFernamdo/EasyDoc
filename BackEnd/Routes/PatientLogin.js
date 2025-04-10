import express from "express";
import { loginPatient } from "../Controllers/PatientLog.js";  
//when request came from frontend to backend route, it will call the loginPatient function from the Controller.js file.

const router = express.Router();

router.post("/", loginPatient);

export default router;
