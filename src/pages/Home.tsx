import * as React from "react";
import Header from "./Header";
import "../assets/css/index.css";
import Content1 from "./Content1";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div id="container">
        <Content1></Content1>
      </div>
    </>
  );
};

export default Home;
