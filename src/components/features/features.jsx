import React from "react";

const features = [
	{ title: "Dedicated to Early Planning" },
	{ title: "Invest in the real business" },
	{ title: "Become Someone with Your Skills" },
	{ title: "Learn How to Work With Leaders and Become a Leader Yourself" },
	{ title: "Build Your Business Network With Team Members" },
	{ title: "Make a Income Steam and Become Financial Free" },
];

const Features = () => {
	return (
		<div className="py-12 bg-white">
			<h2 className="text-center text-5xl font-bold text-gray-800 mb-10 p-10">
				WHY CHOOSE MYTH FINANCIAL GROUP?
			</h2>
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
				{features.map((feature, index) => (
					<div
						key={index}
						className="border border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md"
					>
						<p className="text-gray-600 text-center text-lg">{feature.title}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Features;
