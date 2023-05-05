import express from "express";
import authenticateToken from "../Middleware/AuthenticateToken";
import { GetWishListProductByUser, WishListProduct } from "../controllers/WishListController";
import { validateWishList } from "../Validation/wishlistValidation";
const router = express.Router();

router.post('/api/like/:productId/:type', authenticateToken, validateWishList, WishListProduct)
router.get('/api/wishlist', authenticateToken, GetWishListProductByUser)


export { router as wishlistRouter };
