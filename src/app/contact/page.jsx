
import ContactComponent from "@/components/contactComponent";
import ContactForm from "@/components/ContactForm";
import DarkNavbar from "@/components/DarkNavbar";
import DarkContactHero from "@/components/DarkTheem/DarkContactHero";
import DarkFooter from "@/components/DarkTheem/DarkFooter";

import React from "react";

export const metadata = {
  "title": "Contact TechLuminix | Let's Build Something Great Together",
  "description": "Reach out to TechLuminix for custom software development, web design, and digital marketing services tailored to your business.",
  "keywords": ["Contact TechLuminix", "Get in Touch", "Software Development Inquiry", "Web Design Services"],
  "openGraph": {
    "title": "Contact TechLuminix | Let's Build Something Great Together",
    "description": "Have a project in mind? Contact TechLuminix to collaborate on innovative tech solutions.",
    "url": "https://techluminix.com/contact",
    "siteName": "TechLuminix",
    "images": [
      {
        "url": "https://techluminix.com/assets/logo.png",
        "width": 1200,
        "height": 630,
        "alt": "Contact TechLuminix"
      }
    ],
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Contact TechLuminix | Let's Build Something Great Together",
    "description": "Get in touch with TechLuminix to start your journey towards digital excellence.",
    "images": ["https://techluminix.com/assets/logo.png"]
  }
};

export default function page() {
  return (
    <div className="bg-black absolute w-full">
      <DarkNavbar />
      <ContactComponent/>
      <ContactForm />
      {/* <DarkContactHero /> */}
      <DarkFooter />
    </div>
  );
}
