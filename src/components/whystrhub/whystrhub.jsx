import React from 'react'
import frame1 from '../../assets/Vector (1).png'
import { motion } from 'framer-motion'

const Whystrhub = () => {
  return (
    <motion.section
   initial={{ opacity: 0, y: 50 }}        // start hidden & pushed down
  whileInView={{ opacity: 1, y: 0 }}     // animate when in view
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}

    className="flex items-center justify-center bg-[rgba(12,45,8,1)] w-full h-[750px]">
        <div className="flex items-center flex-col w-full h-[] ">
            <h1 className="text-[3.2rem] font-semibold text-center text-white mb-[30px]">Why choose StreetHub Academy</h1>
        <div className="flex flex-wrap items-center justify-center h-[90%] w-full bg-ed-500 gap-10">
            <div className=" flex items-center justify-between pl-[10px] rounded-lg border-[1px] w-[380px] h-[280px] border-white">
              <div className="flex items-top justify-center  h-[75%]"><img src={frame1} alt="" className=" w-[50px] h-[47px]" /></div>
              <div className="flex justify-between w-[78%]  h-[75%]  flex-col ">
                <h1 className="text-2xl text-white font-bold">Professional courses</h1>
                <div className=" w-[90%]">
                  <p className="text-white text-xl">We offer well crafted Professional course that equip you with in-demand skills that are neded to advance your career and knowledge.</p>
                </div>
              </div>
            </div>
   <div className=" flex items-center justify-between pl-[10px] rounded-lg border-[1px] w-[380px] h-[280px] border-white">
              <div className="flex items-top justify-center  h-[75%]"><img src={frame1} alt="" className=" w-[50px] h-[47px]" /></div>
              <div className="flex justify-between w-[78%]  h-[75%]  flex-col ">
                <h1 className="text-2xl text-white font-bold">Professional courses</h1>
                <div className=" w-[90%]">
                  <p className="text-white text-xl">We offer well crafted Professional course that equip you with in-demand skills that are neded to advance your career and knowledge.</p>
                </div>
              </div>
            </div> 
               <div className=" flex items-center justify-between pl-[10px] rounded-lg border-[1px] w-[380px] h-[280px] border-white">
              <div className="flex items-top justify-center  h-[75%]"><img src={frame1} alt="" className=" w-[50px] h-[47px]" /></div>
              <div className="flex justify-between w-[78%]  h-[75%]  flex-col ">
                <h1 className="text-2xl text-white font-bold">Professional courses</h1>
                <div className=" w-[90%]">
                  <p className="text-white text-xl">We offer well crafted Professional course that equip you with in-demand skills that are neded to advance your career and knowledge.</p>
                </div>
              </div>
            </div>       
               <div className=" flex items-center justify-between pl-[10px] rounded-lg border-[1px] w-[380px] h-[280px] border-white">
              <div className="flex items-top justify-center  h-[75%]"><img src={frame1} alt="" className=" w-[50px] h-[47px]" /></div>
              <div className="flex justify-between w-[78%]  h-[75%]  flex-col ">
                <h1 className="text-2xl text-white font-bold">Professional courses</h1>
                <div className=" w-[90%]">
                  <p className="text-white text-xl">We offer well crafted Professional course that equip you with in-demand skills that are neded to advance your career and knowledge.</p>
                </div>
              </div>
            </div>
               <div className=" flex items-center justify-between pl-[10px] rounded-lg border-[1px] w-[380px] h-[280px] border-white">
              <div className="flex items-top justify-center  h-[75%]"><img src={frame1} alt="" className=" w-[50px] h-[47px]" /></div>
              <div className="flex justify-between w-[78%]  h-[75%]  flex-col ">
                <h1 className="text-2xl text-white font-bold">Professional courses</h1>
                <div className=" w-[90%]">
                  <p className="text-white text-xl">We offer well crafted Professional course that equip you with in-demand skills that are neded to advance your career and knowledge.</p>
                </div>
              </div>
            </div>
               <div className=" flex items-center justify-between pl-[10px] rounded-lg border-[1px] w-[380px] h-[280px] border-white">
              <div className="flex items-top justify-center  h-[75%]"><img src={frame1} alt="" className=" w-[50px] h-[47px]" /></div>
              <div className="flex justify-between w-[78%]  h-[75%]  flex-col ">
                <h1 className="text-2xl text-white font-bold">Professional courses</h1>
                <div className=" w-[90%]">
                  <p className="text-white text-xl">We offer well crafted Professional course that equip you with in-demand skills that are neded to advance your career and knowledge.</p>
                </div>
              </div>
            </div>
            
            
            </div>
        </div>
    </motion.section>
  )
}

export default Whystrhub