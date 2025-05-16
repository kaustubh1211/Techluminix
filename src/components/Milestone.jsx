'use client'
import { useState } from 'react';

const Milestone = ({ title, subtitle, description, stats, imageSrc }) => {
  return (
    <div className="w-full py-20 md:px-24 mx-3   ">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">Milestones That Define Us</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          From big wins to breakthrough moments, here's how we've made an impact—one success at a time.
        </p>
      </div>
      
      {/* Card Section */}
      <div className=" rounded-lg   mx-3  overflow-hidden flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/3 bg-gray-50 p-20 flex items-center justify-center">
          <div className="w-full max-w-xs h-72 relative">
            <img 
              src="/assets/Brands/z-pay.svg" 
              alt={`${title} mobile app mockup`}
              className="object-contain h-full w-full"
            />
          </div>
        </div>
        
        {/* Content Section */}
        <div className="w-full md:w-3/5 p-8">
          <h3 className="text-3xl font-sans font-bold text-gray-900">{title}</h3>
          <p className="text-gray-500 mb-4">{subtitle}</p>
          
          <p className="text-gray-800 mb-8">{description}</p>
          
          {/* Stats Grid */}
          <div className="flex flex-wrap -mx-2">
            {stats.map((stat, index) => (
              <div key={index} className="w-1/3 px-2">
                <div className="bg-blue-100 rounded-lg p-4 text-center">
                  <p className="text-blue-500 font-bold text-3xl">{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MilestonesComponent = () => {
  const milestones = [
    {
      title: "Zedpay",
      subtitle: "Fintech Revolution",
      description: "Redefining mobile payments with an intuitive platform that's become essential in daily financial transactions.",
      imageSrc: "/assets/Brands/z-pay.svg",
      stats: [
        { value: "1M+", label: "Downloads" },
        { value: "95%", label: "Satisfaction" },
        { value: "2X", label: "ROI" }
      ]
    }
  ];

  return (
    <div className="py-16 px-4 bg-gray-100">
      <Milestone {...milestones[0]} />
    </div>
  );
};

export default MilestonesComponent;