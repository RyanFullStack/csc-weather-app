import Metar from './components/metar';
import Header from './components/header';
import Wind from './components/wind';
import { WeatherContext } from './context/WeatherContext';
import { useContext } from 'react';
import './App.css';

function App() {

  const { darkTheme } = useContext(WeatherContext)

  return (
    <>
      <div className={darkTheme ? 'App' : 'Applight'}>

        <div className='header-container'>
          <Header />
        </div>
        <div className='chart-container'>
          <Wind />
        </div>
        <div className='footer-container'>
          <Metar />
        </div>
      </div>
    </>
  );
}

export default App;
