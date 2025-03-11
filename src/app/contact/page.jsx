import ContactHero from "@/components/Contact-hero";
import ContactForm from "@/components/ContactForm";
import DarkNavbar from "@/components/DarkNavbar";
import DarkContactHero from "@/components/DarkTheem/DarkContactHero";
import DarkFooter from "@/components/DarkTheem/DarkFooter";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Contact2Icon } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="bg-black absolute w-full">
      <DarkNavbar />
      <ContactForm />
      <DarkContactHero />
      <DarkFooter />
    </div>
  );
}
