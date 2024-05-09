import React from "react";

const AgentCommunication = (props) => {
	return (
		<div className="grid grid-cols-2 gap-8 h-96">
			<div className="flex flex-col gap-8 bg-gray-300 p-8 rounded-2xl relative">
				<h1
					className="text-1xl bg-gradient-to-r inline-block text-transparent bg-clip-text font-semibold"
					style={{
						"background-image":
							"linear-gradient(to right, white 0%, #002E5D 20%, #002E5D 67%, white 100%)",
					}}
				>
					COMMENTS
				</h1>
				<div className="bottom-8 right-8 absolute">
					<div className="flex flex-row gap-4">
						<button className="p-4 rounded-lg border border-gray-700">
							<img src="images/agent/laugh.svg"></img>
						</button>
						<button className="p-4 rounded-lg border border-gray-700">
							<img src="images/agent/pin.svg"></img>
						</button>
						<button className="p-4 px-10 rounded-lg bg-[#002E5D]">
							<h1 className="text-white text-md">Publish</h1>
						</button>
					</div>
				</div>
			</div>
			<div className="flex flex-col flex-1 gap-8 bg-gray-300 p-8 rounded-2xl relative">
				<h1
					className="text-1xl bg-gradient-to-r inline-block text-transparent bg-clip-text font-semibold"
					style={{
						"background-image":
							"linear-gradient(to right, white 0%, #002E5D 20%, #002E5D 67%, white 100%)",
					}}
				>
					CHATS
				</h1>
				<div className="bottom-8 right-8 absolute">
					<button className="p-4 rounded-lg bg-[#002E5D]">
						<img src="images/agent/chat.svg"></img>
					</button>
				</div>
			</div>
		</div>
	);
};

export default AgentCommunication;
