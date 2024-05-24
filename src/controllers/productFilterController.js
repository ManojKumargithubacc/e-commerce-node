import { STATUS_CODES,MESSAGES } from "../constants/constants.js";
import { filterProducts } from "../service/productFilterService.js";

export const ProductdataFilter = async (req, res) => {
  try {
    const { category, subcategory } = req.query;
    const products = await filterProducts(category, subcategory);
    res.send(products);
  } catch (error) {
    res.status(STATUS_CODES.SERVER_ERROR).send(MESSAGES.SERVER_ERROR);
  }
};
