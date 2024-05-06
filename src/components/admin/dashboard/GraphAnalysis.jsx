import React, { useEffect, useState } from "react";
import MyChart from "./chart/chart";
import { handlegraphsData } from "../../../helper/graphService";
import LoadingSpinner from "../../loading/LoadingSpinner";
import { graphGrossRevenues } from "../../../lib/utils";

const GraphAnalysis = ({ graph }) => {
	const [graphData, setGraphData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedTimePeriod, setSelectedTimePeriod] = useState();
	const [chartData, setChartData] = useState([]);

	const handleTimePeriodClick = (timePeriod) => {
		const selectedData = graphData.find(
			(data) => data.timePeriod === timePeriod
		);
		setSelectedTimePeriod(selectedData);
	};

	const fetchData = async () => {
		setLoading(true);
		try {
			const data = await handlegraphsData();
			setGraphData(data);
			setSelectedTimePeriod(data[0]); // Assuming data[0] is the default selected time period
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		if (graph && selectedTimePeriod) {
			const timePeriod = selectedTimePeriod.timePeriod;
			if (timePeriod === "12 Months") setChartData(graph.groupByMonths);
			if (timePeriod === "6 Months") setChartData(graph.groupBy6Months);
			if (timePeriod === "30 Days") setChartData(graph.groupByDays);
			if (timePeriod === "7 Days") setChartData(graph.groupByWeekdays);
		}
	}, [selectedTimePeriod, graph]);

	return (
		<div className="col-span-12 lg:col-span-8">
			<div className="p-2 w-full bg-[--graph-bg] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<div className="grid grid-cols-12">
					<div className="flex flex-col-reverse col-span-12 mt-2 mb-8">
						<h4 className="lg:text-1xl font-bold text-[--graph-title] text-center">
							Data Analysis
						</h4>
						<div className="z-10 justify-center mt-5 transparent">
							{loading && <LoadingSpinner />}
						</div>
						<div
							className={`${
								loading
									? "bg-gray20 opacity-40 backdrop-blur-2xl transparent"
									: ""
							}`}
						>
							{graphData && graphData.length !== 0 ? (
								<div className="flex items-center justify-end w-full gap-3 p-2 mb-2">
									{graphData &&
										graphData?.map((data, idx) => (
											<p
												key={idx}
												onClick={() => handleTimePeriodClick(data?.timePeriod)}
												className={`${
													selectedTimePeriod?.timePeriod === data?.timePeriod
														? "bg-gray-500 text-white border-gray50 shadow border-2"
														: "bg-gray-200  "
												} lg:p-1.5 p-2 cursor-pointer  rounded-lg  text-[--graph-title] lg:text-sm text-xs`}
											>
												{data?.timePeriod}
											</p>
										))}
								</div>
							) : null}
						</div>
					</div>
				</div>
				{graphData && graphData.length !== 0 ? (
					<MyChart
						chartData={chartData}
						selectedTimePeriod={selectedTimePeriod?.timePeriod}
						data={graphGrossRevenues(
							graph,
							selectedTimePeriod?.timePeriod,
							selectedTimePeriod.data
						)}
					/>
				) : null}
			</div>
		</div>
	);
};

export default GraphAnalysis;
