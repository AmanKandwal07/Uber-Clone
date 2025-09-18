import express from "express";
import { addDriver, listDrivers } from "../controllers/driverController.js";

const router = express.Router();

router.post("/", addDriver);
router.get("/", listDrivers);

export default router;
