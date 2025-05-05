import express from "express";
import { loginPatient } from "../Controllers/PatientLog.js"; 
import { verifyToken } from "../Middleware/authMiddleware.js";
//when request came from frontend to backend route, it will call the loginPatient function from the Controller.js file.

const router = express.Router();

router.post("/signIn",loginPatient);
router.get("/user-account", verifyToken, (req, res) => {
    res.json({ message: "Protected content", user: req.user });
  });

export default router;
