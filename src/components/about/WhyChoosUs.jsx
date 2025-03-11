import React from "react";
const WhyChooseUs = () => {
  const features = [
    {
      icon: "assest/About-us/WhyChoos/reputation.svg",
      title: "Expertise",
      description:
        "A team of seasoned experts, turning innovation into excellence.",
    },
    {
      icon: "assest/About-us/WhyChoos/Bulb.svg",
      title: "Innovation",
      description:
        "Leading the way with cutting-edge technology and forward-thinking solutions.",
    },
    {
      icon: "assest/About-us/WhyChoos/collaboration.svg",
      title: "Collaboration",
      description: "We partner with you to turn vision into reality.",
    },
    {
      icon: "assest/About-us/WhyChoos/Star.svg",
      title: "Expertise",
      description:
        "We deliver excellence with every project, ensuring top-tier results.",
    },
  ];

  return (
    <section className="bg-black py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Why choose us?</h2>
          <p className="text-[#8E8F92] mt-4">
            Innovative solutions, seamless designs, and technology that drives
            success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col   bg-[#131316] p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className=" bg-gradient-to-b from-[#3770ED] to-[#1F4087] text-white  w-20 p-4   rounded-lg mb-6">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-[#8E8F92]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
