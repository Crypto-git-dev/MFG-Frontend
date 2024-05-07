import { useEffect, useRef } from "react";
import Features from "../../components/features/features";
import Blogs from "../../components/blogs/blogs";
import About from "../../components/about/about";
import Contact from "../../components/contact/contact";
import Investor from "../../components/investor/investor";

const Landing = () => {
	const featureRef = useRef(null);
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
	const handleClickDownArrow = () => {
		console.log(featureRef);
		featureRef.current.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<div>
			<section id="about">
				<About handleClickDownArrow={handleClickDownArrow} />
			</section>
			<section id="features">
				<Features ref={featureRef} />
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

export default Landing;
