"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Extended portfolio items with more details
  const portfolioItems = [
    {
      id: 1,
      image: "/assest/Portfolio/app/img2.svg",
      categories: ["Websites"],
      gridClass: "col-span-1 row-span-1",
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce website with integrated payment solutions and inventory management system.",
      client: "TechRetail Inc.",
      technology: "React, Node.js, MongoDB, Stripe",
      duration: "3 months",
      projectImages: [
        "/assest/Portfolio/app/img2.svg",
        "/assest/Portfolio/website/img3.svg",
        "/assest/Portfolio/website/img5.svg"
      ]
    },
    {
      id: 2,
      image: "/assest/Portfolio/website/img3.svg",
      categories: ["Websites", "Graphics Design"],
      gridClass: "col-span-1 row-span-1 ",
      title: "Creative Agency Website",
      description: "A modern website showcasing creative work with custom animations and interactive elements.",
      client: "ArtisticVisions Co.",
      technology: "Next.js, Tailwind CSS, GSAP",
      duration: "2 months",
      projectImages: [
        "/assest/Portfolio/website/img3.svg",
        "/assest/Portfolio/app/img1.svg",
        "/assest/Portfolio/website/img4.svg"
      ]
    },
    {
      id: 3,
      image: "/assest/Portfolio/app/img1.svg",
      categories: ["Graphics Design"],
      gridClass: "col-span-1 row-span-1",
      title: "Brand Identity Package",
      description: "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
      client: "GreenLife Organics",
      technology: "Adobe Creative Suite, Figma",
      duration: "1.5 months",
      projectImages: [
        "/assest/Portfolio/app/img1.svg",
        "/assest/Portfolio/app/img5.svg",
        "/assest/Portfolio/app/img4.svg"
      ]
    },
    {
      id: 4,
      image: "/assest/Portfolio/app/img5.svg",
      categories: ["Graphics Design"],
      gridClass: "col-span-1 row-span-1",
      title: "Product Packaging Design",
      description: "Premium packaging design for consumer electronics with sustainable materials.",
      client: "EcoTech Gadgets",
      technology: "Adobe Illustrator, Photoshop, Blender",
      duration: "1 month",
      projectImages: [
        "/assest/Portfolio/app/img5.svg",
        "/assest/Portfolio/app/img3.svg",
        "/assest/Portfolio/app/img2.svg"
      ]
    },
    {
      id: 5,
      image: "/assest/Portfolio/website/img5.svg",
      categories: ["Websites", "SEO"],
      gridClass: "col-span-1 row-span-1",
      title: "SEO-Optimized Blog",
      description: "Content-focused blog with advanced SEO implementation and content strategy.",
      client: "HealthWise Network",
      technology: "WordPress, Yoast SEO, Google Analytics",
      duration: "2.5 months",
      projectImages: [
        "/assest/Portfolio/website/img5.svg",
        "/assest/Portfolio/website/img4.svg",
        "/assest/Portfolio/website/img3.svg"
      ]
    },
    {
      id: 6,
      image: "/assest/Portfolio/app/img4.svg",
      categories: ["Graphics Design"],
      gridClass: "col-span-1 row-span-1",
      title: "Annual Report Design",
      description: "Visual storytelling through data visualization and infographics for annual corporate report.",
      client: "FinTrust Group",
      technology: "Adobe InDesign, Illustrator, Tableau",
      duration: "3 weeks",
      projectImages: [
        "/assest/Portfolio/app/img4.svg",
        "/assest/Portfolio/app/img3.svg",
        "/assest/Portfolio/app/img2.svg"
      ]
    },
    {
      id: 7,
      image: "/assest/Portfolio/app/img3.svg",
      categories: ["Graphics Design"],
      gridClass: "col-span-1 row-span-1",
      title: "Event Promotion Materials",
      description: "Complete set of promotional materials for a major tech conference including digital and print media.",
      client: "TechSummit Events",
      technology: "Adobe Creative Suite, Canva Pro",
      duration: "1 month",
      projectImages: [
        "/assest/Portfolio/app/img3.svg",
        "/assest/Portfolio/app/img4.svg",
        "/assest/Portfolio/app/img5.svg"
      ]
    },
    {
      id: 8,
      image: "/assest/Portfolio/app/img2.svg",
      categories: ["Mobile apps"],
      gridClass: "col-span-1 row-span-1",
      title: "Fitness Tracking App",
      description: "Mobile application for fitness tracking with social features and personalized workout plans.",
      client: "FitLife Solutions",
      technology: "React Native, Firebase, HealthKit",
      duration: "4 months",
      projectImages: [
        "/assest/Portfolio/app/img2.svg",
        "/assest/Portfolio/app/img1.svg",
        "/assest/Portfolio/app/img3.svg"
      ]
    },
    {
      id: 9,
      image: "/assest/Portfolio/website/img4.svg",
      categories: ["Websites", "Social media Branding"],
      gridClass: "col-span-1 row-span-1",
      title: "Social Media Campaign",
      description: "Integrated social media campaign across multiple platforms with cohesive visual identity.",
      client: "Urban Fashion Collective",
      technology: "Adobe Photoshop, After Effects, Meta Business Suite",
      duration: "2 months",
      projectImages: [
        "/assest/Portfolio/website/img4.svg",
        "/assest/Portfolio/website/img5.svg",
        "/assest/Portfolio/app/img5.svg"
      ]
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

  // Open project dialog
  const openProjectDialog = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when dialog is open
  };

  // Close project dialog
  const closeProjectDialog = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Handle image navigation
  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === selectedProject.projectImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? selectedProject.projectImages.length - 1 : prevIndex - 1
    );
  };

  // Close dialog when clicking outside or pressing ESC
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') closeProjectDialog();
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
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
              <img
                src={item.image}
                alt={`Portfolio item ${item.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={800}
                height={800}
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-500">
              <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <button 
                  className="bg-white text-black rounded-full py-2 px-4 text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
                  onClick={() => openProjectDialog(item)}
                >
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    {/* Project Dialog Modal */}
{selectedProject && (
  <div 
    className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
    onClick={closeProjectDialog}
  >
    <div 
      className="bg-gradient-to-b from-gray-900 to-black rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl transform transition-all duration-500 scale-100 opacity-100"
      onClick={(e) => e.stopPropagation()}
      style={{maxHeight: 'calc(100vh - 40px)'}}
    >
      {/* Close button */}
      <button 
        onClick={closeProjectDialog}
        className="absolute top-4 right-4 bg-black/50 hover:bg-blue-600 p-2 rounded-full transition-all duration-300 z-10 shadow-lg"
      >
        <X size={20} className="text-white" />
      </button>
      
      {/* Image slider */}
      <div className="relative h-72 sm:h-96 md:h-96 w-full">
        <div className="absolute inset-0">
          {selectedProject.projectImages.map((img, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                idx === currentImageIndex 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={img}
                alt={`Project image ${idx + 1}`}
                className="w-full h-full object-cover"
                width={1200}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-50"></div>
            </div>
          ))}
        </div>
        
        {/* Navigation arrows with improved styling */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
        >
          <ChevronLeft size={24} className="text-white group-hover:text-white" />
        </button>
        
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
        >
          <ChevronRight size={24} className="text-white group-hover:text-white" />
        </button>
        
        {/* Image indicator dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3">
          {selectedProject.projectImages.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`transition-all duration-300 ${
                idx === currentImageIndex 
                  ? 'w-8 h-2 bg-blue-600' 
                  : 'w-2 h-2 bg-white/50 hover:bg-white/80'
              } rounded-full`}
            />
          ))}
        </div>
      </div>
      
      {/* Project information with improved styling */}
      <div className="p-8 pb-10 overflow-y-auto scrollbar-hide" style={{maxHeight: 'calc(100vh - 40px - 24rem)'}}>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{selectedProject.title}</h3>
        
        <p className="text-gray-300 mb-8 text-lg leading-relaxed">{selectedProject.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h4 className="text-blue-500 font-semibold mb-2 flex items-center">
                <span className="w-1 h-6 bg-blue-500 mr-2 rounded-full"></span>
                Client
              </h4>
              <p className="text-gray-300 pl-3">{selectedProject.client}</p>
            </div>
            
            <div>
              <h4 className="text-blue-500 font-semibold mb-2 flex items-center">
                <span className="w-1 h-6 bg-blue-500 mr-2 rounded-full"></span>
                Categories
              </h4>
              <div className="flex flex-wrap gap-2 pl-3">
                {selectedProject.categories.map((cat, idx) => (
                  <span 
                    key={idx}
                    className="bg-gray-800/80 text-gray-300 px-3 py-1 rounded-full border border-gray-700/50 text-sm"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-blue-500 font-semibold mb-2 flex items-center">
                <span className="w-1 h-6 bg-blue-500 mr-2 rounded-full"></span>
                Technologies
              </h4>
              <p className="text-gray-300 pl-3">{selectedProject.technology}</p>
            </div>
            
            <div>
              <h4 className="text-blue-500 font-semibold mb-2 flex items-center">
                <span className="w-1 h-6 bg-blue-500 mr-2 rounded-full"></span>
                Project Duration
              </h4>
              <p className="text-gray-300 pl-3">{selectedProject.duration}</p>
            </div>
          </div>
        </div>
        
        {/* Call to action button */}
        <div className="mt-10 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105">
            View Live Project
          </button>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default PortfolioComponent;