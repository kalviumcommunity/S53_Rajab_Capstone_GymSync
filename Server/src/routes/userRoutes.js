import express from "express";
import { getUserProfile, loginUser, logoutUser, signupUser } from "../controllers/userController.js";
const userRoutes = express.Router();
userRoutes.post("/profile/:query", getUserProfile);
userRoutes.post("/signup", signupUser);
userRoutes.post("/login", loginUser);
userRoutes.post("/logout", logoutUser);
export default userRoutes;
