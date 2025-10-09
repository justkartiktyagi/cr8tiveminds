import React from "react";
import { HashLink } from "react-router-hash-link";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 grid md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <img
            src="/logo.jpeg"
            alt="Creative Minds Logo"
            className="h-16 w-auto rounded-lg"
          />
          <p className="text-gray-200">
            Crafting digital solutions for remote-first businesses. Creativity,
            technology, and strategy all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <HashLink smooth to="/#home" className="hover:underline">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about" className="hover:underline">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#services" className="hover:underline">
                Services
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact" className="hover:underline">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-200"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-200"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p>Email: cr8tiveminds.in@gmail.com</p>
          <p>Phone: +91 1232 315 001</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-4 py-4 text-center text-gray-200 text-sm">
        © 2025 Cr8iveMinds. Made with ❤️
      </div>
    </footer>
  );
};

export default Footer;
