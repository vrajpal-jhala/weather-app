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

export default class WeatherApp extends React.Component {

    constructor(props) {
        super(props);

        this.axios = require('axios').default;

        this.state = {
            currentWeather: {},
            forecastWeather: {}
        };
    }

    getCurrentWeather = () => {
        this.axios({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather?appid=a3509cedbad1f4b168b89d294bba15cb&id=1279233&units=metric',
            responseType: 'json'
        }).then((response) => {
            const data = response.data;
            this.setState({
                currentWeather: {
                    cityName: data.name,
                    countryName: data.sys.country,
                    temp: data.main.temp,
                    weatherType: data.weather[0].main,
                    feelsLike: data.main.feels_like,
                    windSpeed: data.wind.speed,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset
                }
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    getForecastWeather = () => {
        this.axios({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/forecast?appid=a3509cedbad1f4b168b89d294bba15cb&id=1279233&units=metric',
            responseType: 'json'
        }).then((response) => {
            const data = response.data.list;

            var weatherData = {};
            var dayCnt = 0;
            for (var i = 0; i < data.length; i++) {
                var dateTime = new Date(data[i].dt * 1000);
                var date = dateTime.toLocaleDateString();
                var day = dateTime.toString().split(' ')[0];
                var time = dateTime.toLocaleTimeString();

                var weather = {
                    day: day,
                    tempMin: data[i].main.temp_min,
                    tempMax: data[i].main.temp_max,
                    weatherType: data[i].weather[0].main,
                    time: time,
                    temp: data[i].main.temp
                };

                if (weatherData[date] === undefined) {
                    if (++dayCnt > 5)
                        break;
                    weatherData[date] = [weather];
                } else {
                    weatherData[date].push(weather);
                }
            }

            this.setState({
                forecastWeather: weatherData,
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    componentDidMount() {
        this.getCurrentWeather();
        this.getForecastWeather();
    }

    render() {

        var links = [];

        var routes = [];

        for (const prop in this.state.forecastWeather) {

            const obj = this.state.forecastWeather[prop];
            const path = obj[0].day;

            links.push(
                <NavLink to={"/" + path} key={path}>
                    <ForecastWeatherCard data={obj[0]} />
                </NavLink>
            );

            routes.push(
                <Route path={"/" + path} key={path}>
                    <WeatherForecastChart
                        data={obj}
                    />
                </Route>
            );
        }

        return (
            <div className="container">
                <div className="row text-center my-md-5 my-3">
                    <div className="col"><span className="h2 text-danger">Weather Forecast App</span></div>
                </div>
                <CurrentWeatherCard data={this.state.currentWeather} />
                <Router>
                    <div className="row text-center">
                        <div className="col forecast-weather-row">
                            {links}
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col">
                            <Switch>
                                {routes}
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}