import './App.css';
import Metar from './components/metar';

function App() {
  return (
    <>
      <div className="App">

        <div className='header-container'></div>
        <div className='chart-container'></div>
        <div className='footer-container'>
          <Metar />
        </div>
      </div>
    </>
  );
}

export default App;
