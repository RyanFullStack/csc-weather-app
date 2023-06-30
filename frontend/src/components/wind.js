import { useEffect, useState } from 'react'


const WindSpeed = () => {
    const [speed, setSpeed] = useState()
    const [gustSpeed, setGustSpeed] = useState()
    const [direction, setDirection] = useState()
    const [metar, setMetar] = useState()
    const [temp, setTemp] = useState()
    const [skyCondition1, setSkyCondition1] = useState()
    const [skyCondition2, setSkyCondition2] = useState()
    const [skyCondition3, setSkyCondition3] = useState()
    const [cloudCeiling1, setCloudCeiling1] = useState()
    const [cloudCeiling2, setCloudCeiling2] = useState()
    const [cloudCeiling3, setCloudCeiling3] = useState()
    const [metarAbbr, setMetarAbbr] = useState()
    const [metarDesc, setMetarDesc] = useState()
// eslint-disable-next-line
    const windData = []
// eslint-disable-next-line
    const weatherData = []

    useEffect(() => {
        const WebSocket = require('websocket').w3cwebsocket

        const windQuery = `
        subscription {
          wind: windReported {
            receivedAt
            speed
            gustSpeed
            direction
            variableDirection
          }
        }
        `;

        const websocket = new WebSocket("wss://api.skydivecsc.com/graphql", ["graphql-ws"]);
        websocket.onopen = function () {
            websocket.send(JSON.stringify(
                { type: "connection_init", payload: {} }
            ));
            websocket.send(JSON.stringify(
                { type: "start", id: "wind", payload: { query: windQuery, variables: null } }
            ));
        };
        websocket.onmessage = function (event) {
            const res = JSON.parse(event.data)

            windData.unshift(res.payload)
            if (windData[0]) {
                setSpeed(windData[0].data.wind.speed)
                setGustSpeed(windData[0].data.wind.gustSpeed)
                setDirection(windData[0].data.wind.direction)
            }
        };
    }, [windData])

    useEffect(() => {
        const WebSocket = require('websocket').w3cwebsocket

        const weatherQuery = `
        subscription {
          weather: weatherReported {
            receivedAt
            metar
            presentWeather
            temperature
            dewPoint
            visibility
            densityAltitude
            skyCondition {
              cloudCover
              altitude
            }
          }
        }
        `;

        const websocket = new WebSocket("wss://api.skydivecsc.com/graphql", ["graphql-ws"]);
        websocket.onopen = function () {
            websocket.send(JSON.stringify(
                { type: "connection_init", payload: {} }
            ));
            websocket.send(JSON.stringify(
                { type: "start", id: "weather", payload: { query: weatherQuery, variables: null } }
            ));
        };
        websocket.onmessage = function (event) {
            const res = JSON.parse(event.data)

            weatherData.unshift(res.payload)
            if (weatherData[0]) {

                const metArr = weatherData[0].data.weather.metar.split(' ')
                metArr.pop()
                metArr.pop()
                metArr.pop()
                metArr.shift()

                const metArr2 = metArr.join(' ')

                setMetar(metArr2)
                setTemp(weatherData[0].data.weather.temperature)
                setCloudCeiling1(weatherData[0].data.weather.skyCondition[0].altitude)

                if (weatherData[0].data.weather.skyCondition[1]) {
                    setCloudCeiling2(weatherData[0].data.weather.skyCondition[1].altitude)
                }

                if (weatherData[0].data.weather.skyCondition[2]) {
                    setCloudCeiling3(weatherData[0].data.weather.skyCondition[2].altitude)
                }

                if (weatherData[0].data.weather.presentWeather) {

                    if (weatherData[0].data.weather.presentWeather.includes('-')) {
                        setMetarDesc('Light')
                    }
                    if (weatherData[0].data.weather.presentWeather.includes('+')) {
                        setMetarDesc('Heavy')
                    }
                    if (weatherData[0].data.weather.presentWeather.includes('VC')) {
                        setMetarDesc('In The Vicinity')
                    }
                    if (weatherData[0].data.weather.presentWeather.includes('MI')) {
                        setMetarDesc('Shallow')
                    }
                    if (weatherData[0].data.weather.presentWeather.includes('PR')) {
                        setMetarDesc('Partial')
                    }
                    if (weatherData[0].data.weather.presentWeather.includes('BC')) {
                        setMetarDesc('Patches')
                    }
                    if (weatherData[0].data.weather.presentWeather.includes('DR')) {
                        setMetarDesc('Low Drifting')
                    }
                    if (weatherData[0].data.weather.presentWeather.includes('BL')) {
                        setMetarDesc('Blowing')
                    }

                    if (weatherData[0].data.weather.presentWeather.includes('BR')) {
                        setMetarAbbr('Mist')
                    }
                    if (weatherData[0].data.weather.presentWeather.includes('TS')) {
                        setMetarAbbr('Thunderstorm')
                    }
                    if (weatherData[0].data.weather.presentWeather.includes('SH')) {
                        setMetarAbbr('Shower')
                    }
                    if (weatherData[0].data.weather.presentWeather.includes('DZ')) {
                        setMetarAbbr('Drizzle')
                    }
                    if (weatherData[0].data.weather.presentWeather.includes('RA')) {
                        setMetarAbbr('Rain')
                    }
                    if (weatherData[0].data.weather.presentWeather.includes('UP')) {
                        setMetarAbbr('Unknown Precipitation')
                    }
                    if (weatherData[0].data.weather.presentWeather.includes('SN')) {
                        setMetarAbbr('Snow')
                    }
                    if (weatherData[0].data.weather.presentWeather.includes('PO')) {
                        setMetarAbbr('DUST DEVILS')
                    }
                    if (weatherData[0].data.weather.presentWeather.includes('SS')) {
                        setMetarAbbr('Sand Storm')
                    }
                    if (weatherData[0].data.weather.presentWeather.includes('GR')) {
                        setMetarAbbr('Hail')
                    }
                    if (weatherData[0].data.weather.presentWeather.includes('FG')) {
                        setMetarAbbr('Fog')
                    }
                    if (weatherData[0].data.weather.presentWeather.includes('FU')) {
                        setMetarAbbr('Smoke')
                    }
                    if (weatherData[0].data.weather.presentWeather.includes('HZ')) {
                        setMetarAbbr('Haze')
                    }
                    if (weatherData[0].data.weather.presentWeather.includes('FC')) {
                        setMetarAbbr('Tornado')
                    }
                }

                if (weatherData[0].data.weather.skyCondition[0].cloudCover) {
                if (weatherData[0].data.weather.skyCondition[0].cloudCover === 'CLR') {
                    setSkyCondition1('Clear Sky')
                }
                if (weatherData[0].data.weather.skyCondition[0].cloudCover === 'SCT') {
                    setSkyCondition1('Scattered')
                }
                if (weatherData[0].data.weather.skyCondition[0].cloudCover === 'BKN') {
                    setSkyCondition1('Broken')
                }
                if (weatherData[0].data.weather.skyCondition[0].cloudCover === 'OVC') {
                    setSkyCondition1('Overcast')
                }
            }

                if (weatherData[0].data.weather.skyCondition[1]) {
                    if (weatherData[0].data.weather.skyCondition[1].cloudCover === 'CLR') {
                        setSkyCondition2('Clear Sky')
                    }
                    if (weatherData[0].data.weather.skyCondition[1].cloudCover === 'SCT') {
                        setSkyCondition2('Scattered')
                    }
                    if (weatherData[0].data.weather.skyCondition[1].cloudCover === 'BKN') {
                        setSkyCondition2('Broken')
                    }
                    if (weatherData[0].data.weather.skyCondition[1].cloudCover === 'OVC') {
                        setSkyCondition2('Overcast')
                    }
                }

                if (weatherData[0].data.weather.skyCondition[2]) {
                    if (weatherData[0].data.weather.skyCondition[2].cloudCover === 'CLR') {
                        setSkyCondition3('Clear Sky')
                    }
                    if (weatherData[0].data.weather.skyCondition[2].cloudCover === 'SCT') {
                        setSkyCondition3('Scattered')
                    }
                    if (weatherData[0].data.weather.skyCondition[2].cloudCover === 'BKN') {
                        setSkyCondition3('Broken')
                    }
                    if (weatherData[0].data.weather.skyCondition[2].cloudCover === 'OVC') {
                        setSkyCondition3('Overcast')
                    }
                }
            }
        };
    }, [weatherData])

    return (
        <div id='windMeter'>
            <h3>LIVE CONDITIONS</h3>
            <div>Speed: {speed} {gustSpeed ? `Gusting: ${gustSpeed}` : null}<br />
                {speed > 0 ? `Direction: ${direction}` : null}<br />
                Temperature: {temp}<br />
                {skyCondition1} {cloudCeiling1} {skyCondition2} {cloudCeiling2} {skyCondition3} {cloudCeiling3}<br />
                {metarDesc && metarAbbr ? metarDesc : null} {metarAbbr}<br /> <br /><br />
                {metar}
            </div>
        </div>
    )
}

export default WindSpeed;
