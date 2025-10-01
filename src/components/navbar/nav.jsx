
import React from 'react'
import Logo from '../../assets/Vector2.png'
import Arrow from '../../assets/arrow-down.png'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <section className="flex items-center justify-center w-fulll h-24 my-custom-bg ">
        <div className="flex items-center justify-between h-full w-4/5 desktop" >
                    <div className="flex items-center justify-center gap-3.5 h-4/5 w-52">
              <div className="logos">
                    <img src={Logo} alt="" className="logo " />
                </div>
                <div className="logotexts">
                    <h1 className="text-white font-semibold text-2xl logodes" >StreetHub</h1>
                    <p className="text-white text-2xl logodes ">Academy</p>
                </div>
            </div>


            <div className="flex items-center justify-between h-full w-[480px] text-white ">
              <Link to="footer" smooth={true} duration={500} className=" cursor-pointer " >About Us</Link>
              <Link to="#" smooth={true} duration={500} className=" dropdown"><p className='flex items-center justify-center cursor-pointer gap-[5px]'>Courses <img src={Arrow} alt=""  className=''/></p>
              <div className="dropdown-content">
  <a href="#">Frontend Development</a>
  <a href="#">Backend Development</a>
  <a href="#">UI/UX Design</a>
  <a href="#">Cyber Security</a>
  <a href="#">Data Analysis</a>
  </div>
              </Link>
              <Link to="testimonials" smooth={true} duration={500} className=" cursor-pointer ">Testimonials</Link>
                 <Link to="#" smooth={true} duration={500} className=" dropdown"><p className='flex items-center justify-center cursor-pointer gap-[5px]'>Portal <img src={Arrow} alt=""  className=''/></p>
              <div className="dropdown-content">
  <a href="#">Student</a>
  <a href="#">Facilitator</a>
  <a href="#">Admin</a>
  </div>
              </Link>
              <Link to="contact-us" smooth={true} duration={500} className=" cursor-pointer ">Contact Us</Link>
            </div>

            <div className="flex w-[250px] h-full items-center justify-between">
<button className="greenbtn text-white w-27 h-1/2 items-center justify-center rounded-lg cursor-pointer borders-box border-0">Sign In</button>         
   <button className="text-white w-27 h-1/2 items-center justify-center rounded-lg borders-box cursor-pointer border-[1px] border-gray-100">Sign Up</button>
            </div>
          

        </div>


        {/* mobile section */}

          <div className="flex items-center justify-between w-[95%] h-full  ham-bugger ">


          {/* logo section */}

          <div className="flex items-center justify-center">
            <img src={Logo} alt="" className="" />
            <div className="logotexts">
                    <h1 className="text-white font-semibold text-2xl" >StreetHub</h1>
                    <p className="text-white text-2xl">Academy</p>
                </div>


            </div>




          {/* hambugger section */}
          
          <div className="flex flex-col items-center justify-center w-[25px] h-[50px] cursor-pointer gap-[5px] ">
              <span className="w-full h-[2px] bg-white"></span>
              <span className="w-full h-[2px] bg-white"></span>
              <span className="w-full h-[2px] bg-white">
                <div className="dropdown-content">
  <a href="#">Frontend Development</a>
  <a href="#">Backend Development</a>
  <a href="#">UI/UX Design</a>
  <a href="#">Cyber Security</a>
  <a href="#">Data Analysis</a>
  </div>
              </span>
            </div>
            <div className="dropdown-content">
  <a href="#">Frontend Development</a>
  <a href="#">Backend Development</a>
  <a href="#">UI/UX Design</a>
  <a href="#">Cyber Security</a>
  <a href="#">Data Analysis</a>
  </div>
          
          
          </div>
    </section>
  )
}

export default Nav