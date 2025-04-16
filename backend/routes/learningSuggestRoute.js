import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { createLearningSuggest, deleteLearningSuggest, getLearningSuggestById, getLearningSuggests, updateLearningSuggest } from "../controllers/learningSuggestController.js";

const router = express.Router();

router.route("/").post(createLearningSuggest).get(getLearningSuggests);
router.route("/:id").get(getLearningSuggestById).put(updateLearningSuggest).delete(deleteLearningSuggest);

export default router;
