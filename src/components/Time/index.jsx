import { useEffect, useState } from "react"

function GetCst() {
    const [currentDate, setCurrentDate] = useState('')
    const [currentDay, setCurrentDay] = useState('')
    const [time, setTime] = useState('')

    function getNewDate() {
        return new Date()
    }

    useEffect(() => {
        const timeInt = setInterval(() => {
            const timeObj = getNewDate().toLocaleString('en-US', { timeZone: 'America/Chicago' })
            const timeArr = timeObj.split(',')
            const [date, time] = timeArr
            setTime(time)

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
            <div>{currentDay} {currentDate} {time}</div>
        </div>
    )
}

export default GetCst
