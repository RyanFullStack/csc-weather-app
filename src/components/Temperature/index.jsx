import { useContext } from "react"
import { WeatherContext } from "../../context/WeatherContext"
import './temp.css'


function CurrentTemp() {
    const { temp, tempC, tempSetting, setTempSetting } = useContext(WeatherContext)

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
            {window.location.pathname !== '/loadingarea'
            ? <div onClick={handleClick}>{!temp ? null : tempSetting === 'true' && temp ? `${temp}º F` : tempC ? `${tempC}º C` : ''}</div>
            : <div>{!temp ? null : `${temp}º F`}</div>
            }
        </div>
    )
}

export default CurrentTemp;
