import moment from "moment";

export const getChartXLabels = (selectedPeriod) => {
	const today = moment();

	if (selectedPeriod === "12 Months" || selectedPeriod === "6 Months") {
		const months = Array.from(
			{ length: selectedPeriod === "12 Months" ? 12 : 6 },
			(_, i) => today.clone().add(i, "months").format("MMM")
		);

		return months;
	}

	if (selectedPeriod === "30 Days") {
		const startOfMonth = moment().startOf("month");
		const endOfMonth = moment().endOf("month");

		const days = [];
		let currentDay = startOfMonth.clone();

		while (currentDay.isSameOrBefore(endOfMonth)) {
			days.push(currentDay.format("DD/MM"));
			currentDay.add(1, "day");
		}

		return days;
	}

	if (selectedPeriod === "7 Days") {
		const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

		return days;
	}
};

export const graphGrossRevenues = (graphData, selectedPeriod, chartData) => {
	if (selectedPeriod === "12 Months" || selectedPeriod === "6 Months") {
		let data = graphData?.groupByMonths || [];
		if (selectedPeriod === "6 Months") return data.slice(-6);
		return data;
	}

	if (selectedPeriod === "30 Days") return graphData?.groupByDays || [];

	if (selectedPeriod === "7 Days") return graphData?.groupByWeekdays || [];
};
