import express from "express";
import {AppointmentRender} from "../Controllers/AppointmentsRender.js";
import {AppointmentCreate} from "../Controllers/MakeAppointments.js";
import {PaymentCreate} from "../Controllers/Payment.js";
import {UserDataRender} from "../Controllers/UserDataRender.js";
import {UserAppointmentHistory} from "../Controllers/UserAppointmentHistory.js";
import {verifyToken} from "../Middleware/authMiddleware.js";


const router = express.Router();

router.get("/",verifyToken,UserDataRender);//user view UserCard(patient Card)
router.post("/add-appointment",AppointmentCreate);//user create appointment from UserFeature
router.post("/user-payment",PaymentCreate);//user create payment

router.get("/get-appointment-history",UserAppointmentHistory);//user view appointment history

export default router;