import express from "express";
const productRoute = express.Router();

import { Productdata } from "../controllers/productController.js";

productRoute.post("/products", Productdata);
export default productRoute;
