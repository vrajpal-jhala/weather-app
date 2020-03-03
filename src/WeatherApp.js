import React from 'react';
import CurrentWeatherCard from './CurrentWeatherCard';
import ForecastWeatherCard from './ForecastWeatherCard';
import WeatherForecastChart from './WeatherForecastChart';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

function WeatherApp(props) {

    const axios = require('axios').default;

    // axios({
    //     method: 'GET',
    //     url: 'https://api.openweathermap.org/data/2.5/weather?appid=a3509cedbad1f4b168b89d294bba15cb&id=1279233',
    //     responseType: 'json'
    // }).then((response) => {
    //     console.log(response.data);
    // }).catch((error) => {
    //     console.log(error);
    // });

    var forecastWeatherCards = [];

    for (var i = 0; i < 5; i++) {
        forecastWeatherCards[i] = (
            <NavLink to={"/" + i} key={i}>
                <ForecastWeatherCard />
            </NavLink>
        );
    }

    return (
        <div className="container">
            <div className="row text-center my-md-5 my-3">
                <div className="col"><span className="h2 text-danger">Weather Forecast App</span></div>
            </div>
            <CurrentWeatherCard />
            <Router>
                <div className="row text-center">
                    <div className="col forecast-weather-row">
                        {forecastWeatherCards}
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col">
                        <Switch>
                            <Route path="/0">
                                <WeatherForecastChart key="0" day="0" />
                            </Route>
                            <Route path="/1">
                                <WeatherForecastChart key="1" day="1" />
                            </Route>
                            <Route path="/2">
                                <WeatherForecastChart key="2" day="2" />
                            </Route>
                            <Route path="/3">
                                <WeatherForecastChart key="3" day="3" />
                            </Route>
                            <Route path="/4">
                                <WeatherForecastChart key="4" day="4" />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default WeatherApp;
