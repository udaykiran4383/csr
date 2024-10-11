import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../components/img/abhyuday2.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className="h-1/2 w-full flex md:flex-row flex-col justify-around items-start pt-20 pr-20 pb-20 pl-5 lg:p-20"
      style={{
        background:
          "black",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="p-5 md:max-w-sm lg:max-w-md" data-aos="fade-up">
        <ul>
          <img
            src={logo}
            alt="Logo"
            width={296}
            height={176}
            className="pb-4"
          />
          <li className="text-gray-500 text-md pb-2 font-roboto font-semibold text-pretty">
            Abhyuday, IIT Bombay is Asia's largest student run&nbsp;
            organization&nbsp; working&nbsp; towards&nbsp; creating a
            sense&nbsp; of Social&nbsp; Responsibility and Leadership among the
            youth of India.
          </li>
          {/* <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Abhyuday, IIT Bombay is Asia's largest student <br /> run &nbsp; organization &nbsp; working &nbsp; towards &nbsp; creating a <br /> sense &nbsp; of Social &nbsp; Responsibility and Leadership <br /> among the youth of India.
          </li> */}
          <li className="font-bold font-poppins pb-4">
            Inspiring Individuals, Transforming Communities
          </li>
          <div className="flex gap-6 pb-5">
            <Link
              to="https://www.instagram.com/iitbombay_abhyuday/"
              target="_blank"
            >
              <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500" />
            </Link>
            <Link to="https://x.com/Abhyuday_IITB" target="_blank">
              <FaXTwitter className="text-2xl cursor-pointer hover:text-gray-600" />
            </Link>
            <Link
              to="https://www.linkedin.com/company/abhyuday-iit-bombay/"
              target="_blank"
            >
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-800" />
            </Link>
            <Link to="https://youtube.com/@abhyudayiitbombay" target="_blank">
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
            </Link>
          </div>
        </ul>
      </div>
      <div className="p-5">{/* Your content here */}</div>
      <div className="p-5" data-aos="fade-up">
        <ul className="font-roboto">
          <p className="text-gray-20 font-outfit font-bold text-2xl pb-4">
            QUICK LINKS
          </p>
          <li className="text-gray-50 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            <Link to="https://www.abhyudayiitb.org" target="_blank">
              Abhyuday
            </Link>
          </li>
          {/* <li className="text-gray-50 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
          <Link to="https://www.abhyudayiitb.org">CR Program</Link>
          </li> */}
          <li className="text-gray-50 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            <Link to="https://abhyudayiitb.org/events.html" target="_blank">
              Events
            </Link>
          </li>
          <li className="text-gray-50 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            <Link to="https://abhyudayiitb.org/campaigns.html" target="_blank">
              Campaigns
            </Link>
          </li>
          <li className="text-gray-50 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            <Link
              to="https://abhyudayiitb.org/competitions.html"
              target="_blank"
            >
              Competitions
            </Link>
          </li>
        </ul>
      </div>
      <div className="p-5" data-aos="fade-up">
        <ul>
          <p className="text-gray-20 font-outfit font-bold text-2xl pb-4">
            REACH OUT
          </p>
          <li className="text-gray-50 text-md pb-2 font-roboto font-semibold hover:text-blue-600 cursor-pointer">
            <Link
              to="https://maps.app.goo.gl/seG6qxwWHYLZWjrG7"
              target="_blank"
            >
              Abhyuday Office, <br />
              Student Activity <br />
              Centre (SAC), <br />
              IIT Bombay, <br />
              Powai, <br />
              Mumbai, India
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
