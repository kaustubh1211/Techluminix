'use client'
import { motion} from "framer-motion";


function ParallaxBrands() {
    const brands = [
        "/assest/Brands/brand1.png",
        "/assest/Brands/brand3.png",
        "/assest/Brands/logo-4.png",
        "/assest/Brands/brand4.png",
        "/assest/Brands/brand2.png",
        "/assest/Brands/logo-6.png",
      ];
    
      // Create three copies to ensure smooth transition
      const repeatedBrands = [...brands, ...brands, ...brands];
      
      // Calculate the width of a single brand item (including margin)
      const itemWidth = 168; // 32px (w-32) + 40px (mx-5 * 2) = 168px
      const totalWidth = brands.length * itemWidth;
    
      return (
        <div className="relative overflow-hidden flex w-full h-20 bg top-10">
          {/* Left Fade Effect */}
          <div className="absolute left-0 top-0 w-32 sm:w-48 md:w-[32rem] h-full bg-gradient-to-r from-black via-black to-transparent z-10" />
          
          {/* Infinite Scrolling Animation */}
          <motion.div 
            className="flex whitespace-nowrap"
            animate={{
              x: [-totalWidth, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {repeatedBrands.map((brand, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center w-32 h-20 mx-5"
              >
                <img 
                  src={brand} 
                  alt={`Brand ${index}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </motion.div>
    
          {/* Right Fade Effect */}
          <div className="absolute right-0 top-0 w-32 sm:w-48 md:w-[32rem] h-full bg-gradient-to-l from-black via-black to-transparent " />        </div>
  );
}

const Brands = () => {
  return (
    <section className="py-32 text-center top-20 bg-black">
        <h1 className="  font-sans  font-semibold text-[#6B6B6B]  text-lg">Trusted by 100% businesses for innovative design and development. </h1>
      <ParallaxBrands  />
      
    </section>
  );
};

export default Brands;