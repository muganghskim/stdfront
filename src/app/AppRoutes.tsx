import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Join from "../pages/Join";
import Menu from "../pages/Menu";
import Donaition from "../pages/Donaition";
import LoginSuccess from "../pages/LoginSuccess";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:category" element={<Menu />} />
        <Route path="/donaition" element={<Donaition />} />
        <Route path="/loginSuccess" element={<LoginSuccess />} />
        {/*  추가적인 라우트를 이곳에 작성해주세요  */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
