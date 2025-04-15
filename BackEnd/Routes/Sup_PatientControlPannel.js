import express from "express";
import {ViewPatientData} from "../Controllers/Control_Patients.js";
import {SearchPatientData} from "../Controllers/Control_Patients.js";
import {UpdatePatient} from "../Controllers/Control_Patients.js";
import {DeletePatient} from "../Controllers/Control_Patients.js";
  
//when request came from frontend to backend route, it will call the loginPatient function from the Controller.js file.

const router = express.Router();

router.get("/",ViewPatientData);
router.get("/patient-search", SearchPatientData);
router.patch("/patient-update", UpdatePatient);
router.delete("/patient-delete", DeletePatient);

export default router;