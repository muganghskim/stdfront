import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*  추가적인 라우트를 이곳에 작성해주세요  */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
