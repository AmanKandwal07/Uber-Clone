// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { MapPin, Search, User } from "lucide-react"; // icons

// export default function Home() {
//   const [pickup, setPickup] = useState("");
//   const [drop, setDrop] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     if (!pickup || !drop) {
//       alert("Please enter pickup & drop");
//       return;
//     }
//     navigate("/results", { state: { pickup, drop } });
//   };

//   return (
//     <div className="h-screen flex flex-col bg-gray-50">
//       {/* Header */}
//       <header className="flex justify-between items-center p-4 bg-black text-white shadow-md">
//         <h1 className="text-2xl font-bold">Uber</h1>
//         <Link
//           to="/profile"
//           className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700 transition"
//         >
//           <User size={20} />
//           <span className="text-sm">Profile</span>
//         </Link>
//       </header>

//       {/* Hero Section */}
//       <div className="flex flex-col items-center justify-center flex-1 px-6">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6">
//           Where do you want to go?
//         </h2>

//         {/* Input Section */}
//         <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-4">
//           <div className="flex items-center gap-2 border rounded-lg p-3">
//             <MapPin className="text-gray-500" />
//             <input
//               type="text"
//               placeholder="Pickup Location"
//               value={pickup}
//               onChange={(e) => setPickup(e.target.value)}
//               className="w-full outline-none"
//             />
//           </div>

//           <div className="flex items-center gap-2 border rounded-lg p-3">
//             <MapPin className="text-gray-500" />
//             <input
//               type="text"
//               placeholder="Drop Location"
//               value={drop}
//               onChange={(e) => setDrop(e.target.value)}
//               className="w-full outline-none"
//             />
//           </div>

//           <button
//             onClick={handleSearch}
//             className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition"
//           >
//             <Search size={18} />
//             Search Rides
//           </button>
//         </div>
//       </div>

//       {/* Footer Nav */}
//       <footer className="flex justify-around items-center bg-white py-3 border-t shadow-md">
//         <Link to="/" className="text-sm font-medium text-black hover:underline">
//           Home
//         </Link>
//         <Link
//           to="/results"
//           className="text-sm font-medium text-gray-600 hover:text-black"
//         >
//           Rides
//         </Link>
//         <Link
//           to="/confirm"
//           className="text-sm font-medium text-gray-600 hover:text-black"
//         >
//           Confirm
//         </Link>
//       </footer>
//     </div>
//   );
// }  


import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome {user?.name} 🚖</h1>
      <button
        onClick={() => navigate("/ride-confirm")}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Book a Ride
      </button>
      <button
        onClick={logout}
        className="mt-4 ml-3 bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
