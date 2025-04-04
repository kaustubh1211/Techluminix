'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ServicesSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  
  // Dynamic services data
  const services = [
    {
      id: 1,
      title: 'Video Editing',
      description: 'Create videos with flawless precision and captivating visuals.',
      image: '/assest/Service/Video.png',
      bgColor: 'bg-[#FFE9CF]',
    },
    {
      id: 2,
      title: 'UX/UI Design',
      description: 'Craft intuitive experiences with sleek design and flawless performance.',
      image: '/assest/Service/Design.png',
      bgColor: 'bg-green-50',
    },
    {
      id: 3,
      title: 'Web Development',
      description: 'Build your Website with seamless performance and stunning design.',
      image: '/assest/Service/vr.png',
      bgColor: 'bg-[#D8EDFF]',
    },
    {
      id: 4,
      title: 'Social Media',
      description: 'Build your brand online with organic content.',
      image: '/assest/Service/post.png',
      bgColor: 'bg-[#FFE7FD]',
    },
    {
      id: 5,
      title: 'App Development',
      description: 'Build your app with seamless performance and stunning design.',
      image: '/assest/Service/appdev.png',
      bgColor: 'bg-[#F7EFFF]',
    },
    {
      id: 6,
      title: 'AR/VR Development',
      description: 'Create immersive AR/VR experiences with seamless performance and breathtaking design.',
      image: '/assest/Service/webdev.png',
      bgColor: 'bg-[#FFD2BF]',
      highlight: true,
    },
  ];

  useEffect(() => {
    // Initial animation for the section header
    setIsLoaded(true);
    
    // Start with all items visible to prevent any visibility issues
    setVisibleItems(services.map(service => service.id));
    
    // Alternative approach: Animate them in sequence
    /*
    const timer = setTimeout(() => {
      let counter = 0;
      const interval = setInterval(() => {
        if (counter < services.length) {
          setVisibleItems(prev => [...prev, services[counter].id]);
          counter++;
        } else {
          clearInterval(interval);
        }
      }, 150);
      
      return () => clearInterval(interval);
    }, 400);
    
    return () => clearTimeout(timer);
    */
  }, []);

  return (
    <section className="py-16 mx-auto px-4 lg:px-16 bg-black overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Section header with fade-in animation */}
        <div className={`text-center mb-12 text-white transition-all duration-700 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className={`text-blue-600 font-medium mb-2 transition-all duration-500 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Our Service
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Different services for different needs
          </h2>
          <p className={`text-[#8E8F92] max-w-xl mx-auto transition-all duration-500 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            We have the most talented professionals at your disposal
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`rounded-lg flex flex-col transform transition-all duration-500 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${(service.id - 1) * 100}ms` }}
            >
              <div className={`flex justify-center ${service.bgColor} transition-all duration-300 hover:shadow-lg`}>
                <div className="relative w-full h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={500}
                    className="object-contain transition-transform duration-500  h-48 hover:scale-105"
                  />
                </div>
              </div>
              <div className='bg-[#131316] p-6 flex-1 transition-all duration-300 hover:bg-[#1a1a1f]'>
                <h3 className="text-xl font-semibold text-center mb-2 text-white text-[600]">{service.title}</h3>
                <p className="text-[#8E8F92] text-center text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;