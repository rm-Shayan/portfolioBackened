import express from "express";
import {
  createTestimonial,
  fetchTestimonials,
  editTestimonial,
  removeTestimonial
} from "../Controller/testimonialController.js";

const router = express.Router();

router.post("/", createTestimonial);
router.get("/", fetchTestimonials);
router.put("/:id", editTestimonial);
router.delete("/:id", removeTestimonial);

export default router;
