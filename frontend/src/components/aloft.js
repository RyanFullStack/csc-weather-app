import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import "./aloft.css";

function WindsAloft() {
  const { directions, speeds, temps, received, darkTheme, tempSetting } =
    useContext(WeatherContext);

  const timeZoneOffset = -5;
  let adjustedHour = (parseInt(received) + timeZoneOffset + 24) % 24;
  const convertedHour = ((adjustedHour + 11) % 12) + 1;
  const period = adjustedHour >= 12 ? "PM" : "AM";

  if (!directions || !speeds || !temps || !received) {
    return <div className="loading">Winds Aloft Loading!</div>;
  }

  const calculateTemperatureColor = (temperature) => {
    const minTemperature = 0;
    const maxTemperature = 70;

    temperature = Math.max(minTemperature, Math.min(maxTemperature, temperature));

    const normalizedValue = (temperature - minTemperature) / (maxTemperature - minTemperature);

    const r = Math.round(255 * normalizedValue);
    const g = 0;
    const b = Math.round(255 * (1 - normalizedValue));

    return `rgb(${r}, ${g}, ${b})`;
  };



  return (
    <div className="wind-aloft-table">
      <div className="aloft-title">
        Winds Received at {convertedHour}
        {period} CDT, valid now
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
            <tr className={darkTheme === "true" ? "table" : "table-light"}>
              <td>{tempSetting === 'true' ? "1,000'" : "304M"}</td>
              <td>
                {directions["1000"]}º{" "}
                <i
                  className="fas fa-chevron-up"
                  style={{ transform: `rotate(${directions["1000"] + 180}deg)` }}
                ></i>
              </td>
              <td>{speeds["1000"]} kts</td>
              <td style={{ color: calculateTemperatureColor((temps['1000'] * (9 / 5) + 32)), fontWeight: 'bold', textShadow: '2px 2px 0px black' }}>
                {tempSetting === "false"
                  ? `${temps["1000"]}º C`
                  : `${Math.round(temps["1000"] * (9 / 5) + 32)}º F`}
              </td>
            </tr>
            <tr className={darkTheme === "true" ? "table" : "table-light"}>
              <td>{tempSetting === 'true' ? "2,000'" : "609M"}</td>
              <td>
                {directions["2000"]}º{" "}
                <i
                  className="fas fa-chevron-up"
                  style={{ transform: `rotate(${directions["2000"] + 180}deg)` }}
                ></i>
              </td>
              <td>{speeds["2000"]} kts</td>
              <td style={{ color: calculateTemperatureColor(temps['2000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black' }}>
                {tempSetting === "false"
                  ? `${temps["2000"]}º C`
                  : `${Math.round(temps["2000"] * (9 / 5) + 32)}º F`}
              </td>
            </tr>
            <tr className={darkTheme === "true" ? "table" : "table-light"}>
              <td>{tempSetting === 'true' ? "3,000'" : "914M"}</td>
              <td>
                {directions["3000"]}º{" "}
                <i
                  className="fas fa-chevron-up"
                  style={{ transform: `rotate(${directions["3000"] + 180}deg)` }}
                ></i>
              </td>
              <td>{speeds["3000"]} kts</td>
              <td style={{ color: calculateTemperatureColor(temps['3000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black'    }}>
                {tempSetting === "false"
                  ? `${temps["3000"]}º C`
                  : `${Math.round(temps["3000"] * (9 / 5) + 32)}º F`}
              </td>
            </tr>
            <tr className={darkTheme === "true" ? "table" : "table-light"}>
              <td>{tempSetting === 'true' ? "4,000'" : "1219M"}</td>
              <td>
                {directions["4000"]}º{" "}
                <i
                  className="fas fa-chevron-up"
                  style={{ transform: `rotate(${directions["4000"] + 180}deg)` }}
                ></i>
              </td>
              <td>{speeds["4000"]} kts</td>
              <td style={{ color: calculateTemperatureColor(temps['4000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black'    }}>
                {tempSetting === "false"
                  ? `${temps["4000"]}º C`
                  : `${Math.round(temps["4000"] * (9 / 5) + 32)}º F`}
              </td>
            </tr>
            <tr className={darkTheme === "true" ? "table" : "table-light"}>
              <td>{tempSetting === 'true' ? "5,000'" : "1524M"}</td>
              <td>
                {directions["5000"]}º{" "}
                <i
                  className="fas fa-chevron-up"
                  style={{ transform: `rotate(${directions["5000"] + 180}deg)` }}
                ></i>
              </td>
              <td>{speeds["5000"]} kts</td>
              <td style={{ color: calculateTemperatureColor(temps['5000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black'    }}>
                {tempSetting === "false"
                  ? `${temps["5000"]}º C`
                  : `${Math.round(temps["5000"] * (9 / 5) + 32)}º F`}
              </td>
            </tr>
            <tr className={darkTheme === "true" ? "table" : "table-light"}>
              <td>{tempSetting === 'true' ? "6,000'" : "1828M"}</td>
              <td>
                {directions["6000"]}º{" "}
                <i
                  className="fas fa-chevron-up"
                  style={{ transform: `rotate(${directions["6000"] + 180}deg)` }}
                ></i>
              </td>
              <td>{speeds["6000"]} kts</td>
              <td style={{ color: calculateTemperatureColor(temps['6000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black'    }}>
                {tempSetting === "false"
                  ? `${temps["6000"]}º C`
                  : `${Math.round(temps["6000"] * (9 / 5) + 32)}º F`}
              </td>
            </tr>
            <tr className={darkTheme === "true" ? "table" : "table-light"}>
              <td>{tempSetting === 'true' ? "7,000'" : "2133M"}</td>
              <td>
                {directions["7000"]}º{" "}
                <i
                  className="fas fa-chevron-up"
                  style={{ transform: `rotate(${directions["7000"] + 180}deg)` }}
                ></i>
              </td>
              <td>{speeds["7000"]} kts</td>
              <td style={{ color: calculateTemperatureColor(temps['7000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black'    }}>
                {tempSetting === "false"
                  ? `${temps["7000"]}º C`
                  : `${Math.round(temps["7000"] * (9 / 5) + 32)}º F`}
              </td>
            </tr>
            <tr className={darkTheme === "true" ? "table" : "table-light"}>
              <td>{tempSetting === 'true' ? "8,000'" : "2438M"}</td>
              <td>
                {directions["8000"]}º{" "}
                <i
                  className="fas fa-chevron-up"
                  style={{ transform: `rotate(${directions["8000"] + 180}deg)` }}
                ></i>
              </td>
              <td>{speeds["8000"]} kts</td>
              <td style={{ color: calculateTemperatureColor(temps['8000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black'    }}>
                {tempSetting === "false"
                  ? `${temps["8000"]}º C`
                  : `${Math.round(temps["8000"] * (9 / 5) + 32)}º F`}
              </td>
            </tr>
            <tr className={darkTheme === "true" ? "table" : "table-light"}>
              <td>{tempSetting === 'true' ? "9,000'" : "2743M"}</td>
              <td>
                {directions["9000"]}º{" "}
                <i
                  className="fas fa-chevron-up"
                  style={{ transform: `rotate(${directions["9000"] + 180}deg)` }}
                ></i>
              </td>
              <td>{speeds["9000"]} kts</td>
              <td style={{ color: calculateTemperatureColor(temps['9000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black'    }}>
                {tempSetting === "false"
                  ? `${temps["9000"]}º C`
                  : `${Math.round(temps["9000"] * (9 / 5) + 32)}º F`}
              </td>
            </tr>
            <tr className={darkTheme === "true" ? "table" : "table-light"}>
              <td>{tempSetting === 'true' ? "10,000'" : "3048M"}</td>
              <td>
                {directions["10000"]}º{" "}
                <i
                  className="fas fa-chevron-up"
                  style={{ transform: `rotate(${directions["10000"] + 180}deg)` }}
                ></i>
              </td>
              <td>{speeds["10000"]} kts</td>
              <td style={{ color: calculateTemperatureColor(temps['10000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black'    }}>
                {tempSetting === "false"
                  ? `${temps["10000"]}º C`
                  : `${Math.round(temps["10000"] * (9 / 5) + 32)}º F`}
              </td>
            </tr>
            <tr className={darkTheme === "true" ? "table" : "table-light"}>
              <td>{tempSetting === 'true' ? "11,000'" : "3352M"}</td>
              <td>
                {directions["11000"]}º{" "}
                <i
                  className="fas fa-chevron-up"
                  style={{ transform: `rotate(${directions["11000"] + 180}deg)` }}
                ></i>
              </td>
              <td>{speeds["11000"]} kts</td>
              <td style={{ color: calculateTemperatureColor(temps['11000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black'    }}>
                {tempSetting === "false"
                  ? `${temps["11000"]}º C`
                  : `${Math.round(temps["11000"] * (9 / 5) + 32)}º F`}
              </td>
            </tr>
            <tr className={darkTheme === "true" ? "table" : "table-light"}>
              <td>{tempSetting === 'true' ? "12,000'" : "3657M"}</td>
              <td>
                {directions["12000"]}º{" "}
                <i
                  className="fas fa-chevron-up"
                  style={{ transform: `rotate(${directions["12000"] + 180}deg)` }}
                ></i>
              </td>
              <td>{speeds["12000"]} kts</td>
              <td style={{ color: calculateTemperatureColor(temps['12000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black'    }}>
                {tempSetting === "false"
                  ? `${temps["12000"]}º C`
                  : `${Math.round(temps["12000"] * (9 / 5) + 32)}º F`}
              </td>
            </tr>
            <tr className={darkTheme === "true" ? "table" : "table-light"}>
              <td>{tempSetting === 'true' ? "13,000'" : "3962M"}</td>
              <td>
                {directions["13000"]}º{" "}
                <i
                  className="fas fa-chevron-up"
                  style={{ transform: `rotate(${directions["13000"] + 180}deg)` }}
                ></i>
              </td>
              <td>{speeds["13000"]} kts</td>
              <td style={{ color: calculateTemperatureColor(temps['13000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black'   }}>
                {tempSetting === "false"
                  ? `${temps["13000"]}º C`
                  : `${Math.round(temps["13000"] * (9 / 5) + 32)}º F`}
              </td>
            </tr>
            <tr className={darkTheme === "true" ? "table" : "table-light"}>
              <td>{tempSetting === 'true' ? "14,000'" : "4267M"}</td>
              <td>
                {directions["14000"]}º{" "}
                <i
                  className="fas fa-chevron-up"
                  style={{ transform: `rotate(${directions["14000"] + 180}deg)` }}
                ></i>
              </td>
              <td>{speeds["14000"]} kts</td>
              <td style={{ color: calculateTemperatureColor(temps['14000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black'    }}>
                {tempSetting === "false"
                  ? `${temps["14000"]}º C`
                  : `${Math.round(temps["14000"] * (9 / 5) + 32)}º F`}
              </td>
            </tr>
            <tr className={darkTheme === "true" ? "table" : "table-light"}>
              <td>{tempSetting === 'true' ? "15,000'" : "4572M"}</td>
              <td>
                {directions["15000"]}º{" "}
                <i
                  className="fas fa-chevron-up"
                  style={{ transform: `rotate(${directions["15000"] + 180}deg)` }}
                ></i>
              </td>
              <td>{speeds["15000"]} kts</td>
              <td style={{ color: calculateTemperatureColor(temps['15000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black'    }}>
                {tempSetting === "false"
                  ? `${temps["15000"]}º C`
                  : `${Math.round(temps["15000"] * (9 / 5) + 32)}º F`}
              </td>
            </tr>
            <tr className={darkTheme === "true" ? "table" : "table-light"}>
              <td>{tempSetting === 'true' ? "16,000'" : "4876M"}</td>
              <td>
                {directions["16000"]}º{" "}
                <i
                  className="fas fa-chevron-up"
                  style={{ transform: `rotate(${directions["16000"] + 180}deg)` }}
                ></i>
              </td>
              <td>{speeds["16000"]} kts</td>
              <td style={{ color: calculateTemperatureColor(temps['16000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black'    }}>
                {tempSetting === "false"
                  ? `${temps["16000"]}º C`
                  : `${Math.round(temps["16000"] * (9 / 5) + 32)}º F`}
              </td>
            </tr>
            <tr className={darkTheme === "true" ? "table" : "table-light"}>
              <td>{tempSetting === 'true' ? "17,000'" : "5181M"}</td>
              <td>
                {directions["17000"]}º{" "}
                <i
                  className="fas fa-chevron-up"
                  style={{ transform: `rotate(${directions["17000"] + 180}deg)` }}
                ></i>
              </td>
              <td>{speeds["17000"]} kts</td>
              <td style={{ color: calculateTemperatureColor(temps['17000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black'    }}>
                {tempSetting === "false"
                  ? `${temps["17000"]}º C`
                  : `${Math.round(temps["17000"] * (9 / 5) + 32)}º F`}
              </td>
            </tr>
            <tr className={darkTheme === "true" ? "table" : "table-light"}>
              <td>{tempSetting === 'true' ? "18,000'" : "5486M"}</td>
              <td>
                {directions["18000"]}º{" "}
                <i
                  className="fas fa-chevron-up"
                  style={{ transform: `rotate(${directions["18000"] + 180}deg)` }}
                ></i>
              </td>
              <td>{speeds["18000"]} kts</td>
              <td style={{ color: calculateTemperatureColor(temps['18000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black'    }}>
                {tempSetting === "false"
                  ? `${temps["18000"]}º C`
                  : `${Math.round(temps["18000"] * (9 / 5) + 32)}º F`}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WindsAloft;
