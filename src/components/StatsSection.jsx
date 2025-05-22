"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AnimatedCounter = ({ value, suffix }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const counterElement = counterRef.current;
    let animationFrameId;
    let startTimestamp = null;
    const duration = 2000; // Animation duration in milliseconds

    const animateCounter = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      const currentValue = Math.floor(progress * parseInt(value));
      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCounter);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrameId = requestAnimationFrame(animateCounter);
          observer.disconnect(); // Stop observing once animation starts
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (counterElement) {
      observer.observe(counterElement);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (counterElement) observer.unobserve(counterElement);
    };
  }, [value]);

  return (
    <h2 ref={counterRef} className="text-5xl font-bold mb-2">
      {displayValue}
      <span className="text-blue-500">{suffix}</span>
    </h2>
  );
};

const StatsSection = () => {
  const services = [
    "UI/UX Design",
    "Frontend Development",
    "Backend Development",
    "MEARN Stack",
    "Blockchain Development",
    
  ];

  const stats = [
    { value: "40", suffix: "+", label: "Completed project" },
    { value: "100", suffix: "%", label: "Happy Customer" },
    { value: "5", suffix: "+", label: "Years of Experience" },
    { value: "20", suffix: "+", label: "Recognition Received" },
  ];

    const repeatedServices = [...services, ...services, ...services];
  const itemWidth = 180; // adjust if padding/margin changes
  const totalWidth = services.length * itemWidth;

  return (
      <section className="w-full mx-auto px-4 lg:px-24 justify-self-center mt-24">
      <div className="container mx-auto px-4">

        {/* 🟢 Smooth right-to-left services scroll */}
        <div className="relative overflow-hidden bg-[#F7F7F7] rounded-full py-4 px-6 mb-12 shadow-sm">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: [0, -totalWidth] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {repeatedServices.map((service, index) => (
              <span
                key={index}
                className="inline-block px-4 text-gray-800 font-medium min-w-max"
              >
                {service}
                <span className="mx-4 text-gray-300">|</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* 🔢 Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "40", suffix: "+", label: "Completed project" },
            { value: "100", suffix: "%", label: "Happy Customer" },
            { value: "5", suffix: "+", label: "Years of Experience" },
            { value: "20", suffix: "+", label: "Recognition Received" },
          ].map((stat, index) => (
            <div key={index} className="bg-[#F7F7F7] p-8 text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
