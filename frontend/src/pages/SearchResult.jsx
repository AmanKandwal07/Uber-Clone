import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SearchResult() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const rides = [
    { id: 1, type: "UberGo", price: "₹150", time: "15 mins" },
    { id: 2, type: "UberX", price: "₹220", time: "12 mins" },
    { id: 3, type: "UberXL", price: "₹350", time: "10 mins" },
  ];

  const confirmRide = (ride) => {
    navigate("/confirm", { state: { ...ride, ...state } });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Available Rides</h2>
      <p className="mb-6">
        From <b>{state?.pickup}</b> to <b>{state?.drop}</b>
      </p>

      <div className="flex flex-col gap-4">
        {rides.map((ride) => (
          <div
            key={ride.id}
            className="p-4 border rounded-lg shadow hover:bg-gray-100 cursor-pointer"
            onClick={() => confirmRide(ride)}
          >
            <h3 className="text-xl font-semibold">{ride.type}</h3>
            <p>{ride.price} • {ride.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
