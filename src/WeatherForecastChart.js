import React from 'react'
import Chart from "chart.js";

export default class WeatherForecastChart extends React.Component {

    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: ["0", "1", "2", "3"],
                datasets: [
                    {
                        label: "Daily Forecast " + this.props.day,
                        data: [0, 86, 67, 91],
                        fill: false,
                        borderColor: "rgb(0, 48, 127)"
                    }
                ]
            },
            options: {

            }
        });
    }
    render() {
        return (
            <canvas
                id="myChart"
                ref={this.chartRef}
            />
        )
    }
}