import { Response } from "../utils/Response.js";
import asyncHandler from "express-async-handler";

//
import User from "../models/User.model.js";

// @desc    Get all users
export const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    return Response(res, 200, true, "Get all users", users);
  } catch (error) {
    return new Error(error.message);
  }
});

// @desc    Get user by id
export const getUserById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select("-password");
    if (!user) {
      return Response(res, 404, false, "User not found");
    } else {
      return Response(res, 200, true, "Get user by id", user);
    }
  } catch (error) {
    return Response(res, 500, false, "Server error", error.message);
  }
});

// @desc    Update user by id
export const updateUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userUpdate = {
    firstName: req?.body?.firstName,
    lastName: req?.body?.lastName,
    email: req?.body?.email,
    phoneNumber: req?.body?.phoneNumber,
    role: req?.body?.role,
    password: req?.body?.password
  };
  
  const user = await User.findByIdAndUpdate(id, userUpdate)
    .select("-password")
  if (!user) {
    return Response(res, 404, false, "User not found");
  } else {
    return Response(res, 200, true, "Update user successfully", user);
  }
});

// @desc    Delete user by id
export const deleteUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    return Response(res, 404, false, "User not found");
  } else {
    return Response(res, 200, true, "Delete user successfully");
  }
});
