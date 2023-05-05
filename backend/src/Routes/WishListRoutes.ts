import express from "express";
import authenticateToken from "../Middleware/AuthenticateToken";
import { GetWishListProductByUser, WishListProduct } from "../controllers/WishListController";
const router = express.Router();

router.post('/api/like/:productId/:type', authenticateToken, WishListProduct)
router.get('/api/wishlist', authenticateToken, GetWishListProductByUser)


export { router as wishlistRouter };
