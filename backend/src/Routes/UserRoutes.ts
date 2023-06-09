import express from "express";
import {
  approveAdmin,
  createUser,
  getUserByID,
  getUsers,
  userLogin,
} from "../controllers/UserController";
import { validateUser } from '../Validation/userValidation'
import upload from '../Middleware/UploadFile'
import authenticateToken from "../Middleware/AuthenticateToken";
const router = express.Router();


router.get("/api/user", authenticateToken, getUsers);
router.post("/api/user", upload.single("profile"), validateUser, createUser);
router.post("/api/user/:userid", authenticateToken, getUserByID);
router.post('/api/user/:userid/approve', authenticateToken, approveAdmin)
router.post('/api/login', userLogin)

export { router as userRouter };
