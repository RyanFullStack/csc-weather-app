import { useEffect, useState } from 'react'


const WindSpeed = () => {
    const [speed, setSpeed] = useState()
    const [gustSpeed, setGustSpeed] = useState()
    const [direction, setDirection] = useState()
    const [metar, setMetar] = useState()
    const [temp, setTemp] = useState()
    const [skyCondition, setSkyCondition] = useState()
    const [cloudCeiling, setCloudCeiling] = useState()
    const [metarAbbr, setMetarAbbr] = useState()

    const windData = []
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
                setMetar(weatherData[0].data.weather.metar)
                setTemp(weatherData[0].data.weather.temperature)
                setCloudCeiling(weatherData[0].data.weather.skyCondition[0].altitude)

                if (weatherData[0].data.weather.presentWeather === ' BR') {
                    setMetarAbbr('Mist')
                }
                if (weatherData[0].data.weather.presentWeather === ' TS') {
                    setMetarAbbr('Thunderstorm')
                }
                if (weatherData[0].data.weather.presentWeather === ' DZ') {
                    setMetarAbbr('Drizzle')
                }
                if (weatherData[0].data.weather.presentWeather === ' RA') {
                    setMetarAbbr('Rain')
                }
                if (weatherData[0].data.weather.presentWeather === ' SN') {
                    setMetarAbbr('Snow')
                }
                if (weatherData[0].data.weather.presentWeather === ' GR') {
                    setMetarAbbr('Hail')
                }
                if (weatherData[0].data.weather.presentWeather === ' FG') {
                    setMetarAbbr('Fog')
                }
                if (weatherData[0].data.weather.presentWeather === ' FU') {
                    setMetarAbbr('Smoke')
                }
                if (weatherData[0].data.weather.presentWeather === 'HZ') {
                    setMetarAbbr('Haze')
                }
                if (weatherData[0].data.weather.presentWeather === ' FC') {
                    setMetarAbbr('Tornado')
                }

                if (weatherData[0].data.weather.skyCondition[0].cloudCover === 'CLR') {
                    setSkyCondition('Clear Sky')
                }
                if (weatherData[0].data.weather.skyCondition[0].cloudCover === 'SCT') {
                    setSkyCondition('Scattered')
                }
                if (weatherData[0].data.weather.skyCondition[0].cloudCover === 'BKN') {
                    setSkyCondition('Broken')
                }
                if (weatherData[0].data.weather.skyCondition[0].cloudCover === 'OVC') {
                    setSkyCondition('Overcast')
                }
            }
        };
    }, [weatherData])

    return (
        <div id='windMeter'>
            <h3>LIVE CONDITIONS</h3>
            <div>Speed: {speed} {gustSpeed ? `Gusting: ${gustSpeed}` : null}<br />
                Direction: {direction}<br />
                Temperature: {temp}<br />
                {skyCondition} {cloudCeiling}<br />
                {metarAbbr}<br /> <br /><br />
                Metar: <br />{metar}<br />
            </div>
        </div>
    )
}

export default WindSpeed;
