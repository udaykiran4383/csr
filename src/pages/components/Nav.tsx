import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Replace next/link with react-router-dom
import ablogo from "../components/img/abhyuday2.png"; // Assuming you have the Abhyuday logo path
import finlogo from "../components/img/finlogo-removebg-preview (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Nav = ({ openNav }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login/student");
  };

  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      } else {
        setNavSticky(false);
      }
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed w-full transition-all duration-200 z-[1000] ${
        navSticky
          ? "bg-gradient-to-b from-bg-[#6366f1] to-[#000305]"
          : "bg-[#6366f1]"
      }`}
    >
      <div className="flex items-center h-[10vh] lg:h-[12vh] justify-between w-4/5 mx-auto">
        {/* Abhyuday Logo on the Left */}
        <div className="flex items-center">
          <Link to="home" smooth={true} duration={500}>
            <img src={ablogo} alt="Abhyuday Logo" className="w-32 md:w-48" />
          </Link>
        </div>

        {/* FinSaarthi Logo on the Right */}
      

        {/* Navigation Links */}
        <ul className="lg:flex hidden items-center font-outfit space-x-10 lg:space-x-12 xl:space-x-14">
          <li className="hover:cursor-pointer">
            <Link to="home" smooth={true} duration={500} className="nav_link">
              Home
            </Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link
              to="about"
              smooth={true}
              offset={-80}
              duration={500}
              className="nav_link"
            >
              About
            </Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link
              to="throwback"
              smooth={true}
              offset={-80}
              duration={500}
              className="nav_link"
            >
             Throwback
            </Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              className="nav_link"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Login Button and Menu Icon */}
        <div className="flex items-center space-x-6">
       
          <div className="flex items-center justify-end flex-grow">
          <Link to="home" smooth={true} duration={500} className="hidden lg:block">
            <img src={finlogo} alt="FinSaarthi Logo" className="w-32 md:w-48" />
          </Link>
        </div>

          <FontAwesomeIcon
            icon={faBars}
            onClick={openNav}
            className="w-8 h-8 md:w-[2.3rem] md:h-[2.3rem] lg:hidden text-white rotate-180"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
