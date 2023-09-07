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
              <a href="http://localhost:8096/oauth2/authorization/google">
                <i className="google-i">
                  <img src={process.env.PUBLIC_URL + "/img/google.png"}></img>
                </i>
              </a>
            </li>
            <li>
              <a href="http://localhost:8096/oauth2/authorization/naver">
                <i className="naver-i">
                  <img src={process.env.PUBLIC_URL + "/img/naver.png"}></img>
                </i>
              </a>
            </li>
            <li>
              <a href="http://localhost:8096/oauth2/authorization/kakao">
                <i className="kakao-i">
                  <img src={process.env.PUBLIC_URL + "/img/kko.png"}></img>
                </i>
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
            해당 사이트에 이용되는 이미지는 스테이블 디퓨전 에서 참조되었습니다.
          </p>
          <div className="copy">
            COPYRUGHT (주)pacificOcean ALL RIGHTS RESERVED.
          </div>
        </div>
        <div id="scTop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
