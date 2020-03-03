import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './WeatherApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.scss';

ReactDOM.render(<WeatherApp />,
    document.getElementById("weatherApp"));