import Metar from './components/metar';
import Header from './components/header';
import Wind from './components/wind';
import { WeatherContext } from './context/WeatherContext';
import { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HangarCam from './components/hangar';
import './App.css';

function App() {

  const { darkTheme } = useContext(WeatherContext)

  return (
    <BrowserRouter>
      <div className={darkTheme === 'true' ? 'App' : 'Applight'}>

        <div className='header-container'>
          <Header />
        </div>

    <Switch>

      <Route exact path='/hangar'>
        <div className='hangar-cam-container'><HangarCam /></div>
      </Route>

      <Route path='/'>
        <div className='chart-container'>
          <Wind />
        </div>
        </Route>

      </Switch>

        <div className='footer-container'>
          <Metar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
