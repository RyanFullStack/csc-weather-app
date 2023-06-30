import './App.css';
import WindSpeed from './components/wind';

function App() {
  return (
    <>
      <div className="App">
          <h2>WELCOME TO THE CSC WX APP!</h2>
          <p>This page updates live, don't refresh!</p>
          <WindSpeed />
      </div>
    </>
  );
}

export default App;
