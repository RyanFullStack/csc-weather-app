import { WeatherContext } from '../context/WeatherContext';
import { useContext } from 'react';

function WindsAloftLoading() {
    const { directions, speeds, temps, darkTheme, tempSetting, unitSetting } =
        useContext(WeatherContext);

    if (Object.keys(directions).length === 0 ||
        Object.keys(speeds).length === 0 ||
        Object.keys(temps).length === 0) {
        return <div className="loading">Winds Aloft Loading!</div>;
    }

    const calculateTemperatureColor = (temperature) => {
        const minTemperature = 25;
        const maxTemperature = 70;
        const midTemperature = (minTemperature + maxTemperature) / 2;

        temperature = Math.max(minTemperature, Math.min(maxTemperature, temperature));

        let r, g, b;

        if (temperature <= midTemperature) {
            const normalizedValue = (temperature - minTemperature) / (midTemperature - minTemperature);
            r = Math.round(255 * normalizedValue);
            b = Math.round(255 + (255 - 255 * normalizedValue));
            g = Math.round(0.5 * (255 - 255 * normalizedValue));
        } else {
            const normalizedValue = (temperature - midTemperature) / (maxTemperature - midTemperature);
            r = Math.round(255 + (255 - 255 * normalizedValue));
            b = Math.round(255 * (1 - normalizedValue));
            g = 0;
        }

        return `rgb(${r}, ${g}, ${b})`;
    };



    return (
        <div className="wind-aloft-table">
            <div className="aloft-contents" id='aloft-loading'>
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
                            <td>{unitSetting === 'true' ? "2,000'" : "609M"}</td>
                            <td>
                                {directions["2000"]}º{" "}
                                <i
                                    className="fas fa-chevron-up"
                                    style={{ transform: `rotate(${directions["2000"] + 180}deg)` }}
                                ></i>
                            </td>
                            <td>{speeds["2000"]} kts</td>
                            <td  style={{ color: calculateTemperatureColor(temps['2000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 1px black' }}>
                                {tempSetting === "false"
                                    ? `${temps["2000"]}º C`
                                    : `${Math.round(temps["2000"] * (9 / 5) + 32)}º F`}
                            </td>
                        </tr>
                        <tr className={darkTheme === "true" ? "table" : "table-light"}>
                            <td>{unitSetting === 'true' ? "4,000'" : "1219M"}</td>
                            <td>
                                {directions["4000"]}º{" "}
                                <i
                                    className="fas fa-chevron-up"
                                    style={{ transform: `rotate(${directions["4000"] + 180}deg)` }}
                                ></i>
                            </td>
                            <td>{speeds["4000"]} kts</td>
                            <td  style={{ color: calculateTemperatureColor(temps['4000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 1px black'  }}>
                                {tempSetting === "false"
                                    ? `${temps["4000"]}º C`
                                    : `${Math.round(temps["4000"] * (9 / 5) + 32)}º F`}
                            </td>
                        </tr>
                        <tr className={darkTheme === "true" ? "table" : "table-light"}>
                            <td>{unitSetting === 'true' ? "6,000'" : "1828M"}</td>
                            <td>
                                {directions["6000"]}º{" "}
                                <i
                                    className="fas fa-chevron-up"
                                    style={{ transform: `rotate(${directions["6000"] + 180}deg)` }}
                                ></i>
                            </td>
                            <td>{speeds["6000"]} kts</td>
                            <td  style={{ color: calculateTemperatureColor(temps['6000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 1px black'  }}>
                                {tempSetting === "false"
                                    ? `${temps["6000"]}º C`
                                    : `${Math.round(temps["6000"] * (9 / 5) + 32)}º F`}
                            </td>
                        </tr>
                        <tr className={darkTheme === "true" ? "table" : "table-light"}>
                            <td>{unitSetting === 'true' ? "8,000'" : "2438M"}</td>
                            <td>
                                {directions["8000"]}º{" "}
                                <i
                                    className="fas fa-chevron-up"
                                    style={{ transform: `rotate(${directions["8000"] + 180}deg)` }}
                                ></i>
                            </td>
                            <td>{speeds["8000"]} kts</td>
                            <td  style={{ color: calculateTemperatureColor(temps['8000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 1px black'  }}>
                                {tempSetting === "false"
                                    ? `${temps["8000"]}º C`
                                    : `${Math.round(temps["8000"] * (9 / 5) + 32)}º F`}
                            </td>
                        </tr>
                        <tr className={darkTheme === "true" ? "table" : "table-light"}>
                            <td>{unitSetting === 'true' ? "10,000'" : "3048M"}</td>
                            <td>
                                {directions["10000"]}º{" "}
                                <i
                                    className="fas fa-chevron-up"
                                    style={{ transform: `rotate(${directions["10000"] + 180}deg)` }}
                                ></i>
                            </td>
                            <td>{speeds["10000"]} kts</td>
                            <td  style={{ color: calculateTemperatureColor(temps['10000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 1px black'  }}>
                                {tempSetting === "false"
                                    ? `${temps["10000"]}º C`
                                    : `${Math.round(temps["10000"] * (9 / 5) + 32)}º F`}
                            </td>
                        </tr>
                        <tr className={darkTheme === "true" ? "table" : "table-light"}>
                            <td>{unitSetting === 'true' ? "12,000'" : "3657M"}</td>
                            <td>
                                {directions["12000"]}º{" "}
                                <i
                                    className="fas fa-chevron-up"
                                    style={{ transform: `rotate(${directions["12000"] + 180}deg)` }}
                                ></i>
                            </td>
                            <td>{speeds["12000"]} kts</td>
                            <td  style={{ color: calculateTemperatureColor(temps['12000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 1px black'  }}>
                                {tempSetting === "false"
                                    ? `${temps["12000"]}º C`
                                    : `${Math.round(temps["12000"] * (9 / 5) + 32)}º F`}
                            </td>
                        </tr>
                        <tr className={darkTheme === "true" ? "table" : "table-light"}>
                            <td>{unitSetting === 'true' ? "14,000'" : "4267M"}</td>
                            <td>
                                {directions["14000"]}º{" "}
                                <i
                                    className="fas fa-chevron-up"
                                    style={{ transform: `rotate(${directions["14000"] + 180}deg)` }}
                                ></i>
                            </td>
                            <td>{speeds["14000"]} kts</td>
                            <td style={{ color: calculateTemperatureColor(temps['14000'] * (9 / 5) + 32), fontWeight: 'bold', textShadow: '2px 2px 1px black'  }}>
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
