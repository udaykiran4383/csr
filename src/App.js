import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./pages/components/ScrollToTop.js";
import { useEffect } from "react";
import Home from "./pages/home.js";

import AOS from "aos";
import "aos/dist/aos.css";
import Throwback from "./pages/throwback.js";


function App() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: false,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<Home />}
    
        ></Route>
        <Route
          path="/throwback"
          element={<Throwback />}
    
        ></Route>
 
   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
