"use client";


import { PinContainer } from "./ui/Pin.js";

export const projects = [
  {
    id: 1,
    title: "AWS",
    des: "Access to exclusive credits and comprehensive support worth over 5,000 USD each to all the finalists",
    img: "AWS.jpeg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://www.abhyudayiitb.org/",
  },
  {
    id: 2,
    title: " GITHUB",
    des: " 20 seats of GitHub Enterprise free for 1st year, 50% off for the second year.",
    img: "src/pages/components/img/Freshworks.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://www.abhyudayiitb.org/",
  },
  {
    id: 3,
    title: " Paytm",
    des: " Over INR 1 Lakh Payment Gateway credits to top startups",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://www.abhyudayiitb.org/",
  },
  {
    id: 4,
    title: " Notion",
    des: " 1000 USD Credits each for the Enterprise plan to top finalists",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://www.abhyudayiitb.org/",
  },

  {
    id: 5,
    title: " Razorpay",
    des: "Per year credits worth 1 Lakh on Payment Gateway to top startups",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "",
  },
  {
    id: 6,
    title: " MSG91",
    des: " Credits worth INR 25000 for messaging/email solutions",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://www.abhyudayiitb.org/",
  },
  {
    id: 7,
    title: " freshworks",
    des: " 4000 USD Credits of Freshworks CRM to top startups ",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://www.abhyudayiitb.org/",
  },
  {
    id: 8,
    title: " Notion",
    des: " 1000 USD Credits each for the Enterprise plan to top finalists",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://www.abhyudayiitb.org/",
  },

  {
    id: 9,
    title: " Shorterloop",
    des: " 4 month free trial for all the round 1 qualifiers and additional 50% discount to the winners worth USD 3000",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://www.abhyudayiitb.org/",
  },
];




const RecentProjects = () => {
  return (
    <div className="py-20">
   
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="Background Image" />
                </div>
                <img
                  src={item.img}
                  alt={`${item.title} cover`}
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
           

             
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

