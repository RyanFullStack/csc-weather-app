import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import {
  calculateTemperatureColor,
  formatLocalTime,
  getCurrentLocalTime,
} from "../utils";
import "./aloft.css";

function WindsAloft() {
  const {
    directions,
    speeds,
    temps,
    received,
    darkTheme,
    tempSetting,
    unitSetting,
    speedUnit,
  } = useContext(WeatherContext);

  if (directions?.error) {
    return <div className="loading">No Winds Aloft Found</div>;
  }

  if (!directions || !speeds || !temps || !received) {
    return <div className="loading">Winds Aloft Loading!</div>;
  }

  const localReceived = formatLocalTime(received);
  const current = getCurrentLocalTime();

  return (
    <div className="wind-aloft-table">
      <div className="aloft-title">
        Winds Received at {localReceived}
        {localReceived === current ? ", valid now" : null}
      </div>
      <div className="aloft-contents">
        <table>
          <thead>
            <tr>
              <th>Altitude</th>
              <th>Direction</th>
              <th>Speed</th>
              <th>Temp</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 18 }, (_, index) => {
              const altitude =
                unitSetting === "true"
                  ? `${index + 1},000'`
                  : `${(index + 1) * 304}M`;
              const altitudeKey = `${(index + 1) * 1000}`;

              return (
                <tr
                  className={darkTheme === "true" ? "table" : "table-light"}
                  key={altitudeKey}
                >
                  <td>{altitude}</td>
                  <td>
                    {directions[altitudeKey]}º{" "}
                    <i
                      className="fas fa-chevron-up"
                      style={{
                        transform: `rotate(${
                          directions[altitudeKey] + 180
                        }deg)`,
                      }}
                    ></i>
                  </td>
                  <td>
                    {speedUnit === "true"
                      ? `${speeds[altitudeKey]} kts`
                      : `${Math.round(speeds[altitudeKey] * 1.151)} mph`}
                  </td>
                  <td
                    style={{
                      color: calculateTemperatureColor(
                        temps[altitudeKey] * (9 / 5) + 32
                      ),
                      fontWeight: "bold",
                      textShadow: "1px 1px 2px black",
                    }}
                  >
                    {tempSetting === "false"
                      ? `${temps[altitudeKey]}º C`
                      : `${Math.round(temps[altitudeKey] * (9 / 5) + 32)}º F`}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WindsAloft;
