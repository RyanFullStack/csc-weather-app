import { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { WeatherContext } from "../../context/WeatherContext";
import "./webcam.css";

function WebCam() {
  const { webcamDirection, setWebcamDirection, darkTheme } =
    useContext(WeatherContext);

  const handleWebcamEast = () => {
    setWebcamDirection("east");
    localStorage.setItem("webcamDirection", "east");
  };
  const handleWebcamWest = () => {
    setWebcamDirection("west");
    localStorage.setItem("webcamDirection", "west");
  };
  const handleWebcamPro = () => {
    setWebcamDirection("pro");
    localStorage.setItem("webcamDirection", "pro");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const timestamp = Date.now();
      const imgElement = document.getElementById("cam");
      if (webcamDirection === "west") {
        imgElement.src = `https://webcam.skydivecsc.com/hangar_nw?${timestamp}`;
      }
      if (webcamDirection === "east") {
        imgElement.src = `https://webcam.skydivecsc.com/hangar_ne?${timestamp}`;
      }
      if (webcamDirection === "pro") {
        imgElement.src = `https://webcam.skydivecsc.com/proshop?${timestamp}`;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [webcamDirection]);

  return (
    <div className="hangar-cam">
      <div className="hangar-cam-buttons">
        <button
          onClick={handleWebcamWest}
          className={
            webcamDirection === "west" && darkTheme === "true"
              ? "hangar-button-active"
              : webcamDirection === "west" && darkTheme === "false"
              ? "hangar-button-active-light"
              : "hangar-button"
          }
        >
          West
        </button>
        <button
          onClick={handleWebcamEast}
          className={
            webcamDirection === "east" && darkTheme === "true"
              ? "hangar-button-active"
              : webcamDirection === "east" && darkTheme === "false"
              ? "hangar-button-active-light"
              : "hangar-button"
          }
        >
          East
        </button>
        <button
          onClick={handleWebcamPro}
          className={
            webcamDirection === "pro" && darkTheme === "true"
              ? "hangar-button-active"
              : webcamDirection === "pro" && darkTheme === "false"
              ? "hangar-button-active-light"
              : "hangar-button"
          }
        >
          Pro
        </button>
      </div>
      <img
        src={
          webcamDirection === "west"
            ? `https://webcam.skydivecsc.com/hangar_nw?${Date.now()}`
            : webcamDirection === "east"
            ? `https://webcam.skydivecsc.com/hangar_ne?${Date.now()}`
            : `https://webcam.skydivecsc.com/proshop?${Date.now()}`
        }
        id="cam"
        alt="Camera feed not found, This is a problem with the source and not this app. View help below to fix."
      />
      <div className="webcam-help-info">
        <NavLink exact to='/webcamhelp'>Camera not loading? Click here for help.</NavLink>
      </div>
    </div>
  );
}

export default WebCam;
