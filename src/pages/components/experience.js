import React from "react";
import { Button } from "./ui/MovingBorders";
import ngo from "../components/img/ngo1.png";
import csr from "../components/img/CSR.png";
import stu from "../components/img/bsuu-fotor-20241012153523.jpg";
import esg from "../components/img/esg.jpg";
import SectionTitle from "./SectionTitle.js";

export const workExperience = [
  {
    id: 1,
    title: "NGOs",
    desc: "Provides a platform to showcase work, network with CSR heads for funding, align proposals with corporate expectations, and foster collaborations with other NGOs.",
    className: "md:col-span-2",
    thumbnail: ngo,
  },
  {
    id: 2,
    title: "Corporations and CSR Heads",
    desc: "Expose them to impactful NGOs, share emerging CSR and ESG trends through panels, offer a platform to showcase CSR efforts, and enable networking with other corporations for potential collaborations.",
    className: "md:col-span-2",
    thumbnail: csr,
  },
  {
    id: 3,
    title: "Students and Researchers",
    desc: "Increase awareness of CSR, ESG, and social entrepreneurship as career paths, provide exposure to real-world challenges, offer opportunities to present innovations to industry leaders, and enable networking for internships and collaborations.",
    className: "md:col-span-2",
    thumbnail: stu,
  },
  {
    id: 4,
    title: "CSR and ESG Ecosystem",
    desc: "Foster collaboration between corporations, NGOs, and academic institutions, stimulate innovation in addressing social and environmental challenges, and promote the integration of ESG principles into corporate strategies.",
    className: "md:col-span-2",
    thumbnail: esg,
  },
];

const Experience = () => {
  return (
    <div className="w-full h-screen bg-[#6366f1] text-white py-16 relative overflow-hidden">
      {/* Grid lines SVG */}
      <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.9" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="w-full flex justify-center">
        <SectionTitle title="CURATED FOR" className="text-center" />
      </div>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "ffffff",
              borderRadius: "calc(1.75rem * 0.96)",
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-100"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-20 w-16 rounded-full"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
