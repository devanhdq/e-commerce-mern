import express from "express";
import authRouter from "./auth.router.js";
import userRouter from "./user.router.js";

export function router(app) {
  app.use("/api/auth", authRouter);
  app.use("/api/user", userRouter);
}
