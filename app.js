import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import emailRoutes from "./route/route.js";
import testimonialRoutes from "./route/TestimonialRoute.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EJS setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/send-email", emailRoutes);
app.use("/testimonial", testimonialRoutes);

// Error middleware
app.use(errorHandler);

// Deployment-friendly port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Mail serve running on port ${PORT}`);
});
