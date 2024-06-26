import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { NavLink } from "react-router-dom";
import fb from "../../images/fb.png";
import ig from "../../images/ig.png";
import wa from "../../images/wa.png";
import "./detailed.css";

function DetailedPage() {
  const {
    jumpruns,
    newSpot,
    newOffset,
    darkTheme,
    tempSetting,
    densityAlt,
    pressure,
    dewPoint,
    visibility,
    sunset,
    sunrise,
    twilight,
    sunset24,
    sunrise24,
    twilight24,
    skyCondition1,
    skyCondition2,
    skyCondition3,
    cloudCeiling1,
    cloudCeiling2,
    cloudCeiling3,
    cloudCeilingM1,
    cloudCeilingM2,
    cloudCeilingM3,
    speed,
    gustSpeed,
    maxGust,
    maxSpeed,
    direction,
    variableDirection1,
    variableDirection2,
    metarAbbr,
    metarDesc,
    speedUnit,
    unitSetting,
    isAwosLive,
    timeFormat
  } = useContext(WeatherContext);

  return (
    <div className="detailed-contents">
      <div className={darkTheme === 'true' ? 'detailed-card' : 'detailed-card detailedlight'}>
      {jumpruns[0]?.beerLight ? (
        <span className="yellow weather-hold">*** BEER LIGHT IS ON! ***</span>
      ) : jumpruns[0]?.weatherHold ? (
        <span className="student-wind-hold">
          <span className="red">*** DZ {jumpruns[0].weatherType} HOLD ***</span>
        </span>
      ) : (
        <span className="student-wind-hold">
          {!isAwosLive ? (
            <span className="red">NO AWOS CONNECTION</span>
          ) : maxGust > 50 || maxSpeed > 50 || speed > 50 ? (
            <span className="red">*** HOLY $h*T!!! ***</span>
          ) : maxGust > 40 || maxSpeed > 40 || speed > 40 ? (
            <span className="red">*** HANG ON TIGHT!!! ***</span>
          ) : maxGust > 25 || maxSpeed > 25 || speed > 25 ? (
            <span className="red">*** DZ WIND LIMIT HIT ***</span>
          ) : maxGust > 15 || maxSpeed > 15 || speed > 15 ? (
            <span className="yellow">*** STUDENT WIND HOLD ***</span>
          ) : (
            <span className="green">WINDS OK FOR STUDENTS!</span>
          )}
        </span>
      )}

      <table>
        <tbody>
          <tr className={darkTheme === "true" ? "table" : "table-light"}>
            <td>Sunset:</td>
            <td>{timeFormat === 'true' ? sunset : sunset24}</td>
          </tr>
          <tr className={darkTheme === "true" ? "table" : "table-light"}>
            <td>Twilight:</td>
            <td>{timeFormat === 'true' ? twilight : twilight24}</td>
          </tr>
          <tr className={darkTheme === "true" ? "table" : "table-light"}>
            <td>Sunrise:</td>
            <td>{timeFormat === 'true' ? sunrise : sunrise24}</td>
          </tr>

          {jumpruns[0]?.heading ? (
            <>
              <tr className={darkTheme === "true" ? "table" : "table-light"}>
                <td>Jump Run:</td>
                <td>
                  {jumpruns[0]?.heading}º{" "}
                  <i
                    className="fas fa-plane"
                    style={{
                      transform: `rotate(${jumpruns[0].heading - 90}deg`,
                    }}
                  />
                </td>
              </tr>
              <tr className={darkTheme === "true" ? "table" : "table-light"}>
                <td>Green Light:</td>
                <td>
                  {newSpot} {jumpruns[0].selectedSpot}
                </td>
              </tr>
              <tr className={darkTheme === "true" ? "table" : "table-light"}>
                <td>Offset:</td>
                <td>
                  {newOffset} {jumpruns[0].selectedOffset}
                </td>
              </tr>
            </>
          ) : null}

          {jumpruns[0]?.groundSpeed ? (
            <tr className={darkTheme === "true" ? "table" : "table-light"}>
              <td>Est. Ground Speed:</td>
              <td>{jumpruns[0]?.groundSpeed} kts</td>
            </tr>
          ) : null}

          <tr className={darkTheme === "true" ? "table" : "table-light"}>
            <td>Current Speed:</td>
            <td>
              {speed === 0 ? (
                `0 ${speedUnit === "true" ? "kts" : "mph"}`
              ) : !speed ? null : speed === 1 ? (
                `${speed} ${speedUnit === "true" ? "kt" : "mph"}`
              ) : speed > 25 ? (
                <span className="red">
                  {Math.round(speed * (speedUnit === "false" ? 1.151 : 1))}{" "}
                  {speedUnit === "true" ? "kts" : "mph"}
                </span>
              ) : speed > 15 ? (
                <span className="yellow">
                  {Math.round(speed * (speedUnit === "false" ? 1.151 : 1))}{" "}
                  {speedUnit === "true" ? "kts" : "mph"}
                </span>
              ) : (
                `${Math.round(speed * (speedUnit === "false" ? 1.151 : 1))} ${
                  speedUnit === "true" ? "kts" : "mph"
                }`
              )}
            </td>
          </tr>
          <tr className={darkTheme === "true" ? "table" : "table-light"}>
            <td>Current Gust:</td>
            <td>
              {gustSpeed && gustSpeed > 25 ? (
                <span className="red">
                  {Math.round(gustSpeed * (speedUnit === "false" ? 1.151 : 1))}{" "}
                  {speedUnit === "true" ? "kts" : "mph"}
                </span>
              ) : gustSpeed && gustSpeed > 15 ? (
                <span className="yellow">
                  {Math.round(gustSpeed * (speedUnit === "false" ? 1.151 : 1))}{" "}
                  {speedUnit === "true" ? "kts" : "mph"}
                </span>
              ) : gustSpeed ? (
                `${Math.round(
                  gustSpeed * (speedUnit === "false" ? 1.151 : 1)
                )} ${speedUnit === "true" ? "kts" : "mph"}`
              ) : (
                "No Gust"
              )}
            </td>
          </tr>

          <tr className={darkTheme === "true" ? "table" : "table-light"}>
            <td>
              Max Speed <small>(30 Min)</small>:
            </td>
            <td>
              {maxSpeed && maxSpeed !== -Infinity ? (
                <span
                  className={
                    maxSpeed > 15 && maxSpeed < 26
                      ? "yellow"
                      : maxSpeed > 25
                      ? "red"
                      : "green"
                  }
                >
                  {maxSpeed === 1
                    ? "1"
                    : Math.round(
                        maxSpeed * (speedUnit === "false" ? 1.151 : 1)
                      )}{" "}
                  {speedUnit === "true" && maxSpeed === 1
                    ? "kt"
                    : speedUnit === "true" && maxSpeed > 1
                    ? "kts"
                    : "mph"}
                </span>
              ) : (
                `0 ${speedUnit === "true" ? "kts" : "mph"}`
              )}
            </td>
          </tr>
          <tr className={darkTheme === "true" ? "table" : "table-light"}>
            <td>
              Max Gust <small>(30 Min)</small>:
            </td>
            <td>
              {maxGust && maxGust !== -Infinity ? (
                <span
                  className={
                    maxGust > 15 && maxGust < 26
                      ? "yellow"
                      : maxGust > 25
                      ? "red"
                      : "green"
                  }
                >
                  {Math.round(maxGust * (speedUnit === "false" ? 1.151 : 1))}{" "}
                  {speedUnit === "true" ? "kts" : "mph"}
                </span>
              ) : (
                "None"
              )}
            </td>
          </tr>

          <tr className={darkTheme === "true" ? "table" : "table-light"}>
            <td>Wind Direction:</td>
            <td>{direction ? `${direction}º` : speed === 0 ? `Calm` : null}</td>
          </tr>
          <tr className={darkTheme === "true" ? "table" : "table-light"}>
            <td>Variable Direction:</td>
            <td>
              {variableDirection1 && variableDirection2
                ? `${variableDirection1}º - ${variableDirection2}º`
                : "Steady"}
            </td>
          </tr>
          <tr className={darkTheme === "true" ? "table" : "table-light"}>
            <td>Density Altitude:</td>
            <td>
              {densityAlt && unitSetting === "true"
                ? densityAlt + "'"
                : !densityAlt
                ? "Field Level"
                : (densityAlt / 3.28).toFixed(0) + "M"}
            </td>
          </tr>
          <tr className={darkTheme === "true" ? "table" : "table-light"}>
            <td>Present Weather:</td>
            <td>
              {metarAbbr && metarDesc
                ? metarDesc + " " + metarAbbr
                : metarAbbr
                ? metarAbbr
                : "None"}
            </td>
          </tr>
          <tr className={darkTheme === "true" ? "table" : "table-light"}>
            <td>Sky Condition:</td>
            <td>
              {!skyCondition1 ? (
                "Unknown"
              ) : (
                <>
                  {skyCondition1}{" "}
                  {cloudCeiling1 && unitSetting === "true"
                    ? cloudCeiling1
                    : cloudCeiling1 && unitSetting === "false"
                    ? cloudCeilingM1
                    : null}{" "}
                  {skyCondition2 ? <br /> : null}{" "}
                  {skyCondition2 && cloudCeiling2 && unitSetting === "true"
                    ? `${skyCondition2} ${cloudCeiling2}`
                    : skyCondition2 && cloudCeiling2 && unitSetting === "false"
                    ? `${skyCondition2} ${cloudCeilingM2}`
                    : null}{" "}
                  {skyCondition3 ? <br /> : null}
                  {skyCondition3 && cloudCeiling3 && unitSetting === "true"
                    ? `${skyCondition3} ${cloudCeiling3}`
                    : skyCondition3 && cloudCeiling3 && unitSetting === "false"
                    ? `${skyCondition3} ${cloudCeilingM3}`
                    : null}
                </>
              )}
            </td>
          </tr>
          <tr className={darkTheme === "true" ? "table" : "table-light"}>
            <td>Visibility:</td>
            <td>
              {!visibility ? (
                "Unknown"
              ) : (
                <>{visibility < 1 ? visibility?.toFixed(2) : visibility} SM</>
              )}
            </td>
          </tr>
          <tr className={darkTheme === "true" ? "table" : "table-light"}>
            <td>Dew Point:</td>
            <td>
              {!dewPoint
                ? "Unknown"
                : tempSetting === "true"
                ? dewPoint + "ºF"
                : (((dewPoint - 32) * 5) / 9).toFixed(1) + "ºC"}
            </td>
          </tr>
          <tr className={darkTheme === "true" ? "table" : "table-light"}>
            <td>Pressure:</td>
            <td>{!pressure ? "Unknown" : pressure + '" Hg'}</td>
          </tr>
          <tr className={darkTheme === "true" ? "table" : "table-light"}>
            <td>Safety Card:</td>
            <td>
              <NavLink exact to="/safety">
                Click for safety
              </NavLink>
            </td>
          </tr>
          <tr className={darkTheme === "true" ? "table" : "table-light"}>
            <td>Trivia Game:</td>
            <td>
              <a
                href="https://csc-trivia.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                Click to play
              </a>
            </td>
          </tr>
          <tr className={darkTheme === "true" ? "table" : "table-light"}>
            <td>CSC Blog:</td>
            <td>
              <a
                href="https://www.skydivecsc.com/blog"
                rel="noreferrer"
                target="_blank"
              >
                Click to read
              </a>
            </td>
          </tr>
          <tr className={darkTheme === "true" ? "table" : "table-light"}>
            <td>Burble Manifest:</td>
            <td>
              <a href="https://dzm.burblesoft.com/jmp?dz_id=408&columns=5&display_menu=0&font_size=12" rel="noreferrer" target="_blank">
                Click to open
              </a>
            </td>
          </tr>
          <tr className={darkTheme === "true" ? "table" : "table-light"}>
            <td>Loading Area View:</td>
            <td>
              <a href="/loadingarea">Click to view</a>
            </td>
          </tr>
          <tr className={darkTheme === "true" ? "table" : "table-light"}>
            <td>Socials:</td>
            <td>
              <div className="detailed-logos">
                <a
                  href="https://www.facebook.com/groups/csc.experienced"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={fb} alt="fb" />
                </a>
                &nbsp;
                <a
                  href="https://www.instagram.com/skydivecsc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={ig} alt="ig" />
                </a>
                &nbsp;
                <a
                  href="https://chat.whatsapp.com/K4on8ni6xKd1nSta35CQAK"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={wa} alt="wa" />
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default DetailedPage;
