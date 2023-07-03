import GetCst from './time'
import CurrentTemp from './temp';
import Theme from './theme';

function Header() {

    return (
        <>
            <div className='themecontainer'>
                <Theme />
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
