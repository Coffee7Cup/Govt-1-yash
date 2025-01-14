import React, { useState } from "react";
import logo from "../assets/logo.png";

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
            <ul className="flex flex-col lg:flex-row lg:gap-6 gap-4 p-4 lg:p-0">
              <li>
                <a href="/" className="text-orange-600 hover:text-orange-700">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-orange-600 hover:text-orange-700">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-orange-600 hover:text-orange-700">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-orange-600 hover:text-orange-700">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/service" className="text-orange-600 hover:text-orange-700">
                  Service
                </a>
              </li>
              <li>
                <a href="/contact" className="text-orange-600 hover:text-orange-700">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
