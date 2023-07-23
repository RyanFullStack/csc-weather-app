import GetCst from './time'
import CurrentTemp from './temp';
import Theme from './theme';
import LiveStatus from './livestatus';

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
            <div className='tempContainer'>
                <CurrentTemp />
            </div>
        </>
    )
}

export default Header;
