import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/connectDb.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();
connectDb();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json()); //to parse JSON data in the req.body
app.use(express.urlencoded({ extended: true })); // to parse form data in the req.body
app.use(cookieParser());

//Routes
app.use("/api/users", userRoutes);
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
