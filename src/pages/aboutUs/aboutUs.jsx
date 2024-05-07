import { useEffect } from "react";
import AbousUs from "../../components/about/aboutUs";
import Contact from "../../components/about/contact";
import FigureView from "../../components/about/figure";
import Team from "../../components/about/team";
import Partners from "../../components/about/partners";

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
			<section id="team">
				<Team />
			</section>
			<section id="contact">
				<Contact />
			</section>
			<section id="partner">
				<Partners />
			</section>
		</div>
	);
};

export default AboutUs;
