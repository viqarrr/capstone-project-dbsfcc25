import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { applyJob, getApplicants, getAppliedJobs, updateStatus, deleteApplication } from "../controllers/applicationController.js";

const router = express.Router();

router.route("/apply/:id").post(applyJob);
router.route("/").get(getAppliedJobs);
router.route("/:id/applicants").get(getApplicants);
router.route("/status/:id").put(updateStatus);
router.route("/:id").delete(deleteApplication);
export default router;