import { useEffect, useState, useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import './webcam.css'

function WebCam() {
  const { webcamDirection, setWebcamDirection, darkTheme } = useContext(WeatherContext);

  const handleWebcam = () => {
    if (webcamDirection === "west") {
      setWebcamDirection("east");
      localStorage.setItem("webcamDirection", "east");
    } else {
      setWebcamDirection("west");
      localStorage.setItem("webcamDirection", "west");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const timestamp = Date.now();
      const imgElement = document.getElementById("cam");
      if (webcamDirection === "west") {
        imgElement.src = `https://webcam.skydivecsc.com/hangar_nw?${timestamp}`;
      } else {
        imgElement.src = `https://webcam.skydivecsc.com/hangar_ne?${timestamp}`;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [webcamDirection]);

  return (
    <div className="hangar-cam">
      <div className="hangar-cam-buttons">
        <button onClick={handleWebcam} disabled={webcamDirection === "west"} className={webcamDirection==='west' && darkTheme==='true' ? 'hangar-button-active' : webcamDirection==='west' && darkTheme==='false' ? 'hangar-button-active-light' : 'hangar-button'}>
          West
        </button>
        <button onClick={handleWebcam} disabled={webcamDirection === "east"} className={webcamDirection==='east' && darkTheme==='true' ? 'hangar-button-active' : webcamDirection==='east' && darkTheme==='false' ? 'hangar-button-active-light' : 'hangar-button'}>
          East
        </button>
      </div>
      <img
        src={
          webcamDirection === "west"
            ? `https://webcam.skydivecsc.com/hangar_nw?${Date.now()}`
            : `https://webcam.skydivecsc.com/hangar_ne?${Date.now()}`
        }
        id="cam"
        alt="Hangar camera feed not found, This is a problem with the source and not this app. Visit skydivecsc.com/skydiving-webcams to confirm."
      />
    </div>
  );
}

export default WebCam;
