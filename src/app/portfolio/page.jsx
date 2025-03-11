import ContactHero from "@/components/Contact-hero";
import DarkNavbar from "@/components/DarkNavbar";
import DarkContactHero from "@/components/DarkTheem/DarkContactHero";
import DarkFooter from "@/components/DarkTheem/DarkFooter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PortfolioMain from "@/components/PortfolioMain";
import StatsSection from "@/components/StatsSection";
import React from "react";

export default function page() {
  return (
    <div className=" bg-black absolute   w-full">
      <DarkNavbar />
      <PortfolioMain />
      <DarkContactHero />

      <DarkFooter />
    </div>
  );
}
