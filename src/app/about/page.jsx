import WhyChooseUs from "@/components/about/WhyChoosUs";
import AboutHead from "@/components/AboutHead";
import ContactHero from "@/components/Contact-hero";
import DarkContactHero from "@/components/DarkTheem/DarkContactHero";
import DarkFooter from "@/components/DarkTheem/DarkFooter";
import DarkNavbar from "@/components/DarkTheem/DarkNavbar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import Head from "next/head";
import React from "react";

export default function page() {
  return (
    <>
    <Head>
      <title>
        TechLuminix-about
      </title>
    </Head>
    <div className=" absolute  w-full bg-black">
      
      <DarkNavbar />
      <AboutHead />
      {/* <TeamSection/> */}
      <WhyChooseUs/>
      <DarkContactHero/>
     <DarkFooter/>
    </div>
    </>
  );
}
