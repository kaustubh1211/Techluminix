"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

const AnimatedLines = () => {
  // Add state to track if component is mounted
  const [isMounted, setIsMounted] = useState(false);
  
  // Calculate screen width safely
  const screenWidth = useMemo(() => 
    typeof window !== "undefined" ? window.innerWidth + 100 : 1500
  , []);
  
  // Set animation bounds
  const initialX = useMemo(() => [-100, screenWidth], [screenWidth]);
  
  // Set component as mounted after it renders
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render until mounted on client
  if (!isMounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[10]">
      <div className="absolute top-14 w-full">
        <div className="w-full">
          <motion.div
            className="absolute w-[140px] h-[2px] bg-gradient-to-l from-gray-400 to-transparent"
            initial={{ x: Math.random() * screenWidth }} // Random initial position
            animate={{ x: initialX }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop" 
            }}
          />
        </div>
      </div>

      <div className="absolute top-1/3 w-full">
        <div className="w-full">
          <motion.div
            className="absolute w-[55px] h-[1.5px] bg-gradient-to-l from-gray-400 to-transparent"
            initial={{ x: Math.random() * screenWidth }} // Random initial position
            animate={{ x: initialX }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: 0.2,
              repeatType: "loop"
            }}
          />
        </div>
      </div>

      <div className="absolute top-2/3 w-full">
        <div className="w-full">
          <motion.div
            className="absolute w-[35px] h-[1px] bg-gradient-to-l from-gray-400 to-transparent"
            initial={{ x: Math.random() * screenWidth }} // Random initial position
            animate={{ x: initialX }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: 0.5,
              repeatType: "loop"
            }}
          />
        </div>
      </div>

      {/* vertical line  */}
      <div className="absolute right-40 h-full">
        <div className="h-full w-[3px] bg-gradient-to-b from-transparent to-transparent relative">
          <motion.div
            className="absolute h-[140px] w-[2px] bg-gradient-to-t from-gray-400 to-transparent"
            initial={{ y: Math.random() * screenWidth }} // Random initial position
            animate={{ y: initialX }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop" 
            }}
          />
        </div>
      </div>

      <div className="absolute left-80 h-full">
        <div className="h-full w-[3px] bg-gradient-to-b from-transparent to-transparent relative">
          <motion.div
            className="absolute h-[140px] w-[2px] bg-gradient-to-t from-gray-400 to-transparent"
            initial={{ y: Math.random() * screenWidth }} // Random initial position
            animate={{ y: initialX }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: 0.3,
              repeatType: "loop"
            }}
          />
        </div>
      </div>

      <div className="absolute left-96 h-full">
        <div className="h-full w-[3px] bg-gradient-to-b from-transparent to-transparent relative">
          <motion.div
            className="absolute h-[85px] w-[2px] bg-gradient-to-t from-gray-400 to-transparent"
            initial={{ y: Math.random() * screenWidth }} // Random initial position
            animate={{ y: initialX }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: 0.7,
              repeatType: "loop"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedLines;