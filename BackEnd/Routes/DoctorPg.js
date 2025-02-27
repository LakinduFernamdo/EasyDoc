import {getDoctors} from "../Controllers/DocController.js";
import express from "express";
const router=express.Router();
router.get("/",getDoctors);

export default router;