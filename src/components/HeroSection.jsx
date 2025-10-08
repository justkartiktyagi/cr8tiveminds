import React, { useEffect, useState } from "react";
import "./HeroAnimations.css";

const HeroSection = () => {
  const lines = [
    "Your Idea, Our Design.",
    "Your Vision, Our Creation.",
    "Your Dream, Our Innovation.",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typing animation
  useEffect(() => {
    if (index === lines.length) return;

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));

        if (!deleting && subIndex === lines[index].length) {
          setTimeout(() => setDeleting(true), 1000);
        } else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % lines.length);
        }
      },
      deleting ? 50 : 120
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  // Cursor blink
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-pink-50"
    >
      {/* Animated circles */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Floating circles (same as before) */}
        <circle
          cx="15%"
          cy="25%"
          r="100"
          fill="#93C5FD"
          opacity="0.3"
          className="float1"
        />
        <circle
          cx="80%"
          cy="20%"
          r="80"
          fill="#FECACA"
          opacity="0.3"
          className="float2"
        />
        <circle
          cx="50%"
          cy="50%"
          r="60"
          fill="#C084FC"
          opacity="0.2"
          className="float3"
        />
        <circle
          cx="30%"
          cy="70%"
          r="70"
          fill="#FBBF24"
          opacity="0.25"
          className="float4"
        />
        <circle
          cx="70%"
          cy="65%"
          r="90"
          fill="#60A5FA"
          opacity="0.2"
          className="float5"
        />
        <circle
          cx="40%"
          cy="30%"
          r="50"
          fill="#F472B6"
          opacity="0.25"
          className="float6"
        />
        <circle
          cx="85%"
          cy="50%"
          r="60"
          fill="#34D399"
          opacity="0.2"
          className="float7"
        />

        {/* Diagonal lines */}
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="100%"
          stroke="#E0E7FF"
          strokeWidth="2"
          opacity="0.15"
        />
        <line
          x1="100%"
          y1="0"
          x2="0"
          y2="100%"
          stroke="#FECACA"
          strokeWidth="2"
          opacity="0.15"
        />

        {/* Smooth wavy path behind text */}
        <path
          d="M0,200 C360,100 720,300 1080,150 1440,200 1440,320 0,320 Z"
          fill="#93C5FD"
          opacity="0.1"
          className="wave"
        />
      </svg>

      {/* Hero text */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          We Build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">
            Creative
          </span>{" "}
          Digital Experiences
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 font-medium h-10">
          {lines[index].substring(0, subIndex)}
          <span className="text-blue-600">{blink ? "|" : " "}</span>
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
