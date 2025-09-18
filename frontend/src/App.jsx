import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DriverDashboard from "./pages/DriverDashboard";
import UserDashboard from "./pages/UserDashboard";
import Home from "./pages/Home";
import RideConfirm from "./pages/RideConfirm";
import Profile from "./pages/Profile";

export default function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
        <Route path="/driver-dashboard" element={<DriverDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/ride-confirm" element={<RideConfirm />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
