import { useContext, useState, useRef, useEffect } from "react";
import { WeatherContext } from "../context/WeatherContext";
import GetCst from './time'
import CurrentTemp from './temp';
import LiveStatus from './livestatus';
import audio from '../images/audio.png'
import redLight from '../images/redlight.png'
import yellowLight from '../images/yellowlight.png'
import greenLight from '../images/greenlight.png'
// import noLight from '../images/nolight.png'
import pumpkin from '../images/pumpkin.png'
import turkey from '../images/turkey.png'
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
                <i className="fas fa-bars" onClick={handleMenu} />
                <div ref={menuRef} className={`menu ${menu}`}>
                    Options
                    <div className="menu-button-container">
                        <button className={tempSetting==='true' ? 'disabled-button' :'active-button'} disabled={tempSetting === 'true'} onClick={handleTemp}>ºF</button>
                        <button className={tempSetting==='true' ? 'active-button' :'disabled-button'} disabled={tempSetting === 'false'} onClick={handleTemp}>ºC</button>
                    </div>
                    <div className="menu-button-container">
                        <button className={unitSetting==='true' ? 'disabled-button' :'active-button'} disabled={unitSetting === 'true'} onClick={handleUnit}>FEET</button>
                        <button className={unitSetting==='true' ? 'active-button' :'disabled-button'} disabled={unitSetting === 'false'} onClick={handleUnit}>METERS</button>
                    </div>
                    <div className="menu-button-container">
                        <button className={darkTheme==='true' ? 'disabled-button' :'active-button'} disabled={darkTheme === 'true'} onClick={handleTheme}>DARK</button>
                        <button className={darkTheme==='true' ? 'active-button' :'disabled-button'} disabled={darkTheme === 'false'} onClick={handleTheme}>LIGHT</button>
                    </div>

                </div>
            </div> : null}
            <div className='livestatus'>
                <LiveStatus />
            </div>
            <div className='time-container'>
                {jumpruns[0] ? <img src={jumpruns[0]?.beerLight ? yellowLight : jumpruns[0]?.weatherHold ? redLight : jumpruns[0]?.heading ? greenLight : null} alt='beerlight' /> : <img src={turkey} alt='beerlight' />}
                <GetCst />
                {jumpruns[0] ? <img src={jumpruns[0]?.beerLight ? yellowLight : jumpruns[0]?.weatherHold ? redLight : jumpruns[0]?.heading ? greenLight : null} alt='beerlight' /> : <img src={pumpkin} alt='beerlight' />}
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
