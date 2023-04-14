import express from "express";
import {
  createUser,
  getUserByID,
  getUsers,
} from "../controllers/UserController";

const router = express.Router();

router.get("/api/user", getUsers);
router.post("/api/user", createUser);
router.post("/api/user/:email", getUserByID);

export { router as userRouter };
