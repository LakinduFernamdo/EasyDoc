import express from "express";
import { ViewDoctorsData } from "../Controllers/Control_Doctors.js";
import { RegisterDoctor } from "../Controllers/RegisterDoctor.js";
import { RegisterDoctorSchedule } from "../Controllers/RegisterDoctor.js";
import { SearchDoctorsData } from "../Controllers/Control_Doctors.js";
import { UpdateDoctor } from "../Controllers/Control_Doctors.js";
import { DeleteDoctor } from "../Controllers/Control_Doctors.js";
const router = express.Router();

router.get("/",ViewDoctorsData);
router.post("/doctor-register",RegisterDoctor);
router.post("/doctor-schedule",RegisterDoctorSchedule);
router.get("/doctor-search",SearchDoctorsData);
router.patch("/doctor-update",UpdateDoctor);
router.delete("/doctor-delete",DeleteDoctor);

export default router;