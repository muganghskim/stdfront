import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/scss/reset.css";

const rootNode = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootNode).render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
