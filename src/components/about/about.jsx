import React from "react";

const HeroSection = () => {
	return (
		<div className="bg-white py-16">
			<img src="images/welcome.svg"></img>
			<div className="flex gap-6">
				<div className="basis-1/2">
					<button className="mt-16 mb-16 bg-[#F7C926] font-bold py-4 px-4 rounded-full">
						<img src="images/DownArrow.svg"></img>
					</button>
					<h2 className="text-3xl font-semibold mb-4">
						ABOUT MYTH FINANCIAL GROUP
					</h2>
					<p className="text-grey10 text-sm">
						At Myth Financial Group, we believe in fearless investments in the
						future of families. We specialize in providing life insurance
						coverage in over 5 industries, including healthcare, education, and
						technology. Our team of experts is dedicated to providing you with
						the best life insurance solutions that are tailored to your specific
						needs and requirements.
					</p>
				</div>
				<div className="basis-1/2">
					<img src="images/Mask group.jpg" alt="Handshake" className="" />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
