import express from "express";
import {AppointmentRender} from "../Controllers/AppointmentsRender.js";
import {AppointmentCreate} from "../Controllers/MakeAppointments.js";
const router = express.Router();
router.get("/",AppointmentRender);//supervisor render appointments
router.post("/add-appointment",AppointmentCreate);//user create appointment

export default router;