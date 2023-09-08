// import { useRef, useState } from 'react';
import GetCst from './time'
import CurrentTemp from './temp';
import Theme from './theme';
import LiveStatus from './livestatus';


function Header() {
    // const audioRef = useRef(null);
    // const [audio, setAudio] = useState('fa-solid fa-volume-xmark')

    // const playpause = () => {
    //     if (audioRef.current.paused) {
    //     audioRef.current.load()
    //     audioRef.current.play()
    //     setAudio('fa-solid fa-volume-high')
    //     } else {
    //         audioRef.current.pause()
    //     setAudio('fa-solid fa-volume-xmark')
    //     }
    // }

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
                {/* <i className={audio} onClick={playpause} title='CLICK ME!'/> */}
                <audio controls src='http://audio-live.skydivecsc.com:8000/audio' type='audio/mpeg'/>
            </div>
            <div className='tempContainer'>
                <CurrentTemp />
            </div>

        </>
    )
}

export default Header;
