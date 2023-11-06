// eslint-disable-next-line
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2'
import 'chartjs-plugin-annotation';
import { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';

function GustChart() {
    const { gustData, darkTheme } = useContext(WeatherContext)
    const [times, setTimes] = useState([])
    const [speeds, setSpeeds] = useState([])
    const [gusts, setGusts] = useState([])


    useEffect(() => {
        const timeStamps = gustData.map(gust => {
            const timeObj = new Date(gust.timestamp_stored + 'Z')
            const localTime = timeObj.toLocaleTimeString('en-US', { timeZone: 'America/Chicago', hour: 'numeric', minute: '2-digit' })
            return localTime
        })

        const windSpeeds = gustData.map(wind => {
            const speed = wind.wind_speed
            return speed
        })
        const gustSpeeds = gustData.map(wind => {
            const speed = wind.gust_speed
            return speed
        })
        setTimes(timeStamps)
        setSpeeds(windSpeeds)
        setGusts(gustSpeeds)

    }, [gustData, darkTheme])


    const data = {
        labels: times,

        datasets: [
            {
                label: 'Wind Speed',
                data: speeds,

                fill: true, // Enable fill
                backgroundColor: 'rgba(49, 196, 159, .8)', // Fill color
                borderColor: 'rgba(0,0,0,1)', // Line color
                pointBackgroundColor: 'rgb(49, 196, 159)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(75,192,192,1)',
                tension: 0.4
            },
            {
                label: 'Gust Speed',
                data: gusts,

                fill: true, // Enable fill
                backgroundColor: 'rgba(255,0,0,.7)', // Fill color
                borderColor: 'rgba(0,0,0,1)', // Line color
                pointBackgroundColor: 'rgba(255,0,0,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(75,192,192,1)',
                tension: 0.4
            }
        ]
    }

    if (!gustData.length) {
        return <div className="loading">Live Gusts Loading!</div>;
      }


    return (
        <div className="gust-chart">
            <Line
                className='chart'
                data={data}
                options={{
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            font: {
                                size: 16,
                                weight: 'bold',
                                color: 'rgba(0, 0, 0, .8)',
                            },
                            text: "Wind Speed in Kts - Previous 30 Mins",
                        },
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            min: 0,
                            max: 30,
                            ticks: {
                                color: darkTheme === 'true' ? 'rgb(49, 196, 159)' : 'rgb(0, 0, 0)',
                            },
                            grid: {
                                color: darkTheme === 'true' ? 'rgb(49, 196, 159)' : 'rgb(0, 0, 0)',
                            },
                        },
                        x: {
                            grid: {
                                color: `rgb(0, 0, 0)`,
                            }
                        }
                    }
                }}
            />
        </div>
    );
}

export default GustChart
