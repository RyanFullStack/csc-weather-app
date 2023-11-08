import { useContext } from 'react'
import { WeatherContext } from '../../context/WeatherContext'

function AircraftTracker() {
    const { darkTheme } = useContext(WeatherContext)

    const url = "https://globe.adsbexchange.com/?airport=KRPJ&hideSidebar&hideButtons&enableLabels&extendedLabels=1&zoom=11"

    const iframeStyle = {
        width: "1000px", // forcing iframe to load desktop view
        height: "800px", // Forcing iframe to load desktop view
    };

    return (
        <div className="aircraft-tracker">
            <iframe title='aircraft-tracker' src={
                darkTheme === 'true' ? `${url}&mapdim=.3` : `${url}&mapdim=.1`
                } style={iframeStyle}/>
        </div>
    )
}

export default AircraftTracker;
