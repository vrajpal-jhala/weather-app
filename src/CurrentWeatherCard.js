import React from 'react';
import './current-weather-card.scss';

export default function CurrentWeatherCard(props) {

    const {
        cityName,
        countryName,
        temp,
        weatherType,
        feelsLike,
        windSpeed,
        sunrise,
        sunset
    } = props.data;

    function getTimeString(timestamp) {
        if (timestamp === undefined)
            return '';

        return new Date(timestamp * 1000).toLocaleTimeString();
    }

    return (
        <div className="row text-center my-4">
            <div className="col cw-card">
                <div className="cw-header">Weather in {cityName}, {countryName}</div>
                <div className="cw-body">
                    <div>
                        <i className="fas fa-sun fa-3x"></i> <span className="h3">{temp}&deg;, {weatherType}</span>
                    </div>
                    <div>
                        Feels like {feelsLike}&deg;
                    </div>
                    <div>
                        <i className="fas fa-wind"></i> {windSpeed} m/s
                    </div>
                </div>
                <div className="cw-footer">
                    <img src="/img/sunrise.png" alt="sunrise" width="45px"></img> {getTimeString(sunrise)} &emsp;
                    <img src="/img/sunset.png" alt="sunset" width="45px"></img> {getTimeString(sunset)}
                </div>
            </div>
        </div>
    );
}