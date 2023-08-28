import * as React from "react";
import Header from "./Header";
import "../assets/css/index.css";
import Content1 from "./Content1";
import CounterComponent from "./CounterComponent";
import News from "./News";
import Footer from "./Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div id="container">
        <Content1></Content1>
        <CounterComponent></CounterComponent>
        <News></News>
      </div>
      <Footer />
    </>
  );
};

export default Home;
