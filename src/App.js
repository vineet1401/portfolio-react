import Navbar from './Components/navbar/Navbar.jsx'
import Intro from './Components/Intro/Intro.jsx';
import About from './Components/About/About.jsx';
import Skills from "./Components/Skills/Skills.jsx"
import Project from "./Components/Projects/Project.jsx"
import Contact from "./Components/Contact/Contact.jsx"
import Footer from "./Components/Footer.jsx"
import "./App.css"
import { motion, useScroll } from "framer-motion";
import { themeContext } from './Context.jsx';
import { useContext, useEffect } from 'react';


import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  const { scrollYProgress } = useScroll();
  const theme = useContext(themeContext)
  const darkmode = theme.state.darkmode;


  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
      <div className="App"
        style={{
          background: darkmode ? "black" : "white",
          color: darkmode ? "white" : "black"

        }}>
        <div id='home' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out-back" className='home-page'>
          <Navbar />
          <Intro />
        </div>
        <hr/>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out-back" id='about' className='about-page'>
          <About />
        </div>
        <hr/>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out-back" id='skill' className='skill-page'>
          <Skills />
        </div>  
        <hr/>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out-back" id='project' className='project-page'>
          <Project />
        </div>
        <hr/>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out-back" id='contact' className='contact-page'>
          <Contact />
        </div>
        <div id='footer' className='footer'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;


