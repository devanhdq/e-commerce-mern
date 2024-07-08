import { Response } from "../utils/Response.js";
import asyncHandler from "express-async-handler";

//
import User from "../models/User.model.js";
import { generatorToken } from "../middlewares/Jwt.js";

export const register = asyncHandler(async (req, res) => {
    const { firstName, lastName, phoneNumber, email, password, role } = req.body;
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return Response(res, 400, false, "User already existed");
    } else {
      const newUser = new User({
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
        role,
      });
      await newUser.save();
      return Response(res, 201, true, "User was created successfully");
    }
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // check user existed
  const findUser = await User.findOne({ email }).select("-password");
  if (findUser && (await findUser.matchPassword(password))) {
    const userWithoutPassword = {
      _id: findUser?._id,
      firstName: findUser?.firstName,
      lastName: findUser?.lastName,
      email: findUser?.email,
      phoneNumber: findUser?.phoneNumber,
      token: generatorToken(findUser?._id),
    };
    return Response(res, 200, true, "Login successfully", userWithoutPassword);
  } else {
    throw new Error("Invalid email or password");
  }
});


