// ListItem.js
import React from "react";

const ListCrmApp = ({ data, onConnectClick }) => {
	return (
		<div className="p-6 bg-[--sidebar-bg] ml-3 h-52 rounded-xl">
			<div className="flex justify-between">
				<div>
					<h3 className="font-medium text-white10 text-1xl">{data?.name}</h3>
					<p className="mt-3 text-sm font-medium text-white10">
						{data?.description}
					</p>
				</div>
				<img
					src={data?.imageSrc ?? ""}
					className="w-40 h-1/2"
					alt={data?.name}
				/>
			</div>
			<div className="flex items-center justify-end">
				<button
					className="px-12 py-1 mt-4 rounded-lg bg-white10 h-fit"
					onClick={() => onConnectClick(data)}
				>
					Connect
				</button>
			</div>
		</div>
	);
};

export default ListCrmApp;
