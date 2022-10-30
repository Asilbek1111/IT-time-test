import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Portfolio.scss";
import "swiper/css";
import Sidebar from "../../img/youtube.png";
import Ecommerce from "../../img/e-commerce.png";
import Hoc from "../../img/parallax1.png";
import MusicApp from "../../img/dog.png";
import Alibaraka from "../../img/alibaraka.PNG";
import Todo from "../../img/todo.png";
import Baf from "../../img/baf2.png";

import "swiper/css/navigation";
import { Navigation } from "swiper";
import "swiper/css/pagination";
import Fade from "react-reveal/Fade";
import { Pagination } from "swiper";

const Portfolio = () => {
  return (
    <div className="portfolio" id="Portfolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>
      <Fade bottom cascade>
        <Swiper
          pagination={true}
          modules={[Pagination, Navigation]}
          navigation={true}
          spaceBetween={10}
          slidesPerView={3}
          // grabCursor={true}
          className="portfolio-slider"
        >
          <SwiperSlide>
            <a href="https://alibaraka.com/" target="_blank">
              <img src={Alibaraka} alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="https://baf.vercel.app/" target="_blank">
              <img src={Baf} alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="https://pro-goods.netlify.app/" target="_blank">
              <img src={Ecommerce} alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="https://utubedownload.netlify.app/" target="_blank">
              <img src={Sidebar} alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="https://num1-todo-app.netlify.app/" target="_blank">
              <img src={Todo} alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="https://parallax1-my.netlify.app/">
              <img src={Hoc} alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="http://aslbekblog.epizy.com/">
              <img src={MusicApp} alt="" />
            </a>
          </SwiperSlide>
        </Swiper>
      </Fade>
    </div>
  );
};

export default Portfolio;
