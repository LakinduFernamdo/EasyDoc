import express from 'express';
import { UpdatePatientAppointment } from '../Controllers/Sup_UpdateAppointment.js';
import { DeleteAppointment } from '../Controllers/Sup_UpdateAppointment.js';

const router = express.Router();
router.patch("/save-appointment",UpdatePatientAppointment); //supervisor save update
router.delete("/delete-appointment",DeleteAppointment); //supervisor delete appointment
export default router;