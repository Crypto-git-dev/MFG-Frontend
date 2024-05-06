import AdminSidebar from "../adminSidebar/adminSidebar";

const Reports = () => {
	return (
		<AdminSidebar>
			<div className="bg-[--admin-bg] ">
				<div className="px-4 py-12 lg:px-20 ">
					<div className="text-2xl text-[--admin-title] flex justify-center">
						Please choose which categories you’d like to run a report on
					</div>
					<div className="grid grid-cols-12 gap-6 mt-12 ">
						<div className="flex items-center justify-center col-span-12 lg:col-span-6">
							<img src="images/weeklyReports.png" alt="weeklyReports" />
						</div>
						<div className="col-span-12 lg:col-span-6 ">
							<div className="mb-4 p-4 w-full flex justify-between bg-[--card-bg] shadow dark:bg-gray-800 dark:border-gray-700">
								<div className="text-[--card-text]">Jobs sold</div>
								<div class="flex items-center">
									<input
										id="checked-checkbox"
										type="checkbox"
										defaultChecked={true}
										value=""
										class="w-4 h-4 text-blue-600 bg-gray-100  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
								</div>
							</div>
							<div className="mb-4 p-4 w-full flex justify-between bg-[--card-bg] shadow dark:bg-gray-800 dark:border-gray-700">
								<div className="text-[--card-text]">Jobs sold</div>
								<div class="flex items-center">
									<input
										id="checked-checkbox"
										type="checkbox"
										defaultChecked={true}
										value=""
										class="w-4 h-4 text-blue-600 bg-gray-100  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
								</div>
							</div>
							<div className="mb-4 p-4 w-full flex justify-between bg-[--card-bg] shadow dark:bg-gray-800 dark:border-gray-700">
								<div className="text-[--card-text]">Jobs sold</div>
								<div class="flex items-center">
									<input
										id="checked-checkbox"
										type="checkbox"
										defaultChecked={true}
										value=""
										class="w-4 h-4 text-blue-600 bg-gray-100  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
								</div>
							</div>
							<div className="mb-4 p-4 w-full flex justify-between bg-[--card-bg] shadow dark:bg-gray-800 dark:border-gray-700">
								<div className="text-[--card-text]">Jobs sold</div>
								<div class="flex items-center">
									<input
										id="checked-checkbox"
										type="checkbox"
										defaultChecked={true}
										value=""
										class="w-4 h-4 text-blue-600 bg-gray-100  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
								</div>
							</div>
							<div className="mb-4 p-4 w-full flex justify-between bg-[--card-bg] shadow dark:bg-gray-800 dark:border-gray-700">
								<div className="text-[--card-text]">Jobs sold</div>
								<div class="flex items-center">
									<input
										id="checked-checkbox"
										type="checkbox"
										defaultChecked={true}
										value=""
										class="w-4 h-4 text-blue-600 bg-gray-100  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
								</div>
							</div>
							<div className="mb-4 p-4 w-full flex justify-between bg-[--card-bg] shadow dark:bg-gray-800 dark:border-gray-700">
								<div className="text-[--card-text]">Jobs sold</div>
								<div class="flex items-center">
									<input
										id="checked-checkbox"
										type="checkbox"
										defaultChecked={true}
										value=""
										class="w-4 h-4 text-blue-600 bg-gray-100  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
								</div>
							</div>
							<div className="mb-4 p-4 w-full flex justify-between bg-[--card-bg] shadow dark:bg-gray-800 dark:border-gray-700">
								<div className="text-[--card-text]">Jobs sold</div>
								<div class="flex items-center">
									<input
										id="checked-checkbox"
										type="checkbox"
										defaultChecked={true}
										value=""
										class="w-4 h-4 text-blue-600 bg-gray-100  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
								</div>
							</div>
							<div className="mb-4 p-4 w-full flex justify-between bg-[--card-bg] shadow dark:bg-gray-800 dark:border-gray-700">
								<div className="text-[--card-text]">Jobs sold</div>
								<div class="flex items-center">
									<input
										id="checked-checkbox"
										type="checkbox"
										defaultChecked={true}
										value=""
										class="w-4 h-4 text-blue-600 bg-gray-100  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-center mt-4 lg:justify-end">
						<button className="px-12 py-4 mt-4 ml-0 text-center border rounded lg:ml-12 bg-blue text-white10 h-fit dark:bg-blue dark:text-gray50 md:mt-20 md:w-fit">
							Reports
						</button>
					</div>
				</div>
			</div>
		</AdminSidebar>
	);
};

export default Reports;
