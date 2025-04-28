import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import patientloginRoutes from "./Routes/PatientLogin.js";
import registerRoutes from "./Routes/PatientRegister.js";
import supervisorloginRoutes from "./Routes/SupervisorLog.js";
import SupervisorControllPannel_Patient from "./Routes/Sup_PatientControlPannel.js";
import DocCards from "./Routes/DocCards.js";
import SupervisorControllPannel_Doctors from "./Routes/Sup_DoctorControl.js";
import SupervisorControllPannel_Appointment from "./Routes/Appointment.js";
import User_Appointments from "./Routes/Appointment.js";
import Sup_UpdateAppointments from "./Routes/Sup_UpdateAppointment.js";
import {connectDatabases } from "./Config/DatabaseConnection.js";//Getting the function from the DatabaseConnection.js


// Connect to the databases
connectDatabases();



const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes with distinct paths
app.use("/auth/signIn", patientloginRoutes);
app.use("/auth/signUp", registerRoutes);
app.use("/auth/supervisor-signIn", supervisorloginRoutes);
app.use("/auth/supervisor/patient-deatails",SupervisorControllPannel_Patient);//supervisor can view patient data,All CRUD operations

app.use("/auth/doctor-information",DocCards);//render all Doctors from data bse
app.use("/auth/supervisor/doctor-deatails",SupervisorControllPannel_Doctors);//supervisor can view doctor data,All CRUD operations
//handle Appointments
app.use("/auth/supervisor/appointments",SupervisorControllPannel_Appointment);//supervisor can view patient data,All CRUD operations
app.use("/auth/supervisor",Sup_UpdateAppointments);//supervisor can update Appointment card
app.use("/auth/user-account",User_Appointments);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
