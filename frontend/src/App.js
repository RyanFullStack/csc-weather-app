import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { WeatherContext } from './context/WeatherContext';
import { useContext } from 'react';
import Metar from './components/metar';
import Header from './components/header';
import Wind from './components/wind';
import HangarCam from './components/hangar';
import GustChart from './components/gusts';
import NavBar from './components/navigation';
import './App.css';

function App() {

  const { darkTheme } = useContext(WeatherContext)

  return (
    <Router>
      <div className={darkTheme === 'true' ? 'App' : 'Applight'}>

        <div className='header-container'>
          <Header />
        </div>
        <div className='nav-container'>
          <NavBar />
        </div>


    <Switch>
      <Route exact path='/hangar'>
        <div className='hangar-cam-container'>
          <HangarCam />
        </div>
      </Route>

      <Route exact path='/gusts'>
        <div className='gusts-container'>
          <GustChart />
        </div>
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
    </Router>
  );
}

export default App;
