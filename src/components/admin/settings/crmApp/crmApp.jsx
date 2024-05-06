import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import ListCrmApp from "./ListCrmApp";
import CrmAppModal from "./CrmAppModal";
import {
	connectCrmApps,
	deleteCrmApp,
	editCrmApps,
	getAllCrmApps,
	getAllUsersCrmApps,
} from "../../../../helper/crmService";
import LoadingSpinner from "../../../loading/LoadingSpinner";
import { handleCreateMarketSpent } from "../../../../helper/marketSpentService";

const CrmApp = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 564, min: 0 },
			items: 1,
		},
	};

	const [selectedItem, setSelectedItem] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [data, setData] = useState([]);
	const [featuredData, setFeaturedData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [editAppClick, setEditAppClick] = useState(false);

	const handleConnectClick = (item) => {
		setSelectedItem(item);
		setIsModalOpen(true);
		setEditAppClick(false);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleConnect = async (selectedItem, formData) => {
		try {
			setIsLoading(true);
			await connectCrmApps(
				selectedItem._id,
				formData.tokenAccess,
				formData.apiKey
			);
			// if (formData.marketSpent) {
			// 	await handleCreateMarketSpent({
			// 		crm: selectedItem._id,
			// 		amount: formData.marketSpent,
			// 	});
			// }
			setIsModalOpen(false);
		} catch (error) {
			setIsModalOpen(true);
		}
		await fetchUserCrmApps();
		setIsLoading(false);
	};
	const handleEditOpenApp = async (selectedItem, item) => {
		setIsModalOpen(true);
		setEditAppClick(true);
		setSelectedItem(item);
	};
	const handleEditSubmitApp = async (selectedItem, item) => {
		try {
			setEditAppClick(true);
			setIsModalOpen(true);
			setIsLoading(true);
			await editCrmApps(selectedItem._id, item.tokenAccess, item.apiKey);
			setIsModalOpen(false);
		} catch (error) {
			setIsModalOpen(true);
		}
		await fetchUserCrmApps();
		setIsLoading(false);
	};

	const handleDisconnectApp = async (appId) => {
		try {
			setIsLoading(true);
			await deleteCrmApp(appId);
		} catch (error) {
			setIsModalOpen(true);
		}
		await fetchUserCrmApps();
		setIsLoading(false);
	};

	const fetchCrmApps = async () => {
		const response = await getAllCrmApps();
		setData(response);
	};
	const fetchUserCrmApps = async () => {
		const response = await getAllUsersCrmApps();
		setFeaturedData(response);
	};

	useEffect(() => {
		fetchCrmApps();
		fetchUserCrmApps();
	}, []);

	return (
		<div>
			<div>
				<div className=" bg-[--admin-bg]">
					<div className="px-8 shadow-2xl"></div>
					<div className="bg-[--admin-bg] h-screen">
						<div className="z-10 justify-center transparent ">
							{isLoading && <LoadingSpinner />}
						</div>
						<div
							className={`${
								isLoading
									? "bg-[--admin-bg] opacity-40 backdrop-blur-2xl transparent"
									: ""
							}`}
						>
							<div className="p-4 py-12 lg:px-20">
								<div className="text-2xl my-4 text-[--card-header]">
									Featured CRM Apps
								</div>
								<>
									<h3 className="text-xl my-4 text-[--card-header]">
										{featuredData?.length === 0 ? "No Featured Data Yet" : null}
									</h3>
								</>
								<Carousel responsive={responsive}>
									{featuredData &&
										featuredData.map((item, index) => (
											<div
												className="p-6 bg-[--sidebar-bg] rounded-xl h-52 ml-3"
												key={index}
											>
												<div className="flex justify-between">
													<div>
														<h3 className="font-medium capitalize text-white10 text-1xl">
															{item?.app?.name}
														</h3>
														<p className="mt-3 text-sm font-medium text-white10">
															{item?.app?.description}
														</p>
													</div>
													<img
														src={item?.app?.imageSrc}
														className="h-1/2"
														alt={item?.app?.name}
													/>
												</div>
												<div className="flex items-center justify-end">
													<div
														className="px-2 mt-5 mr-6 border rounded-md cursor-pointer border-white10 py-1/2 text-white10"
														onClick={() => handleDisconnectApp(item._id)}
													>
														Disconnect
													</div>
													<button
														onClick={() => handleEditOpenApp(item._id, item)}
														className="px-12 py-1 mt-4 rounded-lg bg-white10 h-fit "
													>
														Edit
													</button>
												</div>
											</div>
										))}
								</Carousel>
								<div className="text-2xl my-4 mt-32 text-[--card-header]">
									All CRM Apps
								</div>
								{data.length > 0 ? (
									<Carousel responsive={responsive}>
										{data.map((item, index) => (
											<ListCrmApp
												key={index}
												data={item}
												onConnectClick={handleConnectClick}
											/>
										))}
									</Carousel>
								) : null}
							</div>
						</div>

						{isModalOpen && (
							<CrmAppModal
								selectedItem={selectedItem}
								setIsModalOpen={setIsModalOpen}
								onClose={handleCloseModal}
								onConnect={handleConnect}
								handleEditOpenApp={handleEditOpenApp}
								editAppClick={editAppClick}
								handleEditSubmitApp={handleEditSubmitApp}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CrmApp;
