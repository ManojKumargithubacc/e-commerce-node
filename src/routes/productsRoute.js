import express from "express";
import { Productdata } from "../controllers/productController.js";

const productRoute = express.Router();

productRoute.get("/products", Productdata);
export default productRoute;



