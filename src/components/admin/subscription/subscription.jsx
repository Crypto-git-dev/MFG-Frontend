import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminSidebar from "../adminSidebar/adminSidebar";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { handleGetServices, handleGetServicesForUser } from "../../../helper/serviceService";
import LoadingSpinner from "../../loading/LoadingSpinner";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { checkoutStripe, unsubscribeStripe } from "../../../helper/paymentService";
import { getToasterErrors } from "../../toaster/toaster";
import { useNavigate } from "react-router-dom";


const Subscription = () => {
	const [loading, setLoading] = useState(false);
	const [data, setdata] = useState([]);
	const navigate = useNavigate();
	const [featuredData, setFeaturedData] = useState([]);

	const fetchServices = async () => {
		setLoading(true);
		try {
			const responseData = await handleGetServices();
			setdata(responseData);
			const featuredResponseData = await handleGetServicesForUser();
			setFeaturedData(featuredResponseData);
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};
	const checkout = async (plan) => {
		setLoading(true);
		await checkoutStripe(plan,navigate, getToasterErrors);
		setLoading(false);
	};
	const unSubscribeServices = async (id) => {
		setLoading(true);
		try {
			await unsubscribeStripe(id);
			fetchServices();
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};
	const mergedData = data.map((item1) => {
		const matchingItem = featuredData.find(
			(item2) => item2?.service?._id === item1._id 
		);
		return {
			...item1,
			id:matchingItem?._id,
			subscribed: matchingItem?.service?._id ===item1._id ? true : false,
		};
	});
	useEffect(() => {
		fetchServices();
	}, []);
	return (
		<AdminSidebar>
			<div className=" ">
				<div className="justify-center transparent  mt-5">
					{loading && <LoadingSpinner />}
				</div>
				<div
					className={`${
						loading ? "bg-gray20 opacity-40 backdrop-blur-2xl transparent" : ""
					} `}
				>
					<div className="mb-16 -mt-8 h-screen ">
						<div className="md:px-48 py-6">
							<h5 className="flex lg:px-46 text-[--card-header] text-center justify-center lg:text-4xl text-2xl font-small">
								Your Subscribed Packages
							</h5>
							<p className="flex justify-center lg:text-base text-sm mb-8 text-[--card-header] ">
								See all your packages you subscribed
							</p>
							<div className="mt-8 lg:grid lg:px-12 px-4 gap-24 grid-cols-12 mb-10 ">
								{mergedData &&
									mergedData.map((item, idx) => (
										<div
											key={idx}
											className="col-span-12 sm:col-span-6 text-dark10 bg-[--sidebar-bg] p-6 rounded shadow mb-8"
										>
											<h2 className="text-center pt-4 text-xl text-white10 capitalize">
												{item?.name}
											</h2>
											<h3 className="text-center pt-4 text-white10">
												<span className="text-4xl font-medium">
													${item?.price}
												</span>
												<span className="text-sm font-medium ml-1">
													/{item?.duration}
												</span>
											</h3>
											<p className="text-white10 px-2 text-center">
												All the {item?.features?.name} features on your
												dashboard
											</p>
											<ul className="mt-12 pl-12">
												{item?.features?.map((i, idx) => (
													<li
														className="flex mb-3 items-center text-white10"
														key={idx}
													>
														<span>
															{i.active ? (
																<FontAwesomeIcon
																	color="text-white10"
																	className="mr-2"
																	icon={faCircleCheck}
																/>
															) : (
																<IoMdCloseCircleOutline
																	color="red"
																	size={21}
																	className="mr-2 rounded-full"
																/>
															)}
														</span>
														<span>{i?.name}</span>
													</li>
												))}
											</ul>
											<button
												onClick={() =>
													!item.subscribed
														? checkout(item.name)
														: unSubscribeServices(item.id)
												}
												className={`border cursor-pointer text-gray10 rounded-lg w-full px-8 py-2 mt-16 mb-8 font-medium ${
													!item.subscribed
														? "bg-white10"
														: "bg-transparent border-white10 text-white10 "
												}`}
											>
												{item.subscribed ? "Unsubscribe" : "Subscribe"}
											</button>
										</div>
									))}
							</div>
							{data && data.length === 0 ? <h1>No Data found</h1> : ""}
						</div>
					</div>
				</div>
			</div>
		</AdminSidebar>
	);
};

export default Subscription;
