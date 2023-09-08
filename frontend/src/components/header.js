import GetCst from './time'
import CurrentTemp from './temp';
import Theme from './theme';
import LiveStatus from './livestatus';
import audio from '../images/audio.png'

function Header() {

    return (
        <>
            <div className='themecontainer'>
                <Theme />
            </div>
            <div className='livestatus'>
                <LiveStatus />
            </div>
            <div className='timeContainer'>
                <GetCst />
            </div>
            <div className="temp-logos">
                <a href='http://audio.skydivecsc.com/' target='_blank' rel='noreferrer'><img src={audio} alt='audio' /></a>
            </div>
            <div className='tempContainer'>
                <CurrentTemp />
            </div>

        </>
    )
}

export default Header;
