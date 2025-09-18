import { createDriver, getAllDrivers } from "../models/Driver.js";

export const addDriver = async (req, res) => {
  try {
    const driver = await createDriver(req.body);
    res.status(201).json(driver);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const listDrivers = async (req, res) => {
  try {
    const drivers = await getAllDrivers();
    res.json(drivers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
