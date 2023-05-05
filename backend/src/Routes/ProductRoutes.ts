import express from "express";
import { addProduct, getProductById, getProducts } from '../controllers/ProductController'
import upload from '../Middleware/UploadFile'
import authenticateToken from "../Middleware/AuthenticateToken";
import { validateProduct } from "../Validation/productValidation";

const router = express.Router();

router.get('/api/product', authenticateToken, getProducts)
router.get('/api/product/:id', authenticateToken, getProductById)
router.post('/api/product', authenticateToken, upload.array('images', 5), validateProduct, addProduct);

export { router as ProductRouter };
