import React from "react";
import ResponsiveNav from "./components/ResponsiveNav.tsx";
import Hero from "./components/Hero.js";
import GridLines from "./gridlines.js";
import Footer from "./components/Footer.tsx";
import Experience from "./components/experience.js";

import FAQ from "./components/faq.js";
import RecentProjects from "./components/RecentProjects.js";

import Timetable from "./components/timetable.js";

import TeamComponent from "./past.js";
import ImageGallery from "./image.js";
import Marquee from "./marquee.js";

// import ProfileCard from "./Dashboard/Rules/ProfileCard";

const Home = () => {
  return (
    <div className="min-h-screen text-white bg-[#6366f1]" >
      <ResponsiveNav />
      
      <Hero  />
      <GridLines /> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24 bg-[#6366f1]">
      <Experience/>

  
      <FAQ/>
<TeamComponent/>
<Timetable/>
<Marquee/>

<ImageGallery/>

      <RecentProjects/>
    
</div>
      <Footer />

      {/* <ProfileCard /> */}
    </div>
  );
};

export default Home;
