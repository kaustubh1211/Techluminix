import React from "react";
import Link from "next/link";
import Image from "next/image";

const PortfolioShowcase = () => {
  // Portfolio project data
  const projects = [
    {
      id: 1,
      name: "Zbazaar - Shop, Earn & Smile",
      image: "/assets/portfolio/zbazar.svg",
      description: "Scalable, high-performance mobile solutions.",
    },
    {
      id: 2,
      name: "Zed Pay: Recharge, Bill Payment",
      image: "/assets/portfolio/zpay.svg",
      description: "Scalable, high-performance mobile solutions.",
    },
    {
      id: 3,
      name: "CLICKRS LIKE - SHARE - EARN",
      image: "/assets/portfolio/Clicker.svg",
      description: "Scalable, high-performance mobile solutions.",
    },
  ];

  return (
    <div className=" py-20 md:px-24 mx-3     ">
      <div className=" container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">
            Our Work, Your Vision
            <br />
            Brought to Life
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Innovative solutions crafted with precision, creativity, and
            performance in mind.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#F7F7F7] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className=" p-2">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover rounded"
                  width={800}
                  height={800}
                /> 
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-500 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 flex justify-center">
          <Link href="/portfolio">
            <button className="group bg-[#3770ED] text-white font-medium py-3 px-8 rounded-full flex items-center justify-center gap-2 hover:gap-3 transition-all duration-300 transform hover:scale-105">
              <span>View more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-0 w-0 group-hover:h-5 group-hover:w-5 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioShowcase;
