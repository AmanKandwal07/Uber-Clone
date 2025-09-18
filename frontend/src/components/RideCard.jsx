import React from "react";

export default function RideCard({ icon: Icon, title, price, eta }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-xl shadow-sm hover:shadow-md transition mb-3 cursor-pointer">
      <div className="flex items-center space-x-4">
        <Icon className="text-2xl text-gray-700" />
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">ETA: {eta} mins</p>
        </div>
      </div>
      <div className="text-lg font-bold">₹{price}</div>
    </div>
  );
}
