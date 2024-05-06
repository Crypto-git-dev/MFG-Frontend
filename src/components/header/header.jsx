import React from "react";

const Navbar = () => {
	return (
		<nav className="bg-white py-4">
			<div className="container mx-auto flex justify-between items-center px-4">
				<div className="flex items-center">
					<img src="images/group2.svg" alt="MFG Logo" className="h-8" />{" "}
					{/* Adjust the path and size as needed */}
					<div className="flex flex-col py-3">
						<span className="text-lg font-semibold">MFG</span>
						<span className="text-xs font-semibold">Myth Financial Group</span>
					</div>
				</div>
				<div className="hidden md:flex">
					<a
						href="#"
						className="px-8 py-4 text-gray-600 rounded-full border-[#002E5D] border"
					>
						Home
					</a>
					<a
						href="#"
						className="px-8 py-4 text-gray-600 rounded-full border-[#D8D8D8] border"
					>
						About Us
					</a>
					<a
						href="#"
						className="px-8 py-4 text-gray-600 rounded-full border-[#D8D8D8] border"
					>
						News
					</a>
				</div>
				<div className="flex">
					<a
						href="#"
						className="px-4 py-4 text-gray-600 hover:bg-gray-100 rounded-full border-[#D8D8D8] border"
					>
						<img src="images/join.svg" className=""></img>
					</a>
					<button className="px-8 py-4 bg-dark10 text-white10 justify-self-end rounded-full">
						Join Team
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
