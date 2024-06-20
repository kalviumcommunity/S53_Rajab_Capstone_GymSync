import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectDb from "./db/connectDb.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import historyRoutes from "./routes/historyRoutes.js";
import bodyParser from "body-parser";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
app.use(express.json()); //to parse JSON data in the req.body
app.use(express.urlencoded({ extended: true })); // to parse form data in the req.body
app.use(cookieParser());
app.use(bodyParser.json());

//Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/history", historyRoutes);
app.use(express.static(path.join(__dirname, "/GYMSYNC/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "GYMSYNC", "dist", "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
