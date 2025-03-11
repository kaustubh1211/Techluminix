"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const SvgAnimation2 = () => {
  const ref = useRef(null);

  // Track scroll progress within this specific element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Animation starts when the element enters and stops when it exits
  });

  // Adjust animation range
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Smooth spring animation
  const pathLengthSpring = useSpring(pathLength, {
    stiffness: 100,
    damping: 30,
  });

  const PATH =
    "M91 0V95.5C91 117.591 73.0914 135.5 51 135.5H41C18.9086 135.5 1 153.409 1 175.5V300"

  return (
    <div ref={ref} className=" invisible lg:visible absolute mt-2">
      <svg
      width="92"
      height="350"
      viewBox="0 0 92 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=" absolute"
      >
        {/* Background static line */}
        <path d={PATH} stroke="rgba(56, 121, 231, 0.2)" strokeWidth="3" />

        {/* Animated scrolling line */}
        <motion.path
          d={PATH}
          stroke="#3879E7"
          strokeWidth="3"
          strokeLinecap="round"
          filter="drop-shadow(0 0 8px rgba(56, 121, 231, 0.7))"
          style={{
            pathLength: pathLengthSpring,
            pathOffset: 0,
          }}
        />
      </svg>
    </div>
  );
};

export default SvgAnimation2;
