import express from "express";
import { ProductdataFilter } from "../controllers/productFilterController.js";
const productFilterRoute = express.Router();

productFilterRoute.get("/productsfilter",ProductdataFilter );

export default productFilterRoute;