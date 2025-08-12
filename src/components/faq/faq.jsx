import React from 'react';
import frame1 from '../../assets/frequently.png';
import frame2 from '../../assets/frame 68.png';
import frame3 from '../../assets/arrow-down.png'
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';


const faqs = [
  { question: 'Who can join Academy?', answer: 'Anyone interested in learning any tech skill is welcome. Whether you are a complete beginner, intermediate or an experienced professional, our couurses are tailored to fit all skill level.' },
  { question: 'What type of courses do you offer?', answer: 'We offer a wide range of courses, including frontend development,backend development, product design, data Science and more.' },
  { question: 'Do you offer any certificates?', answer: 'Of course, upon successful completion of our courses, you will issued a certificaye that you can showcase on your resume or porfolio to highlight your new skills.' },
  { question: 'Can i access the course materials after completing the course?', answer: 'Absolutely!mOnce you enroll in a course, you will have continuos access to the materials, allowing you to always visit and reinforce your learning whenever you need.'},
  { question: 'How can i stay updated on new courses and updates?', answer: 'You can subscribe to our newsletter or follow us on our social media platform to get updates about upcoming and ongoing courses, worshops, and community events.'},
  { question: 'How do i get started?', answer: 'Getting started is very easy. Simply browser our available courses, choose the one that interest you, and sign up. Join our community and begin your career journey today!'},
  { question: 'What if I have question as an online student?', answer: 'Our facilitators and community members are here to help. You can reach out during live sessions or post your questions in our community forums.'},
  { question: 'Do you accept installment payment?', answer: 'We may offer instament plans for some courses to help manage the cost. Please check the course enrollment page for specific payment options available for each course.'},
];

const Faq = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    // const [isOpen, setIsOpen] = useState(false);
  
         const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <section
     className="flex items-center justify-center w-full h-[1100px]">
      <div className="flex flex-col items-center justify-between w-[85%] h-[90%]">
        
        {/* Header Image */}
        <div className="flex items-center justify-center ">
          <img src={frame1} alt="Frequently Asked Questions"  />
        </div>

        {/* Animated Section */}
        <div
          ref={ref}
          className={`flex flex-col items-center justify-center w-full h-[90%] transition-opacity duration-[1000ms] ${
            inView ? 'opacity-100 animate-fade-in' : 'opacity-0'
          }`}
        >
          <img src={frame2} alt="FAQ Content" className="h-full z-0 w-[90%]" />

          {/* Overlay Box */}
          <div className="absolute z-10 left-1/2 top-[5850px] w-[74.5%] h-[890px] -translate-x-[465px] -translate-y-2/5 bg-[rgba(12,45,8,1)] rounded-[20px] flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-[80%] h-[80%]  ">
             
                  <div className="relative  w-full h-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b-[1px] border-[#dcdcdc] py-4 mt-4">
                <div
                  onClick={() => toggle(index)}
                  className={`flex justify-between items-center cursor-pointer duration-600 ease-out  border-[gray] ${
                     openIndex === index ? 'border-b-[1px] ' : 'border-b-[0] '
                  }`}
                >
                  <p className="text-white text-xl">{faq.question}</p>
                  <img
                    src={frame3}
                    alt="Toggle"
                    className={`transition-transform duration-300  ${
                      openIndex === index ? 'rotate-180 ' : ''
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-3000 ease-in-out ${
                    openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-white mt-2">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>



             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
