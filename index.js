import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import summarizeRoutes from "./routes/GroqRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// Enable CORS - allow all origins and methods for now
app.use(cors());

// Routes
app.use("/api", summarizeRoutes);
app.get("/", (req, res) => {
    res.send("Api Service is healthy!");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
