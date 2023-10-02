import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import './metar.css';

function Footer() {

const { jumpruns, newSpot, newOffset } = useContext(WeatherContext)


    return (
        <div className="metar-container">
            <p><a href='https://ryanerickson.netlify.app/' target="_blank" rel='noreferrer'>Created by: Ryan Erickson</a></p>

            {jumpruns[0] ?
                <div className="footer-jumprun">
                    Jump Run: {jumpruns[0]?.heading}º | {newSpot} {jumpruns[0].selectedSpot} {jumpruns[0].selectedOffset === 'None' ? null : `| ${newOffset} ${jumpruns[0].selectedOffset}`}
                </div>
                : null}

            <p><a href='https://github.com/RyanFullStack' target="_blank" rel='noreferrer'>Github</a></p>
        </div>
    )
}

export default Footer;
