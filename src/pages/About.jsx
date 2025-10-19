import React from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import AboutHeader from "../components/AboutHeader";
const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <AboutHeader />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[60vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center px-4">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            About Creative Minds
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            A creative remote agency driven by passion, innovation, and a love
            for turning ideas into stunning digital experiences.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
        <motion.img
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
          alt="Creative Minds Team"
          className="w-full md:w-1/2 rounded-2xl shadow-lg"
        />
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600">
            Our Story
          </h2>
          <p className="text-lg leading-relaxed">
            Every big idea starts small — and so did Cr8iveMinds. What began as
            a shared dream between a few creators soon became a mission: to
            blend design and technology in ways that connect, inspire, and move
            people. Today, we’re proud to partner with brands around the world —
            building digital stories that don’t just look good, but mean
            something.
          </p>
        </motion.div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-white px-6 md:px-16 text-center">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-10">
          Our Mission & Vision
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-gray-100 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-3 text-purple-600">
              Our Mission
            </h3>
            <p className="text-lg">
              Our mission is to empower startups and brands to grow smarter and
              bolder. By blending creativity, strategy, and technology, we craft
              digital experiences that don’t just look stunning — they leave a
              lasting impact.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-gray-100 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-3 text-pink-600">
              Our Vision
            </h3>
            <p className="text-lg">
              Our vision is to become a globally trusted creative agency —
              celebrated for bold innovation, authentic partnerships, and
              crafting digital experiences that make the world more beautiful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Build Something Amazing Together 🚀
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-lg">
          Have a project in mind or want to collaborate? We’d love to hear from
          you.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {/* Back to Home */}
          <a
            href="/"
            className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition-all duration-300"
          >
            Home
          </a>

          {/* Contact Us */}
          <HashLink
            smooth
            to="/#contact"
            className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-pink-600 transition-all duration-300"
          >
            Contact Us
          </HashLink>
        </div>
      </section>
    </div>
  );
};

export default About;
