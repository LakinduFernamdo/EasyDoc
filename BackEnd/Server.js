import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import patientloginRoutes from "./Routes/PatientLogin.js";
import registerRoutes from "./Routes/PatientRegister.js";
import supervisorloginRoutes from "./Routes/SupervisorLog.js";
import SupervisorControllPannel_Patient from "./Routes/Sup_PatientControlPannel.js";
import DocCards from "./Routes/DocCards.js";
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
app.use("/auth/supervisor/patient-deatails",SupervisorControllPannel_Patient);

app.use("/auth/doctor-information",DocCards);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
