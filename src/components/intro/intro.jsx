import React from 'react'



const Intro = () => {


  return (
    <section className="flex items-center justify-center flex-col intro h-[770px] ">
        <div className="flex items-center relative -top-[130px] flex-col w-[75%]  ">
        <div className="flex items-center justify-center w-[80%]  -m-[25px] g-red-500">
                    <h1 className="text-white text-[3.2rem] font-semibold text-center ">Ready to dive into the exciting world of technology?</h1>
        </div>
        <div className="flex items-center justify-center w-full  pt-[15px] mt-[20px] ">
                    <p className="text-white text-[1.5rem]">Our supportive environment is designed to help create and transform ideas into reality!</p>
        </div>
        </div>

        <div className="flex items-center justify-center w-[568px] h-[52px] gap-[40px] ">
            <button className="text-white w-[264px] h-full p-[12px] items-center justify-center rounded-lg cursor-pointer borders-box bg-[rgba(81,177,70,1)]">Get Started</button>
            <button className="text-white w-[264px] h-full p-[12px] border-[1px]  items-center justify-center rounded-lg  cursor-pointer borders-box border-box">Get Started</button>

        </div>

          
        
    </section>
  )
}

export default Intro