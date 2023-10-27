import { useContext, useState, useRef, useEffect } from "react";
import { WeatherContext } from "../context/WeatherContext";
import GetCst from './time'
import CurrentTemp from './temp';
import Theme from './theme';
import LiveStatus from './livestatus';
import audio from '../images/audio.png'
// import redLight from '../images/redlight.png'
import redLightSpooky from '../images/redlightspooky.png'
// import yellowLight from '../images/yellowlight.png'
import yellowLightSpooky from '../images/yellowlightspooky.png'
// import greenLight from '../images/greenlight.png'
import greenLightSpooky from '../images/greenlightspooky.png'
// import noLight from '../images/nolight.png'
import noLightSpooky from '../images/nolightspooky.png'
import './headermenu.css'

function Header() {

    const { jumpruns, darkTheme, setDarkTheme, tempSetting, setTempSetting, unitSetting, setUnitSetting } = useContext(WeatherContext)
    const [menu, setMenu] = useState('hidden')
    const menuRef = useRef(null);

    const handleMenu = (e) => {
        e.stopPropagation();
        if (menu === 'hidden') {
            setMenu('')
        } else {
            setMenu('hidden')
        }
    }

    const handleTheme = () => {
        if(darkTheme === 'true') {
            setDarkTheme('false')
            localStorage.setItem('darktheme', 'false')
        } else {
            setDarkTheme('true')
            localStorage.setItem('darktheme', 'true')
        }
    }

    const handleTemp = () => {
        if(tempSetting === 'true') {
            setTempSetting('false')
            localStorage.setItem('tempSetting', 'false')
        } else {
            setTempSetting('true')
            localStorage.setItem('tempSetting', 'true')
        }
    }

    const handleUnit = () => {
        if(unitSetting === 'true') {
            setUnitSetting('false')
            localStorage.setItem('unitSetting', 'false')
        } else {
            setUnitSetting('true')
            localStorage.setItem('unitSetting', 'true')
        }
    }

    useEffect(() => {
        const handleBodyClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenu('hidden');
            }
        };

        document.body.addEventListener('click', handleBodyClick);

        return () => {
            document.body.removeEventListener('click', handleBodyClick);
        };
    }, []);


    useEffect(() => {
        if (!localStorage.getItem('darktheme')) {
            localStorage.setItem('darktheme', 'true')
        } else {
            setDarkTheme(localStorage.getItem('darktheme'))
        }
    }, [darkTheme, setDarkTheme])

    useEffect(() => {
        if (!localStorage.getItem('tempSetting')) {
            localStorage.setItem('tempSetting', 'true')
        } else {
            setTempSetting(localStorage.getItem('tempSetting'))
        }
    }, [tempSetting, setTempSetting])

    useEffect(() => {
        if (!localStorage.getItem('unitSetting')) {
            localStorage.setItem('unitSetting', 'true')
        } else {
            setUnitSetting(localStorage.getItem('unitSetting'))
        }
    }, [unitSetting, setUnitSetting])

    return (
        <>
            {window.location.pathname !== '/loadingarea' ? <div className='themecontainer'>
                {/* <Theme /> */}
                <i className="fas fa-bars" onClick={handleMenu} />
                <div ref={menuRef} className={`menu ${menu}`}>
                    Options
                    <div className="menu-button-container">
                        <button disabled={tempSetting === 'true'} onClick={handleTemp}>ºF</button>
                        <button disabled={tempSetting === 'false'} onClick={handleTemp}>ºC</button>
                    </div>
                    <div className="menu-button-container">
                        <button disabled={unitSetting === 'true'} onClick={handleUnit}>FEET</button>
                        <button disabled={unitSetting === 'false'} onClick={handleUnit}>METERS</button>
                    </div>
                    <div className="menu-button-container">
                        <button disabled={darkTheme === 'true'} onClick={handleTheme}>DARK</button>
                        <button disabled={darkTheme === 'false'} onClick={handleTheme}>LIGHT</button>
                    </div>

                </div>
            </div> : null}
            <div className='livestatus'>
                <LiveStatus />
            </div>
            <div className='time-container'>
                {jumpruns[0] ? <img src={jumpruns[0]?.beerLight ? yellowLightSpooky : jumpruns[0]?.weatherHold ? redLightSpooky : jumpruns[0]?.heading ? greenLightSpooky : null} alt='beerlight' /> : <img src={noLightSpooky} alt='beerlight' />}
                <GetCst />
                {jumpruns[0] ? <img src={jumpruns[0]?.beerLight ? yellowLightSpooky : jumpruns[0]?.weatherHold ? redLightSpooky : jumpruns[0]?.heading ? greenLightSpooky : null} alt='beerlight' /> : <img src={noLightSpooky} alt='beerlight' />}
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
