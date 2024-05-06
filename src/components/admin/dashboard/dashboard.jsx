import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminSidebar from "../adminSidebar/adminSidebar";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import debounce from "lodash/debounce";
import DashboardTable from "./dashboardTable/dashboardTable";
import GraphAnalysis from "./GraphAnalysis";
import { useEffect, useState } from "react";
import { handleGetActiveFeatures } from "../../../helper/featureService";
import LoadingSpinner from "../../loading/LoadingSpinner";
import {
	handleGetFinanceData,
	handleUpdateFinanceData,
} from "../../../helper/financeService";
import { handleGetDashboard } from "../../../helper/dashboardService";
import moment from "moment";
import MarketingSpent from "./MarketingSpent";
import { handleGetMarketSpent } from "../../../helper/marketSpentService";

const Dashboard = () => {
	const [toggleInput, setToggleInput] = useState(false);
	const [data, setData] = useState([]);
	const [finance, setFinance] = useState({
		gross_revenue: 0,
		market_spent: 0,
	});
	const [loading, setLoading] = useState(false);
	const [targetData, setTargetData] = useState(null);
	const [graphData, setGraphData] = useState(null);
	const [leadSources, setLeadSources] = useState([]);
	const [marketingSpent, setMarketingSpent] = useState([]);

	const fetchData = async () => {
		setLoading(true);
		try {
			const {
				target,
				graph,
				leadSources: sources,
				marketingSpent: spent,
			} = await handleGetDashboard();
			setTargetData(target);
			setGraphData(graph);
			setLeadSources(sources);
			setMarketingSpent(spent);
			const spentRes = await handleGetMarketSpent();
			setMarketingSpent(spentRes);
			const response = await handleGetActiveFeatures();
			setData(response);
			const responseFinance = await handleGetFinanceData();
			setFinance({
				gross_revenue: responseFinance?.gross_revenue,
				market_spent: responseFinance?.market_spent,
			});
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const updateFinances = async () => {
		await handleUpdateFinanceData(finance);
	};

	// Use debounce to delay the updateFinances function
	const debouncedUpdateFinances = debounce(updateFinances, 500); // Adjust the delay time as needed

	useEffect(() => {
		fetchData();
		if (toggleInput) {
			// Make the API call when the user has finished typing (debounced)
			debouncedUpdateFinances();
		}
	}, [toggleInput]);

	return (
		<AdminSidebar>
			<div className="bg-[--admin-bg] w-[100vw] lg:w-auto h-screen overflow-y-scroll justify-center">
				<div className="justify-center px-4 py-8 lg:px-20 ">
					<div className="z-10 justify-center mt-5 transparent ">
						{loading && <LoadingSpinner />}
					</div>
					<div
						className={`${
							loading
								? "bg-gray20 opacity-40 backdrop-blur-2xl transparent"
								: ""
						}`}
					>
						<div
							className="grid items-center justify-center grid-cols-12 gap-6 text-center"
							style={{ pointerEvents: "none" }}
						>
							{data &&
								data?.map((item, idx) => (
									<div
										className="items-center justify-center col-span-8 lg:col-span-3"
										key={idx}
									>
										<div className="max-w-lg lg:p-4 py-4 px-2 bg-[--card-bg]  rounded-lg shadow">
											<p className="mb-3 font-normal  text-[--card-header]">
												{item.title}
											</p>

											<div className="flex items-center justify-center ">
												<h3 className="font-medium text-1xl text-[--card-text]">
													<span className="mr-1">
														{item.currency === "USD" && "$"}
													</span>
													{item.amount.toLocaleString()}
												</h3>
												{/* <p
													className={`text-sm text-${
														item.rate.includes("+") ? "green10" : "red20"
													}`}
												>
													{item.rate}
													<FontAwesomeIcon icon={faArrowUp} />
												</p> */}
											</div>
										</div>
									</div>
								))}
						</div>
					</div>
					<div className="grid grid-cols-12 gap-6 mt-16 ">
						{/* chart js */}
						<GraphAnalysis graph={graphData} />

						{/* income */}
						<div className="col-span-12 lg:col-span-4 ">
							<div className="flex flex-col space-y-4">
								<div className="p-4 rounded-lg shadow-lg bg-blue100 text-white10">
									<h1 className="text-lg font-semibold text-center">
										GROSS REVENUE
									</h1>
									<div className="mt-2 space-y-1 ">
										<p className="text-center">{moment().format("MMMM")}</p>
										<p>
											Total: $
											{targetData?.grossRevenue
												? targetData?.grossRevenue.toLocaleString()
												: 0}
										</p>
									</div>
								</div>

								<MarketingSpent
									data={marketingSpent}
									setLoading={setLoading}
									fetchData={fetchData}
								/>
							</div>

							{/* <div className="grid items-center justify-between w-full grid-cols-2 gap-2 p-2 border rounded-lg shadow text-white10 bg-gray20">
								<div className="flex flex-col items-start justify-between h-full p-2 rounded-lg bg-brand">
									<h4 className="pr-2 text-lg font-bold leading-tight uppercase">
										Marketing Spent
									</h4>
									<div>
										<div>June</div>
										<div className="flex">
											<span className="mt-1 mr-1">$</span>{" "}
											{toggleInput ? (
												<input
													className="finance-input2 text-xl border-0 bg-brand text-white10 font-medium w-full text-blue100 px-2.5 placeholder:text-white10 border-b-2 outline-none"
													value={targetData?.marketing_spent}
													name="market_spent"
													onBlur={handleInputBlur}
													onChange={(event) =>
														handleInputChange(event, "market_spent")
													}
												/>
											) : (
												<span
													className="text-lg p-1/2"
													onClick={() => setToggleInput(!toggleInput)}
												>
													{targetData?.marketing_spent?.toLocaleString()}
												</span>
											)}
										</div>
									</div>
								</div>
							</div> */}

							{/* <div
								className="w-full p-6 mt-8 rounded-lg shadow bg-brand "
								onClick={() => updateFinances()}
							>
								<h4 className="font-bold text-white10">Target Goals</h4>
								<div className="flex justify-between mt-2 ">
									<p className="w-full border-b-4 border-solid text-white10 border-white10 dark:border-gray50 dark:text-white10">
										CPL
									</p>
									<p className="ml-8 text-white10">
										{targetData?.cpl ? targetData?.cpl.toLocaleString() : 0}
									</p>
								</div>
								<div className="flex justify-between mt-2 ">
									<p className="w-1/2 border-b-4 border-solid text-white10 border-white10 dark:border-gray50 dark:text-white10">
										CAC
									</p>
									<p className="text-white10">
										{targetData?.cac ? targetData?.cac.toLocaleString() : 0}
									</p>
								</div>
								<div className="flex justify-between mt-2 ">
									<p className="w-1/3 border-b-4 border-solid text-white10 border-white10 dark:border-gray50 dark:text-white10">
										Jobs Sold
									</p>
									<p className="text-white10">
										{targetData?.jobsSold
											? targetData?.jobsSold.toLocaleString()
											: 0}
									</p>
								</div>
								<div className="flex justify-between mt-2 ">
									<p className="w-1/3 border-b-4 border-solid text-white10 border-white10 dark:border-gray50 dark:text-white10">
										Gross Revenue
									</p>
									<p className="text-white10">
										{targetData?.grossRevenue
											? targetData?.grossRevenue.toLocaleString()
											: 0}
									</p>
								</div>
								<div className="flex justify-between mt-2 ">
									<p className="w-1/3 border-b-4 border-solid text-white10 border-white10 dark:border-gray50 dark:text-white10">
										Marketing Spent
									</p>
									<p className="text-white10">
										{targetData?.marketingSpent
											? targetData?.marketingSpent.toLocaleString()
											: 0}
									</p>
								</div>
							</div> */}
						</div>
					</div>
					{/* table */}
					<DashboardTable data={leadSources} />
				</div>
			</div>
		</AdminSidebar>
	);
};

export default Dashboard;
