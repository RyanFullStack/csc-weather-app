import { useContext } from 'react'
import { WeatherContext } from '../../context/WeatherContext'

function AircraftTracker() {
    const { darkTheme } = useContext(WeatherContext)

    const url = "https://globe.adsbexchange.com/?airport=KRPJ&hideSidebar&hideButtons&enableLabels&extendedLabels=1&zoom=11"

    return (
        <div className="aircraft-tracker">
            <iframe title='csc-aircraft-tracker' src={
                darkTheme === 'true' ? `${url}&mapdim=.3` : `${url}&mapdim=.1`
                }/>
        </div>
    )
}

export default AircraftTracker;
