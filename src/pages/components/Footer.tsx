import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../components/img/abhyuday2.png";

export default function Footer() {
  return (
    <footer className="bg-[#020b1f] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img
              src= {logo}
              alt="Abhyuday Logo"
              width={296}
              height={176}
              className="max-w-[200px] w-full"
            />
            <p className="text-gray-400 text-sm font-roboto">
              Abhyuday, IIT Bombay is Asia's largest student run organization working towards creating a sense of Social Responsibility and Leadership among the youth of India.
            </p>
            <p className="font-bold font-poppins">
              Inspiring Individuals, Transforming Communities
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://www.instagram.com/iitbombay_abhyuday/" icon={<FaInstagram />} hoverClass="hover:text-pink-500" />
              <SocialLink href="https://x.com/Abhyuday_IITB" icon={<FaXTwitter />} hoverClass="hover:text-gray-600" />
              <SocialLink href="https://www.linkedin.com/company/abhyuday-iit-bombay/" icon={<FaLinkedin />} hoverClass="hover:text-blue-800" />
              <SocialLink href="https://youtube.com/@abhyudayiitbombay" icon={<FaYoutube />} hoverClass="hover:text-red-600" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold font-outfit">QUICK LINKS</h3>
            <ul className="space-y-2 font-roboto">
              <QuickLink href="https://www.abhyudayiitb.org" text="Abhyuday" />
              <QuickLink href="https://abhyudayiitb.org/events.html" text="Events" />
              <QuickLink href="https://abhyudayiitb.org/campaigns.html" text="Campaigns" />
              <QuickLink href="https://abhyudayiitb.org/competitions.html" text="Competitions" />
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold font-outfit">REACH OUT</h3>
            <address className="not-italic text-gray-400 font-roboto">
              <Link to="https://maps.app.goo.gl/seG6qxwWHYLZWjrG7" target="_blank" className="hover:text-blue-600">
                Abhyuday Office,<br />
                Student Activity Centre (SAC),<br />
                IIT Bombay, Powai,<br />
                Mumbai, India
              </Link>
            </address>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold font-outfit">LOCATION</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                title="Abhyuday Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151437.012086062!2d72.766180952378!3d19.11522437620462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93b5d49735f%3A0x602cbe8b5292b0d6!2sIIT%20Bombay!5e0!3m2!1sen!2sin!4v1697120249381!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, hoverClass }) {
  return (
    <Link to={href} target="_blank" className={`text-2xl ${hoverClass}`}>
      {icon}
    </Link>
  );
}

function QuickLink({ href, text }) {
  return (
    <li>
      <Link to={href} target="_blank" className="text-gray-400 hover:text-blue-600">
        {text}
      </Link>
    </li>
  );
}