import { useEffect } from "react";
import Companies from "../../components/companies/companies";
import Features from "../../components/features/features";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Map from "../../components/map/map";
import Pricing from "../../components/pricing/pricing";
import About from "../../components/about/about"

const Landing = () => {
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
			<div className="px-8 md:px-24  py-8  ">
				<Header />
				<section id="about">
					<About />
				</section>
				<section id="features">
					<Features />
				</section>
				<section id="pricing-section" >
					<Pricing />
				</section>

				<Map />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Landing;
