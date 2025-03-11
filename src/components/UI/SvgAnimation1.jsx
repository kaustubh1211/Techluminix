"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const SvgAnimation1 = () => {
  const ref = useRef(null);
  const [offsetValues, setOffsetValues] = useState(["start end", "end start"]);

  // Adjust scroll offset dynamically based on screen size
  useEffect(() => {
    const updateOffsets = () => {
      if (window.innerWidth <= 768) {
        setOffsetValues(["start 90%", "end 10%"]); // Mobile & tablet
      } else if (window.innerWidth <= 1440) {
        setOffsetValues(["start 85%", "end 15%"]); // Laptops
      } else {
        setOffsetValues(["start 80%", "end 20%"]); // 4K screens
      }
    };

    updateOffsets();
    window.addEventListener("resize", updateOffsets);
    return () => window.removeEventListener("resize", updateOffsets);
  }, []);

  // Track scroll progress within this specific element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offsetValues,
  });

  // Adjust animation range
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Smooth spring animation
  const pathLengthSpring = useSpring(pathLength, {
    stiffness: 100,
    damping: 30,
  });

  const PATH =
    "M0.118683 2.19202L86.2805 1.88348C108.372 1.80437 126.344 19.6487 126.423 41.74L128 482";

  return (
    <div ref={ref} className=" invisible lg:visible absolute mt-2">
      <svg
        width="129"
        height="482"
        viewBox="0 0 129 482"
        fill="none"
        className="absolute z-40"
        xmlns="http://www.w3.org/2000/svg"
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

export default SvgAnimation1;
