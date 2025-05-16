import WhyChooseUs from "@/components/about/WhyChoosUs";
import AboutHead from "@/components/AboutHead";
// import ContactHero from "@/components/Contact-hero";
import DarkContactHero from "@/components/DarkTheem/DarkContactHero";
import DarkFooter from "@/components/DarkTheem/DarkFooter";
import DarkNavbar from "@/components/DarkTheem/DarkNavbar";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import TeamSection from "@/components/TeamSection";
// import Head from "next/head";
import React from "react";

export const metadata = {
  "title": "About TechLuminix | Your Digital Innovation Partner",
  "description": "Learn about TechLuminix's mission to empower businesses through innovative technology solutions and exceptional service.",
  "keywords": ["About TechLuminix", "TechLuminix Team", "Digital Innovation", "IT Company Maharashtra"],
  "openGraph": {
    "title": "About TechLuminix | Your Digital Innovation Partner",
    "description": "Discover TechLuminix's commitment to delivering top-notch software, web, and marketing solutions.",
    "url": "https://techluminix.com/about",
    "siteName": "TechLuminix",
    "images": [
      {
        "url": "https://techluminix.com/assets/logo.png",
        "width": 1200,
        "height": 630,
        "alt": "About TechLuminix"
      }
    ],
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "About TechLuminix | Your Digital Innovation Partner",
    "description": "Meet the team behind TechLuminix and explore our journey in delivering innovative tech solutions.",
    "images": ["https://techluminix.com/assets/logo.png"]
  }
};

export default function page() {
  return (
    <div className=" absolute  w-full bg-black">
      <DarkNavbar />
      <AboutHead />
      {/* <TeamSection/> */}
      <WhyChooseUs/>
      <DarkContactHero/>
      <DarkFooter/>
    </div>
  );
}
