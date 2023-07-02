import { useContext } from "react";
import { WeatherContext } from '../context/WeatherContext';

function Metar() {
    const { metar }  = useContext(WeatherContext)

    return (
        metar
    )
}

export default Metar;
