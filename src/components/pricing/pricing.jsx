
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GoIssueClosed } from "react-icons/go";

import "./pricing.css";
import { useNavigate } from "react-router-dom";
import { getToasterErrors } from "../toaster/toaster";
import { checkoutStripe } from "../../helper/paymentService";
import { useEffect, useState } from "react";
import LoadingSpinner from "../loading/LoadingSpinner";
import { handleGetServices } from "../../helper/serviceService";
const Pricing = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [data, setdata] = useState([])
	const checkout = async (plan) => {
		setLoading(true);
		await checkoutStripe(plan, navigate, getToasterErrors);
		setLoading(false);
	};
	const fetchServices =async ()=>{
		try {
			const responseData = await handleGetServices();
			setdata(responseData);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchServices();
	}, []);

	return (
		<>
			<div className="flex justify-center">
				<div className="justify-center transparent z-10 mt-5">
					{loading && <LoadingSpinner />}
				</div>
				<div
					className={`${
						loading ? "bg-gray-20 opacity-40 backdrop-blur-2xl transparent" : ""
					}`}
				>
					<div className="mt-6 md:mt-20 bg-gray20 p-2">
						<h3 className="font-bold text-2xl -mt-4 py-4 md:text-3xl text-center md:text-left">
							Pricing Made Simple
						</h3>

						<div className="grid grid-cols-12 gap-8 ">
							<div className="col-span-12 md:col-span-5">
								<div className="-mb-8 md:-mt-3 text-sm text-justify">
									Experience the full potential of our platform with a 14-day
									free trial. No commitments, unlimited users, and seamless
									transition into a subscription that fuels your marketing
									success.
								</div>
								<div className="md:border-b border-gray-400 mb-6 w-full mt-8 md:mt-12" />
								<ul className="space-y-4 text-gray-500 md:text-md text-lg list-disc list-inside dark:text-gray-400 text-justify mb-4">
									<li>Comprehensive Analytics Dashboard</li>
									<li>Customized Reporting Tools</li>
									<li>CRM Data Sync</li>
									<li>In Depth Lead Source Analysis</li>
									<li>Unlimited User Access</li>
									<li>Average age of clients</li>
									<li>Best zip codes per sold jobs</li>
									<li>Average household incomes per zip codes sold</li>
								</ul>
							</div>
							<div className="col-span-12 md:col-span-1 " />
							<div className="col-span-12 md:col-span-6 md:mt-4 mt-10">
								<div className="grid grid-cols-12 gap-3 md:-mt-16 mt-10">
									{data &&
										data.map((item, idx) => (
											<div
												key={idx}
												className="lg:mt-1 md:mt-4 col-span-12 md:col-span-6 card-text max-w-sm rounded overflow-hidden shadow-md hover:bg-brand"
											>
												<h2 className="text-center text-2xl capitalize">
													{item.name}
												</h2>
												<h3 className="h-120 pt-2 text-center">
													<span className="text-2xl font-medium">
														${item.price}
													</span>
													<span className="text-sm font-medium ml-1 capitalize">
														/{item.duration}
													</span>
												</h3>
												<div className="border-b border-gray-400 mb-6" />
												<div className="flex flex-col space-y-7 items-center hover:cursor-pointer">
													{item.features.map((i, ix) => (
														<div key={ix} className="hover:bg-blue rounded-full">
															{i.active ? (
																// <FaRegCheckCircle
																// 	color="green"
																// 	size={17}

																// />
																<GoIssueClosed
																	size={18}
																	className="text-green10 font-bold hover:shadow-md hover:bg-white10 text-center hover:border-white10 rounded-full"
																/>
															) : (
																<AiOutlineCloseCircle
																	size={18}
																	className="text-red10 font-bold hover:shadow-md hover:text-white10 text-center hover:border-white10 rounded-full"
																/>
															)}
														</div>
													))}
												</div>
												<div className="text-center hover:text-white-10">
													<button
														className="border-2 px-8 md:py-1/2 py-2 my-8 shadow rounded-lg border-gray-20 font-medium hover:shadow-2xl"
														onClick={() => checkout(item.name)}
													>
														Get Started
													</button>
												</div>
											</div>
										))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Pricing;
