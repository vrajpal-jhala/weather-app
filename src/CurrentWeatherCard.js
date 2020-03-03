import React from 'react';
import './current-weather-card.scss';

function CurrentWeatherCard(props) {

    return (
        <div className="row text-center my-4">
            <div className="col cw-card">
                <div className="cw-header">Weather in {'Ahmadabad, IN'}</div>
                <div className="cw-body">
                    <div>
                        <i className="fas fa-sun fa-3x"></i> <span className="h3">34&deg;, Clear</span>
                    </div>
                    <div className="secondary-text">
                        Feels like 35&deg;
                    </div>
                </div>
                <div className="cw-footer">
                    <i className="fas fa-wind"></i> 0.47 m/s
                </div>
            </div>
        </div>
    );
}

export default CurrentWeatherCard;
