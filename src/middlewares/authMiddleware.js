import jwt from "jsonwebtoken";
import { STATUS_CODES } from "../constants/constants.js";

export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; 
    if (!token) {
      return res.status(STATUS_CODES.UNAUTHORIZED).json({ error: 'Unauthorized: JWT must be provided' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId; 
    next();
  } catch (error) {
    console.log(error);
    return res.status(STATUS_CODES.UNAUTHORIZED).json({ error: 'Unauthorized: Invalid JWT' });
  }
};
