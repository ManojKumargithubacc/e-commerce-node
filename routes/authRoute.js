import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { STATUS_CODES } from "../constants/constants.js";
const authRoute = express.Router();

authRoute.post("/register", registerController);
authRoute.post("/login", loginController);
authRoute.get("/test", requireSignIn, testController);
//protected route
authRoute.get("/user-auth", requireSignIn, (req, res) => {
  res.status(STATUS_CODES.SUCCESS).send({ ok: true });
});

export default authRoute;
