import express from "express";
import { verifytoken } from "../middlewares/auth.js";
import {getFeedPosts,getUserPosts,likePost} from "../controllers/post.js";
const router=express.Router();

// READ 
router.get("/",verifytoken, getFeedPosts);
router.get("/:userId/posts", verifytoken, getUserPosts);

// UPDATE 
router.patch("/:id/like", verifytoken, likePost);
export default router;