import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-white text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-10 mb-12">
          {/* Left Column - Company Info */}
          <div className="w-full lg:w-1/4">
            <div className="flex items-center justify-center lg:justify-start mb-4 space-x-2">
              <img
                src="/assets/Logo/logo.svg"
                alt="TechLuminix Logo"
                loading="lazy"
                className="h-10 w-8"
              />
              <h3 className="font-semibold text-lg">TECHLUMINIX</h3>
            </div>
            <p className="text-gray-600 text-center lg:text-left mb-6">
              At TechLuminix, we are the architects of your digital dreams. With a passion for innovation and a commitment to excellence, we bring a blend of creativity and technical expertise to the forefront.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              {[
                { href: "https://x.com/TechLuminix", src: "/assets/Social/Vector.png" },
                { href: "https://www.instagram.com/techluminix/", src: "/assets/Social/instagram.png" },
                { href: "https://www.whatsapp.com/channel/0029VaNYEtR6rsQm1MrFEV23", src: "/assets/Social/whatsapp.png" },
                { href: "https://www.facebook.com/people/TechLuminix/61562395532365/", src: "/assets/Social/facebook.png" },
                { href: "https://www.linkedin.com/company/techluminix-pvt-ltd/posts/?feedView=all", src: "/assets/Social/linkdin.png" },
                { href: "https://www.youtube.com/@TechLuminix", src: "/assets/Social/youtube.png" },
              ].map(({ href, src }, i) => (
                <Link key={i} href={href} target="_blank">
                  <img
                    src={src}
                    className="w-5 h-5 hover:scale-110 transition-transform duration-200"
                    alt=""
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Columns - Links */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {/* Products Column */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Our Products</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://luminpay.in/" target="_blank" className="hover:text-blue-500">
                    Luminpay
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Society Management
                  </a>
                </li>
                <li>
                  <a href="https://ad-vik.com/" target="_blank" className="hover:text-blue-500">
                    Ad-Vik
                  </a>
                </li>
              </ul>
            </div>

            {/* Menu Column */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Menu</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-500">About</Link></li>
                <li><Link href="/portfolio" className="hover:text-blue-500">Portfolio</Link></li>
                <li><Link href="/services" className="hover:text-blue-500">Service</Link></li>
                <li><Link href="/contact" className="hover:text-blue-500">Contact</Link></li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="tel:9226057563" className="hover:text-blue-500">Contact</a></li>
                <li><a href="mailto:info@techluminix.com" className="hover:text-blue-500">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-gray-200 bg-[#F7F7F7] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p className="text-center">© 2025 TechLuminix. All Rights Reserved</p>
          <div className="flex gap-4">
            <Link href="/term-conditions" className="hover:text-blue-500">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="hover:text-blue-500">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
