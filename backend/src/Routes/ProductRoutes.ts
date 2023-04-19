import express from "express";
import { addProduct, getProductById, getProducts } from '../controllers/ProductController'
import upload from '../Middleware/UploadFile'

const router = express.Router();

router.get('/api/product', getProducts)
router.get('/api/product/:id', getProductById)
router.post('/api/product', upload.array('images', 5), addProduct);

export { router as ProductRouter };
