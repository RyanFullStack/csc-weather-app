import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";


function DetailedPage() {
    const { darkTheme, tempSetting, densityAlt, pressure, dewPoint, visibility, sunset, sunrise, twilight, noon,
        skyCondition1, skyCondition2, skyCondition3, cloudCeiling1, cloudCeiling2, cloudCeiling3,
        speed, gustSpeed, maxGust, direction, variableDirection, metarAbbr, metarDesc } =
        useContext(WeatherContext);

    return (
        <div className='detailed-contents'>
            <span className="student-wind-hold">{maxGust > 15 && maxGust < 26 ? <span className="yellow">*** STUDENT WIND HOLD ***</span> : maxGust > 25 && maxGust < 41 ? <span className="red">*** DROPZONE WIND HOLD ***</span> : maxGust > 40 && maxGust < 51 ? <span className="red">*** HANG ON TIGHT!!! ***</span> : maxGust > 50 ? <span className="red">*** HOLY $h*T!!! ***</span> :<span className="green">WINDS OK FOR STUDENTS!</span>}</span>
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
                        <tr className={darkTheme === "true" ? "table" : "table-light"}>
                            <td>Solar Noon:</td>
                            <td>{noon}</td>
                        </tr>
                        <tr className={darkTheme === "true" ? "table" : "table-light"}>
                            <td>Density Altitude:</td>
                            <td>{densityAlt && tempSetting === 'true' ? densityAlt + "'" : !densityAlt ? null : (densityAlt / 3.28).toFixed(0) + 'M'}</td>
                        </tr>
                        <tr className={darkTheme === "true" ? "table" : "table-light"}>
                            <td>Pressure:</td>
                            <td>{pressure}" Hg</td>
                        </tr>
                        <tr className={darkTheme === "true" ? "table" : "table-light"}>
                            <td>Dew Point:</td>
                            <td>{tempSetting === 'true' ? dewPoint : ((dewPoint - 32) * 5 / 9).toFixed(1)}º</td>
                        </tr>
                        <tr className={darkTheme === "true" ? "table" : "table-light"}>
                            <td>Current Speed:</td>
                            <td>{speed === 1 ? speed + ' kt' : speed + ' kts'}</td>
                        </tr>
                        <tr className={darkTheme === "true" ? "table" : "table-light"}>
                            <td>Current Gust:</td>
                            <td>{gustSpeed ? gustSpeed + ' kts' : 'No Gust'}</td>
                        </tr>
                        <tr className={darkTheme === "true" ? "table" : "table-light"}>
                            <td>Max Gust <small>(30 Min)</small>:</td>
                            <td>{maxGust && maxGust !== -Infinity ? <span className={maxGust > 15 && maxGust < 26 ? 'yellow' : maxGust > 25 ? 'red' : 'green'}>{maxGust} kts</span> : 'No Gust'}</td>
                        </tr>
                        <tr className={darkTheme === "true" ? "table" : "table-light"}>
                            <td>Wind Direction:</td>
                            <td>{direction}º</td>
                        </tr>
                        <tr className={darkTheme === "true" ? "table" : "table-light"}>
                            <td>Variable Direction:</td>
                            <td>{variableDirection ? variableDirection : 'Steady'}</td>
                        </tr>
                        <tr className={darkTheme === "true" ? "table" : "table-light"}>
                            <td>Present Weather:</td>
                            <td>{metarAbbr ? metarDesc + ' ' + metarAbbr : 'None'}</td>
                        </tr>
                        <tr className={darkTheme === "true" ? "table" : "table-light"}>
                            <td>Visibility:</td>
                            <td>{visibility} SM</td>
                        </tr>
                        <tr className={darkTheme === "true" ? "table" : "table-light"}>
                            <td>Sky Condition:</td>
                            <td>{skyCondition1} {cloudCeiling1}{skyCondition2 ? <br /> : null}{skyCondition2} {cloudCeiling2}{skyCondition3 ? <br /> : null} {skyCondition3} {cloudCeiling3}</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}

export default DetailedPage;
