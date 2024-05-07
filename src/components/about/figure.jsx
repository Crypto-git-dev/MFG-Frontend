import React from "react";

const FigureView = () => {
	const figures = [
		{ figure: "10+", caption: "Years Experience" },
		{ figure: "50+", caption: "Current Insurance Products" },
		{ figure: "30+", caption: "Insurance Providers" },
		{ figure: "1000+", caption: "Satisfied Clients" },
	];
	return (
		<div className="grid grid-cols-4 py-12">
			{figures.map((figureInformation) => {
				return (
					<div className="flex flex-col items-center justify-center gap-4">
						<h1 className="text-black text-5xl font-semibold">
							{figureInformation.figure}
						</h1>
						<p className="text-gray-700 text-sm">{figureInformation.caption}</p>
					</div>
				);
			})}
		</div>
	);
};

export default FigureView;
