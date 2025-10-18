import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
      : "hover:text-blue-600";

  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            JC
          </div>
          <h1 className="text-lg font-semibold">Jarurat Care</h1>
        </div>

        <nav className="flex gap-6 text-gray-700">
          <NavLink to="/" className={linkStyle}>Home</NavLink>
          <NavLink to="/patients" className={linkStyle}>Patients</NavLink>
          <NavLink to="/about" className={linkStyle}>About</NavLink>
        </nav>
      </div>
    </header>
  );
}
