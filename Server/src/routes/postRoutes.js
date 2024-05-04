import express from "express";
import { createPost, getFeedPosts } from "../controllers/postController.js";
import protectRoute from "../middleware/protectRoute.js";
const postRoutes = express.Router();
postRoutes.get("/feed", getFeedPosts);
postRoutes.post("/create", createPost);
export default postRoutes;
