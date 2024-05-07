import React from "react";
import ToggleButton from "./Toggle";

const HeroSection = (props) => {
	const { handleClickDownArrow } = props;
	return (
		<div className="grid bg-white py-16">
			<div className="flex relative">
				<h1
					className="text-9xl bg-gradient-to-r inline-block text-transparent bg-clip-text"
					style={{
						"background-image":
							"linear-gradient(to right, white 0%, #002E5D 20%, #002E5D 67%, white 100%)",
					}}
				>
					WELCOME TO MYTH FINANCIAL GROUP
				</h1>
				<div className="justify-items-end absolute py-4 right-0">
					<ToggleButton />
				</div>
			</div>
			<div className="flex gap-6">
				<div className="basis-1/2">
					<button
						className="mt-16 mb-16 bg-[#F7C926] font-bold py-4 px-4 rounded-full "
						onClick={() => handleClickDownArrow()}
					>
						<img src="images/DownArrow.svg"></img>
					</button>
					<h2 className="text-4xl font-semibold mb-4">
						ABOUT MYTH FINANCIAL GROUP
					</h2>
					<p className="text-gray-700 text-lg">
						At Myth Financial Group, we believe in fearless investments in the
						future of families. We specialize in providing life insurance
						coverage in over 5 industries, including healthcare, education, and
						technology. Our team of experts is dedicated to providing you with
						the best life insurance solutions that are tailored to your specific
						needs and requirements.
					</p>
				</div>
				<div className="basis-1/2 -mt-24">
					<img src="images/Mask group.jpg" alt="Handshake" className="" />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
