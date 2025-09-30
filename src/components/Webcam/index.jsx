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
  const handleWebcamYard = () => {
    setWebcamDirection("yard");
    localStorage.setItem("webcamDirection", "yard");
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
      if (webcamDirection === "court") {
        imgElement.src = `https://webcam.skydivecsc.com/courtyard?${timestamp}`;
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [webcamDirection]);

  return (
    <div className="hangar-cam">
      <div className="hangar-cam-buttons">


        <button
          onClick={handleWebcamYard}
          className={
            webcamDirection === "yard" && darkTheme === "true"
              ? "hangar-button-active"
              : webcamDirection === "yard" && darkTheme === "false"
              ? "hangar-button-active-light"
              : "hangar-button"
          }
        >
          Yard
        </button>


        {<button
          onClick={handleWebcamEast}
          className={
            webcamDirection === "east" && darkTheme === "true"
              ? "hangar-button-active"
              : webcamDirection === "east" && darkTheme === "false"
              ? "hangar-button-active-light"
              : "hangar-button"
          }
        >
          Hangar
        </button>}

        {/* ADD THIS BUTTON BACK WHEN MAINT DONE */}
        {/* <button
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
        </button> */}


      </div>
      {webcamDirection === "yard" ? (
        <div className="yard-cam">
          <iframe
            title="csc-yard-webcam"
            src="https://api.wetmet.net/widgets/stream/frame.php?uid=7795ed8bc355d24aee9b77b82884944a"
            scrolling="no"
          />
        </div>
      ) : (
        <img
          src={
            webcamDirection === "west"
              ? `https://webcam.skydivecsc.com/hangar_nw?${Date.now()}`
              : webcamDirection === "east"
              ? `https://webcam.skydivecsc.com/hangar_ne?${Date.now()}`
              : `https://webcam.skydivecsc.com/courtyard?${Date.now()}`
          }
          id="cam"
          alt="Camera feed not found, This is a problem with the source and not this app."
        />
      )}

      {/* *****  ADD BACK WHEN MAINT COMPLETE  ********   */}
      {/* <div className="webcam-help-info">
        <NavLink exact to="/webcamhelp">
          Camera not loading? Click here for help.
        </NavLink>
      </div> */}

    </div>
  );
}

export default WebCam;
