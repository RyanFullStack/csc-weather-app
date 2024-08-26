import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import GustChart from "../Gusts";
import WindsAloftLoading from "./windsaloft";
import arrow from "../../images/arrow.png";
import arrowright from "../../images/arrow-right.png";
import LoadingDots from "../LoadingDots";
import "./loadingarea.css";

function LoadingArea() {
  const {
    skyCondition1,
    skyCondition2,
    skyCondition3,
    cloudCeiling1,
    cloudCeiling2,
    cloudCeiling3,
    maxSpeed,
    maxGust,
    sunset,
    jumpruns,
    newSpot,
    newOffset,
    direction,
    darkTheme,
    speed,
    gustSpeed,
  } = useContext(WeatherContext);


  return (
    <div className="loadingarea-grid">
      <div className="loading-area-content-wind">
        <div className="wind-speed-loading">
          {speed > 25 ? <span className="red">{speed}</span> : speed}
          <div className="small">
            {speed === 1 ? (
              `kt`
            ) : speed > 25 ? (
              <span className="red">kts</span>
            ) : (
              `kts`
            )}
          </div>
        </div>
        <div className="wind-gusts">
          {gustSpeed > 0 && gustSpeed <= 15 ? (
            <span className="green gust">
              <div>&nbsp;Gusting:</div>
              <div>
                &nbsp;{gustSpeed}
                <small>kts</small>
              </div>
            </span>
          ) : gustSpeed > 15 && gustSpeed <= 25 ? (
            <span className="yellow gust">
              <div>&nbsp;Gusting:</div>
              <div>
                &nbsp;{gustSpeed}
                <small>kts</small>
              </div>
            </span>
          ) : gustSpeed > 25 ? (
            <span className="red gust">
              <div>&nbsp;Gusting:</div>
              <div>
                &nbsp;{gustSpeed}
                <small>kts</small>
              </div>
            </span>
          ) : (
            <span className="green">&nbsp;No Gust</span>
          )}
        </div>

        <div className="arrow-loading">
          <div className="wind-anamometer-loading">
            <img
              src={
                direction && direction > 0 && direction < 180
                  ? arrowright
                  : arrow
              }
              alt="Wind Direction"
              className="arrow"
              style={
                speed === 0
                  ? { transform: `rotate(250deg)` }
                  : { transform: `rotate(${direction}deg)` }
              }
            ></img>
          </div>
          <div className="wind-direction">
            {direction ? `From ${direction}º` : speed === 0 ? `Calm` : null}
          </div>
        </div>
      </div>

      <div className="loading-area-content">
        <GustChart />
      </div>

      <div className="loading-area-content" id="loading-details">
        {jumpruns.length === 0 ? <div className="no-jumprun"> Jumprun Loading<LoadingDots /></div> : jumpruns?.error ? (
          <div className="no-jumprun">No Jumprun Set</div>
        ) : null}
        <div className="wind-aloft-table-loading">
          <table>
            <tbody>
              {jumpruns[0]?.heading ? (
                <>
                  <tr
                    className={darkTheme === "true" ? "table" : "table-light"}
                  >
                    <td>Jump Run:</td>
                    <td>
                      {jumpruns[0].heading}º{" "}
                      <i
                        className="fas fa-plane"
                        style={{
                          transform: `rotate(${jumpruns[0].heading - 90}deg`,
                        }}
                      />
                    </td>
                  </tr>
                  <tr
                    className={darkTheme === "true" ? "table" : "table-light"}
                  >
                    <td>Green Light:</td>
                    <td>
                      {newSpot} {jumpruns[0].selectedSpot}
                    </td>
                  </tr>
                  <tr
                    className={darkTheme === "true" ? "table" : "table-light"}
                  >
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
                <td>Sunset:</td>
                <td>{sunset === null ? <LoadingDots /> : sunset}</td>
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
                      {maxSpeed === 1 ? "1 kt" : maxSpeed + " kts"}
                    </span>
                  ) : (
                    "0 kts"
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
                      {maxGust} kts
                    </span>
                  ) : (
                    "None"
                  )}
                </td>
              </tr>

              <tr className={darkTheme === "true" ? "table" : "table-light"}>
                <td>Sky Condition:</td>
                <td>
                  {!skyCondition1 ? (
                    "Unknown"
                  ) : (
                    <>
                      {skyCondition1} {cloudCeiling1}
                      {skyCondition2 ? <br /> : null}
                      {skyCondition2} {cloudCeiling2}
                      {skyCondition3 ? <br /> : null} {skyCondition3}{" "}
                      {cloudCeiling3}
                    </>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="loading-area-content">
        <WindsAloftLoading />
      </div>
    </div>
  );
}

export default LoadingArea;
