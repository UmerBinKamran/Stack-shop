"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0f172a] border-b border-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transition duration-300 hover:scale-105 hover:brightness-125"
        >
          StackShop
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <Link
            href="/"
            className="relative text-gray-300 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>

          <Link
            href="/product"
            className="relative text-gray-300 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Products
          </Link>

          <Link
            href="/about"
            className="relative text-gray-300 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white transition"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 bg-[#0f172a]">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white transition"
          >
            Home
          </Link>

          <Link
            href="/product"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white transition"
          >
            Products
          </Link>

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white transition"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
