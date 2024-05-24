import { STATUS_CODES, MESSAGES } from '../constants/constants.js';
import userModel from '../models/userModel.js';

export const getUserDetails = async (req, res) => {
  try {
    const { email } = req.query;
    if (!email) {
      return res.status(STATUS_CODES.BAD_REQUEST).json(MESSAGES.VALID_EMAIL);
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(STATUS_CODES.NOT_FOUND).json(MESSAGES.USER_NOT_EXSISTS);
    }

    res.status(STATUS_CODES.SUCCESS).json({ user });
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(STATUS_CODES.SERVER_ERROR).json(MESSAGES.SERVER_ERROR);
  }
};
