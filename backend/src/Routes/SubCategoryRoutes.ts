import express from "express";
import { addSubCategory, getSubCategories } from "../controllers/SubCategory";
const router = express.Router();

router.post("/api/getsubcategory", getSubCategories);
router.post("/api/subcategory", addSubCategory);

export { router as SubCategoryRouter };
