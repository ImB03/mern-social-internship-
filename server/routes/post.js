import express from "express";

import {
  createPost,
  getPost,
  getPostOfUser,
  likePost,
} from "../controllers/post.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/getpost", verifyToken, getPost);
router.get("/getuserpost/:userId", verifyToken, getPostOfUser);
router.patch("/likepost/:postId/", verifyToken, likePost);

export default router;
