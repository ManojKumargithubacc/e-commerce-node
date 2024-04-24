import express from "express";
import cors from "cors";
import "dotenv/config";
import ConnectDb from "./config/database.js";
import authRoute from "./routes/authRoute.js"
import productRoute from "./routes/productsRoute.js"
// import { authRoute, productRoute } from "./routes/index.js";
const app = express();
app.use(cors());
ConnectDb();
app.use(express.json());
app.use("/api", authRoute);
app.use("/api", productRoute);
app.get("/", (req, res) => {
  res.send("I am using Express server");
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
