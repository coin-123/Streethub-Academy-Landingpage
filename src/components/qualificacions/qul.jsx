
import React from 'react'
import frame1 from '../../assets/5k+.png'
import { useInView } from 'react-intersection-observer'


const Qul = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <section className="flex items-center justify-center h-[300px] ">
      <img
        ref={ref}
        src={frame1}
        alt=""
        className={`transition-opacity duration-2000 ${
          inView ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}
      />
    </section>
  )
}

export default Qul