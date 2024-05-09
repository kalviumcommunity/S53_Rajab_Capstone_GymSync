import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/connectDb.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import historyRoutes from "./routes/historyRoutes.js";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
  origin: ["https://gymsync-server.vercel.app","http://localhost:3000"],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
connectDb();
// app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json()); //to parse JSON data in the req.body
app.use(express.urlencoded({ extended: true })); // to parse form data in the req.body
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("This is Backend Server!");
});

//Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/history", historyRoutes);
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
