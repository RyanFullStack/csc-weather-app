import './App.css';
import WindSpeed from './components/wind';
import GustChart from './components/gusts';

function App() {
  return (
    <>
      <div className="App">
          <GustChart />
          <WindSpeed />
      </div>
    </>
  );
}

export default App;
