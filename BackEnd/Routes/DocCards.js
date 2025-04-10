import express from "express";
import {ViewDocCards} from "../Controllers/DocCardRender.js";

const router = express.Router();
router.get("/",ViewDocCards);

export default router;