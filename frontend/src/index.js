import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WeatherProvier from './context/WeatherContext';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

      <WeatherProvier>
    <BrowserRouter>
        <App />
    </BrowserRouter>
      </WeatherProvier>

);
