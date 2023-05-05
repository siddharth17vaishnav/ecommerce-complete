import express from "express";
import { addSubCategory, getSubCategories } from "../controllers/SubCategory";
import authenticateToken from "../Middleware/AuthenticateToken";
const router = express.Router();

router.post("/api/getsubcategory", authenticateToken, getSubCategories);
router.post("/api/subcategory", authenticateToken, addSubCategory);

export { router as SubCategoryRouter };
