import express from "express";
import { search } from "../controllers/search.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

/* FIND */
router.post("/", verifyToken, search);

export default router;
