import express from "express";
import { getOneUser } from "../controllers/user.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

/* READ */
router.get("/getoneuser/:userId", verifyToken, getOneUser);

/* UPDATE */
// router.patch("/friendrequest/:userId", verifyToken, friendRequest);
export default router;
