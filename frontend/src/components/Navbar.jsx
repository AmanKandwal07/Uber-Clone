import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-white shadow-md">
      <h1 className="text-xl font-bold">Uber Clone</h1>
      <FaUserCircle size={30} />
    </header>
  );
}
