import express from 'express';
import { UpdatePatientAppointment } from '../Controllers/Sup_UpdateAppointment.js';
import { DeleteAppointment } from '../Controllers/Sup_UpdateAppointment.js';
import { GetAppointment } from '../Controllers/BillManagement.js';
import { GetSupervisorData } from '../Controllers/RenderSupData.js';

const router = express.Router();
router.patch("/save-appointment",UpdatePatientAppointment); //supervisor save update
router.delete("/delete-appointment",DeleteAppointment); //supervisor delete appointment
router.get("/getbill-details",GetAppointment); //supervisor get bills to table
router.get("/supervisor-details",GetSupervisorData); //supervisor get bills to table
export default router;