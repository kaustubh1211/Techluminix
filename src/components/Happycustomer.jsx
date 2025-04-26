'use client'
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Chirag Pendulkar",
    role: "",
    image: "/assest/testimonals/chirag.svg",
    content: "Every project was completed on time and within the agreed budget. They were transparent throughout the process, keeping us informed at every step."
  },
  {
    name: "Sonya Mkrtchyan",
    role: "Freelancer",
    image: "/assest/testimonals/sonya.svg",
    content: "Excellent communication and skills. recommend!"
  },
  {
    name: "Dennis Gerten",
    role: "Project Manager @Insurensa",
    image: "/assest/testimonals/dennies.svg",
    content: "If you want your stuff do be done really good, super fast, extremely effective, absolutely reliable and with kreative input: then THIS IS YOUR MAN !!!!!!!!!!!!!!!!!!!!"
  },
  {
    name: "Ramesh Subburaj",
    role: "CEO @Cross Hurdles Systems",
    image: "/assest/testimonals/siva.svg",
    content: "Delivers such a great service that it can benefit all kinds of people from any number of industries."
  }
];
const testimonials2 = [
  {
    name: "Ramesh Subburaj",
    role: "CEO @Cross Hurdles Systems",
    image: "/assest/testimonals/siva.svg",
    content: "Delivers such a great service that it can benefit all kinds of people from any number of industries."
  },
  {
    name: "Chirag Pendulkar",
    role: "",
    image: "/assest/testimonals/chirag.svg",
    content: "Every project was completed on time and within the agreed budget. They were transparent throughout the process, keeping us informed at every step."
  },
  {
    name: "Dennis Gerten",
    role: "Project Manager @Insurensa",
    image: "/assest/testimonals/dennies.svg",
    content: "If you want your stuff do be done really good, super fast, extremely effective, absolutely reliable and with kreative input: then THIS IS YOUR MAN !!!!!!!!!!!!!!!!!!!!"
  },
  {
    name: "Sonya Mkrtchyan",
    role: "Freelancer",
    image: "/assest/testimonals/sonya.svg",
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
  const [position, setPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  // Double the testimonials for seamless loop
  const allTestimonials = [...testimonials, ...testimonials];

  //2nd testimonials
  const allTestimonials2=[...testimonials2 , ...testimonials2];

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
          {/* Left Gradient */}
          {/* <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" /> */}

          <motion.div
            ref={containerRef}
            className="flex"
            animate={{
              x: [-width/2, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear"
            }}
          >
            {allTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </motion.div>
          <motion.div
            ref={containerRef}
            className="flex mt-10 ml-44"
            animate={{
              x: [-width/2, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear"
            }}
          >
            {allTestimonials2.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </motion.div> 

          {/* Right Gradient */}
          {/* <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" /> */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;