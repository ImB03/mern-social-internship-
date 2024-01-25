import express from "express";
import { getOneUser, updateUser } from "../controllers/user.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

/* READ */
router.get("/getoneuser/:userId", verifyToken, getOneUser);
// router.get("/getfriend/:friendId", verifyToken, getUserFriend);

/* UPDATE */
router.patch("/updateuser", verifyToken, updateUser);
export default router;
