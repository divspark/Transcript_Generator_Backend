import express from "express";
import { shareSummary } from "../controllers/ShareController.js";

const router = express.Router();
router.post("/share", shareSummary);

export default router;
