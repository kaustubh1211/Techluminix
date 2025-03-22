"use client";

import Image from "next/image";
import AnimatedLines from "./AnimatedLines";

import BackgroundAnimation from "./UI/BackgroundAnimation";
import { useState, useRef } from "react";

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
    <div className=" relative mt-28  flex items-center">
      <AnimatedLines />
      <div className="container mx-auto px-4 lg:px-10 z-10 relative">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-4 mt-16 md:mt-20 lg:mt-36 max-w-xl mx-auto lg:mx-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-sm text-green-700">
              ✅100% Satisfied Clients
            </div>
            <BackgroundAnimation />

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-Playfair">
              Transforming Ideas into{" "}
              <span className="inline-block">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  Cutting-Edge
                </span>
              </span>{" "}
              Software Solutions
            </h1>

            <p className="text-gray-600 text-sm max-w-xl font-plus_jakarta_Sans">
              Empowering businesses with seamless UI/UX, robust app development,
              and innovative IT solutions. Let's build the future together.
            </p>
          </div>

          {/* Right Content */}
          <div className="mt-8 md:mt-16 lg:mt-28">
            <div className="flex flex-col md:flex-row justify-center lg:justify-end gap-4 lg:gap-11 max-w-3xl mx-auto lg:mx-0">
              {/* 1st div - Enhanced with gradients and shapes */}
              <div className="w-full md:w-[221px] h-[250px] md:h-[310px] bg-white rounded-lg shadow-2xl relative overflow-hidden">
                {/* Decorative elements */}
                    {/* Accent line */}
                {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div> */}

                {/* Content */}
              
              </div>

              {/* cart 2 - unchanged */}
              <div className="relative md:w-[346px] h-[300px] md:h-[387px] rounded-lg shadow-xl">
                {/* Card background */}
                <div className="absolute inset-0 bg rounded-lg bg-white"></div>
                <div className="absolute inset-0 rounded-lg shadow-[0px_10px_30px_rgba(0,0,0,0.1)]"></div>

                {/* Browser dots */}
                <div className="absolute top-3 left-3 flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>

                {/* Card content */}
                <div className="absolute inset-0 p-1.5 flex flex-col">
                  {/* Blue background area */}
                  <div
                    className="relative mt-4 mb-6 overflow-hidden"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right bottom, #3770ED80 0%, #3770ED80 10%, #D3E1FF 35% , white 50% )",
                    }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `
                linear-gradient(to right, rgba(156, 163, 175, 0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(156, 163, 175, 0.2) 1px, transparent 1px)
              `,
                        backgroundSize: "1.5rem 1.5rem",
                        mask: "radial-gradient(ellipse at left, black 40%, transparent 70%)",
                        WebkitMask:
                          "radial-gradient(ellipse at left, black 40%, transparent 70%)",
                        filter: "drop-shadow(0 0 1px rgba(156, 163, 175, 0.1))",
                      }}
                    />
        
                    <img
                      src="assest/Hero/pointer.svg"
                      alt="icon"
                      className="w-30 absolute align-middle mt-16 right-2 h-30"
                      width={120}
                      height={150}
                    />
                    <img
                      src="assest/Hero/icon.svg"
                      alt="icon"
                      className="w-72 h-48"
                      width={800}
                      height={800}
                    />
                  </div>

                  {/* Text content */}
                  <div className="mb-2 pl-5">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Effortless integration.
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Seamlessly connect your systems with <br></br> smooth and
                      reliable API integration.
                    </p>
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

// Add these animations to your globals.css

export default HeroSection;
