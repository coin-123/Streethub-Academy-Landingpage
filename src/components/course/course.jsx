import React from 'react'
import frame1 from '../../assets/image 9.png'
import frame2 from '../../assets/image 12.png'
import frame3 from '../../assets/image 13.png'
import frame4 from '../../assets/image 14.png'
import frame5 from '../../assets/image 15.png'



const Course = () => {
  return (
    <section className="flex items-center justify-center w-full h-[1256px] bg-[rgba(237,255,226,1)]" id='courses'>
        <div className="flex flex-col items-center justify-around w-full h-full ">
            <div className="flex flex-col items-center justify-center w-[550px] b-pink-600">
                <h1 className="text-[3.2rem] font-semibold text-center  ">Our coureses</h1>
                <p className="text-[1.5rem] text-center">Well tailored and certified courses designed to help you unlock your full career potentials.</p>
            </div>
        <div className="flex flex-wrap items-center justify-center h-[78%] w-full gap-10 "> 
            <div className="flex flex-col items-center justify-between rounded-[20px] w-[400px] h-[454px] bg-[rgba(255,255,255,1)] pb-[12px]">
                <div className="flex flex-col items-center justify-center w-full h-[335px]">
                    <div className="flex items-center justify-center w-full h-[50%]"> <img src={frame1} alt="" className="w-full h-full" /> </div>
                <div className="flex flex-col items-center justify-center w-full h-[50%]">
                    <h1 className='font-bold text-[22px] '>Frontend Development</h1>
                    <p className="text-[22px]">12 Weeks</p>
                    <p className="text-[22px] text-center  w-[70%]"> Fast, responsive, and user-friendly interfaces tailored to your needs.</p>
                </div>
                </div>
                <button className="bg-[rgba(81,177,70,1)] w-[264px] h-[52px] p-[12px] rounded-lg text-white transition duration-300 hover:bg-white hover:text-[rgba(81,177,70,1)] border-[2px] border-[rgba(81,177,70,1)]">Resgister</button>
            </div>
             <div className="flex flex-col items-center justify-between rounded-[20px] w-[400px] h-[454px] bg-[rgba(255,255,255,1)] pb-[12px]">
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
                    <h1 className='font-bold text-[22px] '>Cybersecurity</h1>
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
            </div>
        </div>
        </div>
    </section>
  )
}

export default Course