import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "./Header";
import "../assets/css/menu.css";
import Footer from "./Footer";

interface RouteParams {
  category: string;
  [key: string]: string | undefined; // 추가된 인덱스 시그니처
}

const Menu: React.FC = () => {
  const location = useLocation();
  const { category } = useParams<RouteParams>();

  // 각 탭 메뉴 항목의 href 값을 배열 형태로 정의
  const tabMenuItems = [
    "/menu/landscape",
    "/menu/fixed",
    "/menu/portrait",
    "/menu/surrealism",
    "/menu/renaissance"
  ];
  return (
    <>
      <Header />
      <div className="galWrap">
        <div className="center">
          <h2>GALLERY</h2>
          <ul className="gal_tapmenu">
            {tabMenuItems.map((item, index) => (
              <li
                key={index}
                className={location.pathname === item ? "on" : ""}
              >
                <a href={item}>Tab {index + 1}</a>
              </li>
            ))}
          </ul>
          <div className="gall_wrap">
            {/* <% for(let i =0; i <prdData.length; i++){ %>
            <div class="gall_frame">
                <a class="imgWrap" href="/menudetail/<%-prdData[i].num%>">
                    <img src="/upload/<%-prdData[i].thumbnail%>">
                    <div class="titlebg"><%-prdData[i].name%></div>
                </a>
            </div>
        <% } %> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Menu;
