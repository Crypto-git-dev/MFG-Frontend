const DashboardTable = ({ data }) => {
	return (
		<div className="mt-12">
			<div className="relative overflow-x-auto">
				<table className="w-full text-sm text-gray-500 rtl:text-right dark:text-gray-400">
					<thead className="text-[--graph-title] uppercase bg-[--table-head]">
						<tr className="text-left text-xs text-[--table-title]">
							<th scope="col" className="px-6 py-3">
								Lead Source
							</th>
							<th scope="col" className="px-6 py-3">
								Leads
							</th>
							<th scope="col" className="px-6 py-3">
								Appts
							</th>
							<th scope="col" className="px-6 py-3">
								Sold
							</th>
							<th scope="col" className="px-6 py-3">
								CPL
							</th>
							<th scope="col" className="px-6 py-3">
								CAC
							</th>
							<th scope="col" className="px-6 py-3">
								Appointment Ratio
							</th>
							<th scope="col" className="px-6 py-3">
								Revenue
							</th>
						</tr>
					</thead>
					<tbody className=" bg-[--graph-bg] text-[--graph-title]">
						{data?.length > 0
							? data?.map((source, index) => {
									const apptRatio = (source.appts / source.leads) * 100;
									return (
										<tr
											className="text-xs border-b-2 border-gray50"
											key={index}
										>
											<td className="px-6 py-6 font-semibold text-gray-900 whitespace-nowrap ">
												{source?.name}
											</td>
											<td className="px-6 py-4">{source?.leads}</td>
											<td className="px-6 py-4">{source?.appts}</td>
											<td className="px-6 py-4">{source?.sold}</td>
											<td className="px-6 py-4">
												$ {source?.cpl?.toLocaleString()}
											</td>
											<td className="px-6 py-4">
												$ {source?.cac?.toLocaleString()}
											</td>
											<td className="flex items-center justify-between px-6 py-4 mt-2">
												<input
													id="default-range"
													type="range"
													value={`${apptRatio || 0}`}
													className="w-2/3 h-2 rounded-lg cursor-pointer bg-brand range"
												/>
												<p>{apptRatio ? apptRatio.toFixed(2) : 0}%</p>
											</td>
											<td className="px-6 py-4">
												${" "}
												{source?.revenue
													? source?.revenue?.value?.toLocaleString()
													: 0}
											</td>
										</tr>
									);
								})
							: null}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default DashboardTable;
