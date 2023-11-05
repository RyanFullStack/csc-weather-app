import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { calculateTemperatureColor } from "./utils";
import "./aloft.css";

function WindsAloft() {
  const { directions, speeds, temps, received, darkTheme, tempSetting, unitSetting } =
    useContext(WeatherContext);

  if (!directions || !speeds || !temps || !received) {
    return <div className="loading">Winds Aloft Loading!</div>;
  }

  const receivedDate = new Date()
  receivedDate.setUTCHours(parseInt(received), 0, 0, 0)
  const localReceived = receivedDate.toLocaleTimeString('en-US', { timeZone: 'America/Chicago', timeZoneName: 'short', hour: 'numeric' })


  return (
    <div className="wind-aloft-table">
      <div className="aloft-title">
        Winds Received at {localReceived}, valid now
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
              const altitude = unitSetting === 'true' ? `${index + 1},000'` : `${index * 304 + 304}M`;
              const altitudeKey = `${index * 1000}`;

              return (
                <tr className={darkTheme === 'true' ? 'table' : 'table-light'} key={altitudeKey}>
                  <td>{altitude}</td>
                  <td>
                    {directions[altitudeKey]}º{' '}
                    <i
                      className="fas fa-chevron-up"
                      style={{ transform: `rotate(${directions[altitudeKey] + 180}deg)` }}
                    ></i>
                  </td>
                  <td>{speeds[altitudeKey]} kts</td>
                  <td style={{
                    color: calculateTemperatureColor(temps[altitudeKey] * (9 / 5) + 32),
                    fontWeight: 'bold',
                    textShadow: '1px 1px 2px black',
                  }}>
                    {tempSetting === 'false'
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
