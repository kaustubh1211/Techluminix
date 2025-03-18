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
