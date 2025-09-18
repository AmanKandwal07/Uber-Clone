import supabase from "../config/db.js";

export const createRide = async (rideData) => {
  const { data, error } = await supabase.from("rides").insert([rideData]).select().single();
  if (error) throw error;
  return data;
};

export const getUserRides = async (userId) => {
  const { data, error } = await supabase.from("rides").select("*").eq("user_id", userId);
  if (error) throw error;
  return data;
};
