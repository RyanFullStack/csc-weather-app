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
        <NavLink to='/gusts'>GUSTS</NavLink>
      </div>
      <div>
        <NavLink to='/hangar'>WEBCAM</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
