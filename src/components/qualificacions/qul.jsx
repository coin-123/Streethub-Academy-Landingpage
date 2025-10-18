import React from 'react'
import { useInView } from 'react-intersection-observer'

const status = [
  { head: '100+', para: 'Students since 2021' },
  { head: '80%', para: 'Fully Employed' },
  { head: '90%', para: 'Certified graduates' },
]

const Qul = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 })

  return (
    <section
      ref={ref}
      className={`flex items-center justify-center sm:h-[300px] transition-opacity duration-1000  ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col sm:flex-row gap-4 p-8 rounded-lg">
        
        {status.map((statu, index) => (

          <div 
          key={index} 
          className="border-r border-[gray] text-white p-4 rounded-lg  ">

            <p 
            className="text-2xl font-bold text-black ">
              {statu.head}
              </p>

            <p className='text-black'>
              {statu.para}
              </p>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Qul
