"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#f8f9fa]/80 backdrop-blur-md border-b border-[#757682]/10">
      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px] flex justify-between items-center h-20">
        {/* Logo */}
        <div className="font-serif text-[24px] font-bold text-[#00236f] tracking-tight">
          STG Enterprise
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-sans text-[14px] font-semibold tracking-wider">
          <Link
            href="#"
            className="text-[#00236f] border-b-2 border-[#00236f] pb-1 hover:opacity-80 transition-opacity duration-300"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-[#444651] hover:text-[#00236f] hover:opacity-80 transition-opacity duration-300"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-[#444651] hover:text-[#00236f] hover:opacity-80 transition-opacity duration-300"
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-[#444651] hover:text-[#00236f] hover:opacity-80 transition-opacity duration-300"
          >
            Portfolio
          </Link>
          <Link
            href="#"
            className="text-[#444651] hover:text-[#00236f] hover:opacity-80 transition-opacity duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Action Button & Mobile Menu Trigger */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:inline-flex px-6 py-2 bg-[#00236f] text-white font-sans text-[14px] font-semibold rounded hover:bg-[#00236f]/90 transition-colors">
            GET IN TOUCH
          </button>
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#00236f] p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#f8f9fa] shadow-lg border-b border-[#757682]/10 px-[20px] py-6 flex flex-col space-y-4 font-sans text-[14px] font-semibold">
          <Link
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#00236f] pb-1 hover:opacity-80"
          >
            Home
          </Link>
          <Link
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#444651] hover:text-[#00236f]"
          >
            About
          </Link>
          <Link
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#444651] hover:text-[#00236f]"
          >
            Services
          </Link>
          <Link
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#444651] hover:text-[#00236f]"
          >
            Portfolio
          </Link>
          <Link
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#444651] hover:text-[#00236f]"
          >
            Contact
          </Link>
          <button className="w-full py-3 bg-[#00236f] text-white font-sans text-[14px] font-semibold rounded hover:bg-[#00236f]/90 transition-colors">
            GET IN TOUCH
          </button>
        </div>
      )}
    </header>
  );
}
