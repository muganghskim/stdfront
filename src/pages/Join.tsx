import React, { useState } from "react";
import "../assets/css/login.css";
import { useRecoilState } from "recoil";
import {
  usernameState,
  useridState,
  userpassState
} from "../recoil/atoms/validation";

const Join: React.FC = () => {
  const [username, setUsername] = useRecoilState(usernameState);
  const [userid, setUserid] = useRecoilState(useridState);
  const [userpass, setUserpass] = useRecoilState(userpassState);

  const [messageName, setMessageName] = useState("");
  const [messageId, setMessageId] = useState("");
  const [messagePass, setMessagePass] = useState("");

  let idCheck = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,12}$/;
  let passCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  let nameCheck = /^[ㄱ-힣]{2,4}$/;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    let checkComplete1 = nameCheck.test(username);
    let checkComplete3 = idCheck.test(userid);
    let checkComplete4 = passCheck.test(userpass);

    if (checkComplete1) {
      setMessageName("이름을 형식에 맞게 입력하였습니다.");
      // No need to set color in state. We can handle it in JSX.
    } else {
      setMessageName("이름은 한글로만 입력해주세요 (2~4자)");
      // No need to set color in state. We can handle it in JSX.
    }

    if (checkComplete3) {
      setMessageId("아이디를 형식에 맞게 입력하였습니다.");
      // No need to set color in state. We can handle it in JSX.
    } else {
      setMessageId(
        "아이디는 영문 숫자 조합 6자리 이상 12자리 이하만 가능합니다."
      );
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
            <form id="join_form" action="/addjoin" method="post">
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
                name="userid"
                placeholder="ID"
                value={userid}
                onChange={(e) => setUserid(e.target.value)}
              ></input>
              <p className="message">{messageId}</p>
              <input
                id="userpass"
                type="password"
                name="userpass"
                placeholder="Password"
                value={userpass}
                onChange={(e) => setUserpass(e.target.value)}
              ></input>
              <p className="message">{messagePass}</p>
              <button id="submitBtn" type="submit" onClick={handleSubmit}>
                회원가입
              </button>
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
