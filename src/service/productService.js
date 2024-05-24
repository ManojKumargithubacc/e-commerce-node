import mongoose from "mongoose";

export const getProducts = async () => {
  const fetchedData = await mongoose.connection.db.collection("Products");
  const products = await fetchedData.find({}).toArray();
  return products;
};
