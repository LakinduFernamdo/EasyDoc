import express from "express";
import {AppointmentRender} from "../Controllers/AppointmentsRender.js";
import {AppointmentCreate} from "../Controllers/MakeAppointments.js";
import {PaymentCreate} from "../Controllers/Payment.js";
import {UserDataRender} from "../Controllers/UserDataRender.js";
import {UserAppointmentHistory} from "../Controllers/UserAppointmentHistory.js";
const router = express.Router();
router.get("/",AppointmentRender);//supervisor render appointments
router.post("/add-appointment",AppointmentCreate);//user create appointment
router.post("/user-payment",PaymentCreate);//user create payment
router.get("/user-data",UserDataRender);//user view appointment
router.get("/get-appointment-history",UserAppointmentHistory);//user view appointment history

export default router;