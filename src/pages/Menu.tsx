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
    "/menu/Tshirt",
    "/menu/pants",
    "/menu/portrait",
    "/menu/surrealism",
    "/menu/renaissance"
  ];
  return (
    <>
      <Header />
      <div className="galWrap">
        <div className="center">
          <h2>상품</h2>
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

// import React, { FC } from 'react';
// import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

// import BaseBar from '../Atom/BaseBar';

// interface SubNavProps {
//   links: { label: string; to: string }[];
//   chiledren: string;
// }

// const NavCenter = styled.div`
//   width: 1500px;
//   margin: 0 auto;
// `;

// const NavWrap = styled.div`
//   position: relative;
// `;

// const SubH2 = styled.h2`
//   padding-top: 20px;
//   font-weight: bold;
//   font-size: 17px;
//   line-height: 25px;
// `;
// const Nav = styled.ul`
//   position: absolute;
// `;
// const Depth = styled.li`
//   font-size: 14px;
//   line-height: 30px;
//   width: 120px;
//   &:hover {
//     font-weight: bold;
//   }
// `;

// const StyledNavLink = styled(NavLink).attrs({
//   activeClassName: 'active',
// })`
//   text-decoration: none;
//   color: black;

//   &.active {
//     font-weight: bold;
//   }
// `;

// const SubNav: FC<SubNavProps> = ({ links, chiledren }) => (
//   <NavCenter>
//     <NavWrap>
//       <SubH2>{chiledren}</SubH2>
//       <BaseBar marginBottom="10px" marginTop="10px" />
//       <Nav>
//         {links.map((link) => (
//           <Depth key={link.to}>
//             <StyledNavLink to={link.to}>{link.label}</StyledNavLink>
//           </Depth>
//         ))}
//       </Nav>
//     </NavWrap>
//   </NavCenter>
// );

// export default SubNav;

// const subNavLink = [
//   { label: '전송결과 조회', to: '/transferresult' },
//   { label: '예약전송 관리', to: '/scheduledtransfer' },
//   { label: '통화내역 조회', to: '/callcontentcheck' },
//   { label: '메시지 장기보관함', to: '/longtimestorage' },
// ];

// <SubNav chiledren="전송/예약관리" links={subNavLink} />
