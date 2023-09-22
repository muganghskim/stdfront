import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import { useRecoilState, useSetRecoilState } from "recoil";
// import {
//   nameState,
//   useridState,
//   userpassState
// } from "../recoil/atoms/validation";
import {
  signup,
  userState,
  isLoggedInState,
  sendVerificationEmail,
  verifyEmail
} from "../recoil/atoms/auth";

const Join: React.FC = () => {
  // const [name, setName] = useRecoilState(nameState);
  // const [userid, setUserid] = useRecoilState(useridState);
  // const [userpass, setUserpass] = useRecoilState(userpassState);

  const [messageName, setMessageName] = useState("");
  const [messageId, setMessageId] = useState("");
  const [messagePass, setMessagePass] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const setUser = useSetRecoilState(userState);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const navigate = useNavigate();

  const handleSignup = async () => {
    // 회원가입 API 호출 및 회원가입 로직 처리
    try {
      const {
        username: loggedInUsername,
        email: loggedInUserEmail,
        token
      } = await signup({ username, email, password });
      setUser({ username: loggedInUsername, email: loggedInUserEmail, token });
      setIsLoggedIn(true);
      console.log(`Signup successful for email: ${loggedInUserEmail}`);

      // 여기서 사용자를 다음 화면(예: 메인 화면)으로 이동시킬 수 있습니다.
      navigate("/");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const handleVerificationSendEmail = async () => {
    try {
      await sendVerificationEmail({ email });
      alert("이메일 발송에 성공하였습니다.");
      openModal();
    } catch (error) {
      alert("이메일 발송에 실패하였습니다.");
    }
  };

  const handleverifyEmail = async () => {
    try {
      await verifyEmail({ email, code });
      alert("인증 성공!");
      closeModal();
    } catch (error) {
      alert("인증 실패!");
    }
  };

  let idCheck = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,12}$/;
  let passCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  let nameCheck = /^[ㄱ-힣]{2,4}$/;
  let emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    let checkComplete1 = nameCheck.test(username);
    let checkComplete3 = emailCheck.test(email);
    let checkComplete4 = passCheck.test(password);

    if (checkComplete1) {
      setMessageName("이름을 형식에 맞게 입력하였습니다.");
      // No need to set color in state. We can handle it in JSX.
    } else {
      setMessageName("이름은 한글로만 입력해주세요 (2~4자)");
      // No need to set color in state. We can handle it in JSX.
    }

    if (checkComplete3) {
      setMessageId("이메일을 형식에 맞게 입력하였습니다.");
      // No need to set color in state. We can handle it in JSX.
    } else {
      setMessageId("이메일은 이메일 형식만 가능합니다.");
      // No need to set color in state. We can handle it in JSX.
    }

    if (checkComplete4) {
      setMessagePass("비밀번호를 형식에 맞게 입력하였습니다.");
      // No need to set color in state. We can handle it in JSX.
    } else {
      setMessagePass(
        "비밀번호는 영문 숫자 특수기호 조합 8자리 이상 25자리 이하만 가능합니다."
      );
      // No need to set color in state. We can handle it in JSX.
    }

    if (checkComplete1 && checkComplete3 && checkComplete4) {
      alert("Form submitted");
      /* In real scenario you would want to do something else here */
      handleSignup();
    } else {
      alert("제대로 다시 입력해 주세요");
    }
  }
  return (
    <>
      <div className="loginWrap">
        <div className="center">
          <div className="formWrap">
            <h3 className="regi_title">회원으로 참여해주세요</h3>
            <div className="pathWrap">
              <a href="/login">로그인</a>
              <a className="on" href="/join">
                회원가입
              </a>
            </div>
            <form id="join_form" onSubmit={handleSubmit}>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <p className="message">{messageName}</p>
              <input
                id="userid"
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>

              {isModalOpen && (
                <div
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: " center",
                    backgroundColor: " rgba(0,0,0,.5)"
                  }}
                >
                  <div
                    style={{
                      backgroundColor: " white",
                      padding: "20px"
                    }}
                  >
                    <h2
                      style={{
                        marginBottom: "10px"
                      }}
                    >
                      인증 코드를 작성해주세요.
                    </h2>
                    <input
                      type="text"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                    <button
                      style={{
                        width: "60px",
                        height: "50px",
                        marginLeft: "10px",
                        fontSize: "12px",
                        backgroundColor: "#1f1e26",
                        color: "#fff",
                        border: "none",
                        borderRadius: "25px",
                        cursor: "pointer"
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleverifyEmail();
                      }}
                    >
                      인증
                    </button>
                    <button
                      style={{
                        width: "60px",
                        height: "50px",
                        marginLeft: "10px",
                        fontSize: "12px",
                        backgroundColor: "#1f1e26",
                        color: "#fff",
                        border: "none",
                        borderRadius: "25px",
                        cursor: "pointer"
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        closeModal();
                      }}
                    >
                      취소
                    </button>
                  </div>
                </div>
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <p className="message">{messageId}</p>
                <p
                  style={{
                    marginRight: "50px",
                    fontSize: "12px",
                    lineHeight: "24px",
                    cursor: "pointer"
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleVerificationSendEmail();
                  }}
                >
                  이메일 인증
                </p>
              </div>
              <input
                id="userpass"
                type="password"
                name="userpass"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <p className="message">{messagePass}</p>
              <div className="loginButtonWrap">
                <button id="submitBtn" type="submit">
                  회원가입
                </button>
                <ul className="h-icon">
                  <li>
                    <a href="http://localhost:8096/oauth2/authorization/google">
                      <i className="google-i">
                        <img
                          src={process.env.PUBLIC_URL + "/img/google.png"}
                          alt="회원가입 구글 로그인 이미지"
                        ></img>
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="http://localhost:8096/oauth2/authorization/naver">
                      <i className="naver-i">
                        <img
                          src={process.env.PUBLIC_URL + "/img/naver.png"}
                          alt="회원가입 네이버 로그인 이미지"
                        ></img>
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="http://localhost:8096/oauth2/authorization/kakao">
                      <i className="kakao-i">
                        <img
                          src={process.env.PUBLIC_URL + "/img/kko.png"}
                          alt="회원가입 카카오 로그인 이미지"
                        ></img>
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </form>
            <p className="path_login">
              이미 회원이신가요? <a href="/login">로그인은 여기로</a>
            </p>
            <a className="path_home" href="/">
              HOME
            </a>
          </div>
          <div className="left_imgWrap">
            <img
              src={process.env.PUBLIC_URL + "/img/login.jpg"}
              alt="회원가입 이미지입니다."
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;
