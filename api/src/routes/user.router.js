import express from "express";
import {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/AuthMiddleware.js";

const userRouter = express.Router();

userRouter.get("/all-users", authMiddleware, getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.delete("/:id", deleteUserById);
userRouter.put("/:id", updateUserById);

export default userRouter;
