"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 right-0 z-20 flex justify-center w-full">
      <nav
        className="bg-white/70 font-inter shadow-xl rounded-full px-6 py-3 flex justify-between items-center max-w-5xl w-full mx-6 border border-gray-200 transition-all duration-300 backdrop-blur-md"
      >
        <Link href="/">
          <div className="flex items-center space-x-2">
            <img
              src="/assest/Logo/logo.svg"
              alt="TechLuminix Logo"
              className="h-10 w-8"
            />
            <span className="font-semibold text-lg text-gray-800">
              TECHLUMINIX
            </span>
          </div>
        </Link>

        {/* Menu Items - Desktop and Tablet */}
        <div className="hidden md:flex md:space-x-6 lg:space-x-20 text-gray-600 font-medium">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-900">
            About
          </Link>
          <Link href="/portfolio" className="hover:text-gray-900">
            Portfolio
          </Link>
          <Link href="/services" className="hover:text-gray-900">
            Services
          </Link>
        </div>

        {/* Contact Button - Desktop and Tablet */}
        <Link
          href="/contact"
          className="hidden md:flex  text-black md:px-3 md:py-1.5 lg:px-5 lg:py-2 rounded-full  bor text-sm font-medium shadow-lg  hover:opacity-90 transition"
        >
          Contact us
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col space-y-4 items-center md:hidden z-30">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-600 hover:text-gray-900"
            >
              Portfolio
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-gray-900"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#3770ED] to-[#B0C5F3] text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg hover:opacity-90 transition"
            >
              Contact us
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;