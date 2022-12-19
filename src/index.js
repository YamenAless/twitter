import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import SaveData from "./components/context/SaveData/SaveData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SaveData>
      <App />
    </SaveData>
  </BrowserRouter>
);
