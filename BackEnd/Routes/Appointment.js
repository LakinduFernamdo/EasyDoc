import express from "express";
import {AppointmentRender} from "../Controllers/AppointmentsRender.js";
const router = express.Router();
router.get("/",AppointmentRender);
export default router;