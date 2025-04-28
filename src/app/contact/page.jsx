
import ContactComponent from "@/components/contactComponent";
import ContactForm from "@/components/ContactForm";
import DarkNavbar from "@/components/DarkNavbar";
import DarkContactHero from "@/components/DarkTheem/DarkContactHero";
import DarkFooter from "@/components/DarkTheem/DarkFooter";

import React from "react";

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
