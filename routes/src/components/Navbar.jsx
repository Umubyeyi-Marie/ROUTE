import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 p-4 shadow-sm flex gap-6 text-gray-800">
      <Link to="/users/1" className="hover:text-blue-600 font-medium">User 1</Link>
      <Link to="/users/2" className="hover:text-blue-600 font-medium">User 2</Link>
      <Link to="/users/3" className="hover:text-blue-600 font-medium">User 3</Link>
    </nav>
  );
}
