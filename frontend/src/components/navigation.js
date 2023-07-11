import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

function NavBar() {
  const { darkTheme } = useContext(WeatherContext);
  const [theme, setTheme] = useState('');

  useEffect(() => {
    if (darkTheme === 'false') {
      setTheme('light');
    } else {
      setTheme('');
    }
  }, [darkTheme]);

  return (
    <div className={`nav-component ${theme}`}>
      <div>
        <NavLink exact to='/'>HOME</NavLink>
      </div>
      <div>
        <NavLink exact to='/gusts'>GUSTS</NavLink>
      </div>
      <div>
        <NavLink exact to='/aloft'>ALOFT</NavLink>
      </div>
      <div>
        <NavLink exact to='/hangar'>WEBCAM</NavLink>
      </div>
      <div>
        <a href='https://dzm.burblesoft.com/jmp?dz_id=408&columns=5&display_menu=0&font_size=12' target='_blank' rel="noreferrer">MANIFEST</a>
      </div>
    </div>
  );
}

export default NavBar;
