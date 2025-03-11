import React from "react";

const TeamSection = ({ teamMembers }) => {
  // Default team data if none is provided
  const defaultTeamMembers = [
    {
      id: 1,
      name: "Vikram Pandit",
      role: "Founder/Full Stack Developer",
      image: "/api/placeholder/400/300",
      description:
        "Builds seamless digital experiences from front to back faster than you can say 'full-stack'. Vikram turns complex code into smooth, high-performing products and makes innovation look effortless.",
    },
    {
      id: 2,
      name: "Adarsh Yadav",
      role: "CTO/Principal Developer",
      image: "/api/placeholder/400/300",
      description:
        "Crafts sleek, high-performing interfaces with precision. Turns code into captivating user experiences with a keen eye for detail.",
    },
    {
      id: 3,
      name: "Sunny Kharwar",
      role: "Product/Motion Designer",
      image: "/api/placeholder/400/300",
      description:
        "Crafts seamless user experiences that turn visitors into loyal customers before you can say design magic. Masters the art of intuitive interfaces, blending creativity with strategy to make every pixel count.",
    },
    {
      id: 4,
      name: "Nikhil Singh",
      role: "Marketing/Content Manager",
      image: "/api/placeholder/400/300",
      description:
        "Turns raw footage into scroll-stopping content faster than you can say 'engagement'. Masters storytelling through edits and knows exactly what keeps audiences hooked.",
    },
    {
      id: 5,
      name: "Bharat Bhandari",
      role: "Backend Developer/Manager",
      image: "/api/placeholder/400/300",
      description:
        "Masters backend magic, turning complex logic into seamless performance. Bharat optimizes databases, APIs, and servers like a pro, making every request lightning-fast.",
    },
    {
      id: 6,
      name: "Raj Mandal",
      role: "Frontend Developer",
      image: "/api/placeholder/400/300",
      description:
        "Turns lines of code into seamless experiences faster than you can say 'responsive'. Masters UI like an artist and crafts interfaces that captivate at first click.",
    },
  ];

  // Use provided team members or default ones
  const members = teamMembers || defaultTeamMembers;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-medium mb-2">Our Team</p>
          <h2 className="text-3xl font-bold max-w-2xl mx-auto">
            A team of Marketers, designers, developers, creatives working hard
            behind the scenes.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-tr-lg rounded-bl-lg"></div>
                  <div className="w-10 h-10 bg-blue-500 rounded-tr-lg rounded-bl-lg ml-2"></div>
                </div>
                <p className="text-gray-700 mb-4">{member.description}</p>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex space-x-2">
                  <a
                    href={member.linkedin || "#"}
                    aria-label={`LinkedIn profile of ${member.name}`}
                    className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded hover:bg-blue-700 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href={member.twitter || "#"}
                    aria-label={`Twitter profile of ${member.name}`}
                    className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded hover:bg-blue-500 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-twitter-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TeamSection;
