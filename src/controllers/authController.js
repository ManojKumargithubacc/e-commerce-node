import { STATUS_CODES, MESSAGES } from "../constants/constants.js";
import JWT from "jsonwebtoken";
import { registerUser, loginUser } from "../service/authService.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, mobileNumber, password } = req.body;
    if (!name || !email || !mobileNumber || !password) {
      return res
        .status(STATUS_CODES.BAD_REQUEST)
        .send({ message: MESSAGES.INVALID_DATA });
    }
    const user = await registerUser({ name, email, mobileNumber, password });
    res.status(STATUS_CODES.SUCCESS).send({
      success: true,
      message: MESSAGES.ACCOUNT_CREATED,
      user,
    });
  } catch (error) {
    console.log(error);
    res
      .status(STATUS_CODES.SERVER_ERROR)
      .send({ success: false, message: error.message });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(STATUS_CODES.BAD_REQUEST)
        .send({ success: false, message: MESSAGES.INVALID_DATA });
    }
    const user = await loginUser({ email, password });
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.status(STATUS_CODES.SUCCESS).send({
      success: true,
      message: MESSAGES.LOGIN_SUCCESSFUL,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        mobileNumber: user.mobileNumber,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res
      .status(STATUS_CODES.SERVER_ERROR)
      .send({ success: false, message: error.message });
  }
};
