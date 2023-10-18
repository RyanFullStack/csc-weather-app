import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import GetCst from './time'
import CurrentTemp from './temp';
import Theme from './theme';
import LiveStatus from './livestatus';
import audio from '../images/audio.png'
import redLight from '../images/redlight.png'
import yellowLight from '../images/yellowlight.png'
import greenLight from '../images/greenlight.png'
import noLight from '../images/nolight.png'

function Header() {

    const { jumpruns } = useContext(WeatherContext)

    return (
        <>
            {window.location.pathname !== '/loadingarea' ? <div className='themecontainer'>
                <Theme />
            </div> :null}
            <div className='livestatus'>
                <LiveStatus />
            </div>
            <div className='time-container'>
                {jumpruns[0] ? <img src={jumpruns[0]?.beerLight ? yellowLight : jumpruns[0]?.weatherHold ? redLight : jumpruns[0]?.heading ? greenLight : null} alt='beerlight'/> : <img src={noLight} alt='beerlight'/>}
                <GetCst />
                {jumpruns[0] ? <img src={jumpruns[0]?.beerLight ? yellowLight : jumpruns[0]?.weatherHold ? redLight : jumpruns[0]?.heading ? greenLight : null} alt='beerlight'/> : <img src={noLight} alt='beerlight'/>}
            </div>
            {window.location.pathname !== '/loadingarea' ? <div className="temp-logos">
                <a href='http://audio.skydivecsc.com/' target='_blank' rel='noreferrer'><img src={audio} alt='audio' /></a>
            </div> : null}
            <div className='tempContainer'>
                <CurrentTemp />
            </div>

        </>
    )
}

export default Header;
