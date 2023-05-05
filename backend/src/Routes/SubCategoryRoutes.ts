import express from "express";
import { addSubCategory, getSubCategories } from "../controllers/SubCategory";
import authenticateToken from "../Middleware/AuthenticateToken";
import { validateGetSubCategories } from "../Validation/subCategory/validateGetSubCategories";
import { validateAddCategory } from "../Validation/subCategory/validateAddSubCategory";
const router = express.Router();

router.post("/api/getsubcategory/:categoryId", authenticateToken, validateGetSubCategories, getSubCategories);
router.post("/api/subcategory", authenticateToken, validateAddCategory, addSubCategory);

export { router as SubCategoryRouter };
