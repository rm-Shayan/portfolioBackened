import express from "express"
import { sendcv } from "../Controller/controllerCv.js";
const router = express.Router();

router.get("/cv-download",sendcv)
export default router;