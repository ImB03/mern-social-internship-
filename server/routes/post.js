import express from "express";

import {
  getAllPosts,
  deletePost,
  commentPost,
  likePost,
} from "../controllers/post.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/getallposts", getAllPosts);
router.patch("/commentpost/:postId", verifyToken, commentPost);
router.delete("/deletepost/:postId", verifyToken, deletePost);
router.patch("/likepost/:postId", verifyToken, likePost);

export default router;
