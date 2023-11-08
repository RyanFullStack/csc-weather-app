function AircraftTracker() {

    return (
        <div className="aircraft-tracker">
           <iframe title='aircraft-tracker' src="https://globe.adsbexchange.com/?airport=KRPJ&hideSidebar&hideButtons&enableLabels&extendedLabels=1&mapDim=.1&zoom=11"/>
        </div>
    )
}

export default AircraftTracker;
