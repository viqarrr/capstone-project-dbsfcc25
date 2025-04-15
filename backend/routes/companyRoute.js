import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { deleteCompany, getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/companyController.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.route("/register").post(registerCompany);
router.route("/").get(getCompany);
router.route("/:id").get(getCompanyById).put(singleUpload, updateCompany).delete(deleteCompany);

export default router;
