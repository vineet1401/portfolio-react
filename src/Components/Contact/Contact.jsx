import React, { useEffect, useState } from "react";
import "./cstyle.css";
import Form from "./Form.jsx";

import contactlaptop from "../../img/contact.png";
import contactmobile from "../../img/contact-3d.png";

const Contact = () => {


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener to avoid memory leaks
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <h1 className="head">CONTACT ME</h1>
      <span className="shadow-4"></span>
      <div className="contact-section">
        <div className="c-left">
          <img src={windowWidth < 700 ? contactmobile : contactlaptop} alt="" />
        </div>
        <div className="c-right">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
