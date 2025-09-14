import React from 'react';
import frame1 from '../../assets/test1.png';
import frame2 from '../../assets/image2.png';
import frame3 from '../../assets/unsplash.png';
import frame4 from '../../assets/Jessica.png';
import frame5 from '../../assets/jesstext.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const slidesData = [
  { id: 1,
    imgSrc: frame3, 
    imgAlt: 'Description of frame3', 
    description:"I went from a complete beginner to my first freelance project in a few months, the hands-on workshop gave me the confidence I needed to dive into my career. Streethub Academy transformed my tech jouurney!"
   },

  { id: 2,
     imgSrc: frame3,
      imgAlt: 'Description of frame3', 
      description:"I went from a complete beginner to my first freelance project in a few months, the hands-on workshop gave me the confidence I needed to dive into my career. Streethub Academy transformed my tech jouurney!" 
    },

  { id: 3, 
    imgSrc: frame3,
     imgAlt: 'Description of frame3',
      description:"I went from a complete beginner to my first freelance project in a few months, the hands-on workshop gave me the confidence I needed to dive into my career. Streethub Academy transformed my tech jouurney!" 
    },

];

const Test = () => {
  return (

    <motion.section 
    initial={{ opacity: 0, y: 50 }}        // start hidden & pushed down
  whileInView={{ opacity: 1, y: 0 }}     // animate when in view
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
    className="flex items-center justify-center w-full  sm:h-[680px]" id='testimonials'>
      <div className="flex flex-col items-center sm:justify-between w-[80%] h-[590px]">
        {/* Top Images */}
        <div className="flex items-center justify-center w-[80%] h-[10%] relative">
          <img src={frame1} alt="Frame 1" className="object-cover z-0 " />
          <img
            src={frame2}
            alt="Frame 2"
            className="object-cover z-10 absolute left-1/2 top-[270px] -translate-x-1/2 -translate-y-1/2 hidden sm:block"
          />
        </div>

        {/* Swiper motion.section */}
        <div className="flex items-center justify-center flex-col w-full h-[55%] sm:h-[85%] rounded-[20px] bg-[rgba(12,45,8,1)]">
          <Swiper
            Pagination={{
              clickable: true,
              dynamicBullets: true, 
            }}
            Navigation={true}
            keyboard={{ enabled: true }}
            simulateTouch={true}
            // grabCursor={true}
            modules={[Pagination, Keyboard,Navigation]}
            className="w-[60%] h-[80%]"
          >
            {slidesData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="flex items-center justify-between flex-col w-full h-full">
                  <img src={slide.imgSrc} alt={slide.imgAlt}  className='w-[55%] sm:w-[30%] ' />
                  <div className="flex items-center justify-between flex-col h-[180px]">
                    <img src={frame4} alt="Frame 4" />
                    <p className="text-white text-center text-[0.6rem] sm:text-[96%]">{slide.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};

export default Test;
