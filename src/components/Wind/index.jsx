import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import arrow from "../../images/arrow.png";
import arrowright from "../../images/arrow-right.png";
import "./anamometer.css";

function Wind() {
  const {
    speed,
    gustSpeed,
    direction,
    metarAbbr,
    metarDesc,
    skyCondition1,
    skyCondition2,
    skyCondition3,
    cloudCeiling1,
    cloudCeiling2,
    cloudCeiling3,
    cloudCeilingM1,
    cloudCeilingM2,
    cloudCeilingM3,
    speedUnit,
    unitSetting,
  } = useContext(WeatherContext);


  return (
    <div className="wind-component">
      <div className="wind-component-left">
        <div className="wind-speed">
          {speed > 25 ? (
            <span className="red">
              {Math.round(speed * (speedUnit === "false" ? 1.151 : 1))}
            </span>
          ) : (
            Math.round(speed * (speedUnit === "false" ? 1.151 : 1))
          )}
          <div className="small">
            {speed === 1 ? (
              `kt`
            ) : speed > 25 ? (
              <span className="red">
                {speedUnit === "true" ? "kts" : "mph"}
              </span>
            ) : speedUnit === "true" ? (
              "kts"
            ) : (
              "mph"
            )}
          </div>
        </div>
        <div className="wind-gusts">
          {gustSpeed > 0 && gustSpeed <= 15 ? (
            <span className="green">
              Gusting:{" "}
              {Math.round(gustSpeed * (speedUnit === "false" ? 1.151 : 1))}
              <small>{speedUnit === "true" ? "kts" : "mph"}</small>
            </span>
          ) : gustSpeed > 15 && gustSpeed <= 25 ? (
            <span className="yellow">
              Gusting:{" "}
              {Math.round(gustSpeed * (speedUnit === "false" ? 1.151 : 1))}
              <small>{speedUnit === "true" ? "kts" : "mph"}</small>
            </span>
          ) : gustSpeed > 25 ? (
            <span className="red">
              Gusting:{" "}
              {Math.round(gustSpeed * (speedUnit === "false" ? 1.151 : 1))}
              <small>{speedUnit === "true" ? "kts" : "mph"}</small>
            </span>
          ) : (
            <span className="green">No Gusts</span>
          )}
        </div>

        <div className="wind-direction">
          {direction ? `From ${direction}º` : speed === 0 ? `Calm` : null}
        </div>
      </div>
      <div className="wind-component-right">
        <div className="wind-anamometer">
          <img
            src={
              direction && direction > 0 && direction < 180 ? arrowright : arrow
            }
            alt="Wind Direction"
            className="arrow"
            style={speed === 0 ? { transform: `rotate(250deg)` } : { transform: `rotate(${direction}deg)` }}
          ></img>
        </div>
        <div className="metar-abbr">
        <div className={`metar ${skyCondition2 && skyCondition3 ? 'mini' : ''}`}>
            {metarDesc && metarAbbr
              ? `${metarDesc}  ${metarAbbr}`
              : metarAbbr
              ? `${metarAbbr}`
              : null}
          </div>
          <div className={`sky-conditions ${skyCondition2 && skyCondition3 ? 'mini' : ''}`}>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wind;
