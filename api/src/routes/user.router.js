import express from "express";
import {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
  blockUserById,
  unblockUserById,
} from "../controllers/user.controller.js";
import { authMiddleware, isAdmin } from "../middlewares/AuthMiddleware.js";

const userRouter = express.Router();

userRouter.get("/all-users", authMiddleware, isAdmin, getAllUsers);
userRouter.get("/:id", authMiddleware, getUserById);

userRouter.delete("/:id", authMiddleware, isAdmin, deleteUserById);
userRouter.put("/:id", authMiddleware, updateUserById);

userRouter.put("/block-user/:id", authMiddleware, isAdmin, blockUserById);
userRouter.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUserById);



export default userRouter;
