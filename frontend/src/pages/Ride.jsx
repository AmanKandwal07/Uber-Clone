import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

function Ride() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const handleConfirm = () => {
    if (!pickup || !destination) return;
    alert(`Ride booked from ${pickup} to ${destination}! 🚖`);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white/90 backdrop-blur-md shadow-xl rounded-2xl mt-10 border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Book Your Ride</h2>

      {/* Pickup Input */}
      <div className="flex items-center gap-2 mb-4">
        <FaMapMarkerAlt className="text-red-500 text-xl" />
        <input
          type="text"
          placeholder="Enter Pickup Location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
        />
      </div>

      {/* Destination Input */}
      <div className="flex items-center gap-2 mb-6">
        <MdLocationOn className="text-green-600 text-xl" />
        <input
          type="text"
          placeholder="Enter Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
        />
      </div>

      {/* Confirm Button */}
      <button
        onClick={handleConfirm}
        disabled={!pickup || !destination}
        className={`w-full p-3 rounded-lg text-lg font-medium transition transform 
        ${pickup && destination 
          ? "bg-black text-white hover:bg-gray-800 hover:scale-105" 
          : "bg-gray-400 text-gray-200 cursor-not-allowed"
        }`}
      >
        Confirm Ride
      </button>
    </div>
  );
}

export default Ride;
