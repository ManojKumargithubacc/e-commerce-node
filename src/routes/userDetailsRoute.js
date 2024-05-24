import express from "express";
import { getUserDetails } from "../controllers/userDetailsController.js";

const userDetailsRoute = express.Router();
userDetailsRoute.get("/user-details", getUserDetails);

export default userDetailsRoute;
