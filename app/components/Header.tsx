"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home", id: "Hero" },
  { label: "About", id: "AboutSection" },
  { label: "Services", id: "FeaturesSection" },
  { label: "Contact", id: "ContactSection" },
  { label: "Portfolio", id: "" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState(NAV_ITEMS[0].id);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        // Anggap section "aktif" saat berada di sekitar tengah viewport,
        // dengan offset atas mengikuti tinggi header (h-20 = 80px).
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#f8f9fa]/80 backdrop-blur-md border-b border-[#757682]/10">
      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px] flex justify-between items-center h-20">
        {/* Logo */}
        <div className="font-serif text-[24px] font-bold text-[#00236f] tracking-tight">
          STG Enterprise
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-sans text-[14px] font-semibold tracking-wider">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`pb-1 transition-opacity duration-300 hover:opacity-80 ${isActive
                  ? "text-[#00236f] border-b-2 border-[#00236f]"
                  : "text-[#444651] hover:text-[#00236f]"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
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
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`pb-1 ${isActive
                  ? "text-[#00236f]"
                  : "text-[#444651] hover:text-[#00236f]"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
          <button className="w-full py-3 bg-[#00236f] text-white font-sans text-[14px] font-semibold rounded hover:bg-[#00236f]/90 transition-colors">
            GET IN TOUCH
          </button>
        </div>
      )}
    </header>
  );
}