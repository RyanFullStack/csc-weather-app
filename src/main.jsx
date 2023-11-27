import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import WeatherProvier from "./context/WeatherContext";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WeatherProvier>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WeatherProvier>
  </React.StrictMode>
);
