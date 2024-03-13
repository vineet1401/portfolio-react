import React from "react";
// import Frames from "./frames/Frames.jsx";
import "./About.css";

import Boy from "../../img/about-boy.png";
import { Link } from "react-scroll";

const About = () => {
  return (
    <>
      <div className="about">
        <div
          className="about-left"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img
            style={{ position: "relative", zIndex: "20", width: "100%" }}
            src={Boy}
            alt=""
          />
          <div
            style={{
              background: "orange",
              height: "100%",
              width: "50%",
              zIndex: "10",
              position: "absolute",
            }}
          ></div>
          <div
            style={{
              height: "100%",
              width: "50%",
              zIndex: "10",
              position: "absolute",
            }}
          ></div>
        </div>
        <div
          className="about-right"
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h1 className="abt-head">ABOUT ME</h1>
          <p>
            Hey there! I'm a 3rd year Computer Engineering undergrad immersing
            myself in the dynamic worlds of MERN Stack & ML! From MongoDB to
            React, Node.js to ML algorithms, every line of code I write is a
            step towards innovation. Passionate about building scalable
            solutions and creating meaningful impact.
            <br /> I'm constantly learning and coding my way through challenges,
            on a journey to redefine possibilities.
            <br />
            <span style={{textAlign:"center", display:"block", marginTop:"10px", fontSize:"1.7rem", color:"purple"}}>
              <Link to="contact" smooth duration={500}>
                🚀LET'S CONNECT & GROW TOGETHER 🚀
              </Link>
            </span>
          </p>
          <a
            className="button"
            href="https://drive.google.com/file/d/1xGXVhR3RRMzaoZ4FHVDa8J4MhR-IRPTA/view?usp=drive_link"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
