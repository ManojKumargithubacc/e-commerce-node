import express from "express";
import cors from "cors";
import "dotenv/config";
import ConnectDb from "./src/config/database.js";
import authRoute from "./src/routes/authRoute.js";
import productRoute from "./src/routes/productsRoute.js";
import productFilterRoute from "./src/routes/productFilterRoutes.js";
import addressRoute from "./src/routes/addressRoute.js";
import userDetailsRoute from "./src/routes/userDetailsRoute.js";
import updateProfileRoute from "./src/routes/updateProfileRoute.js";
import passwordRoute from "./src/routes/updatePasswordRoute.js";
import ordersRoute from "./src/routes/ordersRoute.js";
const app = express();
app.use(cors());
ConnectDb();
app.use(express.json());
app.use("/api", authRoute);
app.use("/api", productRoute);
app.use("/api", productFilterRoute);
app.use("/api", addressRoute);
app.use("/api", userDetailsRoute);
app.use("/api", updateProfileRoute);
app.use("/api", passwordRoute);
app.use("/api", ordersRoute);

app.get("/", (req, res) => {
  res.send("I am using Express server");
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
