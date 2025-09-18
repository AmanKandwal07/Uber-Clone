import express from "express";

const router = express.Router();

router.get("/profile", (req, res) => {
  res.json({ driver: "Profile data for driver" });
});

export default router;
