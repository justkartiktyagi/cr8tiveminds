import React from "react";
import { HashLink } from "react-router-hash-link";

const AboutHeader = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img
          src="/logo.jpeg"
          alt="Creative Minds Logo"
          className="h-16 w-auto rounded-lg"
        />
        {/* <span className="ml-2 font-bold text-xl text-indigo-600">
          Creative Minds
        </span> */}
      </a>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Home Button */}
        <a
          href="/"
          className="px-4 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition-all duration-300"
        >
          Home
        </a>

        {/* Optional: Contact Button */}
        <HashLink
          smooth
          to="/#contact"
          className="px-4 py-2 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition-all duration-300"
        >
          Contact
        </HashLink>
      </div>
    </header>
  );
};

export default AboutHeader;
