import express from "express";
import { searchTerm, search } from "../controllers/search.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

/* FIND */
router.post("/searchterm", verifyToken, searchTerm);
router.post("/", verifyToken, search);

export default router;
