'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";

const ServiceMain = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Set loaded state after component mounts to trigger animations
    setIsLoaded(true);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-black overflow-hidden mt-36">
    <div className="container mx-auto px-4 md:px-24">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left content with fade-in animation */}
        <div 
          className={`w-full md:w-1/2 mb-10 md:mb-0 pr-0 text-white transform transition-all duration-700 ease-in-out text-center md:text-left ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 
            className={`text-blue-600 text-3xl md:text-4xl lg:text-4xl font-medium mb-4 transition-all duration-500 delay-100 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            Work with us
          </h3>

          <h1 
            className={`text-3xl md:text-4xl lg:text-5xl font-sans font-semibold text-[600] mb-6 transition-all duration-500 delay-200 mx-auto md:mx-0 max-w-lg ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            Your goals are closer than you realize—take the next step today.
          </h1>

          <p 
            className={`text-[#8E8F92] mb-8 transition-all duration-500 delay-300 mx-auto md:mx-0 max-w-md ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            Techluminx is your all-in-one partner: your ideas, our solutions.
            Let's build your dream empire!
          </p>

          <div className="flex justify-center md:justify-start">
            <button 
              className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-500 delay-400 ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              Contact us
            </button>
          </div>
        </div>

        {/* Right content - image with fade-in animation */}
        <div 
          className={`w-full md:w-1/2 relative transition-all duration-1000 ease-out max-w-md mx-auto md:max-w-none ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="relative">
            <Image
              src="/assets/Service/head.svg"
              alt="App interface mockup"
              className={`w-full h-auto transition-transform duration-700 ${
                isLoaded ? "scale-100" : "scale-95"
              }`}
              width={804}
              height={700}
              onLoadingComplete={() => setIsLoaded(true)}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ServiceMain;