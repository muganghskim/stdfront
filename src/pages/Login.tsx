import React from "react";
import "../assets/css/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState, isLoggedInState, login } from "../recoil/atoms/auth";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const setUser = useSetRecoilState(userState);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const loggedInUser = await login(formData);
      setUser(loggedInUser);
      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      console.error(error); // 이 부분은 에러처리를 원하는 방식으로 변경하실 수 있습니다.
    }
  };

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
            <form onSubmit={handleSubmit}>
              <input
                id="userid"
                type="text"
                name="email"
                value={formData.email}
                placeholder="email"
                onChange={handleChange}
              ></input>
              <input
                id="userpass"
                type="password"
                name="userpass"
                value={formData.password}
                placeholder="Password"
                onChange={handleChange}
              ></input>
              <div className="loginButtonWrap">
                <button type="submit">로그인</button>
                <ul className="h-icon">
                  <li>
                    <a href="http://localhost:8096/oauth2/authorization/google">
                      <i className="google-i">
                        <img
                          src={process.env.PUBLIC_URL + "/img/google.png"}
                        ></img>
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="http://localhost:8096/oauth2/authorization/naver">
                      <i className="naver-i">
                        <img
                          src={process.env.PUBLIC_URL + "/img/naver.png"}
                        ></img>
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="http://localhost:8096/oauth2/authorization/kakao">
                      <i className="kakao-i">
                        <img
                          src={process.env.PUBLIC_URL + "/img/kko.png"}
                        ></img>
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
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
