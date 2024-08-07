import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
//
import User from "../models/User.model.js";
import { Response } from "../utils/Response.js";

export const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select("-password");
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error(`Not authorized to access this route: ${error.message}`);
    }
  } else {
    throw new Error("There is not token attached to the header");
  }
});

export const isAdmin = asyncHandler(async (req, res, next) => {
  if (req.user.role === "admin") {
    next();
  } else {
    return Response(res, 401, false, "Not authorized to access this route");
  }
});
