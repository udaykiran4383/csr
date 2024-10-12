import React, { useState } from "react";
import "./FAQs.css"; // Make sure to import the CSS file for transitions
import SectionTitle from "./SectionTitle.js";

export default function Component() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can NGOs participate in multiple activities?",
      answer: "Yes, NGOs can select multiple activities by selecting the package that includes the activities they desire to participate in.",
    },
    {
      question: "How can NGOs reserve their participation slots?",
      answer: 'NGOs can select from different participation packages, such as the bronze, gold, silver packages and pitch for a change category. Reservations must be made in advance by registering through the event’s website or contact point.',
    },
    {
      question: "What are the payment methods available for reserving slots?",
      answer: "Payment methods include online transactions via credit/debit cards, bank transfers, and other specified methods shared during the registration process.",
    },
    {
      question: "Are any of the payments refundable?",
      answer: "No, under any circumstances there will be no refund provided. Any packages taken by NGOs or entry fees given by Individuals is entirely Non-refundable.",
    },
    {
      question: "Is there any registration fee for Individuals?",
      answer: "Yes, ₹1500 per person registration fee is applicable which includes Breakfast, Lunch, HI Tea and entry to the event ,Although for IIT Bombay students, this summit is free of cost",
    },
    {
      question: "What is the schedule of the event?",
      answer: "The event will take place from 9:00am to 5:15pm. The detailed schedule is available on the website.",
    },
  ];

  return (
    <section id="faqs" className="bg-[#6366f1] text-gray-100 py-16">
           <div className="relative">
      {/* Grid lines SVG */}
      <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.9" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
       
          <div className="w-full flex justify-center">
  <SectionTitle title="FAQs" className="text-center" />
</div>
          <h2 className="text-center font-oswald text-lg text-gray-300 pb-3" data-aos="fade-up">
           
          </h2>
          <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((item, index) => (
              <div className="faq-item" key={index} data-aos="fade-up">
                <button
                  className="p-4 hoverable  border-[#4f46e5] text-start text-sm flex flex-col w-full"
                  onClick={() => handleClick(index)}
                >
                  <div className="flex justify-between items-center pb-2 w-full">
                    <h3 className="text-sm font-medium font-chelsea pr-4">{item.question}</h3>
                    <div className="text-gray-100 hover:text-gray-200 text-lg flex-shrink-0">
                      {openIndex === index ? "-" : "+"}
                    </div>
                  </div>
                  <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
                    <p className="text-xs text-gray-200 font-oswald">{item.answer}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}