import ContactHero from "@/components/Contact-hero";
import DarkNavbar from "@/components/DarkNavbar";
import DarkContactHero from "@/components/DarkTheem/DarkContactHero";
import DarkFooter from "@/components/DarkTheem/DarkFooter";

import PortfolioMain from "@/components/PortfolioMain";

import React from "react";

export const metadata = {
  "title": "TechLuminix Portfolio | Showcasing Our Digital Creations",
  "description": "Explore TechLuminix's diverse portfolio featuring innovative software applications, responsive websites, and effective digital marketing campaigns.",
  "keywords": ["TechLuminix Portfolio", "Software Projects", "Web Development Showcase", "Digital Marketing Case Studies"],
  "openGraph": {
    "title": "TechLuminix Portfolio | Showcasing Our Digital Creations",
    "description": "Take a look at the successful projects delivered by TechLuminix across various industries.",
    "url": "https://techluminix.com/portfolio",
    "siteName": "TechLuminix",
    "images": [
      {
        "url": "https://techluminix.com/assets/logo.png",
        "width": 1200,
        "height": 630,
        "alt": "TechLuminix Portfolio"
      }
    ],
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "TechLuminix Portfolio | Showcasing Our Digital Creations",
    "description": "Discover the range of projects TechLuminix has successfully executed for clients worldwide.",
    "images": ["https://techluminix.com/assets/logo.png"]
  }
};

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
