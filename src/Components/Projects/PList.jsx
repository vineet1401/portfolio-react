import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import "swiper/css/navigation";

import "./pstyle.css";
import ActionAreaCard from "./ProjectCard.jsx";
import Data from "./Pdata.jsx";

// import required modules
import {
  EffectCoverflow,
  Pagination,
  EffectFlip,
  Navigation,
} from "swiper/modules";

export default function App() {
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
    <>
      <div className={windowWidth <= 800 ? "hide" : ""}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"3"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {Data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div  className="project-card">
                  <ActionAreaCard item={item} />
                  <div className="project-details">
                    <a
                      href={item.link}
                      target="blank"
                      title="Project Github Link"
                      style={{textDecoration:"none", color:"white", display:"flex", alignItems:"center", gap:"10px"}}
                    >
                      <img
                        className="project-git-icon"
                        src="https://img.icons8.com/ios-glyphs/90/github.png"
                        alt=""
                      />
                      <span>Go to Github Repo</span>
                    </a>
                    <h1 className="project-title">{item.name}</h1>
                    <p className="project-description">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className={windowWidth > 800 ? "hide" : ""}>
        <Swiper
          effect={"flip"}
          grabCursor={true}
          pagination={true}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="mySwiper"
        >
          {Data.map((item, index) => {
            return (
              <SwiperSlide key={index} >
                <div className="project-card">
                  <ActionAreaCard item={item} />
                  <div className="project-details">
                    <a
                      href={item.link}
                      target="blank"
                      title="Project Github Link"
                      style={{textDecoration:"none", color:"white", display:"flex", alignItems:"center", gap:"10px"}}
                    >
                      <img
                        className="project-git-icon"
                        src="https://img.icons8.com/ios-glyphs/90/github.png"
                        alt=""
                      />
                      <span>Go to Github Repo</span>
                    </a>
                    <h1 className="project-title">{item.name}</h1>
                    <p className="project-description">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
