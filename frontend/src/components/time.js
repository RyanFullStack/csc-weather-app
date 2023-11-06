import { useEffect, useState } from "react"

function GetCst() {
    const [currentTime, setCurrentTime] = useState('')
    const [currentDate, setCurrentDate] = useState('')
    const [timeOfDay, setTimeOfDay] = useState('')
    const [currentDay, setCurrentDay] = useState('')


    function getNewDate() {
        return new Date()
    }

    useEffect(() => {
        const timeInt = setInterval(() => {
            const timeObj = getNewDate().toLocaleString('en-US', { timeZone: 'America/Chicago' })
            const timeArr = timeObj.split(',')
            const [date, time] = timeArr

            setCurrentTime(time.split(' ')[1])
            setTimeOfDay(time.split(' ')[2])
            const newDate = date.split('/')
            newDate.pop()
            const today = newDate.join('/')
            setCurrentDate(today)

            const getDay = getNewDate()

            setCurrentDay(getDay.toString().split(' ')[0])

        }, 1000)

        return function () {
            clearInterval(timeInt)
        }
    }, [])


    return (
        <div className="time-component">
            <div>{currentDay} {currentDate} {currentTime} {timeOfDay}</div>
            <div></div>
        </div>
    )
}

export default GetCst
