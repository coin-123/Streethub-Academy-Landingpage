import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Streethub from './components/streethub/streethub.jsx'
import Navbar from './components/navbar/nav.jsx'
import Intro from './components/intro/intro.jsx'
import Carousel from './components/carousel/carousel.jsx'
import Whystrhub from './components/whystrhub/whystrhub.jsx'
import Qul from './components/qualificacions/qul.jsx'
import Course from './components/course/course.jsx'
import Test from './components/testimonials/test.jsx'
import Misson from './components/mission/misson.jsx'
import Faq from './components/faq/faq.jsx'
import Contact from './components/contact-us/contact.jsx'
import Footer from './components/footer/footer.jsx'
import Copy from './components/copyright-sec/copy.jsx'
// import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Streethub />
   <Navbar />
   <Intro />
   <Carousel />
    <Whystrhub />
    <Qul />
    <Course />
    <Test/>
    <Misson />
    <Faq />
    <Contact />
    <Footer />
    <Copy />
    {/* <App /> */}
  </StrictMode>,
)
