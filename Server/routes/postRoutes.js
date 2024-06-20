import express from "express";
import { createPost, getFeedPosts } from "../controllers/postController.js";
import protectRoute from "../middleware/protectRoute.js";
const postRoutes = express.Router();
postRoutes.get("/feed", protectRoute, getFeedPosts);
postRoutes.post("/create", protectRoute, createPost);

export default postRoutes;
