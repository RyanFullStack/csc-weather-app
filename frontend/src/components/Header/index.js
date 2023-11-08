import { useContext, useState, useRef, useEffect } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import GetCst from '../Time'
import CurrentTemp from '../Temperature';
import LiveStatus from '../LiveStatus';
import audio from '../../images/audio.png'
import redLight from '../../images/redlight.png'
import yellowLight from '../../images/yellowlight.png'
import greenLight from '../../images/greenlight.png'
// import noLight from '../../images/nolight.png'
import pumpkin from '../../images/pumpkin.png'
import turkey from '../../images/turkey.png'
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


    return (
        <>
            {window.location.pathname !== '/loadingarea' ? <div className='themecontainer'>
                <i className={menu === 'hidden' ? 'fas fa-bars' : 'fas fa-angle-double-left'} onClick={handleMenu} />
                <div ref={menuRef} className={`menu ${menu}`} id={darkTheme==='false'?'menu-light':''}>
                    Options
                    <div className={darkTheme==='true'?'menu-button-container':'menu-button-container-light'}>
                        <button className={tempSetting==='true' && darkTheme==='true' ? 'disabled-button' : tempSetting==='false' && darkTheme==='false' ? 'disabled-button-light': tempSetting==='true' && darkTheme === 'true' ? 'active-button': 'active-button-light'} disabled={tempSetting === 'true'} onClick={handleTemp}>ºF</button>
                        <button className={tempSetting==='false' && darkTheme==='true' ? 'disabled-button' : tempSetting==='true' && darkTheme==='false' ? 'disabled-button-light': tempSetting==='false' && darkTheme === 'true' ? 'active-button': 'active-button-light'} disabled={tempSetting === 'false'} onClick={handleTemp}>ºC</button>
                    </div>
                    <div className={darkTheme==='true'?'menu-button-container':'menu-button-container-light'}>
                        <button className={unitSetting==='true' && darkTheme==='true' ? 'disabled-button' : unitSetting==='false' && darkTheme==='false' ? 'disabled-button-light': unitSetting==='true' && darkTheme === 'true' ? 'active-button': 'active-button-light'} disabled={unitSetting === 'true'} onClick={handleUnit}>FEET</button>
                        <button className={unitSetting==='false' && darkTheme==='true' ? 'disabled-button' : unitSetting==='true' && darkTheme==='false' ? 'disabled-button-light': unitSetting==='false' && darkTheme === 'true' ? 'active-button': 'active-button-light'} disabled={unitSetting === 'false'} onClick={handleUnit}>METERS</button>
                    </div>
                    <div className={darkTheme==='true'?'menu-button-container':'menu-button-container-light'}>
                        <button className={darkTheme==='true' && darkTheme==='true' ? 'disabled-button' : darkTheme==='false' && darkTheme==='false' ? 'disabled-button-light': darkTheme==='true' && darkTheme === 'true' ? 'active-button': 'active-button-light'} disabled={darkTheme === 'true'} onClick={handleTheme}>DARK</button>
                        <button className={darkTheme==='false' && darkTheme==='true' ? 'disabled-button' : darkTheme==='true' && darkTheme==='false' ? 'disabled-button-light': darkTheme==='false' && darkTheme === 'true' ? 'active-button': 'active-button-light'} disabled={darkTheme === 'false'} onClick={handleTheme}>LIGHT</button>
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
