import express from "express";
import { summarizeMeeting } from "../controllers/GroqController.js";

const router = express.Router();

router.post("/summarize", summarizeMeeting);

export default router;
