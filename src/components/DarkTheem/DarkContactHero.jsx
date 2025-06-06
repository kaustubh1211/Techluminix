import React from "react";
import Link from "next/link";

const DarkContactHero = () => {
  return (
    <div className=" relative min-h-screen w-full bg-gradient-to-b flex flex-col items-center justify-center p-4 py-10">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-black opacity-10" />
      <div className="absolute inset-0 overflow-hidden  ">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(156, 163, 175, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(156, 163, 175, 0.2) 1px, transparent 1px)
          `,
            backgroundSize: "3rem 3rem",
            mask: "radial-gradient(circle at center, black 30%, transparent 50%)",
            WebkitMask:
              "radial-gradient(circle at center, black 30%, transparent 50%)",
            filter: "drop-shadow(0 0 1px rgba(156, 163, 175, 0.1))",
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative flex flex-col items-center max-w-4xl mx-auto text-center z-10">
        {/* Hexagon with Image */}
        <div className="relative w-64 h-64 mb-8">
          {/* Hexagon Background */}
          <div className="absolute" />

          {/* Image Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src="/assets/Logo/10.png"
              alt="VR User"
              className=" w-56 h-52 object-contain"
            />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-4xl md:text-4xl font-semibold text-white mb-6 max-w-2xl">
          We don't just build products - we bring your dreams to life.
        </h1>

        {/* Contact Button */}
        <Link href="/contact">
          <button className="flex items-center gap-2 bg-white text-[#3770ED] px-6 py-3 rounded-full shadow-md shadow-[#3770ED] hover:shadow-xl transition-all duration-300">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Contact us now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DarkContactHero;
