import express from "express";
import { registerPatient } from "../Controllers/PatientRegister.js";

const router = express.Router();

router.post("/", registerPatient);

export default router;
