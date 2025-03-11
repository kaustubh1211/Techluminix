import React from "react";
import Image from "next/image";

const ServiceMain = () => {
  return (
    <section className="py-16 md:py-24    bg-black overflow-hidden  mt-36">
      <div className="container mx-auto px-20">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left content */}
          <div className="  md:w-1/2 mb-10 md:mb-0 pr-0 text-white ">
            <h3 className="text-blue-600 font-medium mb-4">Work with us</h3>

            <h1 className="text-2xl md:text-4xl font-sans font-semibold text-[600]  mb-6">
              Your goals are closer than you realize—take the next step today.
            </h1>

            <p className="text-[#8E8F92] mb-8">
              Techluminx is your all-in-one partner: your ideas, our solutions.
              Let's build your dream empire!
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition duration-300">
              Contact us
            </button>
          </div>

          {/* Right content - image */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative">
              <Image
                src="/assest/Service/head.svg"
                alt="App interface mockup"
                className="w-full  h-auto "
                width={804}
                height={700}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMain;
