/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import "./intro.css";
import Github from "../../img/github.png";
import Boy from "../../img/bg-vineet.png";
import LinkedIn from "../../img/linkedin.png";
import Mail from "../../img/email.png";
import Leetcode from "../../img/leetcode.png";
import humble from "../../img/humble.png";
import arrow from "../../img/arrow.gif";
import crown from "../../img/crown.png";
import glassemoji from "../../img/glassesimoji.png";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";


import AOS from 'aos';
import 'aos/dist/aos.css';

const Intro = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <div className="intro">
        <div className="i-left" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <div className="i-name">
            <span style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              {" "}
              <img
                height={"40px"}
                src="https://github.com/jigar-sable/next-portfolio/blob/main/public/waving-hand.gif?raw=true"
                alt=""
              />{" "}
              <span>Hi, I am</span>
            </span>
            <span>Vineet Sakpal</span>
            <span className="typewriter" style={{display:"flex",  gap:"0.5rem"}}> 
              I am into 
              <Typewriter
                options={{
                  strings: ["Frontend Development", "Backend Development", "MERN Stack Development", "Python Programminf"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className="i-hire-me">
            <button type="button" className="button">
              <Link to="contact" smooth duration={500}>
                Contact Me
              </Link>
            </button>
          </div>
          <div className="intro-icon">
            <a href="https://github.com/vineet1401">
              <img src={Github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/vineet-sakpal">
              <img src={LinkedIn} alt="" />
            </a>
            <a href="sakpalvineet1401@gmail.com">
              <img src={Mail} alt="" />
            </a>
            <a href="https://leetcode.com/vineet1401/">
              <img src={Leetcode} alt="" />
            </a>
          </div>
        </div>
        <div className="i-right">
          <div className="intro-img">
            <img src={Boy} className="vineet-img" />

            <div className="floating-div fd1">
              <img src={humble} />
              <p>Web Developer</p>
            </div>
            <div className="floating-div fd2 ">
              <img src={crown} />
              <p>MERN Stack</p>
            </div>
            <div className="floating-div fd3">
              <img src={glassemoji} />
            </div>
          </div>
        </div>
      </div>
      <Link to="home" smooth duration={500} className="button top">
        {" "}
        <img style={{ borderRadius: "100%" }} src={arrow} alt="" />
      </Link>
    </>
  );
};

export default Intro;
