import React from "react";
import { useRecoilState } from "recoil";
import "../assets/css/header.css";
import {
  depthHeight,
  hbgMenuOpen,
  openMenuItem
} from "../recoil/atoms/dropdown";
import { userState, isLoggedInState, logout } from "../recoil/atoms/auth";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [height, setHeight] = useRecoilState(depthHeight);
  const [isOpenHbgMenu, setIsOpenHbgMenu] = useRecoilState(hbgMenuOpen);
  const [openItem, setOpenItem] = useRecoilState(openMenuItem);
  const [user] = useRecoilState(userState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  console.log(isLoggedIn);

  const handleLogout = async () => {
    await logout();
    setIsLoggedIn(false);
  };

  const menuData = [
    {
      name: "pacificOcean",
      link: "/story",
      subMenu: [
        { name: "스토리", link: "/story" },
        { name: "사회적기부", link: "/donaition" }
      ]
    },
    {
      name: "상품",
      link: "/menu",
      subMenu: [
        { name: "모든상품", link: "/menu" },
        { name: "일상복", link: "/menu/casual" },
        { name: "스포츠", link: "/menu/sports" }
      ]
    },
    {
      name: "매장안내",
      link: "/store",
      subMenu: [
        { name: "매장찾기", link: "/store" },
        { name: "오픈예정", link: "/storeopen" }
      ]
    },
    {
      name: "공지사항",
      link: "/board",
      subMenu: [
        { name: "공지사항", link: "/board" },
        { name: "새로운소식", link: "/news" }
      ]
    }
  ];

  return (
    <>
      <div id="header">
        <div className="center">
          <h1 className="logo">
            <a href="/">
              <img src={process.env.PUBLIC_URL + "/img/logo.png"}></img>
            </a>
          </h1>
          <div
            className="gnbWrap"
            onMouseEnter={() => setHeight("250px")}
            onMouseLeave={() => setHeight("0px")}
          >
            <div className="depthbg" style={{ height }}></div>
            <ul className="gnb">
              {menuData.map((menuItem) => (
                <li key={menuItem.name}>
                  <a href={menuItem.link}>{menuItem.name}</a>
                  {/* Render submenu if it exists */}
                  {menuItem.subMenu && (
                    <ul className="depth" style={{ height }}>
                      {menuItem.subMenu.map((subItem) => (
                        <li key={subItem.name}>
                          <a href={subItem.link}>{subItem.name}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="entireJoin">
            <div className="joinWrap">
              {!isLoggedIn ? (
                <>
                  <Link to="/login">
                    <i className="fa-solid fa-arrow-right"></i>로그인
                  </Link>
                  <Link to="/join">
                    <i className="fa-solid fa-user"></i>회원가입
                  </Link>
                </>
              ) : (
                <>
                  <Link className="username" to="/my">
                    {user.username}님
                  </Link>
                  <button className="logout" onClick={handleLogout}>
                    로그아웃
                  </button>
                </>
              )}
            </div>
            <ul className="h-icon">
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
          </div>
          <div
            className="hbgBtn"
            onClick={() => setIsOpenHbgMenu(!isOpenHbgMenu)}
          >
            <span className="top"></span>
            <span className="mid"></span>
            <span className="bot"></span>
          </div>
        </div>
      </div>
      <div className={`hbgMenu ${isOpenHbgMenu ? "on" : ""}`}>
        <div className="operci" onClick={() => setIsOpenHbgMenu(false)}></div>
        <div className="nav">
          <div className="xBtn" onClick={() => setIsOpenHbgMenu(false)}>
            <span>x</span>
          </div>
          <ul className="hbgGnb">
            {menuData.map((menuItem) => {
              const isOpen = menuItem.name === openItem;
              return (
                <li
                  key={menuItem.name}
                  className="depthWrap2"
                  onClick={() => setOpenItem(isOpen ? null : menuItem.name)}
                >
                  <a href={"#"}>{menuItem.name}</a>
                  {/* Render submenu if it exists */}
                  {menuItem.subMenu && (
                    <ul className={"depth2"}>
                      {menuItem.subMenu.map((subItem) => (
                        <li key={subItem.name} className={isOpen ? "on" : ""}>
                          <a
                            href={subItem.link}
                            style={{ display: isOpen ? "block" : "none" }}
                          >
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="hbgFoot">
            <div className="hbgjoinWrap">
              {!isLoggedIn ? (
                <>
                  <Link to="/login">
                    <i className="fa-solid fa-arrow-right"></i>로그인
                  </Link>
                  <Link to="/join">
                    <i className="fa-solid fa-user"></i>회원가입
                  </Link>
                </>
              ) : (
                <>
                  <Link className="username" to="/my">
                    {user.username}님
                  </Link>
                  <button className="logout" onClick={handleLogout}>
                    로그아웃
                  </button>
                </>
              )}
            </div>
            <ul className="hbgIcon">
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
            <p className="hbgCopy">© 2022 HS Kim pacificOcean</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
