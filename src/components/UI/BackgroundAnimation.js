"use client";
import React, { useEffect, useState } from "react";

export default function BackgroundAnimation() {
  const [activeSquares, setActiveSquares] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random active squares
      const newActiveSquares = Array.from({ length: 10 }, () => ({
        x: Math.floor(Math.random() * 20), // Adjust based on grid size
        y: Math.floor(Math.random() * 20),
      }));
      setActiveSquares(newActiveSquares);
    }, 1000); // Change squares every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(156, 163, 175, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(156, 163, 175, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "3rem 3rem",
          mask: "radial-gradient(circle at center, black 60%, transparent 70%)",
          WebkitMask:
            "radial-gradient(circle at center, black 60%, transparent 70%)",
          filter: "drop-shadow(0 0 1px rgba(156, 163, 175, 0.1))",
        }}
      />

      {/* Animated Light-Up Squares */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,4rem)] grid-rows-[repeat(20,4rem)]">
        {activeSquares.map(({ x, y }, index) => (
          <div
            key={index}
            className="absolute w-[3rem] h-[3rem] bg-gray-200 opacity-30 animate-fade"
            style={{
              left: `${x * 3}rem`,
              top: `${y * 3}rem`,
            }}
          />
        ))}
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fade {
            0% { opacity: 0; }
            50% { opacity: 0.3; }
            100% { opacity: 0; }
          }

          .animate-fade {
            animation: fade 1s ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
