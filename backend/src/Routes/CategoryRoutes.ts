import express from "express";
import { getCategory, addCategory } from '../controllers/CategoryController'
const router = express.Router();


router.get("/api/category", getCategory);
router.post('/api/category', addCategory);

export { router as CategoryRouter };
