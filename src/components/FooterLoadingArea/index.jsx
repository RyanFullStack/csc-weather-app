import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

function FooterLoadingArea() {
  const { jumpruns, maxGust, maxSpeed, speed } = useContext(WeatherContext);

  return (
    <div className="footer-jumprun-loading">
      <div className="loading-footer-content">app.skydivecsc.com</div>

      {jumpruns[0]?.beerLight ? (
        <span className="yellow weather-hold" id="loading-footer-light">
          *** BEER LIGHT IS ON! ***
        </span>
      ) : jumpruns[0]?.weatherHold ? (
        <span className="red weather-hold" id="loading-footer-light">
          *** DZ {jumpruns[0].weatherType} HOLD ***
        </span>
      ) : (
        <span className="student-wind-hold-loading">
          {maxGust > 25 || maxSpeed > 25 || speed > 25 ? (
            <span className="red">*** DZ WIND LIMIT HIT ***</span>
          ) : maxGust > 15 || maxSpeed > 15 || speed > 15 ? (
            <span className="yellow">*** STUDENT WIND HOLD ***</span>
          ) : null}
        </span>
      )}

      <div className="loading-footer-content">Chicagoland Skydiving Center</div>
    </div>
  );
}

export default FooterLoadingArea;
