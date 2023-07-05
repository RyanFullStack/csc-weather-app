import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";
import arrow from '../images/arrow.png'
import '../components/anamometer.css'

function Wind() {
    const { speed, gustSpeed, direction, metarAbbr, metarDesc, skyCondition1, skyCondition2, skyCondition3, cloudCeiling1, cloudCeiling2, cloudCeiling3 } = useContext(WeatherContext)
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
          console.log(normalizedDirection)
          setTrackDirection(`rotate-${normalizedDirection}`);
        }
      }, [direction, trackDirection]);

    return (
        <div className="wind-component">
            <div className='wind-component-top'>
                <div className="wind-speed">
                    {speed}<div className="small">{(speed === 1) ? `kt` : `kts`}</div>
                </div>
                <div className="wind-anamometer">
                    <img src={arrow} alt='Wind Direction' className={`arrow  ${trackDirection}`}></img>
                </div>
            </div>
            <div className="wind-component-bottom">
                <div className="metar-abbr">
                    <div className='sky-conditions'>{skyCondition1} {cloudCeiling1 ? cloudCeiling1 : null} <br />{skyCondition2 && cloudCeiling2 ? `${skyCondition2} ${cloudCeiling2}` : null} <br />{skyCondition3 && cloudCeiling3 ? `${skyCondition3} ${cloudCeiling3}` : null}</div>
                    <div className='metar'>{metarDesc && metarAbbr ? `${metarDesc}  ${metarAbbr}` : metarAbbr ? `${metarAbbr}` : null}</div>
                </div>
                <div className="wind-bottom-right">
                    <div className="wind-direction">
                        {direction ? `From ${direction}º` : speed === 0 ? `Calm` : null}
                    </div>
                    <div className="wind-gusts">
                        {gustSpeed ? `Gusting to: ${gustSpeed}` : `No gusts, winds are steady!`}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wind;
