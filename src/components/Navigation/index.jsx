import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';

function NavBar() {
  const { darkTheme } = useContext(WeatherContext);
  const [theme, setTheme] = useState('');
  const [active, setActive] = useState('');

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setActive('1');
    }
    else if (path === '/gusts') {
      setActive('2');
    }
    else if (path === '/aloft') {
      setActive('3');
    }
    else if (path === '/hangar') {
      setActive('4');
    }
    else if (path === '/detailed') {
      setActive('5');
    }
    else if (path === '/me') {
      setActive('6');
    }
    else if (path === '/radar') {
      setActive('7');
    }
    else if (path === '/aircraft') {
      setActive('8');
    }
  }, [location]);

  useEffect(() => {
    setTheme(darkTheme === 'false' ? 'light' : '');
  }, [darkTheme]);

  const handleClick = (e) => {
    setActive(e.target.id);
  };

  return (
    <div className={`nav-component ${theme}`}>


      <div className='nav-top-half'>
        <div>
          <NavLink exact to="/" id="1" className={active === '1' && darkTheme === 'true' ? 'navbuttonactive' : active === '1' && darkTheme === 'false' ? 'navbuttonactivelight' : 'navbutton'} onClick={handleClick}>HOME</NavLink>
        </div>
        <div>
          <NavLink exact to="/gusts" id="2" className={active === '2' && darkTheme === 'true' ? 'navbuttonactive' : active === '2' && darkTheme === 'false' ? 'navbuttonactivelight' : 'navbutton'} onClick={handleClick}>GUSTS</NavLink>
        </div>
        <div>
          <NavLink exact to="/aloft" id="3" className={active === '3' && darkTheme === 'true' ? 'navbuttonactive' : active === '3' && darkTheme === 'false' ? 'navbuttonactivelight' : 'navbutton'} onClick={handleClick}>ALOFT</NavLink>
        </div>
        <div>
          <NavLink exact to="/detailed" id="5" className={active === '5' && darkTheme === 'true' ? 'navbuttonactive' : active === '5' && darkTheme === 'false' ? 'navbuttonactivelight' : 'navbutton'} onClick={handleClick}>DETAILED</NavLink>
        </div>
        <div>
          <NavLink exact to="/me" id="6" className={active === '6' && darkTheme === 'true' ? 'navbuttonactive' : active === '6' && darkTheme === 'false' ? 'navbuttonactivelight' : 'navbutton'} onClick={handleClick}>ME</NavLink>
        </div>
      </div>


      <div className='nav-bottom-half'>
        <div>
          <NavLink exact to="/hangar" id="4" className={active === '4' && darkTheme === 'true' ? 'navbuttonactive' : active === '4' && darkTheme === 'false' ? 'navbuttonactivelight' : 'navbutton'} onClick={handleClick}>WEBCAM</NavLink>
        </div>
        <div>
          <NavLink exact to="/aircraft" id="8" className={active === '8' && darkTheme === 'true' ? 'navbuttonactive' : active === '8' && darkTheme === 'false' ? 'navbuttonactivelight' : 'navbutton'} onClick={handleClick}>AIRCRAFT</NavLink>
        </div>
        <div>
          <NavLink exact to="/radar" id="7" className={active === '7' && darkTheme === 'true' ? 'navbuttonactive' : active === '7' && darkTheme === 'false' ? 'navbuttonactivelight' : 'navbutton'} onClick={handleClick}>RADAR</NavLink>
        </div>
        <a href="https://dzm.burblesoft.com/jmp?dz_id=408&columns=5&display_menu=0&font_size=12" target="_blank" rel="noreferrer"><div className="navbutton">
          MANIFEST&nbsp;<i className="fas fa-external-link-alt" />
        </div></a>
      </div>

    </div>
  );
}

export default NavBar;
