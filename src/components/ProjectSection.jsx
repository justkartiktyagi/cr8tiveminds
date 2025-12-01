// src/components/PortfolioSection.jsx

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Modern Website Design",
    description:
      "Responsive and high-performing website for a premium accessories brand.",
    client: "Opulent & Co",
    image: "/projects/opu.png",
    link: "/projects/modern-website-design",
  },
  {
    title: "Modern Website Design",
    description:
      "Responsive and high-performing website for a Test Scan Booking Platform.",
    client: "Scanyfi",
    image: "/projects/scanyfi.jpeg",
    link: "https://scanyfi-teal.vercel.app/",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Portfolio</h2>
        <p className="text-gray-700 mt-2">
          A showcase of our best work and happy clients.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link} // ready to link to project page
            className="relative block rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-200 text-sm mb-2">
                {project.description}
              </p>
              <span className="text-gray-300 text-xs">{project.client}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
