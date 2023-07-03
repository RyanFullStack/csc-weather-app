import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";
import arrow from '../images/arrow.png'
import '../components/anamometer.css'

function Wind() {
    const { speed, gustSpeed, direction, metarAbbr, metarDesc, skyCondition1, skyCondition2, skyCondition3, cloudCeiling1, cloudCeiling2, cloudCeiling3 } = useContext(WeatherContext)
    const [ trackDirection, setTrackDirection ] = useState('')

        useEffect(() => {
        if (!direction || direction == null || direction === 360 || direction === 0) {
            setTrackDirection('threesix')
        }
        if (direction === 10) {
            setTrackDirection('one')
        }
        if (direction === 20) {
            setTrackDirection('two')
        }
        if (direction === 30) {
            setTrackDirection('three')
        }
        if (direction === 40) {
            setTrackDirection('four')
        }
        if (direction === 50) {
            setTrackDirection('five')
        }
        if (direction === 60) {
            setTrackDirection('six')
        }
        if (direction === 70) {
            setTrackDirection('seven')
        }
        if (direction === 80) {
            setTrackDirection('eight')
        }
        if (direction === 90) {
            setTrackDirection('nine')
        }
        if (direction === 100) {
            setTrackDirection('onezero')
        }
        if (direction === 110) {
            setTrackDirection('oneone')
        }
        if (direction === 120) {
            setTrackDirection('onetwo')
        }
        if (direction === 130) {
            setTrackDirection('onethree')
        }
        if (direction === 140) {
            setTrackDirection('onefour')
        }
        if (direction === 150) {
            setTrackDirection('onefive')
        }
        if (direction === 160) {
            setTrackDirection('onesix')
        }
        if (direction === 170) {
            setTrackDirection('oneseven')
        }
        if (direction === 180) {
            setTrackDirection('oneeight')
        }
        if (direction === 190) {
            setTrackDirection('onenine')
        }
        if (direction === 200) {
            setTrackDirection('twozero')
        }
        if (direction === 210) {
            setTrackDirection('twoone')
        }
        if (direction === 220) {
            setTrackDirection('twotwo')
        }
        if (direction === 230) {
            setTrackDirection('twothree')
        }
        if (direction === 240) {
            setTrackDirection('twofour')
        }
        if (direction === 250) {
            setTrackDirection('twofive')
        }
        if (direction === 260) {
            setTrackDirection('twosix')
        }
        if (direction === 270) {
            setTrackDirection('twoseven')
        }
        if (direction === 280) {
            setTrackDirection('twoeight')
        }
        if (direction === 290) {
            setTrackDirection('twonine')
        }
        if (direction === 300) {
            setTrackDirection('threezero')
        }
        if (direction === 310) {
            setTrackDirection('threeone')
        }
        if (direction === 320) {
            setTrackDirection('threetwo')
        }
        if (direction === 330) {
            setTrackDirection('threethree')
        }
        if (direction === 340) {
            setTrackDirection('threefour')
        }
        if (direction === 350) {
            setTrackDirection('threefive')
        }

    }, [direction])

    return (
        <div className="wind-component">
            <div className='wind-component-top'>
                <div className="wind-speed">
                    {speed} <div className="small">kts</div>
                </div>
                <div className="wind-anamometer">
                    <img src={arrow} alt='Wind Direction' className={`arrow  ${trackDirection}`}></img>
                </div>
            </div>
            <div className="wind-component-bottom">
                <div className="metar-abbr">
                    <div className='sky-conditions'>{skyCondition1} {cloudCeiling1} {skyCondition2} {cloudCeiling2} {skyCondition3} {cloudCeiling3}</div>
                    <div className='metar'>{metarDesc && metarAbbr ? `${metarDesc}  ${metarAbbr}` : metarAbbr ? `${metarAbbr}` : null}</div>
                </div>
                <div className="wind-bottom-right">
                <div className="wind-direction">
                    {speed === 0 ? `Calm` : `From ${direction}º`}
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
