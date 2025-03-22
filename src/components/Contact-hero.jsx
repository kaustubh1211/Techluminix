import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ContactHero = () => {
  return (
    <div className=" relative min-h-screen w-full bg-gradient-to-b flex flex-col items-center justify-center p-4"
    style={{
        backgroundImage: "linear-gradient(to bottom, #3770ED 0%, #3770ED 10%, #D3E1FF 35% , white 50% )"   }}
    >
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
        <div className="absolute inset-0 overflow-hidden  ">
        <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(156, 163, 175, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(156, 163, 175, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "4px 4px",
          maskImage: "radial-gradient(ellipse at top, black 10%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at top, black 10%, transparent 70%)",
        //   filter: "drop-shadow(0 0 1px rgba(156, 163, 175, 0.1))"
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
              src="/assest/Logo/10.png"
              alt="VR User"
              className=" w-56 h-52 object-contain"
            
            />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-4xl md:text-4xl font-semibold text-gray-800 mb-6 max-w-2xl">
          We don't just build products - we bring your dreams to life.
        </h1>

        {/* Contact Button */}
        <Link  href='/contact'>
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

export default ContactHero;