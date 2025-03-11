
import Image from "next/image";
export default function TechStack() {
    const backendTools = [
      { name: 'Node.js', icon: '/icons/nodejs.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'Go', icon: '/icons/go.svg' },
      { name: 'MongoDB', icon: '/icons/mongodb.svg' },
    ];
  
    const frontendTools = [
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'Flutter', icon: '/icons/flutter.svg' },
      { name: 'Next.js', icon: '/icons/nextjs.svg' },
      { name: 'Swift', icon: '/icons/swift.svg' },
    ];
  
    return (
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-8">Backend Tools</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {backendTools.map((tool) => (
                  <div key={tool.name} className="flex items-center justify-center">
                    {/* <Image src={tool.icon} alt={tool.name} width={48} height={48} /> */}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-8">Frontend Tools</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {frontendTools.map((tool) => (
                  <div key={tool.name} className="flex items-center justify-center">
                    {/* <Image src={tool.icon} alt={tool.name} width={48} height={48} /> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }