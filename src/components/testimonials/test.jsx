import React from 'react';
import frame1 from '../../assets/test1.png';
import frame2 from '../../assets/image 2.png';
import frame3 from '../../assets/unsplash.png';
import frame4 from '../../assets/jessica.png';
import frame5 from '../../assets/jesstext.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slidesData = [
  { id: 1, imgSrc: frame3, imgAlt: 'Description of frame3' },
  { id: 2, imgSrc: frame3, imgAlt: 'Description of frame3' },
  { id: 3, imgSrc: frame3, imgAlt: 'Description of frame3' },
];

const Test = () => {
  return (
    <section className="flex items-center justify-center w-full h-[680px]" id='testimonials'>
      <div className="flex flex-col items-center justify-between w-[80%] h-[590px]">
        {/* Top Images */}
        <div className="flex items-center justify-center w-[80%] h-[10%] relative">
          <img src={frame1} alt="Frame 1" className="object-cover z-0" />
          <img
            src={frame2}
            alt="Frame 2"
            className="object-cover z-10 absolute left-1/2 top-[270px] -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        {/* Swiper Section */}
        <div className="flex items-center justify-center flex-col w-full h-[85%] rounded-[20px] bg-[rgba(12,45,8,1)]">
          <Swiper
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            keyboard={{ enabled: true }}
            simulateTouch={true}
            // grabCursor={true}
            modules={[Pagination, Keyboard,]}
            className="w-[60%] h-[80%]"
          >
            {slidesData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="flex items-center justify-between flex-col w-full h-full">
                  <img src={slide.imgSrc} alt={slide.imgAlt} />
                  <div className="flex items-center justify-between flex-col h-[180px]">
                    <img src={frame4} alt="Frame 4" />
                    <img src={frame5} alt="Frame 5" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Test;
