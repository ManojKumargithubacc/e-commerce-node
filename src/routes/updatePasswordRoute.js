import express from "express";
import userModel from "../models/userModel.js";
import { hashPassword,comparePassword } from "../helpers/authHelper.js";

const passwordRoute = express.Router();

passwordRoute.put("/update-password", async (req, res) => {
  try {
    const { email, currentPassword, newPassword } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = await comparePassword(currentPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Current password is incorrect" });
    }

    const hashedPassword = await hashPassword(newPassword);

    user.password = hashedPassword;
    await user.save();
    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error updating password:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});
export default passwordRoute;
