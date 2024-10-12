import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import Clock from "./Clock";
import { useNavigate } from "react-router-dom";
import Spline from "@splinetool/react-spline"; // Import the Spline component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const deadline = new Date("2024-10-24T00:00:00");
  const navigate = useNavigate(); // Add useNavigate hook for redirection

  const [render3D, setRender3D] = useState(false); // State to conditionally render the 3D element

  useEffect(() => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const goodConnection = connection
      ? connection.downlink >= 2 // Check if connection is fast enough (2 Mbps)
      : true; // If no connection info, assume it's fine

    const hardwareAcceleration = window.matchMedia("(transform-3d)").matches; // Detect hardware acceleration

    if (goodConnection && hardwareAcceleration) {
      setRender3D(true); // Enable 3D rendering if good connection and hardware acceleration
    }
  }, []);

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
      {/* Conditionally render 3D Spline background or fallback */}
      <div className="absolute inset-0 z-0">
        {render3D ? (
          <Spline scene="https://prod.spline.design/DBCGWGemx6OSZ2Xf/scene.splinecode" />
        ) : (
          <div
            style={{
              background: "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(165, 180, 252, 1) 100%);",
              width: "100%",
              height: "100%",
            }}
          />
        )}
      </div>

      {/* Grid lines */}
      <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.9" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Hero content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-[-1] text-[#ffffff] mt-32 md:mt-0">
          Impact Innovator's Summit: CSR & ESG 2024
        </h1>

        {/* Location section with icon */}
        <div className="text-6xl md:text-2xl mb-6 text-[#fdfdfd] flex justify-center items-center space-x-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-4xl" />
          <a href="https://www.google.com/maps/place/Lecture+Theatre,+P+C+Saxena+Auditorium(LT+PCSA)/@19.1324392,72.9132011,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c7f6652b5c9f:0x11dbf9ad90fa3c51!8m2!3d19.1324392!4d72.915776!16s%2Fg%2F1hd_l52rk?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D" className="hover:underline">
            IIT Bombay
          </a>
        </div>

        <Clock countdown={deadline} callback={() => alert("countdown complete")} />

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div
            className="p-4 rounded-lg border border-[#0e0f40] transition duration-300 transform hover:scale-105"
            style={{
              background: "#ffffff",
            }}
          >
            <h2 className="font-semibold mb-2 text-[#6366f1]">WHEN?</h2>
            <p className="text-[#6366f1]">24th OCT 2024</p>
            <p className="text-[#6366f1]">9:00 AM - 5:15 PM</p>
          </div>
          <div
            className="p-4 rounded-lg border border-[#0e0f40] transition duration-300 transform hover:scale-105"
            style={{
              background: "#ffffff",
            }}
          >
            <h2 className="font-semibold mb-2 text-[#6366f1]">WHERE?</h2>
            <p className="text-[#6366f1]">P C Saxena Auditorium</p>
          </div>
          <div
            className="p-4 rounded-lg border border-[#0e0f40] transition duration-300 transform hover:scale-105"
            style={{
              background: "#ffffff",
            }}
          >
            <h2 className="font-semibold mb-2 text-[#6366f1]">FOR WHO?</h2>
            <p className="text-[#6366f1]">CSR heads, NGOs, students, and ESG (Environmental, Social, and Governance) professionals, Academia</p>
          </div>
        </div>

        {/* Added more gap between the content and the button */}
        <div className="mt-12">
          <button
            onClick={handleClick}
            className="bg-white relative h-10 w-32 md:h-12 md:w-40 rounded-lg text-black overflow-hidden font-medium shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:w-0 before:rounded-sm before:bg-black before:duration-300 before:ease-out hover:bg-black hover:text-white hover:shadow-white hover:before:h-40 hover:before:w-40"
          >
            <span className="relative z-10 font-bold font-outfit tracking-wider ">
              Register
            </span>
          </button>
        </div>
      </div>
    </Element>
  );
};

export default Hero;
