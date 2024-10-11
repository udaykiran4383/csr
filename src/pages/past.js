import React from "react";
import { Linkedin } from "lucide-react";
import SunilKumar from "../pages/components/img/1-Sunil Kumar, ACG World.jpeg"
import Alan from "../pages/components/img/2-Alan Noronha, ARCIL.jpeg"
 import Sahista from "../pages/components/img/3-Sahista Iqbal, GlaxoSmithKline Pharmaceutical Limited.jpg"
 import Soumya from "../pages/components/img/4-Soumya Dabriwal, Project Baala.jpg"
import Jennifer from "../pages/components/img/5-Jennifer Isaac, CrossAsyst Infotech.jpeg"
import Sanjay from "../pages/components/img/6-Sanjay Muthal, ArgoLynx & Advisor to the board of Refyne.jpeg"
import Kalyan from "../pages/components/img/7-Kalyan Bose, Ex Beml ltd.jpeg"
import Deepika from "../pages/components/img/8-Deepika Arora, Ex Indian oil Corporation ltd.jpeg"
import kris from "../pages/components/img/9-Krishna Kabra, Orange Business Services.jpeg"
import raje from "../pages/components/img/10-Rajesh Mohan, Ex GM Sahara Hotels.jpg"
import Oza from "../pages/components/img/11-Chintan Oza, Anantam Ecosystems.png"
import v from "../pages/components/img/12-Vikas, DGM CSR (Leading FMCG Company).jpeg"
import sing from "../pages/components/img/13-Amandeep Singh Raheja, The Kalgidhar Society.jpg"
import suja from "../pages/components/img/14-Sujatha Rajgopalan,Sterling & Wilson.jpeg"
import Suman  from "../pages/components/img/15-Suman Shrivastava, ISDM.jpeg"
import Anju from "../pages/components/img/16-Anju Saini, Elegant Success Impression.jpeg"
import finsa from "../pages/components/img/17-Amanpal Singh Chawla, Fisaarthi Learning Solutions.jpeg"
import SectionTitle from "./components/SectionTitle";
const teamMembers = [
  {
    name: "Sunil Kumar",
    title: "CSR head & ESG",
    company: "ACG World",
    image: SunilKumar
  },
  {
    name: "Alan Noronha",
    title: "Vice President CSR ",
    company: "ARCIL",
    image: Alan
  },
  {
    name: "Sahista Iqbal",
    title: "CSR Lead",
    company: "GlaxoSmithKline Pharmaceutical Limited ",
    image: Sahista
  },
  {
    name: "Soumya Dabriwal ",
    title: "Founder ",
    company: "Project Baala",
    image: Soumya 
  },
  {
    name: "Jennifer Isaac",
    title: "Director ",
    company: "Crossasyst Infotech ",
    image: Jennifer 
  },
  {
    name: "Sanjay Muthal",
    title: "CEO & Idependant Director ",
    company: "ArgoLynx & Advisor to the board of Refyne",
    image: Sanjay
  },
  {
    name: "Kalyan Bose",
    title: "Ex Head of Corporate Communication",
    company: "Ex Beml ltd",
    image: Kalyan
  },
  {
    name: "Deepika Arora",
    title: "Independant Cosultant",
    company: "Ex Indian oil Corporation ltd ",
    image: Deepika 
  }
  ,
  {
    name: "Krishna Kabra ",
    title: "India Head (Global Capablity Centre)",
    company: "Orange Business Services  ",
    image: kris
  },
  {
    name: "Rajesh Mohan ",
    title: "Ex General Manager ",
    company: "Ex GM Sahara Hotels ",
    image: raje
  },
  {
    name: "Chintan Oza ",
    title: "Founder",
    company: "Anantam Ecosystems  ",
    image: Oza 
  },
  {
    name: "Vikas ",
    title: "DGM CSR ",
    company: "Leading FMCG Company  ",
    image: v
  }
  ,

  {
    name: "Amandeep Singh Raheja ",
    title: "Trustee  ",
    company: "The Kalgidhar Society    ",
    image: sing
  },

  {
    name: "Sujatha Rajgopalan  ",
    title: "CSR Head ",
    company: "Sterling & Wilson    ",
    image: suja
  },

  {
    name: "Suman Shrivastava  ",
    title: "Founder ",
    company: "ISDM   ",
    image: Suman
  }
  ,

  {
    name: "Anju Saini  ",
    title: "CEO  ",
    company: "Elegant Success Impression    ",
    image: Anju
  },

  {
    name: "Amanpal Singh Chawla   ",
    title: "Founder & CEO ",
    company: "Finsaarthi Learning Solutions    ",
    image: finsa
  }
];

export default function TeamComponent() {
  return (
    <div className="container mx-auto px-4 py-8">

   <h1>Panelists</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-48 sm:h-56 md:h-64">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4 bg-gray-100">
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.title}</p>
              {member.company && (
                <p className="text-sm text-gray-600">{member.company}</p>
              )}
              <div className="mt-2">
                <Linkedin className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
