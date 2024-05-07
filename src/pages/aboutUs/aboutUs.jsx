import { useEffect } from "react";
import Features from "../../components/features/features";
import Blogs from "../../components/blogs/blogs";
import AbousUs from "../../components/about/aboutUs";
import Contact from "../../components/contact/contact";
import Investor from "../../components/investor/investor";
import FigureView from "../../components/about/figure";

const AboutUs = () => {
	useEffect(() => {
		// Check if there's a URL fragment
		const targetSection = window.location.hash;

		if (targetSection) {
			// Scroll to the target section
			const targetElement = document.querySelector(targetSection);
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, []);
	return (
		<div>
			<section id="aboutUs">
				<AbousUs />
			</section>
			<div class="border-t border-gray-300 -mx-20"></div>
			<section id="figures" className="-mx-20">
				<FigureView />
			</section>
			<div class="border-t border-gray-300 -mx-20"></div>
		</div>
	);
};

export default AboutUs;
