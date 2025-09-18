import supabase from "../config/db.js";

export const getProfile = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("id, name, email, created_at")
      .eq("id", req.user.id)
      .single();

    if (error) throw error;

    res.json({ profile: data });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch profile", error: err.message });
  }
};

export const getMyRides = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("rides")
      .select("*")
      .eq("user_id", req.user.id);

    if (error) throw error;

    res.json({ rides: data });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch rides", error: err.message });
  }
};
