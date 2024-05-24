import userModel from "../models/userModel.js";
import { hashPassword, comparePassword } from "../helpers/authHelper.js";

export const registerUser = async ({ name, email, mobileNumber, password }) => {
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }
  const hashedPassword = await hashPassword(password);
  const user = await new userModel({
    name,
    email,
    mobileNumber,
    password: hashedPassword,
  }).save();
  return user;
};

export const loginUser = async ({ email, password }) => {
  const user = await userModel.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }
  const match = await comparePassword(password, user.password);
  if (!match) {
    throw new Error("Invalid password");
  }
  return user;
};
