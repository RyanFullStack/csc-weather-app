import { useContext } from "react";
import { WeatherContext } from '../context/WeatherContext';
import './metar.css';

function Metar() {
    const { metar }  = useContext(WeatherContext)

    return (
        <div className="metar-container">
            <p><a href='https://ryanerickson.netlify.app/' target="_blank" rel='noreferrer'>Created by: Ryan Erickson</a></p>
            {metar}
            <p><a href='https://github.com/RyanFullStack' target="_blank" rel='noreferrer'>Github</a></p>
        </div>
    )
}

export default Metar;
