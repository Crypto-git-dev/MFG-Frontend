import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "../pages/aboutUs/aboutUs";
import Landing from "../pages/landing/landing";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import News from "../pages/news/news";
import SignIn from "../pages/signIn/signIn";
import SignUp from "../pages/signUp/signUp";
import Join from "../pages/signUp/Join";
import Agent from "../pages/agent/agent";

const PageRouter = () => {
	const headerRef = useRef(null);
	const handleClickUpArrow = () => {
		headerRef.current.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<Router>
			<div className="px-32 md:px-96 py-8 " ref={headerRef}>
				<Header />
				<Routes>
					<Route exact path="/" element={<Landing />} />
					<Route exact path="/about" element={<AboutUs />} />
					<Route exact path="/news" element={<News />} />
					<Route exact path="/signin" element={<SignIn />} />
					<Route exact path="/signup" element={<SignUp />} />
					<Route exact path="/agent" element={<Agent />} />
				</Routes>
			</div>
			<div>
				<Footer handleClickUpArrow={handleClickUpArrow} />
			</div>
		</Router>
	);
};

export default PageRouter;
