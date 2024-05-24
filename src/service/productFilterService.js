import mongoose from "mongoose";

export const filterProducts = async (category, subcategory) => {
  try {
    const fetchedData = await mongoose.connection.db.collection("Products");
    let query = {};

    if (category) {
      query.category = category;
    }

    if (subcategory) {
      query.subcategory = subcategory;
    }

    const products = await fetchedData.find(query).toArray();
    return products;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};