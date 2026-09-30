"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Mobile menu open thakle scroll animation off thakbe
      if (isMenuOpen) return;

      if (currentScrollY <= 30) {
        setShowTopBar(true);
      } else if (currentScrollY > lastScrollY + 10) {
        setShowTopBar(false);
      } else if (currentScrollY < lastScrollY - 10) {
        setShowTopBar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    // Mobile menu open korle TopBar auto-show hobe jeno layout glitch na hoy
    if (!isMenuOpen) {
      setShowTopBar(true);
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-400/40 shadow-sm">
      {/* Container Wrapper */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          showTopBar || isMenuOpen ? "translate-y-0" : "-mt-9 sm:-mt-10"
        }`}
      >
        {/* Top Bar */}
        <div className="bg-[#002D62] text-white text-xs sm:text-sm py-2 px-4">
          <div className="container-custom flex justify-between items-center">
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="tel:+971 54 769 0757"
                className="hover:text-[#F4A261] transition duration-200 flex items-center gap-1.5"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+971 54 769 0757</span>
              </a>
              <a
                href="mailto:Nowshedadil320@gmail.com"
                className="hidden sm:flex hover:text-[#F4A261] transition duration-200 items-center gap-1.5"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Nowshedadil320@gmail.com</span>
              </a>
            </div>
            <div className="text-slate-300">
              Dubai - U.A.E
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav className="container-custom py-1.5 flex items-center justify-between px-4 bg-white">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/awts.png"
              alt="Alwadi Almudea Technical Services Logo"
              width={180}
              height={60}
              priority
              className="w-auto h-12 sm:h-14 object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-700 text-sm">
            <Link
              href="/"
              className="hover:text-[#0077B6] transition duration-200"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="hover:text-[#0077B6] transition duration-200"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="hover:text-[#0077B6] transition duration-200"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#0077B6] transition duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Action Button (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/971547690757?text=Hi%20AWTS%20Technical%20Services,%20I%20need%20a%20help."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs py-2.5 px-4"
            >
              <span>
                <svg
      className="w-5 h-5 fill-[#fbfffb] shrink-0 inline-block"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 5.001l-1.416 5.17 5.291-1.387c1.467.8 3.122 1.22 4.781 1.22h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.667-1.037-5.176-2.922-7.062a9.92 9.92 0 0 0-7.069-2.941zm5.922 14.28c-.244.688-1.42 1.313-1.956 1.384-.504.067-1.157.098-3.327-.8-2.775-1.147-4.568-3.962-4.708-4.148-.139-.186-1.123-1.493-1.123-2.848 0-1.355.708-2.022.96-2.29.253-.268.553-.335.738-.335.185 0 .37.002.531.01.173.008.405-.065.633.482.238.572.809 1.974.88 2.118.071.144.119.313.024.502-.095.189-.143.308-.284.477-.142.169-.298.378-.426.507-.142.143-.29.299-.125.582.165.283.735 1.212 1.576 1.96 1.082.962 1.993 1.26 2.277 1.401.284.141.45.118.616-.071.165-.189.709-.825.899-1.109.189-.283.378-.236.638-.142.26.094 1.652.778 1.936.92.284.141.473.213.543.33.071.118.071.684-.173 1.372z" />
    </svg> WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            type="button"
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-slate-700 hover:text-[#0077B6] focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Drawer Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-fadeIn">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0077B6]"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0077B6]"
            >
              Services
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0077B6]"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0077B6]"
            >
              Contact
            </Link>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/971547690757?text=Hi%20AWTS%20Technical%20Services,%20I%20need%20a%20quick%20discussion."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp py-2 px-1 w-full text-center justify-center"
              >
                Chat on WhatsApp
              </a>
              <a
                href="tel:+971547690757"
                className="btn-primary py-2 px-1 w-full text-center justify-center bg-[#002D62]"
              >
                Call Us Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}