import React from "react";
import "../assets/css/login.css";

const Login: React.FC = () => {
  return (
    <>
      <div className="loginWrap">
        <div className="center">
          <div className="formWrap">
            <h3>로그인을 해주세요</h3>
            <div className="pathWrap">
              <a className="on" href="/login">
                로그인
              </a>
              <a href="/join">회원가입</a>
            </div>
            <form action="/addlogin" method="post">
              <input
                id="userid"
                type="text"
                name="userid"
                placeholder="ID"
              ></input>
              <input
                id="userpass"
                type="password"
                name="userpass"
                placeholder="Password"
              ></input>
              <button type="submit">로그인</button>
            </form>
            <p className="path_regi">
              회원이 아니신가요? <a href="/join">회원가입은 여기로</a>
            </p>
            <a className="path_home" href="/">
              HOME
            </a>
          </div>
          <div className="left_imgWrap">
            <img
              src={process.env.PUBLIC_URL + "/img/login.jpg"}
              alt="로그인 이미지입니다."
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
