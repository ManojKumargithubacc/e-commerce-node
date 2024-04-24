import mongoose from "mongoose";

export const Productdata = async (req, res) => {
  try {
    const fetchedData = await mongoose.connection.db.collection("Products");
    const products = await fetchedData.find({}).toArray();
    res.send([products]);
  } catch (error) {
    res.send("Server error");
  }
};
