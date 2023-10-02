import GetCst from './time'
import CurrentTemp from './temp';
import Theme from './theme';
import LiveStatus from './livestatus';
import audio from '../images/audio.png'

function Header() {

    return (
        <>
            {window.location.pathname !== '/loadingarea' ? <div className='themecontainer'>
                <Theme />
            </div> :null}
            <div className='livestatus'>
                <LiveStatus />
            </div>
            <div className='timeContainer'>
                <GetCst />
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
