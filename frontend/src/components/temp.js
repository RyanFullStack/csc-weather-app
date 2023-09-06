import { useContext, useEffect } from "react"
import { WeatherContext } from "../context/WeatherContext"
import audio from '../images/audio.png'


function CurrentTemp() {
    const { temp, tempC, tempSetting, setTempSetting } = useContext(WeatherContext)

    useEffect(() => {
        if (!localStorage.getItem('tempSetting')) {
            localStorage.setItem('tempSetting', 'true')
        } else {
            setTempSetting(localStorage.getItem('tempSetting'))
        }

    }, [tempSetting, setTempSetting])


    const handleClick = () => {
        if (tempSetting === 'true') {
            setTempSetting('false')
            localStorage.setItem('tempSetting', 'false')
        } else {
            setTempSetting('true')
            localStorage.setItem('tempSetting', 'true')
        }
    }

    return (
        <div className='temp-content'>
            <div className="temp-logos">
                <a href='http://audio.skydivecsc.com/' target='_blank' rel='noreferrer'><img src={audio}  alt='audio'/></a>
            </div>
            <div className="temp-temp" onClick={handleClick}>{tempSetting === 'true' && temp ? `${temp}º F` : tempC ? `${tempC}º C` : ''}</div>
        </div>
    )
}

export default CurrentTemp;
