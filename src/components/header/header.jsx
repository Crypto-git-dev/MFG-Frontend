import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
	const locations = useLocation();
	const borderColorClassNames = new Array(3).fill("border-[#D8D8D8]");
	switch (locations.pathname) {
		case "/": {
			borderColorClassNames[0] = "border-[#002E5D]";
			break;
		}
		case "/about": {
			borderColorClassNames[1] = "border-[#002E5D]";
			break;
		}
		case "/news": {
			borderColorClassNames[2] = "border-[#002E5D]";
			break;
		}
		default: {
			break;
		}
	}
	return (
		<nav className="bg-white py-4">
			<div className="container mx-auto flex justify-between items-center px-4">
				<div className="flex items-center">
					<img src="images/group2.svg" alt="MFG Logo" className="h-8" />{" "}
					{/* Adjust the path and size as needed */}
					<div className="flex flex-col py-3">
						<span className="text-lg font-semibold">MFG</span>
						<span className="text-xs">Myth Financial Group</span>
					</div>
				</div>
				<div className="hidden md:flex">
					<Link
						to="/"
						className={
							"px-8 py-4 text-gray-600 rounded-full border " +
							borderColorClassNames[0]
						}
					>
						Home
					</Link>
					<Link
						to="/about"
						className={
							"px-8 py-4 text-gray-600 rounded-full border " +
							borderColorClassNames[1]
						}
					>
						About Us
					</Link>
					<Link
						to="/news"
						className={
							"px-8 py-4 text-gray-600 rounded-full border " +
							borderColorClassNames[2]
						}
					>
						News
					</Link>
				</div>
				<div className="flex">
					<Link
						to="/signin"
						className="px-4 py-4 text-gray-600 hover:bg-gray-100 rounded-full border-[#D8D8D8] border"
					>
						<img src="images/join.svg" className=""></img>
					</Link>
					<Link
						to="/signup"
						className="px-8 py-4 bg-dark10 text-white10 justify-self-end rounded-full"
					>
						Join Team
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
