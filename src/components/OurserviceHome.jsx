import React from 'react';

const WhatWeDoSection = () => {
  return (
    <div className="w-full mx-auto px-4 lg:px-24    justify-self-center mt-24">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">What We Do</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Turning ideas into reality with seamless design, powerful
          development, and scalable solutions.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8 text-center ">
        {/* App Development Card */}
        <div className="bg-green-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-white rounded-lg p-4 mb-6 overflow-hidden">
            {/* Mac-like browser header */}
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
              <div className="ml-auto">
                <span className="text-xs px-2 py-1 bg-yellow-100 rounded text-gray-700">main.js</span>
              </div>
            </div>
            {/* Placeholder for code image */}
            <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded">
            <img src='assets/WhatWeDo/code.svg' alt='app-dev' className=' w-fit h-fit'/>          
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">App Development</h3>
          <p className="text-gray-600">
            Scalable, high-performance mobile solutions.
          </p>
        </div>

        {/* UX/UI Design Card */}
        <div className="bg-blue-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-white rounded-lg p-4 mb-6 overflow-hidden">
            {/* Mac-like browser header */}
            <div className="flex items-center mb-4 relative">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
              <div className="ml-auto">
                <span className="text-xs  relative px-2 py-1 bg-blue-100 rounded text-gray-700">Figma</span>
              </div>
            </div>
            {/* Placeholder for Figma UI image */}
            <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded">
              <img src='assets/WhatWeDo/figma.svg' alt='figma' className=' w-fit h-fit mt-6'/>          
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">UX/UI Design</h3>
          <p className="text-gray-600">
            Intuitive, user-centered digital experiences.
          </p>
        </div>

        {/* Web Development Card */}
        <div className="bg-orange-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-white rounded-lg p-4 mb-6 overflow-hidden">
            {/* Mac-like browser header */}
            <div className="flex   relative items-center mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
              <div className="ml-auto">
                <span className="text-xs px-2 py-1 relative bg-red-100 rounded text-gray-700">main.html</span>
              </div>
            </div>
            {/* Placeholder for website image */}
            <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded">
            <img src='assets/WhatWeDo/web.svg' alt='web-dev' className=' w-fit h-fit'/>          
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p className="text-gray-600">
            Fast, responsive, and dynamic websites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection; 