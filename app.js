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
if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}


app.get('/health', (req, res) => {
  res.send('Service is up and running');
});

const PORT = process.env.PORT || 500;

app.listen(PORT, () => {
    console.log(`🚀 Mail server running on port ${PORT}`);
    if (process.env.RAILWAY_STATIC_URL) {
        console.log(`🌐 Public URL: ${process.env.RAILWAY_STATIC_URL}`);
    }
});