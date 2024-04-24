import mongoose from "mongoose";
import "dotenv/config";
const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connection establised");
  } catch (error) {
    console.log("Failed to connect", error);
  }
};
export default ConnectDb;
