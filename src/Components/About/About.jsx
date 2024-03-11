import React from "react";
import Frames from "./frames/Frames.jsx";
import "./About.css";

const About = () => {
  return (
    <>
      <h1 className="abt-head">ABOUT ME</h1>
      <div className="about">
        <div className="about-left">
          {/* <img src={MyAvtaar} alt="" /> */}
          <Frames emoji={"https://img.icons8.com/nolan/96/google-code.png"} heading={"Web Developer"} Desc={"Design, code, and maintain websites for optimal user experience."} />
          <Frames emoji={"https://img.icons8.com/nolan/96/windows10-personalization.png"} heading={"UI/UX Design"} Desc={"Design intuitive interfaces for seamless user interactions."} />
          <Frames emoji={"https://img.icons8.com/nolan/96/critical-thinking.png"} heading={"AI/ML"} Desc={"Developing AI/ML models to solve complex problems efficiently and effectively."} />
        </div>
        <div className="about-right">
          <p>
            Proficient in developing responsive and visually appealing user
            interfaces using HTML, CSS, and JavaScript during a web developer
            internship. Hands-on experience in server-side scripting with
            Node.js and Express.js, actively contributing to the creation and
            maintenance of robust and scalable web applications. Strong
            background in database management, utilizing MySQL and MongoDB.
            Demonstrated expertise in data modeling and storage solutions.
          </p>
          <a className="button" href="https://drive.google.com/file/d/1xGXVhR3RRMzaoZ4FHVDa8J4MhR-IRPTA/view?usp=drive_link">Download Resume</a>
        </div>
      </div>
    </>
  );
};

export default About;
