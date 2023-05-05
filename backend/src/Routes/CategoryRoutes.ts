import express from "express";
import { getCategory, addCategory } from '../controllers/CategoryController'
import authenticateToken from "../Middleware/AuthenticateToken";
const router = express.Router();


router.get("/api/category", authenticateToken, getCategory);
router.post('/api/category', authenticateToken, addCategory);

export { router as CategoryRouter };
