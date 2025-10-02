import React from "react";
import foto from "../assets/fotoku.png";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  return (
    <form className="hidden md:block py-2">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="pl-8 pr-4 py-1 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black transition w-48"
        />
        <svg
          className="w-4 h-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M21 21l-4.35-4.35M17 11a6 6 0 1 0-12 0 6 6 0 0 0 12 0z" />
        </svg>
      </div>
    </form>
  );
}

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="flex w-full fixed items-center justify-between px-6 py-2 border-b shadow-sm bg-white mt-0 top-0">
      {/* Left: Logo & Search */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <div
          className="text-2xl font-serif font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Medium
        </div>
        <SearchBar />
      </div>

      {/* Right: Write, Bell, Avatar */}
      <div className="flex items-center space-x-6">
        {/* Write button hanya tampil di md ke atas */}
        <button className="hidden md:block text-gray-700 hover:text-black font-medium transition">
          Write
        </button>

        {/* Bell icon */}
        <button>
          <svg
            className="w-5 h-5 text-gray-600 hover:text-black transition"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405C18.21 14.79 18 13.918 18 13V9a6 6 0 00-12 0v4c0 .918-.21 1.79-.595 2.595L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        {/* Avatar */}
        <img
          src={foto}
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover cursor-pointer"
        />
      </div>
    </nav>
  );
}

export default Navbar;
