import React from 'react'
import frame1 from '../../assets/Ouraim.png'
import frame2 from '../../assets/Ourmission.png'
import { motion } from 'framer-motion'

const Misson = () => {
  return (
    <motion.section 
    initial={{ opacity: 0, y: 50 }}        // start hidden & pushed down
  whileInView={{ opacity: 1, y: 0 }}     // animate when in view
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
    className='flex flex-col items-center justify-center w-full h-[700px] bg-[rgba(237,255,226,1)]'>
        <div className="flex items-center justify-center">
            <img src={frame1} alt="" className="h-[65%]" />
        </div>
        <div className="flex items-center justify-center">
            <img 
            src={frame2} 
            alt="" className="h-[65%] " />
        </div>
    </motion.section>
  )
}

export default Misson