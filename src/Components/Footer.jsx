import React from "react";
import portfolio from "../img/projects/portfolio.png";
import heart from "../img/heart.gif";
const Footer = () => {
  return (
    <>
      <div className="fork-portfolio">
        <div className="fork-left">
          <h1>
            Loved this <span style={{ color: "#59D5E0" }}>Portfolio?</span>
          </h1>
          <h3>Make this yours by forking.</h3>
          <p>
            Fork this template on GitHub start building your own portfolio
            website.
          </p>
          <button><a style={{textDecoration:"none", color:"navy"}} href="https://github.com/vineet1401/react-portfolio.git">Fork Now</a></button>
        </div>
        <div className="fork-right">
          <img src={portfolio} alt="" />
        </div>
      </div>
      <footer>
        <div className="footer-left">
          Made with <img style={{margin:"5px"}} src={heart} height={40} alt="" /> by Vineet
        </div>
        <div className="footer-right">
          <a href="https://www.linkedin.com/in/vineet-sakpal">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/color/40/linkedin.png"
              alt="linkedin"
            />
          </a>

          <a href="https://www.instagram.com/mi_vinyaa/">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/fluency/40/instagram-new.png"
              alt="instagram-new"
            />
          </a>
          <a href="https://github.com/vineet1401">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/fluency/40/github.png"
              alt="github"
            />
          </a>
          <a href="sakpalvineet1401@gmail.com">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/fluency/40/gmail-new.png"
              alt="gmail-new"
            />
          </a>
          <a href="https://twitter.com/Vineet1401">
            <img
              width="40"
              height="40"
              style={{ borderRadius: 10 }}
              src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=626&ext=jpg&ga=GA1.1.1261998959.1709732840&semt=ais"
              alt="twitter"
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
