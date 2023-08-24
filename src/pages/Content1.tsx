import React, { useEffect, useState } from "react";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "aos/dist/aos.css";

SwiperCore.use([Autoplay]);

const Content1: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | undefined>(
    undefined
  );

  const handleSwiperInstance = (swiper: any) => {
    setSwiperInstance(swiper);
  };

  const handleNextClick = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const handlePrevClick = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  return (
    <div className="cont1">
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        speed={600}
        onSwiper={handleSwiperInstance}
        className="slideWrap"
      >
        {/* <!-- Additional required wrapper --> */}
        <div className="swiper-wrapper">
          {/* <!-- Slides --> */}
          <SwiperSlide className="s1">
            <div className="slide-context">
              <h2 data-aos="fade-down" data-aos-duration="1000">
                AI 갤러리 인공지능 그리고 예술
              </h2>
              <p data-aos="fade-down" data-aos-duration="1000">
                인공지능을 이용하여 발현되는 다양한 상상력과 재능<br></br>AI를
                사용한 예술이란 무엇인가?
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="contextBtns"
              >
                <a className="moreBtn" href="/menu/landscape">
                  더 찾아보기
                </a>
              </div>
            </div>
            <i className="fa-solid fa-computer-mouse"></i>
          </SwiperSlide>
          <SwiperSlide className="s2">
            <div className="slide-context">
              <h2>AI 갤러리 인공지능 그리고 예술</h2>
              <p>
                인공지능을 이용하여 발현되는 다양한 상상력과 재능<br></br>AI를
                사용한 예술이란 무엇인가?
              </p>
              <div className="contextBtns">
                <a className="moreBtn" href="/menu/landscape">
                  더 찾아보기
                </a>
              </div>
            </div>
            <i className="fa-solid fa-computer-mouse"></i>
          </SwiperSlide>
          <SwiperSlide className="s3">
            <div className="slide-context">
              <h2>AI 갤러리 인공지능 그리고 예술</h2>
              <p>
                인공지능을 이용하여 발현되는 다양한 상상력과 재능<br></br>AI를
                사용한 예술이란 무엇인가?
              </p>
              <div className="contextBtns">
                <a className="moreBtn" href="/menu/landscape">
                  더 찾아보기
                </a>
              </div>
            </div>
            <i className="fa-solid fa-computer-mouse"></i>
          </SwiperSlide>
        </div>
        {/* <!-- If we need pagination --> */}
        {/* <!-- <div className="circleBtn"></div> --> */}

        {/* <!-- If we need navigation buttons --> */}
        <div className="prevBtn naviBtn" onClick={handlePrevClick}>
          <i className="fa-solid fa-angle-left"></i>
        </div>
        <div className="nextBtn naviBtn" onClick={handleNextClick}>
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </Swiper>
    </div>
  );
};

export default Content1;
