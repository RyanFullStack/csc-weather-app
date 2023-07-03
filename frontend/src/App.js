import Metar from './components/metar';
import Header from './components/header';
import Wind from './components/wind';
import './App.css';

function App() {
  return (
    <>
      <div className="App">

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
