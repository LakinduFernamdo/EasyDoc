import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import loginRoutes from "./Routes/PatientLogin.js";
import registerRoutes from "./Routes/PatientRegister.js";
import doctorRoutes from "./Routes/DoctorPg.js";

dotenv.config(); // Load environment variables

const app=express();
const PORT=process.env.PORT||5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Use routes with distinct paths
app.use("/auth/signIn",loginRoutes);
app.use("/auth/signUp",registerRoutes);
app.use("/api/doctors",doctorRoutes)

app.listen(PORT,() =>
{
  console.log(`Server is running on port ${PORT}`);
});