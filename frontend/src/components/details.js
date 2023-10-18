import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";
import fb from '../images/fb.png'
import ig from '../images/ig.png'
import wa from '../images/wa.png'


function DetailedPage() {
    const { jumpruns, newSpot, newOffset, darkTheme, tempSetting, densityAlt, pressure, dewPoint, visibility, sunset, sunrise, twilight,
        skyCondition1, skyCondition2, skyCondition3, cloudCeiling1, cloudCeiling2, cloudCeiling3,
        speed, gustSpeed, maxGust, maxSpeed, direction, variableDirection, metarAbbr, metarDesc } =
        useContext(WeatherContext);

    const [varDir1, setVarDir1] = useState()
    const [varDir2, setVarDir2] = useState()


    useEffect(() => {

        if (variableDirection) {
            const [value1, value2] = variableDirection
            setVarDir1(value1)
            setVarDir2(value2)
        }
    }, [variableDirection])


    return (
        <div className='detailed-contents'>
            {jumpruns[0]?.beerLight ?
                <span className="yellow weather-hold">*** BEER LIGHT IS ON! ***</span> :
                jumpruns[0]?.weatherHold ?
                    <div>
                        <span className="student-wind-hold"><span className="red">*** DZ {jumpruns[0].weatherType} HOLD ***</span></span>
                    </div> :
                    <span className="student-wind-hold">
                        {(maxGust > 50 || maxSpeed > 50) ? (
                            <span className="red">*** HOLY $h*T!!! ***</span>
                        ) : (maxGust > 40 || maxSpeed > 40) ? (
                            <span className="red">*** HANG ON TIGHT!!! ***</span>
                        ) : (maxGust > 25 || maxSpeed > 25) ? (
                            <span className="red">*** DROPZONE WIND HOLD ***</span>
                        ) : (maxGust > 15 || maxSpeed > 15) ? (
                            <span className="yellow">*** STUDENT WIND HOLD ***</span>
                        ) : (
                            <span className="green">WINDS OK FOR STUDENTS!</span>
                        )}
                    </span>}


            <table>
                <tbody>
                    <tr className={darkTheme === "true" ? "table" : "table-light"}>
                        <td>Sunset:</td>
                        <td>{sunset}</td>
                    </tr>
                    <tr className={darkTheme === "true" ? "table" : "table-light"}>
                        <td>Twilight:</td>
                        <td>{twilight}</td>
                    </tr>
                    <tr className={darkTheme === "true" ? "table" : "table-light"}>
                        <td>Sunrise:</td>
                        <td>{sunrise}</td>
                    </tr>

                    {jumpruns[0]?.heading ?
                        <>
                            <tr className={darkTheme === "true" ? "table" : "table-light"}>
                                <td>Jump Run:</td>
                                <td>{jumpruns[0]?.heading}º <i className='fas fa-plane' style={{ transform: `rotate(${jumpruns[0].heading - 90}deg` }} /></td>
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
                        <td>Current Speed:</td>
                        <td>{speed === 0 ? '0 kts' : !speed ? null : speed === 1 ? speed + ' kt' : speed + ' kts'}</td>
                    </tr>
                    <tr className={darkTheme === "true" ? "table" : "table-light"}>
                        <td>Current Gust:</td>
                        <td>{gustSpeed ? gustSpeed + ' kts' : 'No Gust'}</td>
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
                        <td>Wind Direction:</td>
                        <td>{direction ? `${direction}º` : speed === 0 ? `Calm` : null}</td>
                    </tr>
                    <tr className={darkTheme === "true" ? "table" : "table-light"}>
                        <td>Variable Direction:</td>
                        <td>{varDir1 && varDir2 ? `${varDir1}º - ${varDir2}º` : 'Steady'}</td>
                    </tr>
                    <tr className={darkTheme === "true" ? "table" : "table-light"}>
                        <td>Density Altitude:</td>
                        <td>{densityAlt && tempSetting === 'true' ? densityAlt + "'" : !densityAlt ? 'Field Level' : (densityAlt / 3.28).toFixed(0) + 'M'}</td>
                    </tr>
                    <tr className={darkTheme === "true" ? "table" : "table-light"}>
                        <td>Present Weather:</td>
                        <td>{metarAbbr && metarDesc ? metarDesc + ' ' + metarAbbr : metarAbbr ? metarAbbr : 'None'}</td>
                    </tr>
                    <tr className={darkTheme === "true" ? "table" : "table-light"}>
                        <td>Sky Condition:</td>
                        <td>{skyCondition1} {cloudCeiling1}{skyCondition2 ? <br /> : null}{skyCondition2} {cloudCeiling2}{skyCondition3 ? <br /> : null} {skyCondition3} {cloudCeiling3}</td>
                    </tr>
                    <tr className={darkTheme === "true" ? "table" : "table-light"}>
                        <td>Visibility:</td>
                        <td>{visibility < 1 ? visibility?.toFixed(2) : visibility} SM</td>
                    </tr>
                    <tr className={darkTheme === "true" ? "table" : "table-light"}>
                        <td>Dew Point:</td>
                        <td>{!dewPoint ? null : tempSetting === 'true' ? dewPoint + 'ºF' : ((dewPoint - 32) * 5 / 9).toFixed(1) + 'ºC'}</td>
                    </tr>
                    <tr className={darkTheme === "true" ? "table" : "table-light"}>
                        <td>Pressure:</td>
                        <td>{!pressure ? null : pressure + '" Hg'}</td>
                    </tr>
                    <tr className={darkTheme === "true" ? "table" : "table-light"}>
                        <td>Loading Area View:</td>
                        <td><a href='/loadingarea'>Click to view</a></td>
                    </tr>
                    <tr className={darkTheme === "true" ? "table" : "table-light"}>
                        <td>Links:</td>
                        <td><div className="temp-logos">
                            <a href='https://www.facebook.com/groups/csc.experienced' target='_blank' rel='noreferrer'><img src={fb} alt='fb' /></a>&nbsp;
                            <a href='https://www.instagram.com/skydivecsc/' target='_blank' rel='noreferrer'><img src={ig} alt='ig' /></a>&nbsp;
                            <a href='https://chat.whatsapp.com/K4on8ni6xKd1nSta35CQAK' target='_blank' rel='noreferrer'><img src={wa} alt='wa' /></a>
                        </div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DetailedPage;
