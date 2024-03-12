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
import { useContext } from 'react';

import {transitions, positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";



function App() {

  const { scrollYProgress } = useScroll();
  const theme = useContext(themeContext)
  const darkmode = theme.state.darkmode;

  const options = {
    timeout: 3000,
    position: positions.TOP_CENTER,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  };

  return (
    <>
      <Provider template={AlertTemplate} {...options}>
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
      <div className="App"
        style={{
          background: darkmode ? "black" : "white",
          color: darkmode ? "white" : "black"

        }}>
        <div id='home' className='home-page'>
          <Navbar />
          <Intro />
        </div>
        <div id='about' className='about-page'>
          <About />
        </div>
        <div id='skill' className='skill-page'>
          <Skills />
        </div>
        <div id='project' className='project-page'>
          <Project />
        </div>
        <div id='contact' className='contact-page'>
          <Contact />
        </div>
        <div id='footer' className='footer'>
          <Footer />
        </div>
      </div>
      </Provider>
    </>
  );
}

export default App;


