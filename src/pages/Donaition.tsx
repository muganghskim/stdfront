import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { counterValueState, countSelector } from "../recoil/atoms/counter";
import { useScrollPosition } from "../hooks/useScrollPosition";
import Header from "./Header";
import "../assets/css/story.css";
import Footer from "./Footer";

const Donaition: React.FC = () => {
  const [counterValue, setCounterValue] = useRecoilState(counterValueState);
  const maxCount = useRecoilValue(countSelector);
  const scrollPosition = useScrollPosition();
  const [count, setCount] = useState(0);
  const donaitionRef = React.useRef<HTMLDivElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const startAnimation = () => {
      const el = donaitionRef.current;
      if (!el) return;
      const cont5Start = el.offsetTop - 90;
      if (scrollPosition >= cont5Start && !isAnimating) {
        setIsAnimating(true);

        let num = 0;
        const interval = setInterval(() => {
          num += counterValue.plus;
          if (num >= counterValue.complete) {
            clearInterval(interval);
            setCount(counterValue.complete);
          } else {
            setCount(num);
          }
        }, maxCount / counterValue.complete);
      }
    };
    startAnimation();
  }, [scrollPosition, count, counterValue, maxCount, isAnimating]);
  return (
    <>
      <Header />
      <div className="donaitionWrap">
        <div className="leftInfo">
          <h2>
            사회적 기부
            <span>
              를 통해<br></br>AI 갤러리와 함께 세상을<br></br>
            </span>
            더 아름답게
            <span>
              {" "}
              만들어보자<br></br>전시회에서 만나요
            </span>
          </h2>
        </div>
        <div className="rightImg">
          <img src="/img/building.jpg"></img>
        </div>
      </div>
      <div className="donaitionCount donaition">
        <div className="top_ani">
          <div className="circle_wrap">
            <div className="small_bg1"></div>
            <div className="small_bg2"></div>
            <div className="circle_line"></div>
            <div className="circle_small">
              <div className="circle_move"></div>
            </div>
          </div>
        </div>
        <div className="leftInfo">
          <h2>
            AI 갤러리 전시회에서 다양한<br></br>굿즈를 통한 기부를 즐기세요!
          </h2>
          <p>
            다양한 경로로 사회적 약자들에게 기부 할 수 있습니다.<br></br>
            전시회에 참여하여 AI 갤러리와 기부를 함께 하세요.
          </p>
        </div>
        <div className="right_count">
          <div className="box box1" ref={donaitionRef}>
            <div>
              <p className="achieve">현재까지 모인 금액</p>
              <span className="count">{count}</span>
              <span className="price">$</span>
              <p className="dona_time">2022.11.10일 기준</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Donaition;
