import express from "express";
import { sendEmail } from "../Controller/Controllor.js";

const router = express.Router();
router.post("/", sendEmail);

export default router;