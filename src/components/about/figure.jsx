import React from "react";

const FigureView = () => {
	const figures = [
		{ figure: "10+", caption: "Years Experience" },
		{ figure: "50+", caption: "Current Insurance Products" },
		{ figure: "30+", caption: "Insurance Providers" },
		{ figure: "1000+", caption: "Satisfied Clients" },
	];
	return (
		<div className="grid grid-rows-4">
			{figures.map((figureInformation) => {
				return (
					<div>
						<p className="">{figureInformation.figure}</p>
					</div>
				);
			})}
		</div>
	);
};

export default FigureView;
