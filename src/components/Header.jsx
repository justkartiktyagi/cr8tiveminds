import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-gray-900 tracking-tight"
        >
          <img
            src="/logo.jpeg"
            alt="cr8iveminds logo"
            className="h-16 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#home" className="hover:text-indigo-500 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-indigo-500 transition-colors">
            About
          </a>
          <a
            href="#services"
            className="hover:text-indigo-500 transition-colors"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="hover:text-indigo-500 transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#testimonials"
            className="hover:text-indigo-500 transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="hover:text-indigo-500 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-all"
        >
          Let’s Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="text-2xl">&times;</span>
          ) : (
            <span className="text-2xl">&#9776;</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>
              Portfolio
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
