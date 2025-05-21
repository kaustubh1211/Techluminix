"use client";
import React from "react";
import Code from "./UI/Code";
import { motion } from "framer-motion";
import { CheckCircle, User } from "lucide-react";

import SvgAnimation1 from "@/components/UI/SvgAnimation1";
import SvgAnimation2 from "./UI/SvgAnimation2";
const DevelopmentShowcase = () => {
  const skills = [
    "Requirement gathering",
    "Wireframing",
    "UX/UI Design",
    "Prototype",
  ];
  const qaSteps = ["Internal testing", "Beta testing", "Load testing"];

  const deploymentSteps = [
    {
      text: "Final Release Preparation - Optimizing for peak performance.",
      id: 1,
    },
    {
      text: "Seamless Deployment - Bringing your vision to life.",
      id: 2,
    },
    {
      text: "Go Live with Confidence - Delivering a smooth, impact-driven launch.",
      id: 3,
    },
  ];

  return (
    <div className="bg-black relative z-40">
      <div className=" bg-black text-white p-8 relative z-40 mt-10">
        {/* Header Section */}

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Seamless End-to-End Development,
            <br />
            Engineered for Excellence.
          </h1>
          <p className="text-gray-400 text-lg">
            From concept to launch, we craft solutions that perform flawlessly—
            <br />
            efficient, scalable, and built for success.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto px-4 py-8">
          {/* Code Card */}
          <div className="bg-[#303030] border bg-gradient-to-r from-[#303030] to-[#0A0A0B] border-gray-800 rounded-lg p-4 md:p-6 shadow-xl w-full md:w-2/3">
            <div className="overflow-x-auto">
              <Code />
            </div>
          </div>

          {/* Profile Card */}
          <div className="mt-4 md:mt-0   relative w-full max-w-md md:absolute md:right-0 md:top-20 md:transform md:translate-x-8 ">
            <div className="bg-black border border-gray-800 rounded-lg p-4 md:p-6 w-full md:w-96 shadow-lg">
              {/* Header Section */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span role="img" aria-label="profile" className="text-xl">
                    🤖
                  </span>
                </div>
                <div>
                  <h2 className="text-white font-medium">Designer </h2>
                </div>
              </div>

              {/* Role Section */}
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-1">Role</p>
                <div className="bg-gray-900 border border-gray-800 rounded p-2">
                  <p className="text-orange-400">Product Designer</p>
                </div>
              </div>

              {/* Skills Section */}
              <div className="space-y-3">
                <p className="text-gray-400 text-sm">Here's what I do:</p>
                <div className="space-y-2">
                  {[
                    "Requirement gathering",
                    "Wireframing",
                    "UX/UI Design",
                    "Prototype",
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="relative flex items-center justify-center">
                        {/* Base dot */}
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 z-10"></div>

                        {/* Pulsing glow effect */}
                        <div className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 animate-pulse opacity-70 blur-sm"></div>

                        {/* Outer glow */}
                        <div className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-pink-300 to-purple-400 opacity-30 blur-md"></div>
                      </div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connection Point */}
              <div className="hidden md:block absolute  xl:right-[3.5rem] lg:-right-[-11.5rem] top-1/2 transform -translate-y-1/2">
                <SvgAnimation1 />
                <div className="relative flex items-center justify-center">
                  {/* Base dot */}
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 z-10"></div>

                  {/* Pulsing glow effect */}
                  <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 animate-pulse opacity-70 blur-sm"></div>

                  {/* Outer glow */}
                  <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 opacity-30 blur-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" relative w-full max-w-6xl mx-auto px-4  ">
        <div className="flex justify-end">
          {" "}
          {/* Added flex container with justify-end */}
          <div className="max-w-md mb-16 text-right md:mr-12">
            {" "}
            {/* Added text-right for right alignment */}
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Transforming Vision into Reality
            </h2>
            <p className="text-gray-400 text-sm">
              We connect imagination with innovation, turning bold ideas into
              seamless digital experiences.
            </p>
          </div>
        </div>
      </div>

      {/* 2nd page  */}
      <div className="relative w-full max-w-7xl mx-auto py-12 px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
          {/* Left Side - Infrastructure Setup */}
          <div className="bg-[#303030] border self-end border-gray-800 rounded-lg p-6 w-full lg:w-1/3">
            <ol className="space-y-4 list-decimal pl-5 text-[15px] text-gray-300">
              <li>
                Infrastructure Setup - Establishing a robust and scalable
                environment.
              </li>
              <li>
                Application Setup - Configuring the core system for seamless
                performance.
              </li>
              <li>
                Database Configuration - Structuring data for efficiency and
                reliability.
              </li>
            </ol>

            {/* Connection Point (Only on Large Screens) */}
            <div className="hidden lg:block absolute left-[7.8rem] mt-3">
              <div className="relative flex items-center justify-center">
                {/* Base dot */}
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 z-10"></div>

                {/* Pulsing glow effect */}
                <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 animate-pulse opacity-70 blur-sm"></div>

                {/* Outer glow */}
                <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 opacity-30 blur-md"></div>
              </div>
            </div>

            <SvgAnimation2 />
          </div>

          {/* Center Column */}
          <div className="flex flex-col gap-4 w-full lg:w-1/4">
            <div className="flex items-center gap-2 bg-black/40 rounded-full px-4 py-2 border border-gray-800 justify-center">
              <span className="text-gray-200">🔨 Backend Developer</span>
            </div>

            <div className="bg-black border border-gray-800 rounded-lg p-6 relative">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: "10px 10px",
                }}
              />
              <h3 className="text-gray-200 mb-3">Logic Development</h3>
              <pre className="text-[13px]  font-mono text-white bg-black/60 rounded p-3 whitespace-pre">
                <code className="block">
                  <span className="text-purple-400">function</span>{" "}
                  <span className="text-blue-400">isEven</span>(number) {"{"}
                  <br />
                  <span className="text-gray-400 ml-3">return</span> number % 2
                  === 0 ?
                  <br />
                  <span className="ml-4">"Even" : "Odd";</span>
                  <br />
                  {"}"}
                  <br />
                  <br />
                  <span className="text-purple-400">function</span>{" "}
                  <span className="text-blue-400">factorial</span>(n) {"{"}
                  <br />
                  <span className="text-gray-400 ml-3">return</span> n === 0 ?
                  <br />
                  <span className="ml-4">1 : n * factorial(n - 1);</span>
                  <br />
                  {"}"}
                </code>
              </pre>
            </div>
          </div>

          {/* Central Content with List */}
          <div className="bg-black border border-gray-800 rounded-lg self-center w-full lg:w-1/4">
            <div className="bg-[#1B1B1C] p-6 m-3">
              <ol className="space-y-6 list-decimal text-[13px] text-gray-300">
                <li>
                  Collaborate with Designers & Backend Developers for a cohesive
                  workflow.
                </li>
                <li>
                  Design Scalable Frontend Architecture to ensure performance &
                  efficiency.
                </li>
                <li>
                  Create Intuitive Screen Designs for the best user experience.
                </li>
              </ol>
            </div>
          </div>

          {/* Right Side (Only on Large Screens) */}
          <div className="hidden lg:block absolute right-[6rem]">
            <div className="relative flex items-center justify-center">
              {/* Base dot */}
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 z-10"></div>

              {/* Pulsing glow effect */}
              <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 animate-pulse opacity-70 blur-sm"></div>

              {/* Outer glow */}
              <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 opacity-30 blur-md"></div>
            </div>
          </div>

          <div className=" z-40 flex flex-col gap-4 w-full lg:w-1/4">
            <div className="flex items-center gap-2 bg-black/40 rounded-full px-4 py-2 border border-gray-800 justify-center">
              <span className="text-xl">⚛️</span>
              <span className="text-gray-200">Frontend Developer</span>
            </div>

            <div className="bg-black border border-gray-800 rounded-lg p-6 relative">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: "10px 10px",
                }}
              />
              <h3 className="text-gray-200 mb-3">API Integration</h3>
              <pre className="text-[11px] font-mono text-white bg-black/60 rounded p-3 whitespace-pre">
                <code className="block">
                  <span className="text-purple-400">async function</span>{" "}
                  <span className="text-blue-400">getData</span>() {"{"}
                  <br />
                  <span className="text-gray-400 ml-3">const</span>{" "}
                  <span className="text-blue-400">response</span> =
                  <span className="text-purple-400"> await</span> fetch(URL);
                  <br />
                  <span className="text-gray-400 ml-3">const</span>{" "}
                  <span className="text-blue-400">data</span> =
                  <span className="text-purple-400"> await</span>{" "}
                  response.json();
                  <br />
                  <span className="text-purple-400 ml-3">console</span>
                  .log(data);
                  <br />
                  {"}"}
                </code>
              </pre>
            </div>

            <div className="flex items-center gap-2 bg-black/40 rounded-full px-4 py-2 border border-gray-800 justify-center">
              <h3 className="text-gray-200">UI Development</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="max-w-md ml-10 md:ml-28 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Meet Our Team – The Minds Behind the Innovation
          </h2>
          <p className="text-gray-400 text-sm">
            Bringing Ideas to Life, One Pixel at a Time.
          </p>
        </div>

        {/* Connection Point */}
        <div className="hidden md:block absolute  left-[2rem]">
          <div className="relative flex items-center justify-center">
            {/* Base dot */}
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 z-10"></div>

            {/* Pulsing glow effect */}
            <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 animate-pulse opacity-70 blur-sm"></div>

            {/* Outer glow */}
            <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 opacity-30 blur-md"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* QA Section */}
          <div className="bg-black/60 border border-gray-800 rounded-lg p-6 w-full md:w-96">
            <div className="flex items-center gap-3 mb-6">
              <span role="img" aria-label="qa" className="text-xl">
                🔍
              </span>
              <p className="text-white"> QA</p>
            </div>

            <div className="mb-4">
              <p className="text-gray-400 text-sm mb-2">Role</p>
              <div className="bg-black/60 border border-gray-800 rounded p-2">
                <p className="text-green-400">Quality Testing (QA)</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-gray-400 text-sm">Here's what I do:</p>
              <div className="space-y-2">
                {qaSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="relative flex items-center justify-center">
                      {/* Base dot */}
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 z-10"></div>

                      {/* Pulsing glow effect */}
                      <div className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 animate-pulse opacity-70 blur-sm"></div>

                      {/* Outer glow */}
                      <div className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 opacity-30 blur-md"></div>
                    </div>
                    <span className="text-gray-300 text-lg">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Connection Point */}
            {/* <div className="hidden md:block absolute left-[24.5rem] top-1/2  ">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            </div> */}
          </div>

          {/* Deployment Section */}
          <div className="bg-black/80 border border-gray-800 rounded-lg p-6 w-full md:w-96">
            <div className="space-y-4">
              {deploymentSteps.map((step) => (
                <div key={step.id} className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <div className="w-4 h-4 text-green-400">✅</div>
                  </div>
                  <p className="text-gray-300 text-sm">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentShowcase;
