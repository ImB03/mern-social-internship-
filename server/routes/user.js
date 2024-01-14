import express from "express";
import {
  getOneUser,
} from "../controllers/user.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

/* READ */
router.get("/getoneuser/:userId", verifyToken, getOneUser);
// router.get("/getfriend/:friendId", verifyToken, getUserFriend);

/* UPDATE */
// router.patch("/updatefriend/:userId/:friendId", verifyToken, addRemoveFriend);
export default router;
