import express from "express";
import { createJob, getJobs } from "../controllers/jobController.js";
import { protect } from "../middleware/authMiddleware.js";
import { recruiterOnly } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", protect,recruiterOnly, createJob);
router.get("/", getJobs);

export default router;