import React from 'react'
import frame1 from '../../assets/Expert.png'
import frame2 from '../../assets/image3.png'
import { Motion } from 'framer-motion'

const  Contact = () => {
  return (
   <Motion.section
   initial={{ opacity: 0, y: 50 }}        // start hidden & pushed down
  whileInView={{ opacity: 1, y: 0 }}     // animate when in view
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
   className="flex items-center justify-center w-full h-[550px] bg-[rgba(237,255,226,1)] mt-[7rem]">
    <div className="flex items-center justify-center w-[90%] h-[90%]">
      <div className="flex flex-col justify-around items-center w-1/2 h-full b-red-300">
      <div className="flex items-center justify-center w-full ">  
        <img src={ frame1 } alt="" className="" />
      </div>
            <button className="text-white w-[264px] p-[12px] items-center justify-center rounded-lg cursor-pointer borders-box bg-[rgba(81,177,70,1)]">Get Started</button>
      </div>
      <div className="flex justify-center items-center w-1/2 h-full b-pink-950">
      <img src={frame2} alt="" />
      </div>
    </div>
   </Motion.section>
  )
}

export default  Contact