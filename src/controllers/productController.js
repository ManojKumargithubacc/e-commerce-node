import { getProducts } from "../service/productService.js";
import { STATUS_CODES,MESSAGES } from "../constants/constants.js";

export const Productdata = async (req, res) => {
  try {
    const products = await getProducts();
    res.send(products);
  } catch (error) {
    res.status(STATUS_CODES.SERVER_ERROR).send(MESSAGES.SERVER_ERROR);
  }
};
