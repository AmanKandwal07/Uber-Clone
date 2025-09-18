// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// export default function RideConfirm() {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const handleConfirm = () => {
//     alert("Ride Confirmed!");
//     navigate("/profile");
//   };

//   return (
//     <div className="h-screen flex flex-col items-center justify-center">
//       <div className="bg-white shadow-lg rounded-xl p-6 text-center">
//         <h2 className="text-2xl font-bold mb-4">Confirm Your Ride</h2>
//         <p className="mb-2">Ride: {state?.type}</p>
//         <p className="mb-2">Price: {state?.price}</p>
//         <p className="mb-4">
//           From <b>{state?.pickup}</b> → To <b>{state?.drop}</b>
//         </p>
//         <button
//           onClick={handleConfirm}
//           className="bg-black text-white py-3 px-6 rounded-lg"
//         >
//           Confirm Ride
//         </button>
//       </div>
//     </div>
//   );
// }
export default function RideConfirm() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Ride Confirmation</h2>
      <p className="mt-2">Here you can confirm your ride details.</p>
    </div>
  );
}
