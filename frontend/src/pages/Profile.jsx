// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Profile() {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold mb-4">Profile</h2>
//       <p className="mb-4">Email: {user?.email}</p>

//       <button
//         onClick={handleLogout}
//         className="bg-red-500 text-white py-2 px-4 rounded-lg"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Profile</h2>
      <p className="mt-2">Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
}
