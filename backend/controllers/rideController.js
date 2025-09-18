import supabase from "../config/db.js";

export const bookRide = async (req, res) => {
  try {
    const { pickup, drop } = req.body;

    const { error } = await supabase.from("rides").insert([
      {
        user_id: req.user.id,
        pickup,
        drop,
        status: "pending",
      },
    ]);

    if (error) throw error;

    res.status(201).json({ message: "Ride booked successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to book ride", error: err.message });
  }
};

export const getDriverRides = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("rides")
      .select("*")
      .eq("driver_id", req.user.id);

    if (error) throw error;

    res.json({ rides: data });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch driver rides", error: err.message });
  }
};

export const updateRideStatus = async (req, res) => {
  try {
    const { rideId, status } = req.body;

    const { error } = await supabase
      .from("rides")
      .update({ status })
      .eq("id", rideId);

    if (error) throw error;

    res.json({ message: "Ride status updated" });
  } catch (err) {
    res.status(500).json({ message: "Failed to update ride", error: err.message });
  }
};
