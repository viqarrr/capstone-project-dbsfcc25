import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob, deleteJob } from "../controllers/jobController.js";

const router = express.Router();

router.route("/post").post(postJob);
router.route("/").get(getAllJobs);
router.route("/admin").get(getAdminJobs);
router.route("/:id").get(getJobById).delete(deleteJob);

export default router;