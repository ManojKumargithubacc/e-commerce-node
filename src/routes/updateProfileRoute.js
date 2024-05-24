import express from "express";
import userModel from "../models/userModel.js";

const updateProfileRoute = express.Router();

updateProfileRoute.put("/update-profile", async (req, res) => {
  try {
    const { name, email, mobileNumber, password } = req.body;

    const updatedUser = await userModel.findOneAndUpdate(
      { email },
      { name, email, mobileNumber, password },
      { new: true } 
    );
    res.status(200).json({ updatedUser });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default updateProfileRoute;
