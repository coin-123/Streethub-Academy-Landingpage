import React from 'react'
import Logo from '../../assets/Vector2.png'
import frame1 from '../../assets/Ojukwu.png'
import frame2 from '../../assets/Vector-2.png'
import frame3 from '../../assets/Vector3.png'
import frame4 from '../../assets/Vector4.png'
import frame5 from '../../assets/Group.png'
import frame6 from '../../assets/Vector5.png'  
import frame7 from '../../assets/circum_linkedin.png'


const Footer = () => {
  return (
    <section className="flex items-center justify-center w-[100%]  sm:h-[450px] mt-[4rem]  my-custom-bg " id='footer'>
        <div className="flex flex-col sm:flex-row md:flex-col items-center md:justify-around justify-between w-[90%] h-full">
            <div className="flex flex-col gap-[1rem] ">
                 <div className="flex items-center justify-center gap-3.5 h-4/5 w-52">
                              <div className="logos">
                                    <img src={Logo} alt="" className="logo w-[55px]" />
                                </div>
                                <div className="logotexts">
                                    <h1 className="text-white font-semibold text-[1.2rem]" >StreetHub</h1>
                                    <p className="text-white text-[1.1rem]">Academy</p>
                                </div>
                 </div>
                 <div className="flex items-center justify-center">
                    <img src={frame1} alt="" className='w-[330px]' />
                 </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-amber400 md:w-[87%] sm:w-[67%] h-auto">
                <div className="flex flex-col bgred-400 justify-between  h-[150px]">
                    <p className="text-white font-semibold ">Portal</p>
                    <ul className="flex flex-col justify-around font-light h-[120px]">
                       <a href="#" className="text-white">Admin</a>
                          <a href="#" className="text-white">Facilitator</a>
                            <a href="#" className="text-white">Student</a>
                    </ul>
                </div>
                 <div className="flex flex-col justify-between bg-red300 h-[150px]">
                    <p className="text-white font-semibold ">Support</p>
                    <ul className="flex flex-col justify-around font-light h-[120px]">
                       <a href="#" className="text-white">Terms and condition</a>
                          <a href="#" className="text-white">Contact us</a>
                            <a href="#" className="text-white">Review</a>
                    </ul>
                </div>
                   <div className="flex flex-col justify-between bg-red300  h-[150px]">
                    <p className="text-white font-semibold ">Contact us</p>
                    <ul className="flex flex-col justify-around font-light h-[120px]">
                       <a href="#" className="text-white flex gap-[5px]"> <img src={frame2} alt="" />   08012345678</a>
                          <a href="#" className="text-white text-[0.9rem] flex gap-[5px]"> <img src={frame3} alt="" /> StreethubAcademy@gmail.com</a>
                            <a href="#" className="text-white flex gap-[5px]"> <img src={frame4} alt="" /> 08012345678</a>
                    </ul>
                </div>
                   <div className="flex flex-col justify-between bg-red300 h-[150px]">
                    <p className="text-white font-semibold ">Socials</p>
                    <ul className="flex flex-col justify-around font-light h-[120px]">
                       <a href="#" className="text-white flex gap-[5px]"> <img src={frame5} alt="" /> Street_Hub</a>
                          <a href="#" className="text-white flex gap-[5px]"> <img src={frame7} alt="" /> StreethubAcademy</a>
                            <a href="#" className="text-white flex gap-[5px]"> <img src={frame6} alt="" /> Street_hub</a>
                    </ul>
                </div>
            </div>
             </div>
    </section>
  )
}

export default Footer