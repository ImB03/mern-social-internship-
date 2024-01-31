import express from "express";
import { searchTerm } from "../controllers/search.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

/* FIND */
router.post("/searchterm", verifyToken, searchTerm);

export default router;
