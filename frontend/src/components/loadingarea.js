import { WeatherContext } from '../context/WeatherContext';
import { useContext, useState, useEffect } from 'react';
import GustChart from './gusts';
import WindsAloftLoading from './windsaloftloadingarea';
import arrow from '../images/arrow.png'
import './loadingarea.css'

function LoadingArea() {
    const { skyCondition1, skyCondition2, skyCondition3, cloudCeiling1, cloudCeiling2, cloudCeiling3, maxSpeed, maxGust, sunset, jumpruns, newSpot, newOffset, direction, darkTheme, speed, gustSpeed } =
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
                    {gustSpeed > 0 && gustSpeed <= 15 ? <span className="green gust"><div>&nbsp;Gusting:</div><div>&nbsp;{gustSpeed}<small>kts</small></div></span> : gustSpeed > 15 && gustSpeed <= 25 ? <span className="yellow gust"><div>&nbsp;Gusting:</div><div>&nbsp;{gustSpeed}<small>kts</small></div></span> : gustSpeed > 25 ? <span className="red gust"><div>&nbsp;Gusting:</div><div>&nbsp;{gustSpeed}<small>kts</small></div></span> : <span className="green">&nbsp;No Gusts</span>}
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



            <div className="loading-area-content" id='loading-details'>
                {!jumpruns[0]?.heading ? <div className='no-jumprun'>
                    No Jumprun Set
                </div> : null}
                <table>
                    <tbody>
                        {jumpruns[0]?.heading ?
                            <>
                                <tr className={darkTheme === "true" ? "table" : "table-light"}>
                                    <td>Jump Run:</td>
                                    <td>{jumpruns[0].heading}º <i className='fas fa-plane' style={{ transform: `rotate(${jumpruns[0].heading - 90}deg`}}/></td>
                                </tr>
                                <tr className={darkTheme === "true" ? "table" : "table-light"}>
                                    <td>Green Light:</td>
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
                        <tr className={darkTheme === "true" ? "table" : "table-light"}>
                        <td>Sky Condition:</td>
                        <td>{skyCondition1} {cloudCeiling1}{skyCondition2 ? <br /> : null}{skyCondition2} {cloudCeiling2}{skyCondition3 ? <br /> : null} {skyCondition3} {cloudCeiling3}</td>
                    </tr>
                    </tbody>
                </table>
            </div>



            <div className="loading-area-content">
                <WindsAloftLoading />
            </div>
        </div>
    )
}


export default LoadingArea;
