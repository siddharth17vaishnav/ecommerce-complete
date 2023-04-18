import express from "express";
import {
  approveAdmin,
  createUser,
  getUserByID,
  getUsers,
} from "../controllers/UserController";

const router = express.Router();

router.get("/api/user", getUsers);
router.post("/api/user", createUser);
router.post("/api/user/:email", getUserByID);
router.post('/api/user/:email/approve', approveAdmin)

export { router as userRouter };
