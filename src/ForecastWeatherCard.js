import React from 'react';
import './forecast-weather-card.scss';

function ForecastWeatherCard(props) {

    return (
        <div className="fw-card">
            <div className="fw-header">Mon</div>
            <div className="fw-body"><i className="fas fa-sun fa-4x"></i></div>
            <div className="fw-footer">
                <span className="max-temp d-sm-inline d-block">23&deg; </span>
                <span className="min-temp">18&deg;</span>
            </div>
        </div>
    );

}

export default ForecastWeatherCard;
