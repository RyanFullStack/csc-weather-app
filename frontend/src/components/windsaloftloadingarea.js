import { WeatherContext } from '../context/WeatherContext';
import { useContext } from 'react';

function WindsAloftLoading() {
    const { directions, speeds, temps, darkTheme, tempSetting } =
        useContext(WeatherContext);

    if (Object.keys(directions).length === 0 ||
        Object.keys(speeds).length === 0 ||
        Object.keys(temps).length === 0) {
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
                            <td>{tempSetting === 'true' ? "2,000'" : "609M"}</td>
                            <td>
                                {directions["2000"]}º{" "}
                                <i
                                    className="fas fa-chevron-up"
                                    style={{ transform: `rotate(${directions["2000"] + 180}deg)` }}
                                ></i>
                            </td>
                            <td>{speeds["2000"]} kts</td>
                            <td  style={{ color: calculateTemperatureColor(temps['2000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black' }}>
                                {tempSetting === "false"
                                    ? `${temps["2000"]}º C`
                                    : `${Math.round(temps["2000"] * (9 / 5) + 32)}º F`}
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
                            <td  style={{ color: calculateTemperatureColor(temps['4000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black'  }}>
                                {tempSetting === "false"
                                    ? `${temps["4000"]}º C`
                                    : `${Math.round(temps["4000"] * (9 / 5) + 32)}º F`}
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
                            <td  style={{ color: calculateTemperatureColor(temps['6000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black'  }}>
                                {tempSetting === "false"
                                    ? `${temps["6000"]}º C`
                                    : `${Math.round(temps["6000"] * (9 / 5) + 32)}º F`}
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
                            <td  style={{ color: calculateTemperatureColor(temps['8000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black'  }}>
                                {tempSetting === "false"
                                    ? `${temps["8000"]}º C`
                                    : `${Math.round(temps["8000"] * (9 / 5) + 32)}º F`}
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
                            <td  style={{ color: calculateTemperatureColor(temps['10000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black'  }}>
                                {tempSetting === "false"
                                    ? `${temps["10000"]}º C`
                                    : `${Math.round(temps["10000"] * (9 / 5) + 32)}º F`}
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
                            <td  style={{ color: calculateTemperatureColor(temps['12000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black'  }}>
                                {tempSetting === "false"
                                    ? `${temps["12000"]}º C`
                                    : `${Math.round(temps["12000"] * (9 / 5) + 32)}º F`}
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
                            <td style={{ color: calculateTemperatureColor(temps['14000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 0px black'  }}>
                                {tempSetting === "false"
                                    ? `${temps["14000"]}º C`
                                    : `${Math.round(temps["14000"] * (9 / 5) + 32)}º F`}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WindsAloftLoading
