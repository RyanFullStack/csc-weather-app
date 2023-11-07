import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import arrow from '../../images/arrow.png';
import arrowright from '../../images/arrow-right.png';
import './anamometer.css';

function Wind() {
  const { speed, gustSpeed, direction, metarAbbr, metarDesc, skyCondition1, skyCondition2, skyCondition3, cloudCeiling1, cloudCeiling2, cloudCeiling3 } = useContext(WeatherContext)
  const [gusting, setGusting] = useState('')
  const [mini, setMini] = useState('')


  useEffect(() => {
    if (gustSpeed) {
      setGusting('gusting')
    } else {
      setGusting()
    }

  }, [gustSpeed])

  useEffect(() => {
    if (skyCondition2 && skyCondition3) {
      setMini('mini')
    }
    else {
      setMini('')
    }
  }, [skyCondition2, skyCondition3])


  return (
    <div className="wind-component">
      <div className='wind-component-left'>
        <div className="wind-speed">
          {speed > 25 ? <span className="red">{speed}</span> : speed}
          <div className="small">{(speed === 1) ? `kt` : speed > 25 ? <span className="red">kts</span> : `kts`}</div>
        </div>
        <div className={`wind-gusts ${gusting}`}>
          {gustSpeed > 0 && gustSpeed <= 15 ? <span className="green">Gusting: {gustSpeed}<small>kts</small></span> : gustSpeed > 15 && gustSpeed <= 25 ? <span className="yellow">Gusting: {gustSpeed}<small>kts</small></span> : gustSpeed > 25 ? <span className="red">Gusting: {gustSpeed}<small>kts</small></span> : <span className="green">No Gusts</span>}
        </div>
        <div className="wind-direction">
          {direction ? `From ${direction}º` : speed === 0 ? `Calm` : null}
        </div>
      </div>
      <div className="wind-component-right">
        <div className="wind-anamometer">
          <img src={direction && direction > 0 && direction < 180 ? arrowright : arrow} alt='Wind Direction' className='arrow' style={{ transform: `rotate(${direction}deg)` }}></img>
        </div>
        <div className="metar-abbr">
          <div className={`metar ${mini}`}>{metarDesc && metarAbbr ? `${metarDesc}  ${metarAbbr}` : metarAbbr ? `${metarAbbr}` : null}</div>
          <div className={`sky-conditions ${mini}`}>{skyCondition1} {cloudCeiling1 ? cloudCeiling1 : null} {skyCondition2 ? <br /> : null} {skyCondition2 && cloudCeiling2 ? `${skyCondition2} ${cloudCeiling2}` : null} {skyCondition3 ? <br /> : null}{skyCondition3 && cloudCeiling3 ? `${skyCondition3} ${cloudCeiling3}` : null}</div>
        </div>
      </div>
    </div>

  )
}

export default Wind;
