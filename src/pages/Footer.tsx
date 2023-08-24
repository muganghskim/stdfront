import React from "react";
import "../assets/css/footer.css";

const Footer: React.FC = () => {
  return (
    <>
      <div id="footer">
        <div className="center">
          <div className="f-logo">
            <img src={process.env.PUBLIC_URL + "/img/logo_w.png"}></img>
          </div>
          <ul className="f-icon">
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-pinterest"></i>
              </a>
            </li>
          </ul>
          <p>개인정보취급방침</p>
          <div className="adress">
            <span>주소 : 경기도 고양시 일산서구 덕이동 774-12</span>
            <span>도로명주소 : 경기도 고양시 일산서구 장자길 82번길 10</span>
            <span>
              <br></br>대표이사 : 김현승
            </span>
            <span>전화번호 : 010-7777-7777</span>
            <span>이메일주소 : rhgustmfrh@naver.com</span>
          </div>
          <p className="f-info">
            해당 사이트에 이용되는 이미지는 midjourney Beta 에서 참조되었습니다.
          </p>
          <div className="copy">
            COPYRUGHT (주)ai갤러리 ALL RIGHTS RESERVED.
          </div>
        </div>
        <div id="scTop">
          <div className="upWrap">
            <i className="fa-solid fa-arrow-up-long"></i>
          </div>
          <p>TOP</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
