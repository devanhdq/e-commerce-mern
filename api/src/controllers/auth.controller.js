import { Response } from "../utils/Response.js";
import asyncHandler from "express-async-handler";

//
import User from "../models/User.model.js";
import { generatorToken } from "../middlewares/Jwt.js";

export const register = asyncHandler(async (req, res) => {
    const { firstName, lastName, phoneNumber, email, password } = req.body;
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      throw new Error("Email already exists");
    } else {
      const newUser = new User({
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
      });
      await newUser.save();
      const userWithoutPassword = {
        _id: newUser?._id,
        firstName: newUser?.firstName,
        lastName: newUser?.lastName,
        email: newUser?.email,
        phoneNumber: newUser?.phoneNumber
      };
      return Response(res, 201, true, "User created successfully", userWithoutPassword);
    }
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // check user existed
  const findUser = await User.findOne({ email });
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


