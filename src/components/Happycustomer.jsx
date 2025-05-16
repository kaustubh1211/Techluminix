'use client'
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Chirag Pendulkar",
    role: "",
    image: "/assets/testimonals/chirag.svg",
    content: "Every project was completed on time and within the agreed budget. They were transparent throughout the process, keeping us informed at every step."
  },
  {
    name: "Sonya Mkrtchyan",
    role: "Freelancer",
    image: "/assets/testimonals/sonya.svg",
    content: "Excellent communication and skills. recommend!"
  },
  {
    name: "Dennis Gerten",
    role: "Project Manager @Insurensa",
    image: "/assets/testimonals/dennies.svg",
    content: "If you want your stuff do be done really good, super fast, extremely effective, absolutely reliable and with kreative input: then THIS IS YOUR MAN !!!!!!!!!!!!!!!!!!!!"
  },
  {
    name: "Ramesh Subburaj",
    role: "CEO @Cross Hurdles Systems",
    image: "/assets/testimonals/siva.svg",
    content: "Delivers such a great service that it can benefit all kinds of people from any number of industries."
  }
];
const testimonials2 = [
  {
    name: "Ramesh Subburaj",
    role: "CEO @Cross Hurdles Systems",
    image: "/assets/testimonals/siva.svg",
    content: "Delivers such a great service that it can benefit all kinds of people from any number of industries."
  },
  {
    name: "Chirag Pendulkar",
    role: "",
    image: "/assets/testimonals/chirag.svg",
    content: "Every project was completed on time and within the agreed budget. They were transparent throughout the process, keeping us informed at every step."
  },
  {
    name: "Dennis Gerten",
    role: "Project Manager @Insurensa",
    image: "/assets/testimonals/dennies.svg",
    content: "If you want your stuff do be done really good, super fast, extremely effective, absolutely reliable and with kreative input: then THIS IS YOUR MAN !!!!!!!!!!!!!!!!!!!!"
  },
  {
    name: "Sonya Mkrtchyan",
    role: "Freelancer",
    image: "/assets/testimonals/sonya.svg",
    content: "Excellent communication and skills. recommend!"
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="w-[350px] md:w-[400px] p-6 bg-[#131316] rounded-xl mx-4 flex-shrink-0">
    <div className="flex items-center gap-4 mb-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h3 className="text-white font-semibold text-lg">{testimonial.name}</h3>
        <p className="text-gray-400 text-sm">{testimonial.role}</p>
      </div>
    </div>
    <p className="text-gray-300 text-sm leading-relaxed">{testimonial.content}</p>
  </div>
);

const TestimonialSlider = () => {
  const [width, setWidth] = useState(0);
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);

  useEffect(() => {
    if (containerRef1.current && containerRef2.current) {
      setWidth(containerRef1.current.scrollWidth - containerRef1.current.offsetWidth);
    }
  }, []);

  // Double the testimonials for seamless loop
  const allTestimonials = [...testimonials, ...testimonials];
  const allTestimonials2 = [...testimonials2, ...testimonials2];

  return (
    <div className="w-full bg-black py-40 relative z-40">
      <div className="max-w-full mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Happy & Satisfied Faces
          </h2>
          <p className="text-gray-400">
            Here's what some of my satisfied clients have to say about my work
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* First row - left to right */}
          <motion.div
            ref={containerRef1}
            className="flex"
            animate={{
              x: [0, -width]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear"
            }}
          >
            {allTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>

          {/* Second row - right to left */}
          <motion.div
            ref={containerRef2}
            className="flex mt-10"
            animate={{
              x: [-width, 0]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear"
            }}
          >
            {allTestimonials2.map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;