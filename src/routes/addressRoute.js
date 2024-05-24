import express from "express";
import { getAddresses, addAddress, updateAddress, deleteAddress } from "../controllers/addressController.js";

const addressRoute = express.Router();

addressRoute.get("/addresses", getAddresses);
addressRoute.post("/addresses", addAddress);
addressRoute.put("/addresses/:addressIndex", updateAddress);
addressRoute.delete("/addresses/:addressIndex", deleteAddress);

export default addressRoute;
