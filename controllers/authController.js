import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import { STATUS_CODES, MESSAGES } from "../constants/constants.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, mobileNumber, password } = req.body;
    //Validation
    if (!name || !email || !mobileNumber || !password) {
      return res
        .status(STATUS_CODES.BAD_REQUEST)
        .send({ message: MESSAGES.INVALID_DATA });
    }
    // Check for exsisting user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(STATUS_CODES.SUCCESS).send({
        success: false,
        message: MESSAGES.ACCOUNT_EXISTS,
      });
    }
    // register user
    const hashedPassword = await hashPassword(password);
    //Saving user
    const user = await new userModel({
      name,
      email,
      mobileNumber,
      password: hashedPassword,
    }).save();
    res.status(STATUS_CODES.SUCCESS).send({
      success: true,
      message: MESSAGES.ACCOUNT_CREATED,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(STATUS_CODES.SERVER_ERROR).send({
      success: false,
      message: MESSAGES.SERVER_ERROR,
      error,
    });
  }
};
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(STATUS_CODES.BAD_REQUEST).send({
        success: false,
        message: MESSAGES.INVALID_DATA,
      });
    }
    //Check user

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(STATUS_CODES.SUCCESS).send({
        success: false,
        message: MESSAGES.EMAIL_NOT_REGISTERED,
      });
    }
    //Decrypting the passord and comparing it
    // user()
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(STATUS_CODES.SUCCESS).send({
        success: false,
        message: MESSAGES.INVALID_PASSWORD,
      });
    }
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.status(STATUS_CODES.SUCCESS).send({
      success: true,
      message: MESSAGES.LOGIN_SUCCESSFUL,
      user: {
        name: user.name,
        email: user.email,
        mobileNumber: user.mobileNumber,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(STATUS_CODES.SERVER_ERROR).send({
      success: false,
      message: MESSAGES.SERVER_ERROR,
    });
  }
};
export const testController = (req, res) => {
  res.send("Protected Route");
};
