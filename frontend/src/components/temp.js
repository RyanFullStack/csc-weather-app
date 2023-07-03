import { useContext } from "react"
import { WeatherContext } from "../context/WeatherContext"

function CurrentTemp() {
    const { temp } = useContext(WeatherContext)


    return (
        <div className='temp-content'>
            {temp}º F
        </div>
    )
}

export default CurrentTemp;
