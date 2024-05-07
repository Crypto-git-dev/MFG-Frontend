import React from "react";

const features = [
	{ title: "Dedicated to Early Planning" },
	{ title: "Invest in the real business" },
	{ title: "Become Someone with Your Skills" },
	{ title: "Learn How to Work With Leaders and Become a Leader Yourself" },
	{ title: "Build Your Business Network With Team Members" },
	{ title: "Make a Income Steam and Become Financial Free" },
];

const Features = React.forwardRef((props, ref) => {
	return (
		<div className="py-12 bg-white" ref={ref}>
			<h2 className="text-center text-5xl font-bold text-black mb-10 p-10">
				WHY CHOOSE MYTH FINANCIAL
				<br /> GROUP?
			</h2>
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
				{features.map((feature, index) => (
					<div
						key={index}
						className="border border-gray-300 p-6 rounded-tr-3xl rounded-bl-3xl shadow-sm hover:shadow-md h-56 flex justify-center items-center"
					>
						<p className="text-black text-center text-2.5xl">{feature.title}</p>
					</div>
				))}
			</div>
		</div>
	);
});

export default Features;
