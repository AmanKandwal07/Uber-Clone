import express from "express";
import { getProfile, getMyRides } from "../controllers/userController.js";
import { verifyToken } from "../utils/tokenUtils.js";

const router = express.Router();

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });
    req.user = verifyToken(token);
    next();
  } catch {
    return res.status(403).json({ message: "Invalid token" });
  }
};

router.get("/profile", authMiddleware, getProfile);
router.get("/rides", authMiddleware, getMyRides);

export default router;
