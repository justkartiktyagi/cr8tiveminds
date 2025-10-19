import React from "react";
import { Link } from "react-router-dom";
const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            At Cr8iveMinds, we build digital experiences that empower
            remote-first startups to grow smarter and faster. By merging
            creativity, strategy, and technology, we craft sleek websites and
            scalable tools that turn bold ideas into real-world impact.
          </p>
          <Link
            to="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"> */}
            Learn More
            {/* </button> */}
          </Link>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
            alt="Team working on digital project"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
