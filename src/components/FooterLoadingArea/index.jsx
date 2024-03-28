import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

function FooterLoadingArea() {
  const { jumpruns } = useContext(WeatherContext);

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
      ) : null}

      <div className="loading-footer-content">Chicagoland Skydiving Center</div>
    </div>
  );
}

export default FooterLoadingArea;
