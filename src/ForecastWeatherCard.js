import React from 'react';
import './forecast-weather-card.scss';

export default function ForecastWeatherCard(props) {

    const {
        day,
        tempMin,
        tempMax
    } = props.data;

    return (
        <div className="fw-card">
            <div className="fw-header">{day}</div>
            <div className="fw-body"><i className="fas fa-sun fa-4x"></i></div>
            <div className="fw-footer">
                <span className="max-temp d-sm-inline d-block">{tempMin}&deg; </span>
                <span className="min-temp">{tempMax}&deg;</span>
            </div>
        </div>
    );

}