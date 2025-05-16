import Brands from "@/components/Brands";
import ContactHero from "@/components/Contact-hero";
import DarkNavbar from "@/components/DarkNavbar";
import DarkContactHero from "@/components/DarkTheem/DarkContactHero";
import DarkFooter from "@/components/DarkTheem/DarkFooter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServiceMain from "@/components/ServiceMain";
import ServicesSection from "@/components/ServiceSection";
import React from "react";

export const metadata = {
  "title": "Our Services | Comprehensive Digital Solutions by TechLuminix",
  "description": "TechLuminix offers a wide array of services including software development, web design, UI/UX design, digital marketing, and more to drive your business forward.",
  "keywords": ["TechLuminix Services", "Software Development", "Web Design", "UI/UX Design", "Digital Marketing", "AR/VR Training"],
  "openGraph": {
    "title": "Our Services | Comprehensive Digital Solutions by TechLuminix",
    "description": "Explore the full range of services provided by TechLuminix to meet your digital transformation needs.",
    "url": "https://techluminix.com/services",
    "siteName": "TechLuminix",
    "images": [
      {
        "url": "https://techluminix.com/assets/logo.png",
        "width": 1200,
        "height": 630,
        "alt": "TechLuminix Services"
      }
    ],
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Our Services | Comprehensive Digital Solutions by TechLuminix",
    "description": "Discover how TechLuminix's services can help your business thrive in the digital landscape.",
    "images": ["https://techluminix.com/assets/logo.png"]
  }
};

export default function page() {
  return (
    <div className=" absolute bg-black w-full">
      <DarkNavbar />
      <ServiceMain />
      <ServicesSection />
      <Brands/>
     <DarkContactHero/>
     <DarkFooter/>
    </div>
  );
}
