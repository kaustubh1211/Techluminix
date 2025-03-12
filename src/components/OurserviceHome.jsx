import React from 'react'

export default function OurserviceHome() {
  return (
    <section className=" px-16   w-full  justify-self-center">
    <div className="container  mx-auto px-4">
    
      {/* Header Section */}
      <div className="text-center mb-16 max-w-3xl mx-auto  mt-40">
        <h1 className="text-4xl font-bold mb-4">What We Do</h1>
        <p className="text-gray-400 text-lg">
          Turning ideas into reality with seamless design, powerful <br />
          development, and scalable solutions.
        </p>
      </div>
      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative ">
        {/* Designer Card */}
        <div className="bg-[#F7F7F7]  rounded-lg overflow-hidden ">
          <div className="h-40 bg-[#EFEFEF] relative m-2 flex items-center justify-center group">
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, black 2px, transparent 0)`,
                backgroundSize: "13px 13px",
              }}
            />
            <div className="  text-black  relative z-10">
              <img
                src="/assest/Statesection/Function2.png"
                className="w-auto h-28   transition-all duration-300"
              />
            </div>
          </div>

          <div className="p-2  text-center">
            <h3 className="text-black text-xl font-semibold mb-2">
              App Development
            </h3>
            <p className="text-[#8E8F92] text-sm leading-relaxed">
              Scalable, high-performance mobile solutions.
            </p>
          </div>
        </div>

        {/* Developer Card */}
        <div className="bg-[#F7F7F7]  rounded-lg overflow-hidden">
          <div className=" relative h-40 bg-[#EFEFEF]  m-2 flex items-center justify-center group">
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, black 2px, transparent 0)`,
                backgroundSize: "13px 13px",
              }}
            />
            <div className="text-gray-400 relative mt-4 z-10 text-xs font-mono">
              <img
                src="/assest/Statesection/design.png"
                className=" w-auto max-h-36   transition-all duration-300"
              />
            </div>
          </div>
          <div className="p-2 text-center">
            <h3 className="text-black text-xl font-semibold mb-2">
              UX/UI Design
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Intuitive, user-centered digital experiences.
            </p>
          </div>
        </div>

        {/* 3rd card          */}
        <div className="bg-[#F7F7F7] rounded-lg overflow-hidden">
          <div className="relative h-40 m-2 bg-[#EFEFEF] flex items-center justify-center group">
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, black 2px, transparent 0)`,
                backgroundSize: "13px 13px",
              }}
            />

            {/* Content on top of the pattern */}
            <div className="relative z-10 text-gray-400 flex flex-col items-center">
              {/* Image with saturation effect */}
              <div className="mt-4">
                <img
                  src="/assest/Statesection/dev.png"
                  className="w-auto h-36  transition-all duration-300"
                />
              </div>
            </div>
          </div>

          <div className="p-2 text-center">
            <h3 className="text-black text-xl font-semibold mb-2">
              Web Development{" "}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
            Fast, responsive, and dynamic websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
