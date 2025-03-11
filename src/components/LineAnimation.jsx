'use client'
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export const MovingLine = () => {
  const ref = useRef(null);
  
  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  // Transform the scroll progress to control path length
  const pathLength = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  
  // Add spring physics for smoother animation
  const pathLengthSpring = useSpring(pathLength, {
    stiffness: 100,
    damping: 30
  });
  
  const PATH = "M2 0.980671L2 1566.02";
  
  return (
    <div
      className="w-auto h-[250vh]  mt-96  absolute     "
      ref={ref}    >
      <div className="sticky top-0 left-0 w-full h-screen flex items-center">
        <div className="pl-8 sm:pl-16 md:pl-24">
          <svg
            width="4"
            height="80%"
            viewBox="0 0 4 1567"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background line with subtle glow */}
            <path 
              d={PATH} 
              stroke="rgba(56, 121, 231, 0.2)" 
              strokeWidth="4"
            />
            
            {/* Animated foreground line */}
            <motion.path
              d={PATH}
              stroke="#3879E7"
              strokeWidth="4"
              strokeLinecap="round"
              filter="drop-shadow(0 0 8px rgba(56, 121, 231, 0.7))"
              style={{ 
                pathLength: pathLengthSpring,
                pathOffset: 0
              }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MovingLine;