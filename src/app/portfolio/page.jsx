import ContactHero from "@/components/Contact-hero";
import DarkNavbar from "@/components/DarkNavbar";
import DarkContactHero from "@/components/DarkTheem/DarkContactHero";
import DarkFooter from "@/components/DarkTheem/DarkFooter";

import PortfolioMain from "@/components/PortfolioMain";

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
