import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import WeatherProvier from "./context/WeatherContext";
import LoadProvider from "./context/LoadContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WeatherProvier>
      <LoadProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LoadProvider>
    </WeatherProvier>
  </React.StrictMode>
);
