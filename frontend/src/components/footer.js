import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import './metar.css';

function Footer() {

const { jumpruns, newSpot, newOffset, metar } = useContext(WeatherContext)


    return (
        <div className="metar-container">
            <p><a href='https://ryanerickson.netlify.app/' target="_blank" rel='noreferrer'>Created by: Ryan Erickson</a></p>

            {jumpruns[0] ?
                <div className="footer-jumprun">
                    <div><small>Jump Run</small></div>
                    <div>Direction: {jumpruns[0]?.heading}º </div>
                    <div>Green Light: {newSpot} {jumpruns[0].selectedSpot} {jumpruns[0].selectedOffset === 'None' ? null : `| ${newOffset} ${jumpruns[0].selectedOffset}`}</div>
                </div>
                : metar}

            <p><a href='https://github.com/RyanFullStack' target="_blank" rel='noreferrer'>Github</a></p>
        </div>
    )
}

export default Footer;
