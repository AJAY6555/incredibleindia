import React from "react";
import { useState } from "react";

import { FaGlobe } from "react-icons/fa";
import { FiSearch, FiUser, FiHeart, FiMenu } from "react-icons/fi";


const Nav = () => {
  const [background, Setbackground] = useState(false);
  const handleMouseEnter = () => {
    Setbackground(true);
  };
  const handleMouseLeave = () => {
    Setbackground(false);
  };
  return (
    <>
      <nav>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundColor: background ? "rgba(0,0,0,0.9)" : "transparent",
          }}
          className="navber fixed top-0 left-0 right-0 w-full flex justify-between py-2 items-center px-6 text-white z-50 transition-colors duration-300"
        >
          <ul className="flex gap-4 list-none p-0 m-0">
            <li>
              
                Incredible India
             
            </li>
          </ul>
          <div className="flex gap-6 items-center text-white">
            <li>
             
                Destinations
          
            </li>

            <li>
             
                Experiences
             
            </li>

            <li>
             
             
            </li>
          </div>
          <div className="flex items-center gap-4 text-white">
            {/* Language */}
            <button
              aria-label="Language"
              className="flex items-center gap-2 text-white hover:text-orange-400"
            >
              <FaGlobe />
              <span className="text-sm font-medium">EN</span>
            </button>

            {/* Divider */}
            <div className="h-6 w-px bg-white/40"></div>

            {/* Search */}
            <button
              aria-label="Search"
              className="cursor-pointer text-white hover:text-orange-400"
            >
              <FiSearch />
            </button>

            {/* Divider */}
            <div className="h-6 w-px bg-white/40"></div>

            {/* User */}
            <button
              aria-label="User"
              className="cursor-pointer text-white hover:text-orange-400"
            >
              <FiUser />
            </button>

            {/* Divider */}
            <div className="h-6 w-px bg-white/40"></div>

            {/* Wishlist */}
            <button
              aria-label="Wishlist"
              className="cursor-pointer text-white hover:text-orange-400 border-l border-r border-white px-2"
            >
              <FiHeart />
            </button>

            {/* Divider */}
            <div className="h-6 w-px bg-white/40"></div>

            {/* Menu */}
            <button
              aria-label="Menu"
              className="cursor-pointer hover:text-orange-400 text-2xl"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      
      </nav>
     
    </>
  );
};

export default Nav;
