import express from "express";
import {SupervisorLoginPage} from "../Controllers/SupervisorLoging.js";
const router = express.Router();

router.post("/",SupervisorLoginPage);
export default router;