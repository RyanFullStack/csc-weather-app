import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import "./footer.css";

function Footer() {
  const { jumpruns, newSpot, newOffset } = useContext(WeatherContext);

  return (
    <div className="metar-container">
      <p>
        <a
          href="https://ryanerickson.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Created by: Ryan Erickson
        </a>
      </p>

      {jumpruns[0] ? (
        jumpruns[0].beerLight ? (
          <span className="yellow weather-hold">*** BEER LIGHT IS ON! ***</span>
        ) : jumpruns[0].weatherHold ? (
          <span className="red weather-hold">
            *** DZ {jumpruns[0].weatherType} HOLD ***
          </span>
        ) : jumpruns[0].heading ? (
          <div className="footer-jumprun">
            <div>
              Jumprun: {jumpruns[0]?.heading}º{" "}
              <i
                className="fas fa-plane"
                style={{
                  transform: `rotate(${jumpruns[0].heading - 90}deg`,
                }}
              />
            </div>
            <div>
              Green Light: {newSpot} {jumpruns[0].selectedSpot}{" "}
              {jumpruns[0].selectedOffset === "None"
                ? null
                : `| ${newOffset} ${jumpruns[0].selectedOffset}`}
            </div>
          </div>
        ) : null
      ) : (
        <div id="scroll-container">
          <div id="scroll-text">
            <span>NOW OPEN 7 DAYS!</span>
          </div>
        </div>
      )}
      <p>
        <a
          href="https://github.com/RyanFullStack/csc-weather-app#Features"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </p>
    </div>
  );
}

export default Footer;
