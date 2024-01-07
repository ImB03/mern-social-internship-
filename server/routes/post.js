import express from "express";

import {
  createPost,
  getOnePost,
  getAllPosts,
  updatePost,
  deletePost,
  commentPost,
  // likePost,
} from "../controllers/post.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/createpost", verifyToken, createPost);
router.get("/getallposts", getAllPosts);
router.get("/getonepost/:postId", verifyToken, getOnePost);
router.patch("/updatepost/:postId", verifyToken, updatePost);
router.patch("/commentpost", verifyToken, commentPost);
router.delete("/deletepost/:postId", verifyToken, deletePost);
// router.get("/getuserpost/:userId", verifyToken, getPostOfUser);
// router.patch("/likepost/:postId/", verifyToken, likePost);

export default router;
