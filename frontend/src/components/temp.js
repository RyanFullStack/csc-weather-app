import { useContext, useEffect } from "react"
import { WeatherContext } from "../context/WeatherContext"
import fb from '../images/fb.png'
import audio from '../images/audio.png'
import ig from '../images/ig.png'
import wa from '../images/wa.png'

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
                <a href='https://www.facebook.com/groups/csc.experienced' target='_blank'><img src={fb} /></a>
                <a href='https://www.instagram.com/skydivecsc/' target='_blank'><img src={ig} /></a>
                <a href='https://chat.whatsapp.com/K4on8ni6xKd1nSta35CQAK' target='_blank'><img src={wa} /></a>
                <a href='http://audio.skydivecsc.com/' target='_blank'><img src={audio} /></a>
            </div>
            <div className="temp-temp" onClick={handleClick}>{tempSetting === 'true' && temp ? `${temp}º F` : tempC ? `${tempC}º C` : ''}</div>
        </div>
    )
}

export default CurrentTemp;
