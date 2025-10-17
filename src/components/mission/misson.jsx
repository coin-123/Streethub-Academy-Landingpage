import React from 'react'
import frame1 from '../../assets/Ouraim.png'
import frame2 from '../../assets/Ourmission.png'
import frame3 from '../../assets/image6.png'
import frame4 from '../../assets/image8.png'
import { motion } from 'framer-motion'
import { img } from 'framer-motion/client'


// mobile screen map through

const mobscr = [
  {
    img: frame3,
    des: 'Our mission is to empower aspiring tech individuals to unlock their full potentials in the tech world. We strive to create an inclusive and supportive environment where learners of all background can explore, innovate and grow.'
  },

  {
    img: frame4,
    des: 'We aim to inspire the next generation of techies and build a community that thrives on creativity, curiosity and shared success through hands-on learning, collaboration, and mentorship.'

  }
]




const Misson = () => {
  return (
    <motion.section 
    initial={{ opacity: 0, y: 50 }}        // start hidden & pushed down
  whileInView={{ opacity: 1, y: 0 }}     // animate when in view
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
    className='flex flex-col items-center justify-center w-full h-[700px] bg-[rgba(237,255,226,1)]'>
        <div className="items-center justify-center   md:flex lg:flex xl:flex 2xl:flex our-mission-img ">
            <img 
            src={frame1} 
            alt="" 
            className="h-[65%]" />
        </div>
        <div className="items-center justify-center  hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex our-mission-img">
            <img 
            src={frame2} 
            alt=""
            className="h-[65%] " />
        </div>

        {/* mobile screen section */}

        <div className="mobile-src">
          {mobscr.map((mob, index) => (
            <div 
              key={index}
              className="mobile-src-top flex items-center justify-around mb-[20px]">

              <img
              src={mob.img}
              alt=""
              className="mobile-src-img object-cover w-[30%]"
              />  
              <p className="mobile-src-para text-[0.8rem] w-[60%] text-center">
                {mob.des}
              </p>
            </div>
          ))}
          

          

        </div>
    </motion.section>
  )
}

export default Misson