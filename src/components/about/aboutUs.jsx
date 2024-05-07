import React from "react";
import ToggleButton from "./Toggle";

const HeroSection = () => {
	return (
		<div className="flex flex-col py-16 gap-8">
			<h1
				className="text-9xl bg-gradient-to-r inline-block text-transparent bg-clip-text"
				style={{
					"background-image":
						"linear-gradient(to right, white 0%, #002E5D 20%, #002E5D 67%, white 100%)",
				}}
			>
				ABOUT US
			</h1>
			<img src="images/collaboration.jpg"></img>
			<h2 className="text-4.5xl font-semibold">ABOUT MYTH FINANCIAL GROUP</h2>
			<p className="text-gray-700 text-2.5xl">
				At Myth Financial Group, we believe in fearless investments in the
				future of families. We specialize in providing life insurance coverage
				in over 5 industries, including healthcare, education, and technology.
				Our team of experts is dedicated to providing you with the best life
				insurance solutions that are tailored to your specific needs and
				requirements.
			</p>
		</div>
	);
};

export default HeroSection;
