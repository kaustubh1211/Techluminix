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
      "id": 12,
      "image": "/assest/Mockups/app/Zp - 6.jpg",
      "categories": ["Mobile apps" ,"Social media Branding"],
      "gridClass": "col-span-1 row-span-1",
      "title": "Zed Pay: Recharge, Bill Payment",
      "description": "A utility payment platform offering mobile recharges, DTH/DATV top‑ups, and bill settlements—all with attractive cashback offers. The app integrates secure wallets, multiple payment gateways, and transaction histories for easy expense tracking.",
      "client": "Vikas Dubey",
      "technology": "Flutter · Firebase · Laravel · PHP · MySQL",
      "duration": "2 Months Development + Ongoing Service",
      "link": "https://play.google.com/store/apps/details?id=com.zfintech.zedpay&hl=en_IN",
      "projectImages": ["/assest/Mockups/app/Zp - 6.jpg",
        "/assest/Mockups/app/Zp - 5.jpg",
        "/assest/Mockups/app/Zp - 7.jpg",
        "/assest/Mockups/app/Zp - 8.jpg",
        "/assest/Mockups/app/Zp - 9.jpg",
        "/assest/Mockups/app/Zp - 10.jpg"
      ]
    },
    {
      "id": 1,
      "image": "/assest/Mockups/1.jpg",
      "categories": ["Mobile apps"],
      "gridClass": "col-span-1 row-span-1",
      "title": "Match deals",
      "description": "A feature-rich real estate mobile app for seamless property buying and selling.",
      "client": "Azim saboowala",
      "technology": "Flutter, Dart, asp.net, c#",
      "duration": "2 months",
      "projectImages": [
        "/assest/Mockups/7.jpg",
        "/assest/Mockups/24.jpg",
        "/assest/Mockups/1.jpg"
      ]
    },
    {
      "id": 2,
      "image": "/assest/Mockups/29.jpg",
      "categories": ["Mobile apps"],
      "gridClass": "col-span-1 row-span-1 ",
      "title": "Team unity",
      "description": "A versatile mobile e-commerce app for groceries and electronics.",
      "client": "Rohit shelar",
      "technology": "Flutter, Dart, asp.net, c#",
      "duration": "2 months",
      "projectImages": [
        "/assest/Mockups/21.jpg",
        "/assest/Mockups/11.jpg",
        "/assest/Mockups/29.jpg"
      ]
    },
    {
      "id": 3,
      "image": "/assest/Mockups/18.jpg",
      "categories": ["Mobile apps "],
      "gridClass": "col-span-1 row-span-1",
      "title": "Zbazaar – Shop, Earn & Smile",
      "description": "A Flutter‑based e‑commerce app with a built‑in affiliate program. Shoppers earn rewards and cashback on purchases, while affiliates can track referrals, commissions, and performance metrics through a dedicated dashboard.",
      "client": "Vikas Dubey",
      "technology": "Flutter · Firebase · Laravel · PHP · MySQL",
      "duration": "6 Months Development + Ongoing Service",
      "link": "https://play.google.com/store/apps/details?id=com.zbazaarsolutions.zbazaar&hl=en_IN",
      "projectImages": [
        "/assest/Mockups/10.jpg",
        "/assest/Mockups/13.jpg",
        "/assest/Mockups/18.jpg"
      ]
    },
    // {
    //   "id": 4,
    //   "image": "/assest/web/1.png",
    //   "categories": ["Websites", "SEO"],
    //   "gridClass": "col-span-1 row-span-1",
    //   "title": "Product Packaging Design",
    //   "description": "Premium packaging design for consumer electronics with sustainable materials.",
    //   "client": "EcoTech Gadgets",
    //   "technology": "Adobe Illustrator, Photoshop, Blender",
    //   "duration": "1 month",
    //   "projectImages": ["/assest/web/1.png"]
    // },
    {
      "id": 5,
      "image": "/assest/Mockups/19.jpg",
      "categories": ["Mobile apps"],
      "gridClass": "col-span-1 row-span-1",
      "title": "CLICKRS- LIKE · SHARE · EARN",
      "description": "A social media platform where content creators can publish posts, engage followers, and monetize their work. Features include in‑app rewards, ad revenue sharing, analytics dashboards, and decentralized storage via StorJ for media assets",
      "client": "Ashvin Maid",
      "technology": "Flutter · Firebase · Node.js · TypeScript · PostgreSQL · StorJ",
      "duration": "9 Months (Ongoing)",
      "link": "https://play.google.com/store/apps/details?id=com.clickrs.app&hl=en_IN",
      "projectImages": [
        "/assest/Mockups/26.jpg",
        "/assest/Mockups/19.jpg"
      ]
    },
    {
      "id": 6,
      "image": "/assest/Mockups/28.jpg",
      "categories": ["Mobile apps"],
      "gridClass": "col-span-1 row-span-1",
      "title": "Jeevandhara Digital – Shop, Pay",
      "description": "A comprehensive mobile app that lets users browse and purchase a wide range of electronic products, manage utility connections, and pay bills seamlessly. Features include secure in‑app payments, order tracking, and instant notifications for due dates and offers.",
      "client": "Vishwajeet Patel",
      "technology": "Flutter · Firebase · Node.js · TypeScript · PostgreSQL · Docker",
      "duration": "3 Months Development + Ongoing Service",
      "link": "https://play.google.com/store/apps/details?id=com.jeevandhara.app&hl=en_IN",
      "projectImages": [
        "/assest/Mockups/20.jpg",
        "/assest/Mockups/4.jpg",
        "/assest/Mockups/28.jpg"
      ]
    },
    // {
    //   "id": 7,
    //   "image": "/assest/Mockups/31.jpg",
    //   "categories": ["Mobile apps"],
    //   "gridClass": "col-span-1 row-span-1",
    //   "title": "School app",
    //   "description": "A comprehensive school management solution for efficient administration.",
    //   "client": "TechSummit Events",
    //   "technology": "Flutter, Dart, node , sql",
    //   "duration": "1 month",
    //   "projectImages": [
    //     "/assest/Mockups/32.jpg",
    //     "/assest/Mockups/33.jpg",
    //     "/assest/Mockups/34.jpg"
    //   ]
    // },
    {
      "id": 15,
      "image": "/assest/Mockups/SVN/SVN -1.jpg",
      "categories": ["Mobile apps","Social media Branding"],
      "gridClass": "col-span-1 row-span-1",
      "title": "SVN PAY: Easy Bill Payments",
      "description": "A feature‑rich mobile app that streamlines utility and bill payments, offering users significant cashback incentives on every transaction. Includes secure wallet integration, multiple payment gateways, real‑time transaction tracking, and reminders for upcoming due dates.",
      "client": "Sunil Kumar",
      "technology": "Flutter · Firebase · Node.js · Express.js · TypeScript · Prisma · MySQL",
      "duration": "4 Months Development + Ongoing Service",
      "link": "https://play.google.com/store/apps/details?id=com.svnapl.pay&hl=en_IN",
      "projectImages": ["/assest/Mockups/SVN/SVN - 3.jpg",
        "/assest/Mockups/SVN/SVN -2.jpg",
        "/assest/Mockups/SVN/SVN -4.jpg"
      ]
    },
    {
      "id": 8,
      "image": "/assest/web/2.png",
      "categories": ["Websites", "SEO"],
      "gridClass": "col-span-1 row-span-1",
      "title": "Prasad Surgical Hospital",
      "description": "A responsive website for Prasad Surgical Hospital, featuring doctor profiles, department overviews, and an online appointment booking system. Includes SMS/email confirmations, calendar integration, and a contact portal for patient inquiries.",
      "client": "Dr. Prem Parkash",
      "technology": "PHP · MySQL · HTML · CSS · JavaScript",
      "duration": "1 month",
      "link": "https://www.prasadsurgicalhospital.com/",
      "projectImages": [
        "/assest/Mockups/Wbsite/doc 2.png",
        "/assest/Mockups/Wbsite/doc -1.png",
        "/assest/web/2.png"]
    },
    // {
    //   "id": 9,
    //   "image": "/assest/Mockups/35.jpg",
    //   "categories": ["ERP System", "Website"],
    //   "gridClass": "col-span-1 row-span-1",
    //   "title": "Smart School Management System",
    //   "description": "An end‑to‑end ERP solution designed for schools, covering student admissions, fee collection, inquiry handling, examination scheduling and grading, attendance tracking, and parent‑teacher communications. Includes an intuitive dashboard for administrators and portals for teachers, students, and parents.",
    //   "client": "Divyaprakash Jha",
    //   "technology": "React.js · Node.js · TypeScript · PostgreSQL · Docker · Prisma",
    //   "duration": "6 Months Development + Ongoing Service",
    //   "link": "https://smart-school-frontend-khaki.vercel.app/",
    //   "projectImages": ["/assest/Mockups/35.jpg"]
    // },
    {
      "id": 10,
      "image": "/assest/Mockups/Wbsite/path 1.png",
      "categories": ["Websites","SEO"],
      "gridClass": "col-span-1 row-span-1",
      "title": "AcePathology",
      "description": "A dedicated e‑learning platform for pathologists to explore, purchase, and access specialized courses. Features include course previews, secure payment integration, progress tracking, and downloadable resources to support continuing medical education.",
      "client": "Dr. Akshay Agarwal",
      "technology": "PHP · MySQL · HTML · CSS · JavaScript",
      "duration": "1 Month",
      "link": "https://acepathology.co.in/",
      "projectImages": ["/assest/Mockups/Wbsite/path 2.png",
        "/assest/Mockups/Wbsite/patho 3.png",
        "/assest/Mockups/Wbsite/path 1.png"
      ]
    },
    // {
    //   "id": 11,
    //   "image": "/assest/Mockups/Wbsite/ 1.png",
    //   "categories": ["Website"],
    //   "gridClass": "col-span-1 row-span-1",
    //   "title": "Patholist",
    //   "description": "A community‑driven platform where pathologists can host, share, and discover live and recorded educational sessions. Includes scheduling tools, speaker profiles, and a searchable library of past meetings to foster ongoing professional collaboration.",
    //   "client": "Dr. Akshay Agarwal",
    //   "technology": "PHP · MySQL · HTML · CSS · JavaScript",
    //   "duration": "1 Month",
    //   "link": "https://patholist.com/",
    //   "projectImages": [
    //     "/assest/Mockups/Wbsit.png",
        
    //   ]
    // },

    // {
    //   "id": 13,
    //   "image": "/assest/Mockups/39.jpg",
    //   "categories": ["ERP System", "Website"],
    //   "gridClass": "col-span-1 row-span-1",
    //   "title": "Society Management System",
    //   "description": "A full‑featured society management ERP offering resident and committee portals for event planning, maintenance requests, visitor logs, payment tracking, and announcement broadcasts. Designed for ease of use with a responsive UI and customizable modules.",
    //   "client": "TechLuminix Private Limited",
    //   "technology": "Figma · Next.js · MySQL",
    //   "duration": "3 Months (Ongoing)",
    //   "link": null,
    //   "projectImages": ["/assest/Mockups/39.jpg"]
    // },
    {
      "id": 14,
      "image": "/assest/Mockups/Wbsite/Phasor.png",
      "categories": ["Websites","SEO"],
      "gridClass": "col-span-1 row-span-1",
      "title": "Phasor Academy",
      "description": "A multi‑branch educational institute’s website showcasing courses, faculty profiles, campus locations, and an online inquiry form. Built for easy content updates and integration with marketing tools for lead generation.",
      "client": "Phasor Academy",
      "technology": "PHP · MySQL · HTML · CSS · JavaScript",
      "duration": "2 Months",
      "link": "https://phasor.co.in/",
      "projectImages": ["/assest/Mockups/Wbsite/Phasor.png",
        "/assest/Mockups/Wbsite/Phasor 3.png",
        "/assest/Mockups/Wbsite/Phasor -2.png"
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
      const newFilteredItems =
        category === "All"
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
    document.body.style.overflow = "hidden"; // Prevent scrolling when dialog is open
  };

  // Close project dialog
  const closeProjectDialog = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
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
      if (e.key === "Escape") closeProjectDialog();
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, []);

  return (
    <div className="bg-black my-24 text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Section Title with fade-in animation */}
      <div
        className={`text-center mb-12 transition-all duration-700 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h3 className="text-blue-600 font-medium mb-2">Our Portfolio</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recent Work</h2>
        <p className="text-[#8E8F92] max-w-2xl mx-auto">
          Explore our diverse portfolio showcasing our expertise across various
          digital domains
        </p>
      </div>

      {/* Category Filter with enhanced transitions */}
      <div
        className={`flex flex-wrap items-center justify-center mb-8 space-x-2 md:space-x-4 transition-all duration-500 ease-out delay-100 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
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
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-opacity duration-500 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {visibleItems.map((item, index) => (
          <div
            key={item.id}
            className={`${item.gridClass} overflow-hidden rounded-lg cursor-pointer group relative transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl`}
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(40px)",
              transition: `opacity 0.5s ease, transform 0.5s ease`,
              transitionDelay: `${200 + index * 100}ms`,
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
            className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full overflow-hidden shadow-2xl transform transition-all duration-500 scale-100 opacity-100 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: "calc(100vh - 40px)", maxWidth: "1200px" }}
          >
            {/* Close button */}
            <button
              onClick={closeProjectDialog}
              className="absolute top-4 right-4 bg-black/50 hover:bg-blue-600 p-2 rounded-full transition-all duration-300 z-10 shadow-lg"
            >
              <X size={20} className="text-white" />
            </button>

            {/* Image slider - now with better proportions */}
            <div className="relative w-full md:w-1/2 h-72 sm:h-80 md:h-auto">
              <div className="absolute inset-0">
                {selectedProject.projectImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      idx === currentImageIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
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
                <ChevronLeft
                  size={24}
                  className="text-white group-hover:text-white"
                />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
              >
                <ChevronRight
                  size={24}
                  className="text-white group-hover:text-white"
                />
              </button>

              {/* Image indicator dots */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3">
                {selectedProject.projectImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`transition-all duration-300 ${
                      idx === currentImageIndex
                        ? "w-8 h-2 bg-blue-600"
                        : "w-2 h-2 bg-white/50 hover:bg-white/80"
                    } rounded-full`}
                  />
                ))}
              </div>
            </div>

            {/* Project information with improved styling */}
            <div
              className="p-6 md:p-8 pb-10 overflow-y-auto md:w-1/2"
              style={{ maxHeight: "calc(100vh - 40px)" }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {selectedProject.description}
              </p>

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

                <div>
                  <h4 className="text-blue-500 font-semibold mb-2 flex items-center">
                    <span className="w-1 h-6 bg-blue-500 mr-2 rounded-full"></span>
                    Technologies
                  </h4>
                  <p className="text-gray-300 pl-3">
                    {selectedProject.technology}
                  </p>
                </div>

                <div>
                  <h4 className="text-blue-500 font-semibold mb-2 flex items-center">
                    <span className="w-1 h-6 bg-blue-500 mr-2 rounded-full"></span>
                    Project Duration
                  </h4>
                  <p className="text-gray-300 pl-3">
                    {selectedProject.duration}
                  </p>
                </div>
              </div>

              {/* Call to action button */}
              <div className="mt-8 text-center">
                {selectedProject.link?(
                  <a href={selectedProject.link} target="_blank" >

                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105">
                    View Live Project
                  </button>
                  </a>
                ):(
                  
                  
                  <div>

                </div>
                )
              }
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioComponent;
