import React from 'react'
import Chart from "chart.js";

export default class WeatherForecastChart extends React.Component {

    chartRef = React.createRef();

    componentDidMount() {

        var labels = [];
        var ticks = [];

        for (var data of this.props.data) {
            ticks.push(data.temp);
            labels.push(data.time);
        }

        Chart.defaults.global.legend.display = false;
        Chart.defaults.global.elements.line.tension = 0;
        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: '',
                        data: ticks,
                        fill: false,
                        borderColor: "rgb(0, 48, 127)"
                    }
                ]
            },
            options: {
                responsive: true,
                tooltips: {
                    callbacks: {
                        label: (item) => item.yLabel + "°",
                    },
                },
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