import { useEffect } from "react";
import Features from "../../components/features/features";
import Blogs from "../../components/blogs/blogs";
import AbousUs from "../../components/about/aboutUs";
import Contact from "../../components/contact/contact";
import Investor from "../../components/investor/investor";

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
			<section id="features">
				<Features />
			</section>
			<section id="blogs">
				<Blogs />
			</section>
			<section id="contact">
				<Contact />
			</section>
			<section id="investors">
				<Investor />
			</section>
		</div>
	);
};

export default AboutUs;
