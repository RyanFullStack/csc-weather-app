function CscRadar() {

    return (
        <div className="windy-radar">
           <embed src="https://embed.windy.com/embed2.html?lat=41.943&lon=-89.088&detailLat=41.925&detailLon=-89.072&width=650&height=450&zoom=8&level=surface&overlay=radar&product=radar&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"/>
        </div>
    )
}

export default CscRadar;
