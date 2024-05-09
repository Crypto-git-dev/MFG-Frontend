import React from "react";

const AgentPhoto = (props) => {
	const { photoUrl } = props;
	return (
		<div className="flex flex-col gap-8">
			<h1
				className="text-3xl bg-gradient-to-r inline-block text-transparent bg-clip-text"
				style={{
					"background-image":
						"linear-gradient(to right, white 0%, #002E5D 20%, #002E5D 67%, white 100%)",
				}}
			>
				AGENT
			</h1>
			<div>
				<img src={photoUrl} className="object-contain "></img>
			</div>
		</div>
	);
};

export default AgentPhoto;
