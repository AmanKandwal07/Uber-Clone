import supabase from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "my_secret";

// ================= USER REGISTER =================
export const register = async (req, res) => {
  try {
    const { name, email, password, role, vehicle_no } = req.body;

    // Check existing email
    const { data: existingUser } = await supabase
      .from(role === "driver" ? "drivers" : "users")
      .select("*")
      .eq("email", email)
      .single();

    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let insertData = { name, email, password: hashedPassword };
    if (role === "driver" && vehicle_no) {
      insertData.vehicle_no = vehicle_no;
    }

    const { error } = await supabase
      .from(role === "driver" ? "drivers" : "users")
      .insert([insertData]);

    if (error) throw error;

    res.status(201).json({ message: "Registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Register failed", error: err.message });
  }
};

// ================= USER LOGIN =================
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const { data: user, error } = await supabase
      .from(role === "driver" ? "drivers" : "users")
      .select("*")
      .eq("email", email)
      .single();

    if (error || !user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, role }, JWT_SECRET, { expiresIn: "7d" });

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};
