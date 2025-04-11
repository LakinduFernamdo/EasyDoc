import express from "express";
import { ViewDoctorsData } from "../Controllers/Control_Doctors.js";
const router = express.Router();

router.get("/",ViewDoctorsData);

export default router;