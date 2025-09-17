import React from "react";
import frame1 from "../../assets/image9.png";
import frame2 from "../../assets/image12.png";
import frame3 from "../../assets/image13.png";
import frame4 from "../../assets/image14.png";
import frame5 from "../../assets/image15.png";
import { motion } from "framer-motion";

const items = [
  {
    title: "Frontend Development",
    sub: "12 Weeks",
    description:
      "Fast, responsive, and user-friendly interfaces tailored to your needs.",
    image: frame1,
  },
  {
    title: "Backend Development",
    sub: "12 Weeks",
    description: "Secure, scalable, and high perfomance solutions.",
    image: frame2,
  },
  {
    title: "UI/UX Design",
    sub: "12 Weeks",
    description:
      "User-friendly and visually stunning designs that keep users engaged.",
    image: frame3,
  },

  {
    title: "Cyber-Security",
    Sub: "12 weeks",
    description:
      "Protect data, systems, and networks with top-notch cybersecurity skill.",
    image: frame4,
  },

  {
    title: "Data analysis",
    sub: "12 weeks",
    description:
      "Turn raw data into actionable insights with advanced analytics.",
    image: frame5,
  },
];

const Course = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }} // start hidden & pushed down
      whileInView={{ opacity: 1, y: 0 }} // animate when in view
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex items-center justify-center w-full bg-[rgba(237,255,226,1)] h-auto  pt-1rem] pb-[1rem] sm:pt-[1.5rem] sm:pb-[2rem]"
      id="courses"
    >
      <div className="flex flex-col items-center justify-around w-full h-full ">
        <div className="flex flex-col items-center justify-center w-full b-pink-600 mb-[3rem] sm:mb-[3rem]]">
          <h1 className="text-[2rem] sm:text-[3.2rem] font-semibold text-center  ">
            Our coureses
          </h1>
          <p className="sm:text-[1.5rem] text-[0.7rem] w-[80%] sm:w-[60%] text-center">
            Well tailored and certified courses designed to help you unlock your
            full career potentials.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center h-[78%] w-full gap-10 ">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between rounded-[20px] w-[80%] sm:w-[400px] h-[454px] bg-[rgba(255,255,255,1)] pb-[12px]"
            >
              <div className="flex flex-col items-center justify-center w-full h-[335px]">
                <div className="flex items-center justify-center w-full h-[50%]">
                  {" "}
                  <img src={item.image} alt="" className="w-full h-full" />{" "}
                </div>
                <div className="flex flex-col items-center justify-center w-full h-[50%]">
                  <h1 className="font-bold text-[22px] ">{item.title}</h1>
                  <p className="text-[22px]">{item.sub}</p>
                  <p className=" text-center  w-[70%] sm:text-[1.5rem] 562428">
                    {" "}
                    {item.description}
                  </p>
                </div>
              </div>
              <button className="bg-[rgba(81,177,70,1)] w-[264px] h-[52px] p-[12px] rounded-lg text-white transition duration-300 hover:bg-white hover:text-[rgba(81,177,70,1)] border-[2px] border-[rgba(81,177,70,1)]">
                Resgister
              </button>
            </div>
          ))}
          {/* <div className="flex flex-col items-center justify-between rounded-[20px] w-[400px] h-[454px] bg-[rgba(255,255,255,1)] pb-[12px]">
                <div className="flex flex-col items-center justify-center w-full h-[335px]">
                    <div className="flex items-center justify-center w-full h-[50%]"> <img src={frame2} alt="" className="w-full h-full" /> </div>
                <div className="flex flex-col items-center justify-center w-full h-[50%]">
                    <h1 className='font-bold text-[22px] '>Backend Development</h1>
                    <p className="text-[22px]">12 Weeks</p>
                    <p className="text-[22px] text-center  w-[70%]"> Secure, scalable, and high perfomance solutions.</p>
                </div>
                </div>
                <button className="bg-[rgba(81,177,70,1)] w-[264px] h-[52px] p-[12px] rounded-lg text-white transition duration-300 hover:bg-white hover:text-[rgba(81,177,70,1)] border-[2px] border-[rgba(81,177,70,1)]">Resgister</button>
            </div>
             <div className="flex flex-col items-center justify-between rounded-[20px] w-[400px] h-[454px] bg-[rgba(255,255,255,1)] pb-[12px]">
                <div className="flex flex-col items-center justify-center w-full h-[335px]">
                    <div className="flex items-center justify-center w-full h-[50%]"> <img src={frame3} alt="" className="w-full h-full" /> </div>
                <div className="flex flex-col items-center justify-center w-full h-[50%]">
                    <h1 className='font-bold text-[22px] '>UI/UX Design</h1>
                    <p className="text-[22px]">12 Weeks</p>
                    <p className="text-[22px] text-center  w-[70%]"> User-friendly and visually stunning designs that keep users engaged.</p>
                </div>
                </div>
                <button className="bg-[rgba(81,177,70,1)] w-[264px] h-[52px] p-[12px] rounded-lg text-white transition duration-300 hover:bg-white hover:text-[rgba(81,177,70,1)] border-[2px] border-[rgba(81,177,70,1)]">Resgister</button>
            </div>
             <div className="flex flex-col items-center justify-between rounded-[20px] w-[400px] h-[454px] bg-[rgba(255,255,255,1)] pb-[12px]">
                <div className="flex flex-col items-center justify-center w-full h-[335px]">
                    <div className="flex items-center justify-center w-full h-[50%]"> <img src={frame4} alt="" className="w-full h-full" /> </div>
                <div className="flex flex-col items-center justify-center w-full h-[50%]">
                    <h1 className='font-bold text-[22px] '>Cyber-security</h1>
                    <p className="text-[22px]">12 Weeks</p>
                    <p className="text-[22px] text-center  w-[70%]">Protect data, systems, and networks with top-notch cybersecurity skill.</p>
                </div>
                </div>
                <button className="bg-[rgba(81,177,70,1)] w-[264px] h-[52px] p-[12px] rounded-lg text-white transition duration-300 hover:bg-white hover:text-[rgba(81,177,70,1)] border-[2px] border-[rgba(81,177,70,1)]">Resgister</button>
            </div>
             <div className="flex flex-col items-center justify-between rounded-[20px] w-[400px] h-[454px] bg-[rgba(255,255,255,1)] pb-[12px]">
                <div className="flex flex-col items-center justify-center w-full h-[335px]">
                    <div className="flex items-center justify-center w-full h-[50%]"> <img src={frame5} alt="" className="w-full h-full" /> </div>
                <div className="flex flex-col items-center justify-center w-full h-[50%]">
                    <h1 className='font-bold text-[22px] '>Data analysis</h1>
                    <p className="text-[22px]">12 Weeks</p>
                    <p className="text-[22px] text-center  w-[70%]">Turn raw data into actionable insights with advanced analytics.</p>
                </div>
                </div>
                <button className="bg-[rgba(81,177,70,1)] w-[264px] h-[52px] p-[12px] rounded-lg text-white transition duration-300 hover:bg-white hover:text-[rgba(81,177,70,1)] border-[2px] border-[rgba(81,177,70,1)]">Resgister</button>
            </div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Course;
