import express from "express";
import { getCategory, addCategory } from '../controllers/CategoryController'
import authenticateToken from "../Middleware/AuthenticateToken";
import { validateCategory } from "../Validation/categoryValidation";
const router = express.Router();


router.get("/api/category", authenticateToken, getCategory);
router.post('/api/category', authenticateToken, validateCategory, addCategory);

export { router as CategoryRouter };
