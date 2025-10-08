import React from "react";

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
            At Cr8iveMinds, we craft digital solutions that empower remote-first
            businesses to scale efficiently. We blend creativity, technology,
            and strategy to build websites and tools that truly convert.
          </p>
          <a
            href="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"> */}
            Learn More
            {/* </button> */}
          </a>
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
