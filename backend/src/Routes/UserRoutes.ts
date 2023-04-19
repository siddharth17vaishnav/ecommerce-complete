import express from "express";
import {
  approveAdmin,
  createUser,
  getUserByID,
  getUsers,
} from "../controllers/UserController";
import upload from '../Middleware/UploadFile'
const router = express.Router();


router.get("/api/user", getUsers);
router.post("/api/user", upload.single("profile"), createUser);
router.post("/api/user/:email", getUserByID);
router.post('/api/user/:email/approve', approveAdmin)

export { router as userRouter };
