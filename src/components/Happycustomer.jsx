'use client'
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Agnes Remi",
    role: "Back-end developer at MyDodow",
    image: "/api/placeholder/64/64",
    content: "Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising!"
  },
  {
    name: "Martin Goutry",
    role: "Back-end developer at MyDodow",
    image: "/api/placeholder/64/64",
    content: "Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising!"
  },
  {
    name: "Theo Champion",
    role: "Back-end developer at MyDodow",
    image: "/api/placeholder/64/64",
    content: "Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising!"
  },
  {
    name: "Roman Atwoods",
    role: "Back-end developer at MyDodow",
    image: "/api/placeholder/64/64",
    content: "Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising!"
  }
];
const testimonials2 = [
    {
        name: "Roman Atwoods",
        role: "Back-end developer at MyDodow",
        image: "/api/placeholder/64/64",
        content: "Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising!"
    },
    {
        name: "Martin Goutry",
        role: "Back-end developer at MyDodow",
        image: "/api/placeholder/64/64",
        content: "Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising!"
    },
    {
      name: "Agnes Remi",
      role: "Back-end developer at MyDodow",
      image: "/api/placeholder/64/64",
      content: "Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising!"
    },
    {
      name: "Theo Champion",
      role: "Back-end developer at MyDodow",
      image: "/api/placeholder/64/64",
      content: "Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising!"
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