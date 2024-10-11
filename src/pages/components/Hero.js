import React from "react";
import { Element } from "react-scroll";
import Clock from "./Clock";
import { useNavigate } from "react-router-dom";
import Spline from "@splinetool/react-spline"; // Import the Spline component

const Hero = () => {
  const deadline = new Date("2024-10-24T00:00:00");
  const navigate = useNavigate(); // Add useNavigate hook for redirection

  const handleClick = () => {
    navigate("/login/student");
  };

  return (
    <Element
      name="hero"
      id="home"
      className="w-full pt-[12vh] md:pt-[14vh] text-white relative overflow-hidden h-screen flex justify-center items-center"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Spline background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/DBCGWGemx6OSZ2Xf/scene.splinecode" />
      </div>

      {/* Grid lines */}
      <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Hero content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#ffffff]">
          Impact Innovator's Summit: CSR & ESG 2024
        </h1>
        <Clock countdown={deadline} callback={() => alert("countdown complete")} />
        <div className="grid md:grid-cols-3 gap-4 mt-8">
  <div
    className="p-4 rounded-lg border border-[#fdfdfd] transition duration-300 transform hover:scale-105"
    style={{
      background: "linear-gradient(90deg, rgba(79, 152, 208, 1) 0%, rgba(12, 14, 35, 1) 100%)",
    }}
  >
    <h2 className="font-semibold mb-2 text-[#fdfdfd]">WHEN?</h2>
    <p className="text-white">24th OCT 2024</p>
    <p className="text-white">9:00 AM - 5:15 PM</p>
  </div>
  <div
    className="p-4 rounded-lg border border-[#faf9f9] transition duration-300 transform hover:scale-105"
    style={{
      background: "linear-gradient(90deg, rgba(45, 42, 62, 1) 0%, rgba(12, 14, 35, 1) 100%)",
    }}
  >
    <h2 className="font-semibold mb-2 text-[#ffffff]">WHERE?</h2>
    <p className="text-white">P C Saxena Auditorium</p>
  </div>
  <div
    className="p-4 rounded-lg border border-[#ffffff] transition duration-300 transform hover:scale-105"
    style={{
      background: "linear-gradient(90deg, rgba(45, 42, 62, 1) 0%, rgba(12, 14, 35, 1) 100%)",
    }}
  >
    <h2 className="font-semibold mb-2 text-[#ffffff]">FOR WHO?</h2>
    <p className="text-white">CDR DOERS, ENABLERS, INVESTORS & CDR CURIOUS INVESTORS</p>
  </div>
</div>


        <button
          onClick={handleClick}
          className="bg-white relative h-10 w-32 md:h-12 md:w-40 rounded-lg text-black overflow-hidden font-medium shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:w-0 before:rounded-sm before:bg-black before:duration-300 before:ease-out hover:bg-black hover:text-white hover:shadow-white hover:before:h-40 hover:before:w-40"
        >
          <span className="relative z-10 font-bold font-outfit tracking-wider">
            Register
          </span>
        </button>
      </div>
    </Element>
  );
};

export default Hero;
