import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { WeatherContext } from './context/WeatherContext';
import { useContext } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Wind from './components/wind';
import HangarCam from './components/hangar';
import GustChart from './components/gusts';
import NavBar from './components/navigation';
import WindsAloft from './components/aloft';
import CscRadar from './components/radar';
import DetailedPage from './components/details';
import LoadingArea from './components/loadingarea';
import Me from './components/me';
import './App.css';

function App() {

  const { darkTheme, jumpruns } = useContext(WeatherContext)

  return (
    <Router>
      <div className={darkTheme === 'true' ? 'App' : 'Applight'}>

        <div className={window.location.pathname !== '/loadingarea' ? 'header-container' : 'header-container-loadingarea'}>
          <Header />
        </div>

        {window.location.pathname !== '/loadingarea' && (
          <div className='nav-container'>
            <NavBar />
          </div>
        )}


        <Switch>
          <Route exact path='/loadingarea'>
            <div className='loadingarea-container'>
              <LoadingArea />
            </div>
          </Route>

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

          <Route exact path='/aloft'>
            <div className='aloft-container'>
              <WindsAloft />
            </div>
          </Route>

          <Route exact path='/radar'>
            <div className='radar-container'>
              <CscRadar />
            </div>
          </Route>

          <Route exact path='/detailed'>
            <div className='detailed-container'>
              <DetailedPage />
            </div>
          </Route>

          <Route exact path='/me'>
            <div className='my-container'>
              <Me />
            </div>
          </Route>

          <Route path='/'>
            <div className='chart-container'>
              <Wind />
            </div>
          </Route>

        </Switch>

        <div className='footer-container'>
          {window.location.pathname !== '/loadingarea' ? <Footer /> :
            <div className="footer-jumprun-loading">
              <div className='loading-footer-content'>app.skydivecsc.com</div>

              {jumpruns[0]?.beerLight ? <span className="yellow weather-hold" id='loading-footer-light'>*** BEER LIGHT IS ON! ***</span> : jumpruns[0]?.weatherHold ? <span className="red weather-hold" id='loading-footer-light'>*** DZ {jumpruns[0].weatherType} HOLD ***</span> : null}

              <div className='loading-footer-content'>Chicagoland Skydiving Center</div>
            </div>
          }
        </div>
      </div>
    </Router>
  );
}

export default App;
