"use client";

import Image from "next/image";
import AnimatedLines from "./AnimatedLines";

import BackgroundAnimation from "./UI/BackgroundAnimation";
import { useState, useRef } from "react";
import Link from "next/link";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const boxRef = useRef(null);

  const handleMouseMove = (e) => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };
  return (
    <div className="relative mt-24 flex items-center">
    <AnimatedLines />
    <div className="container mx-auto px-4 lg:px-24 z-10 relative">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-4 mt-16 md:mt-20 lg:mt-36 max-w-xl mx-auto lg:mx-0">
          <div className="mx-auto lg:mx-0 flex justify-center lg:justify-start">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-sm text-green-800">
              ✅ 100% Satisfied Clients
            </div>
          </div>
          <BackgroundAnimation />

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight font-inter text-center lg:text-left">
            Building Scalable{" "}
            <span className="block">Products That Make an Impact</span>
          </h1>

          <p className="text-gray-600 text-sm max-w-xl font-plus_jakarta_Sans text-center lg:text-left mx-auto lg:mx-0">
            We help startups and enterprises design, develop, and deploy
            high-quality digital products.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
            <Link href="/contact">
              <button className="px-6 py-3 relative bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                Let's Talk
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="px-6 py-3 relative bg-white border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                Explore Portfolio
              </button>
            </Link>
          </div>
        </div>
        {/* Right Content */}
        <div className="mt-8 md:mt-16 lg:mt-28 w-full lg:w-1/2">
          <div className="flex flex-col md:flex-row justify-center items-center lg:justify-end gap-4 lg:gap-11 mx-auto lg:mx-0 relative">
            {/* Background gradient effect for the entire section */}
            <div className="absolute inset-0 bg-gradient-to-bl from-pink-300/90 to-transparent rounded-2xl blur-2xl opacity-75 transform scale-105" />

            <div className="transform scale-75 md:scale-100 origin-center flex flex-col md:flex-row">
              {/* 1st card - Apple screen */}
              <div className="relative z-10">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-gradient-to-br from-blue-300/40 via-purple-200/30 to-transparent rounded-full blur-md" />
                <img
                  src="assets/Hero/apple-screen.svg"
                  alt="Apple Screen"
                  className="w-80 relative md:mt-52 h-56 filter drop-shadow-lg"
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </div>

              {/* 2nd card - Enhanced with better gradients */}
              <div className="relative z-10 w-[346px] h-[387px] rounded-2xl shadow-xl bg-white overflow-hidden">
                {/* Subtle gradient overlay on the card itself */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-50" />

              {/* Card content */}
              <div className="absolute inset-0 p-1.5 flex flex-col">
                {/* Enhanced blue background area with improved gradient */}
                <div
                  className="relative mt-4 mb-6 overflow-hidden rounded-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(55, 112, 237, 0.85) 0%, rgba(55, 112, 237, 0.7) 15%, rgba(211, 225, 255, 0.9) 50%, rgba(255, 255, 255, 0.95) 75%)",
                  }}
                >
                  {/* Grid pattern with improved masking */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `
                  linear-gradient(to right, rgba(156, 163, 175, 0.15) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(156, 163, 175, 0.15) 1px, transparent 1px)
                `,
                      backgroundSize: "1.5rem 1.5rem",
                      mask: "radial-gradient(ellipse at left, black 45%, transparent 75%)",
                      WebkitMask:
                        "radial-gradient(ellipse at left, black 45%, transparent 75%)",
                    }}
                  />

                  {/* Additional subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-300/5 to-transparent" />

                  <img
                    src="assets/Hero/pointer.svg"
                    alt="Pointer"
                    className="w-30 absolute align-middle mt-16 right-2 h-30 filter drop-shadow-md"
                    width={120}
                    height={150}
                  />
                  <img
                    src="assets/Hero/icon.svg"
                    alt="Icon"
                    className="w-72 h-48 relative z-10"
                    width={800}
                    height={800}
                  />
                </div>

                {/* Text content with subtle background */}
                <div className=" mt-11 pl-5 relative">
                  {/* Subtle text background gradient */}
                  <div className="absolute -left-1 top-0 w-full h-full bg-gradient-to-r from-blue-50/30 to-transparent rounded-lg" />

                  <h3 className="text-xl font-semibold text-gray-900 relative z-10">
                    Effortless integration.
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 relative z-10">
                    Seamlessly connect your systems with <br />
                    smooth and reliable API integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  );
};

export default HeroSection;
