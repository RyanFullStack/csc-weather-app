import GustChart from './gusts';
import { WeatherContext } from '../context/WeatherContext';
import { useContext, useState, useEffect } from 'react';
import arrow from '../images/arrow.png'
import './loadingarea.css'

function LoadingArea() {
    const { maxSpeed, maxGust, sunset, jumpruns, newSpot, newOffset, direction, directions, speeds, temps, darkTheme, tempSetting, speed, gustSpeed } =
        useContext(WeatherContext);
    const [gusting, setGusting] = useState('')
    const [trackDirection, setTrackDirection] = useState('')


    useEffect(() => {
        if (direction === null) {
            setTrackDirection('');
        } else {
            const currentDirection = trackDirection ? parseInt(trackDirection.split('-')[1]) : null;
            let normalizedDirection;

            if (currentDirection !== null) {
                const clockwiseDistance = (direction - currentDirection + 360) % 360;
                const counterclockwiseDistance = (currentDirection - direction + 360) % 360;

                if (clockwiseDistance <= counterclockwiseDistance) {
                    normalizedDirection = direction;
                } else {
                    normalizedDirection = direction >= 0 ? direction - 360 : direction;
                }
            } else {
                normalizedDirection = direction;
            }

            setTrackDirection(`rotate-${normalizedDirection}`);
        }
    }, [direction, trackDirection]);

    useEffect(() => {
        if (gustSpeed) {
            setGusting('gusting')
        } else {
            setGusting()
        }

    }, [gustSpeed])

    return (
        <div className="loadingarea-grid">

            <div className="loading-area-content-wind">
                <div className="wind-speed-loading">
                    {speed > 25 ? <span className="red">{speed}</span> : speed}
                    <div className="small">{(speed === 1) ? `kt` : speed > 25 ? <span className="red">kts</span> : `kts`}</div>
                </div>
                <div className={`wind-gusts ${gusting}`}>
                    {gustSpeed > 0 && gustSpeed <= 15 ? <span className="green gust"><div>Gusting:</div><div>{gustSpeed}<small>kts</small></div></span> : gustSpeed > 15 && gustSpeed <= 25 ? <span className="yellow gust"><div>Gusting:</div><div>{gustSpeed}<small>kts</small></div></span> : gustSpeed > 25 ? <span className="red gust"><div>Gusting:</div><div>{gustSpeed}<small>kts</small></div></span> : <span className="green">&nbsp;No Gusts</span>}
                </div>

                <div className='arrow-loading'>
                    <div className="wind-anamometer-loading">
                        <img src={arrow} alt='Wind Direction' className={`arrow  ${trackDirection}`}></img>
                    </div>
                    <div className="wind-direction">
                        {direction ? `From ${direction}º` : speed === 0 ? `Calm` : null}
                    </div>
                </div>

            </div>



            <div className="loading-area-content">
                <GustChart />
            </div>



            <div className="loading-area-content">
                {!jumpruns[0] ? <div className='no-jumprun'>
                    No Jumprun Set
                </div> : null}
                <table>
                    <tbody>
                        {jumpruns[0] ?
                            <>
                                <tr className={darkTheme === "true" ? "table" : "table-light"}>
                                    <td>Jump Run:</td>
                                    <td>{jumpruns[0]?.heading}º</td>
                                </tr>
                                <tr className={darkTheme === "true" ? "table" : "table-light"}>
                                    <td>Spot:</td>
                                    <td>{newSpot} {jumpruns[0].selectedSpot}</td>
                                </tr>
                                <tr className={darkTheme === "true" ? "table" : "table-light"}>
                                    <td>Offset:</td>
                                    <td>{newOffset} {jumpruns[0].selectedOffset}</td>
                                </tr>
                            </>
                            : null}

                        {jumpruns[0]?.groundSpeed ?
                            <tr className={darkTheme === "true" ? "table" : "table-light"}>
                                <td>Est. Ground Speed:</td>
                                <td>{jumpruns[0]?.groundSpeed} kts</td>
                            </tr>
                            : null}
                        <tr className={darkTheme === "true" ? "table" : "table-light"}>
                            <td>Sunset:</td>
                            <td>{sunset}</td>
                        </tr>
                        <tr className={darkTheme === "true" ? "table" : "table-light"}>
                            <td>Max Speed <small>(30 Min)</small>:</td>
                            <td>{maxSpeed && maxSpeed !== -Infinity ? <span className={maxSpeed > 15 && maxSpeed < 26 ? 'yellow' : maxSpeed > 25 ? 'red' : 'green'}>{maxSpeed === 1 ? '1 kt' : maxSpeed + ' kts'}</span> : '0 kts'}</td>
                        </tr>
                        <tr className={darkTheme === "true" ? "table" : "table-light"}>
                            <td>Max Gust <small>(30 Min)</small>:</td>
                            <td>{maxGust && maxGust !== -Infinity ? <span className={maxGust > 15 && maxGust < 26 ? 'yellow' : maxGust > 25 ? 'red' : 'green'}>{maxGust} kts</span> : 'None'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>



            <div className="loading-area-content">
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
                                    <td>
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
                                    <td>
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
                                    <td>
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
                                    <td>
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
                                    <td>
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
                                    <td>
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
                                    <td>
                                        {tempSetting === "false"
                                            ? `${temps["14000"]}º C`
                                            : `${Math.round(temps["14000"] * (9 / 5) + 32)}º F`}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LoadingArea;
