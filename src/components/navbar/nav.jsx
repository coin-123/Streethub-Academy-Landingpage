
import React from 'react'
import Logo from '../../assets/Vector2.png'
import Arrow from '../../assets/arrow-down.png'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <section className="flex items-center justify-center w-full h-24 my-custom-bg">
        <div className="flex items-center justify-between h-full w-4/5">
                    <div className="flex items-center justify-center gap-3.5 h-4/5 w-52">
              <div className="logos">
                    <img src={Logo} alt="" className="logo" />
                </div>
                <div className="logotexts">
                    <h1 className="text-white font-semibold text-2xl" >StreetHub</h1>
                    <p className="text-white text-2xl">Academy</p>
                </div>
            </div>


            <div className="flex items-center justify-between h-full w-[480px] text-white ">
              <Link to="footer" smooth={true} duration={500} className=" cursor-pointer " >About Us</Link>
              <Link to="#" smooth={true} duration={500} className=" dropdown"><p className='flex items-center justify-center cursor-pointer gap-[5px]'>Courses <img src={Arrow} alt=""  className=''/></p>
              <div className="dropdown-content">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
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
              <Link to="contact" smooth={true} duration={500} className=" cursor-pointer ">Contact Us</Link>
            </div>

            <div className="flex w-[250px] h-full items-center justify-between">
<button className="greenbtn text-white w-27 h-1/2 items-center justify-center rounded-lg cursor-pointer borders-box border-0">Sign In</button>         
   <button className="text-white w-27 h-1/2 items-center justify-center rounded-lg borders-box cursor-pointer border-[1px] border-gray-100">Sign Up</button>
            </div>

        </div>
    </section>
  )
}

export default Nav