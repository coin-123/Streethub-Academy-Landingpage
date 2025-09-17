import React from "react";
import frame1 from "../../assets/Vector1.png";
import { motion } from "framer-motion";

const Whystrhub = () => {
  const descriptions = [
    {
      title: "Professional courses",
      description:
        "We offer well crafted Professional course that equip you with in-demand skills that are neded to advance your career and knowledge.",
      image: frame1,
    },
    {
      title: "Expert Instructors",
      description:
        "Learn from industry experts who bring real-world experience and insights to the classroom, ensuring you receive practical knowledge that can be applied immediately.",
      image: frame1,
    },
    {
      title: "Flexible Learning",
      description:
        "Our courses are designed to fit your schedule, allowing you to learn at your own pace and convenience, whether you prefer self-paced learning or live sessions.",
      image: frame1,
    },
    {
      title: "Community Support",
      description:
        "Join a vibrant community of learners and professionals where you can network, collaborate, and get support throughout your learning journey.",
      image: frame1,
    },
    {
      title: "Career Advancement",
      description:
        "Gain the skills and certifications needed to advance your career, open new job opportunities, and increase your earning potential in the tech industry.",
      image: frame1,
    },
    {
      title: "Affordable Pricing",
      description:
        "We offer competitive pricing and various payment options to make quality education accessible to everyone, without compromising on the quality of our courses.",
      image: frame1,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }} // start hidden & pushed down
      whileInView={{ opacity: 1, y: 0 }} // animate when in view
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex items-center justify-center bg-[rgba(12,45,8,1)] w-full pb-[1.4rem] whychoose "
    >
      <div className="flex items-center flex-col w-full h-[] ">
        <h1 className="text-[3.2rem] font-semibold text-center text-white mb-[30px] whychoosetext">
          Why choose StreetHub Academy
        </h1>
        <div className="flex flex-wrap items-center justify-center h-[90%] w-full bg-ed-500 gap-10">
          {descriptions.map((description, index) => (
            <div
              key={index}
              className=" flex items-center justify-between pl-[10px] rounded-lg border-[1px] w-[380px] h-[280px] border-white"
            >
              <div className="flex items-top justify-center  h-[75%]">
                <img
                  src={description.image}
                  alt=""
                  className=" w-[50px] h-[47px]"
                />
              </div>
              <div className="flex justify-between w-[78%]  h-[75%]  flex-col ">
                <h1 className="text-2xl text-white font-bold">
                  {description.title}
                </h1>
                <div className=" w-[90%]">
                  <p className="text-white text-l">
                    {description.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Whystrhub;
