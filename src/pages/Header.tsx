import React from "react";
import { useRecoilState } from "recoil";
import "../assets/css/header.css";
import {
  depthHeight,
  hbgMenuOpen,
  openMenuItem
} from "../recoil/atoms/dropdown";

const Header: React.FC = () => {
  const [height, setHeight] = useRecoilState(depthHeight);
  const [isOpenHbgMenu, setIsOpenHbgMenu] = useRecoilState(hbgMenuOpen);
  const [openItem, setOpenItem] = useRecoilState(openMenuItem);
  const menuData = [
    {
      name: "Ai 갤러리1",
      link: "/story",
      subMenu: [
        { name: "아트스토리", link: "/story" },
        { name: "주요작품", link: "/frame" },
        { name: "사회적기부", link: "/donaition" }
      ]
    },
    {
      name: "Ai 갤러리2",
      link: "/story",
      subMenu: [
        { name: "아트스토리", link: "/story" },
        { name: "주요작품", link: "/frame" },
        { name: "사회적기부", link: "/donaition" }
      ]
    },
    {
      name: "Ai 갤러리3",
      link: "/story",
      subMenu: [
        { name: "아트스토리", link: "/story" },
        { name: "주요작품", link: "/frame" },
        { name: "사회적기부", link: "/donaition" }
      ]
    },
    {
      name: "Ai 갤러리4",
      link: "/story",
      subMenu: [
        { name: "아트스토리", link: "/story" },
        { name: "주요작품", link: "/frame" },
        { name: "사회적기부", link: "/donaition" }
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
          <div className="galBtn">
            <a href="/frame">갤러리안내</a>
          </div>
          <ul className="h-icon">
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
                    <ul className={`depth2 ${isOpen ? "on" : ""}`}>
                      {menuItem.subMenu.map((subItem) => (
                        <li key={subItem.name}>
                          <a href={subItem.link}>{subItem.name}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="hbgFoot">
            <ul className="hbgIcon">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f color-white"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram color-white"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter color-white"></i>
                </a>
              </li>
            </ul>
            <p className="hbgCopy">© 2022 HS Kim AI 갤러리 Portfolio</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
