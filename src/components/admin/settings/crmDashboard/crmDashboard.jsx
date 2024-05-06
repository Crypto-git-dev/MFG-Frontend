import { useEffect, useState } from "react";
import { handleGetFeatures, updateFeature } from "../../../../helper/featureService";
import LoadingSpinner from "../../../loading/LoadingSpinner";

const CrmDashboard = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const handleToggle = async(idx,id,status) => {
		setLoading(true)

		await updateFeature(id,status);
		await fetchFeatures();
		setLoading(false);
	};

	const fetchFeatures = async () => {
		setLoading(true);
		const response = await handleGetFeatures();
		setData(response);
		setLoading(false);
	};

	useEffect(() => {
		fetchFeatures();
	}, []);

	return (
		<div className="text-gray70 h-screen bg-[--admin-bg]">
			<div className="lg:px-20 px-4 py-12">
				<h3 className="mt-12 text-2xl text-[--card-text]">
					Modify the behavior of the user interface for dashboard pages using
					the following settings:
				</h3>
				<div className="lg:px-12 mt-16 py-3">
					<div className="justify-center transparent z-10 mt-5">
						{loading && <LoadingSpinner />}
					</div>
					<div
						className={`${
							loading
								? "bg-gray20 opacity-40 backdrop-blur-2xl transparent"
								: ""
						}`}
					>
						<div className="lg:grid grid-cols-12 gap-12">
							{data.map((item, idx) => (
								<div className="col-span-5 md:mb-0 mb-3 p-2" key={idx}>
									<div className="col-span-1" />
									<div className="bg-white10 lg:p-3 p-2 items-center flex justify-between rounded-2xl">
										<h4 className="whitespace-nowrap lg:text-2xl text-lg flex text-gray70 capitalized">
											{item.title}
										</h4>
										<div
											className={`flex border-l-4  border-gray70 pl-6 text-end toggle-${idx}`}
										>
											<label className="relative h-0 w-fit my-3 pb-3 inline-flex mb-5 cursor-pointer">
												<input
													type="checkbox"
													className="sr-only peer"
													onChange={() =>
														handleToggle(idx, item._id, item.active)
													}
													defaultChecked={item.active}
												/>
												<div className="toggle-switch">
													<span className="text-gray-500 peer-checked:transform peer-checked:translate-x-full peer-checked:text-white absolute peer-checked:left-1/2 peer-checked:-translate-x-1/2 peer:transition-transform peer:transition-transform"></span>
													<span className="text-gray-500 peer-checked:translate-x-0 peer:transition-transform peer:transition-transform"></span>
												</div>
											</label>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CrmDashboard;
