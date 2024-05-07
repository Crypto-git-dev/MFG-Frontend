import { useEffect } from "react";
import Features from "../../components/features/features";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Blogs from "../../components/blogs/blogs";
import About from "../../components/about/about";
import Contact from "../../components/contact/contact";
import Investor from "../../components/investor/investor";

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
			<div className="px-32 md:px-96 py-8">
				<Header />
				<section id="about">
					<About />
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
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Landing;
