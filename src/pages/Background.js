// Background.js
import React from "react";
import Spline from "@splinetool/react-spline";

const Background = () => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Spline background */}
      <Spline scene="https://prod.spline.design/DBCGWGemx6OSZ2Xf/scene.splinecode" />

      {/* Grid lines */}
      <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

export default Background;
