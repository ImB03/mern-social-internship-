import express from "express";
import {
  getUser,
  getUserFriend,
  addRemoveFriend,
} from "../controllers/user.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

/* READ */
router.get("/getuser/:userId", verifyToken, getUser);
router.get("/getfriend/:friendId", verifyToken, getUserFriend);

/* UPDATE */
router.patch("/updatefriend/:userId/:friendId", verifyToken, addRemoveFriend);
export default router;
