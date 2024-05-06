import React from "react";
import Chart from "react-apexcharts";
import { getChartXLabels } from "../../../../lib/utils";

const MyChart = ({ chartData, selectedTimePeriod, data }) => {
	const chartOptions = {
		chart: {
			id: "line-chart",
			toolbar: {
				show: false,
				offsetX: 0,
				offsetY: 0,
				tools: {
					download: true,
					selection: true,
					zoom: false,
					zoomin: false,
					zoomout: false,
					pan: false,
					reset: true,
					customIcons: [],
				},
			},
		},
		xaxis: {
			categories: getChartXLabels(selectedTimePeriod),
		},
		yaxis: [
			{
				labels: {
					show: false,
				},
			},
			{
				seriesName: "Gross Revenue",
				show: false,
			},
			{
				axisTicks: {
					show: false,
				},
				axisBorder: {
					show: false,
					color: "#008FFB",
				},
				labels: {
					style: {
						colors: "#226692",
					},
				},
				title: {
					text: "Amount ($)",
					style: {
						color: "#226692",
					},
				},
				tooltip: {
					enabled: true,
				},
				min: 0,
				max: 500000,
				tickAmount: 8,
			},
		],
		grid: {
			show: true, // Set to false to hide vertical and horizontal grid lines
		},
		markers: {
			show: false,
		},
		stroke: {
			width: [1, 1],
			curve: "smooth",
		},
		fill: {
			opacity: 1,
			type: ["solid", "solid"],
			colors: ["#ff0000", "#00ff00"],
		},
		plotOptions: {
			area: {
				fillTo: "origin",
			},
		},
	};

	const series = chartData?.map((data) => ({
		name: data.name,
		data: data.values,
	}));

	return (
		<div>
			<Chart options={chartOptions} series={series} type="line" height={350} />
		</div>
	);
};

export default MyChart;
