import React from 'react'
import frame1 from '../../assets/Our aim.png'
import frame2 from '../../assets/Our mission.png'

const Misson = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full h-[900px] bg-[rgba(237,255,226,1)]'>
        <div className="flex items-center justify-center">
            <img src={frame1} alt="" className="" />
        </div>
        <div className="flex items-center justify-center">
            <img src={frame2} alt="" className="" />
        </div>
    </section>
  )
}

export default Misson