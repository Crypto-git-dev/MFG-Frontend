import { useEffect, useRef } from "react";
import Title from "../../components/news/title";
import NewsContent from "../../components/news/news";

const News = () => {
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
	return (
		<div>
			<section id="title">
				<Title />
			</section>
			<section id="news">
				<NewsContent />
			</section>
		</div>
	);
};

export default News;
