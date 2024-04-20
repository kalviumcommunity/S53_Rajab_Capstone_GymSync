import express from "express";
import signupUser from "../controllers/userController.js";
const userRoutes = express.Router();
userRoutes.post("/signup", signupUser);
export default userRoutes;
