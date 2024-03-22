import { WeatherContext } from "../../context/WeatherContext";
import { useContext } from "react";
import { calculateTemperatureColor } from "../utils";

function WindsAloftLoading() {
  const { directions, speeds, temps, darkTheme, received } =
    useContext(WeatherContext);

  if (directions?.error) {
    return <div className="loading">No Winds Aloft Found</div>;
  }

  if (
    Object.keys(directions)?.length === 0 ||
    Object.keys(speeds)?.length === 0 ||
    Object.keys(temps)?.length === 0
  ) {
    return <div className="loading">Winds Aloft Loading!</div>;
  }

  const receivedDate = new Date();
  receivedDate.setUTCHours(parseInt(received), 0, 0, 0);
  const localReceived = receivedDate.toLocaleTimeString("en-US", {
    timeZone: "America/Chicago",
    timeZoneName: "short",
    hour: "numeric",
  });
  const current = new Date().toLocaleTimeString("en-US", {
    timeZone: "America/Chicago",
    timeZoneName: "short",
    hour: "numeric",
  });

  return (
    <div className="wind-aloft-table">
      <div className="aloft-contents" id="aloft-loading">
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
            {Array.from({ length: 7 }, (_, index) => {
              const altitude = (index + 1) * 2000;
              const altitudeKey = `${altitude}`;

              return (
                <tr
                  className={darkTheme === "true" ? "table" : "table-light"}
                  key={altitudeKey}
                >
                  <td>{altitude}'</td>
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
                  <td>{speeds[altitudeKey]} kts</td>
                  <td
                    style={{
                      color: calculateTemperatureColor(
                        temps[altitudeKey] * (9 / 5) + 32
                      ),
                      fontWeight: "bold",
                      textShadow: "2px 2px 1px black",
                    }}
                  >
                    {`${Math.round(temps[altitudeKey] * (9 / 5) + 32)}º F`}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="aloft-title">
          Winds Received at {localReceived}
          {localReceived === current ? ", valid now" : null}
        </div>
      </div>
    </div>
  );
}

export default WindsAloftLoading;
