import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" pt-12 pb-8 relative   ">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:text-left text-center gap-8 mb-12">
          {/* Left Column - Company Info */}
          <div className="lg:w-1/3">
            <div className="flex space-x-2 lg:justify-start  text-center justify-center items-center">
              <img
                src="/assest/Logo/logo.svg"
                alt="TechLuminix Logo"
                className="h-10 w-8"
              />

              <h3 className="font-semibold text-lg ">TECHLUMINIX</h3>
            </div>
            <p className="text-gray-600 mb-4">
              At TechLuminix, we craft digital experiences that turn your vision
              into reality.
            </p>
            <div className="flex gap-4 justify-center items-center lg:justify-start lg:items-start">
              <Link href="https://x.com/TechLuminix">
                <img
                  src="/assest/Social/Vector.png"
                  className="w-5 h-5 text-gray-600 hover:text-blue-500 cursor-pointer"
                />
              </Link>

              <Link href="https://www.instagram.com/techluminix/">
                <img
                  src="/assest/Social/instagram.png"
                  className="w-5 h-5 text-gray-600 hover:text-blue-500 cursor-pointer"
                />
              </Link>

              <Link href="https://www.whatsapp.com/channel/0029VaNYEtR6rsQm1MrFEV23">
                <img
                  src="/assest/Social/whatsapp.png"
                  className="w-5 h-5 text-gray-600 hover:text-blue-500 cursor-pointer"
                />
              </Link>
              <Link href="https://www.facebook.com/people/TechLuminix/61562395532365/">
                <img
                  src="/assest/Social/facebook.png"
                  className="w-5 h-5 text-gray-600 hover:text-blue-500 cursor-pointer"
                />
              </Link>

              <Link href="https://www.linkedin.com/company/techluminix-pvt-ltd/posts/?feedView=all">
                <img
                  src="/assest/Social/linkdin.png"
                  className="w-5 h-5 text-gray-600 hover:text-blue-500 cursor-pointer"
                />
              </Link>

              <Link href="https://www.youtube.com/@TechLuminix">
                <img
                  src="/assest/Social/youtube.png"
                  className="w-5 h-5 text-gray-600 hover:text-blue-500 cursor-pointer"
                />
              </Link>
            </div>
          </div>

          {/* Right Section - Navigation Columns */}
          <div className="lg:w-2/3 grid grid-cols-3  lg:grid-cols-3 gap-8  lg:ml-72">
            {/* Products Column */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Our Products</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Luminpay
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Society Management
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Ad-Vik
                  </a>
                </li>
              </ul>
            </div>

            {/* Menu Column */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Menu</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="contact"
                    className="text-gray-600 hover:text-blue-500"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
      </div>
      <div className="pt-8 border-t border-gray-200 bg-[#F7F7F7]    ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm lg:ml-10">
            Copyright © 2025 Techluminix. All Rights Reserved
          </p>
          <div className="flex gap-6 lg:mr-10">
            <Link
              href="term-conditions"
              className="text-gray-600 hover:text-blue-500 text-sm"
            >
              Terms & Conditions
            </Link>
            <Link
              href="privacy-policy"
              className="text-gray-600 hover:text-blue-500 text-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
