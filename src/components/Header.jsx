import React, { useState } from "react";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import { NavLink } from "react-router-dom";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
          <img
              src={logo2}
              alt="Ministry Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <img
              src={logo}
              alt="Ministry Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <span className="text-lg font-semibold">Ministry of Labour & Employment</span>
          </div>
          <button
            className="lg:hidden block text-orange-600 hover:text-orange-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <nav
            className={`lg:block ${
              menuOpen ? "block" : "hidden"
            } absolute lg:static top-20 right-0 lg:top-auto lg:right-auto bg-white lg:bg-transparent shadow lg:shadow-none z-50 lg:z-auto`}
          >
            <ul className="flex flex-col lg:flex-row lg:gap-6 gap-4 p-4 lg:p-0 text-black">
              <li>
                <NavLink to="/" className={(isActive) => (
                  ` hover:text-orange-700 ${isActive ? "text-orange-600" : ""}`
                )}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={(isActive) => (
                  ` hover:text-orange-700 ${isActive ? "text-orange-600" : ""}`
                )}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className={(isActive) => (
                  ` hover:text-orange-700 ${isActive ? "text-orange-600" : ""}`
                )}>
                  Our Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className={(isActive) => (
                  ` hover:text-orange-700 ${isActive ? "text-orange-600" : ""}`
                )}>
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/service" className={(isActive) => (
                  ` hover:text-orange-700 ${isActive ? "text-orange-600" : ""}`
                )}>
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={(isActive) => (
                  ` hover:text-orange-700 ${isActive ? "text-orange-600" : ""}`
                )}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
