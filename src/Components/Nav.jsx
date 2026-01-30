import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { FiSearch, FiUser, FiHeart, FiMenu } from "react-icons/fi";

const Nav = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={`transition-colors duration-300 ${
          isHover ? "bg-black/90" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 text-white">
          
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://s7ap1.scene7.com/is/content/incredibleindia/incredible-india-logo?qlt=82&ts=1742168999622"
              alt="Incredible India"
              className="h-10 w-auto object-contain cursor-pointer"
            />
          </div>

          {/* Center Menu */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li className="cursor-pointer hover:text-orange-400 transition">
              Destinations
            </li>
            <li className="cursor-pointer hover:text-orange-400 transition">
              Experiences
            </li>
            <li className="cursor-pointer hover:text-orange-400 transition">
              Travel Guide
            </li>
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            
            {/* Language */}
            <button className="flex items-center gap-1 hover:text-orange-400 transition">
              <FaGlobe />
              <span className="text-sm">EN</span>
            </button>

            <div className="h-6 w-px bg-white/40"></div>

            <button className="hover:text-orange-400 transition">
              <FiSearch size={18} />
            </button>

            <div className="h-6 w-px bg-white/40"></div>

            <button className="hover:text-orange-400 transition">
              <FiUser size={18} />
            </button>

            <div className="h-6 w-px bg-white/40"></div>

            <button className="hover:text-orange-400 transition">
              <FiHeart size={18} />
            </button>

            <div className="h-6 w-px bg-white/40"></div>

            {/* Mobile Menu */}
            <button className="text-2xl hover:text-orange-400 transition md:hidden">
              <FiMenu />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

