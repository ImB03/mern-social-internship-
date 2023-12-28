import express from "express";

import {
  createPost,
  getOnePost,
  getAllPosts,
  // likePost,
} from "../controllers/post.js";
// import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/createpost", createPost);
router.get("/getallposts", getAllPosts);
router.get("/getonepost/:postId", getOnePost);
// router.get("/getuserpost/:userId", verifyToken, getPostOfUser);
// router.patch("/likepost/:postId/", verifyToken, likePost);

export default router;
