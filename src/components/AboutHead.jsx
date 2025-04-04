'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function AboutHead() {
  // Animation state
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  // Track scroll for animations
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setStatsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black mx-auto px-4 lg:px-16 text-white">
      {/* Hero Section with enhanced visuals */}
      <section className="min-h-screen relative flex items-center pt-24 pb-16 overflow-hidden">
        {/* Enhanced grid background */}
        <div
          className="absolute inset-0 opacity-30 transition-opacity duration-1000"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "3rem 3rem",
            maskImage: "radial-gradient(circle at center, black 70%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 70%, transparent 100%)",
          }}
        />
        
        {/* Subtle animated gradients */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-600 rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-indigo-600 rounded-full filter blur-[150px] opacity-20 animate-pulse" style={{ animationDelay: "1.5s" }}></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block bg-blue-600/20 rounded-full px-4 py-1 text-blue-400 font-medium mb-2 border border-blue-600/30">
                About us
              </div>
              
              <h1 className="text-5xl md:text-5xl font-bold leading-tight">
                <span className="text-white block mb-2">Who we are.</span>
                <span className="bg-gradient-to-r text-white bg-clip-text text-transparent">What we do.</span>
              </h1>
              
              <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                Since the beginning, we strive to help creators, builders and
                founders launch and achieve their dreams through innovative digital solutions.
              </p>
              
              <div className="pt-4">
                <Link href='/services'>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Our Services
                </button>
                </Link>
                <Link href='/contact'>
                <button className="ml-4 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  Contact Us
                </button>
                </Link>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl transform rotate-3 opacity-20 blur-sm"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 transform transition-all duration-500 hover:-translate-y-2">
                <img
                  src="/assest/About-us/About1.png"
                  alt="Digital innovation team"
                  className="w-full h-auto"
                  height={800}
                  width={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              {/* <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border-4 border-blue-600/30 z-0"></div> */}
              {/* <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full border-2 border-indigo-600/30 z-0"></div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section with enhanced design */}
      <section className="py-24 bg-gradient-to-b from-black to-[#131316]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1 space-y-8">
              <div className="inline-block bg-blue-600/20 rounded-full px-4 py-1 text-blue-400 font-medium">
                Our mission
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Our mission
                <br />
                <span className="bg-gradient-to-r text-white bg-clip-text text-transparent">
                  stays the same.
                </span>
              </h2>

              <div className="space-y-6">
                <p className="text-gray-400 text-lg leading-relaxed">
                  Remember that idea you had? The product you always wanted to
                  create? The business that makes you wake up in the morning?
                </p>

                <p className="text-gray-400 text-lg leading-relaxed">
                  We get it and that is why AgencyBox was born! We help you launch
                  your ideas and achieve your goals much faster.
                </p>
              </div>

              <div id="stats-section" className="grid grid-cols-2 gap-8 mt-12">
                {[
                  { number: "5+", text: "Years of Experience" },
                  { number: "20+", text: "Recognition Received" },
                  { number: "40+", text: "Completed Projects" },
                  { number: "100%", text: "Happy Clients" }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className={`transform transition-all duration-700 delay-${index * 100} ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  >
                    <h3 className="text-4xl font-bold  text-white bg-clip-text text-transparent">
                      {stat.number}
                    </h3>
                    <p className="text-gray-400 mt-2">{stat.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2 order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl transform -rotate-2 opacity-20 blur-sm"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 transform hover:scale-[1.02] transition-all duration-500">
                <img
                  src="/assest/About-us/About2.png"
                  alt="Team members collaborating"
                  className="w-full h-auto"
                  width={800}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-blue-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 left-1/4 w-24 h-24 bg-indigo-600 rounded-full blur-xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}