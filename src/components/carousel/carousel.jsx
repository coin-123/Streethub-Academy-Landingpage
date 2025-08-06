import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules';
import frame1 from '../../assets/frame 89.png'
import frame2 from '../../assets/frame 88.png'        
import frame3 from '../../assets/frame 86.png'
import frame4 from '../../assets/frame 87.png'
// import vector from '../../assets/Vector.png'
import frame5 from '../../assets/frame 97.png'
import frame6 from '../../assets/frame 98.png'
import frame7 from '../../assets/frame 99.png'

const Carousel = () => {
  return (
      <div className="flex items-center justify-center g-red-700 w-full h-[fit-content] relative -top-[120px]">
              <Swiper
              modules={[Autoplay]}
  loop={true}
  autoplay={{ delay: 0, disableOnInteraction: false }}
  speed={3000}
  slidesPerView={0}
  spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
       
        className="mySwiper"
      >
        <SwiperSlide className=''>  
          <img src={frame1} alt="" className="w-[] h-[450px] object-cover mb-[30px]" />
          <img src={frame5} alt="" className=" w-[] h-[]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={frame2} alt="" className="w-[] h-[450px] mb-[30px]" /> 
          <img src={frame6} alt="" className=" w-[] h-[]" />
          </SwiperSlide>
        <SwiperSlide>
           <img src={frame3} alt="" className="w-[350px] h-[450px] mb-[30px]" />
          <img src={frame7} alt="" className=" w-[] h-[]" />
           </SwiperSlide>
        <SwiperSlide>
           <img src={frame4} alt="" className="w-[] h-[450px] mb-[30px]" />
          <img src={frame7} alt="" className=" w-[] h-[]" />
           </SwiperSlide>
  <SwiperSlide className=''>  
          <img src={frame1} alt="" className="w-[] h-[450px] object-cover mb-[30px]" />
          <img src={frame5} alt="" className=" w-[] h-[]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={frame2} alt="" className="w-[] h-[450px] mb-[30px]" /> 
          <img src={frame6} alt="" className=" w-[] h-[]" />
          </SwiperSlide>
        <SwiperSlide>
           <img src={frame3} alt="" className="w-[350px] h-[450px] mb-[30px] " />
          <img src={frame7} alt="" className=" w-[] h-[]" />
           </SwiperSlide>
        <SwiperSlide>
           <img src={frame4} alt="" className="w-[] h-[450px] mb-[30px]" />
          <img src={frame7} alt="" className=" w-[] h-[]" />
           </SwiperSlide>      </Swiper>
            </div>
  )
}

export default Carousel