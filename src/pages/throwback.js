import React from "react";
import ResponsiveNav from "./components/ResponsiveNav.tsx";
import "./components/style.css"; // Ensure this includes the animation keyframes
import TeamComponent from "./past.js";

const Throwback = () => {
  return (
    <div className="min-h-screen relative text-white overflow-hidden">
      {/* Background Animation */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          backgroundSize: "200% 200%",
          animation: "gradientAnimation 15s ease infinite",
        }}
      />

      {/* Grid Lines */}
      <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <ResponsiveNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24"> 
        <TeamComponent />
      </div>
    </div>
  );
};

export default Throwback;

