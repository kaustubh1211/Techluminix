"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const PortfolioComponent = () => {
  const categories = [
    "All",
    "Websites",
    "Mobile apps",
    "Social media Branding",
    "Graphics Design",
    "SEO",
  ];
  const [activeCategory, setActiveCategory] = useState("All");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const portfolioItems = [
    {
      id: 1,
      image: "/assest/Portfolio/app/img2.svg",
      categories: ["Websites"],
      gridClass: "col-span-1 row-span-1",
    },
    {
      id: 2,
      image: "/assest/Portfolio/website/img3.svg",
      categories: ["Websites", "Graphics Design"],
      gridClass: "col-span-1 row-span-1 ",
    },
    {
      id: 3,
      image: "/assest/Portfolio/app/img1.svg",
      categories: ["Graphics Design"],
      gridClass: "col-span-1 row-span-1",
    },
    {
      id: 4,
      image: "/assest/Portfolio/app/img5.svg",
      categories: ["Graphics Design"],
      gridClass: "col-span-1 row-span-1",
    },
    {
      id: 5,
      image: "/assest/Portfolio/website/img5.svg",
      categories: ["Websites", "SEO"],
      gridClass: "col-span-1 row-span-1",
    },
    {
      id: 6,
      image: "/assest/Portfolio/app/img4.svg",
      categories: ["Graphics Design"],
      gridClass: "col-span-1 row-span-1",
    },
    {
      id: 7,
      image: "/assest/Portfolio/app/img3.svg",
      categories: ["Graphics Design"],
      gridClass: "col-span-1 row-span-1",
    },
    {
      id: 8,
      image: "/assest/Portfolio/app/img2.svg",
      categories: ["Mobile apps"],
      gridClass: "col-span-1 row-span-1",
    },
    {
      id: 9,
      image: "/assest/Portfolio/website/img4.svg",
      categories: ["Websites", "Social media Branding"],
      gridClass: "col-span-1 row-span-1",
    },
  ];

  // Handle category change with smooth transition
  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;
    
    setIsTransitioning(true);
    
    // Wait for fade-out animation to complete
    setTimeout(() => {
      setActiveCategory(category);
      // Get filtered items based on new category
      const newFilteredItems = category === "All"
        ? portfolioItems
        : portfolioItems.filter((item) => item.categories.includes(category));
      
      setVisibleItems(newFilteredItems);
      
      // Wait a bit before starting the fade-in animation
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  // Initialize visible items on component mount and trigger initial animations
  useEffect(() => {
    setVisibleItems([]);
    
    // Delay the initial animation for a smoother page load experience
    setTimeout(() => {
      setIsLoaded(true);
      
      // Stagger the appearance of portfolio items
      setTimeout(() => {
        setVisibleItems(portfolioItems);
      }, 400);
    }, 100);
  }, []);

  return (
    <div className="bg-black my-24 text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Section Title with fade-in animation */}
      <div className={`text-center mb-12 transition-all duration-700 ease-out ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <h3 className="text-blue-600 font-medium mb-2">Our Portfolio</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recent Work</h2>
        <p className="text-[#8E8F92] max-w-2xl mx-auto">
          Explore our diverse portfolio showcasing our expertise across various digital domains
        </p>
      </div>
      
      {/* Category Filter with enhanced transitions */}
      <div className={`flex flex-wrap items-center justify-center mb-8 space-x-2 md:space-x-4 transition-all duration-500 ease-out delay-100 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryChange(category)}
            className={`py-2 px-4 rounded-full text-sm md:text-base transition-all duration-300 ${
              activeCategory === category
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-transparent text-gray-300 hover:text-white hover:scale-105"
            }`}
            style={{ transitionDelay: `${100 + index * 50}ms` }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid with fade and staggered transition */}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-opacity duration-500 ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}>
        {visibleItems.map((item, index) => (
          <div
            key={item.id}
            className={`${item.gridClass} overflow-hidden rounded-lg cursor-pointer group relative transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl`}
            style={{ 
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
              transition: `opacity 0.5s ease, transform 0.5s ease`,
              transitionDelay: `${200 + index * 100}ms`
            }}
          >
            <div className="w-full h-full overflow-hidden bg-gray-100">
              <Image
                src={item.image}
                alt={`Portfolio item ${item.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={800}
                height={800}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,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"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-500">
              <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <button className="bg-white text-black rounded-full py-2 px-4 text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300">
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioComponent;