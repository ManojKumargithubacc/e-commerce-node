import jwt from "jsonwebtoken";
import { STATUS_CODES } from "../constants/constants.js";

// Protected routes
export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // Get token from Authorization header
    if (!token) {
      return res.status(STATUS_CODES.UNAUTHORIZED).json({ error: 'Unauthorized: JWT must be provided' });
    }
    
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    console.log(error);
    return res.status(STATUS_CODES.UNAUTHORIZED).json({ error: 'Unauthorized: Invalid JWT' });
  }
};

