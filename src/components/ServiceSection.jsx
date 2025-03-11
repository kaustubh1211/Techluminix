// ServicesSection.jsx
import React from 'react';
import Image from 'next/image';

const ServicesSection = () => {
  // Dynamic services data
  const services = [
    {
      id: 1,
      title: 'Video Editing',
      description: 'Create videos with flawless precision and captivating visuals.',
      image: '/assest/Service/video.png',
      bgColor: 'bg-[#FFE9CF]',
    },
    {
      id: 2,
      title: 'UX/UI Design',
      description: 'Craft intuitive experiences with sleek design and flawless performance.',
      image: '/assest/Service/design.png',
      bgColor: 'bg-green-50',
    },
    {
      id: 3,
      title: 'Web Development',
      description: 'Build your Website with seamless performance and stunning design.',
      image: '/assest/Service/vr.png',
      bgColor: 'bg-[#D8EDFF]',
    },
    {
      id: 4,
      title: 'Social Media',
      description: 'Build your brand online with organic content.',
      image: '/assest/Service/post.png',
      bgColor: 'bg-[#FFE7FD]',
    },
    {
      id: 5,
      title: 'App Development',
      description: 'Build your app with seamless performance and stunning design.',
      image: '/assest/Service/appdev.png',
      bgColor: 'bg-[#F7EFFF]',
    },
    {
      id: 6,
      title: 'AR/VR Development',
      description: 'Create immersive AR/VR experiences with seamless performance and breathtaking design.',
      image: '/assest/Service/webdev.png',
      bgColor: 'bg-[#FFD2BF]',
      highlight: true,
    },
  ];

  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-12 text-white">
          <div className="text-blue-600 font-medium mb-2">Our Service</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Different services for different needs</h2>
          <p className="text-[#8E8F92] max-w-xl mx-auto">
            We have the most talented professionals at your disposal
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`rounded-lg p-6 flex flex-col  `}
            >
              <div className={` flex justify-center ${service.bgColor}`}>
                <div className="relative w-full h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className='bg-[#131316] p-2'>

              <h3 className="text-xl font-semibold text-center mb-2  text-white text-[600]">{service.title}</h3>
              <p className="text-[#8E8F92] text-center text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;