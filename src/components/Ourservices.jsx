import React from "react";

const OurServicesSection = () => {
  return (
    <section className="bg-black py-16 px-4  z-40 relative ">
      <div className="max-w-6xl mx-auto ">
        {/* Heading */}
        <div className="text-center mb-12  ">
          <h2 className="text-white text-4xl font-bold mb-2">
            We're the most cherished and <br /> trusted company.
          </h2>
        </div>

        {/* Stats Card with Gradient */}

        <div
          className="relative bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg p-8 mb-12 flex flex-col items-center justify-center"
          style={{
            backgroundImage:
              "linear-gradient(to bottom,  #A7C3FF 10%, #3770ED 60%  )",
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 1.4px 1.4px,  white 1.4px, transparent 1px)`,
              backgroundSize: "10px 10px",
            }}
          />
          <h3 className="text-white text-7xl font-bold mb-1">100%</h3>
          <p className="text-white text-xl">Satisfied clients</p>
          <div />
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Designer Card */}
          <div className="bg-[#131316]  rounded-lg overflow-hidden ">
            <div className="h-32 bg-black relative m-2 flex items-center justify-center group">
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="text-gray-400 relative z-10">
                <img
                  src="/assest/Hover/Figma.png"
                  className="w-auto h-20 saturate-[5%] group-hover:saturate-100 transition-all duration-300"

                />
              </div>
            </div>

            <div className="p-2  text-center">
              <h3 className="text-white text-xl font-semibold mb-2">
                Best Designer
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Crafting visually stunning and user-friendly designs that
                elevate experiences.
              </p>
            </div>
          </div>

          {/* Developer Card */}
          <div className="bg-[#131316]  rounded-lg overflow-hidden">
            <div className=" relative h-32 bg-black m-2 flex items-center justify-center group">
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="text-gray-400 relative z-10 text-xs font-mono">
              
                <img
                  src="/assest/Hover/Function.png"
                  className=" w-auto max-h-24 saturate-[5%] group-hover:saturate-100 transition-all duration-300"
                />
              
              </div>
            </div>
            <div className="p-2 text-center">
              <h3 className="text-white text-xl font-semibold mb-2">
                Best Developer
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Crafting seamless and innovative digital experiences with
                precision and expertise.
              </p>
            </div>
          </div>

          {/* 3rd card          */}
          <div className="bg-[#131316] rounded-lg overflow-hidden">
            <div className="relative h-32 m-2 bg-black flex items-center justify-center group">
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Content on top of the pattern */}
              <div className="relative z-10 text-gray-400 flex flex-col items-center">
           

                {/* Image with saturation effect */}
                <div className="mt-4">
                  <img
                    src="/assest/Hover/BooKAll.png"
                    className="w-auto h-28 saturate-0 group-hover:saturate-100 transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 text-center">
              <h3 className="text-white text-xl font-semibold mb-2">
                Best Social Media Manager
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Helping you grow, engage, and thrive with expert social media
                strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
