import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getToasterNotifications } from "../../toaster/toaster";
import { ImCross } from "react-icons/im";
import { HiMenuAlt2 } from "react-icons/hi";
import DarkMode from "../darkmode/DarkMode";
const AdminSidebar = ({ children }) => {
	const [userInfo, setUserInfo] = useState("");
	const [toggleSidebar, setToggleSidebar] = useState(false);
	const [isDropdownVisible, setDropdownVisible] = useState(false);
	const navigate = useNavigate();
	const toggleDropdown = () => {
		setDropdownVisible(!isDropdownVisible);
	};
	const location = useLocation();
	const { pathname } = location;

	// Split the pathname and get the last segment
	const pathSegments = pathname.split("/");
	const path = pathSegments[pathSegments.length - 1];

	const handleLogout = () => {
		try {
			localStorage.removeItem("token");
			localStorage.removeItem("selectedTheme");
			navigate("/");

			getToasterNotifications("User Logged out successfully!!");
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
	}, []);

	return (
		<div className="h-screen overflow-x-hidden bg-[--admin-bg]">
			<div className="grid-cols-12 lg:grid">
				<div
					className={`bg-[--sidebar-bg] md:col-span-3 xl:col-span-2 fixed lg:block lg:static top-0 z-[100] border ${
						toggleSidebar ? "block h-screen" : "hidden"
					} `}
				>
					<div className="absolute block text-lg top-2 right-2 lg:hidden">
						<ImCross
							className="cursor-pointer text-white10"
							onClick={() => setToggleSidebar(false)}
						/>
					</div>
					<div className="flex flex-col ">
						<div className="flex justify-center mt-8">
							<img
								src="/images/logo.png"
								onClick={() => (window.location.href = "/")}
								className="w-3/4 p-3 cursor-pointer text-white10"
								alt="no-logo"
							/>
						</div>
						<div className="py-2 pr-2 ml-5 text-white10 text-1xl">
							<ul className="text-sm lg:text-base">
								<Link to="/dashboard">
									<li
										className={`flex py-3 px-4 ${
											path === "dashboard" && "bg-blue100"
										}`}
									>
										<img
											src="images/admin/dash.png"
											className="w-4 h-4 mt-1 mr-4"
											alt="dash"
										/>
										<p>Dashboard</p>
									</li>
								</Link>
								<Link to="/reports">
									<li
										className={`flex  py-3 px-4 ${
											path === "reports" && "bg-blue100"
										}`}
									>
										<img
											src="images/admin/reports.png"
											className="w-4 h-4 mt-1 mr-4"
											alt="dash"
										/>
										<p>Reports</p>
									</li>
								</Link>
								<Link to="/settings">
									<li
										className={`flex  py-3 px-4  ${
											path === "settings" && "bg-blue100"
										}`}
									>
										<img
											src="images/admin/settings.png"
											className="w-4 h-4 mt-1 mr-4"
											alt="dash"
										/>
										<p>Settings</p>
									</li>
								</Link>
								<Link to="/subscription">
									<li
										className={`flex  py-3 px-4  ${
											path === "subscription" && "bg-blue100"
										}`}
									>
										<img
											src="images/admin/subs.png"
											className="w-3 h-3 mt-1 mr-4"
											alt="dash"
										/>
										<p>Subscription</p>
									</li>
								</Link>
								<Link to="/account">
									<li
										className={`flex  py-3 px-4  ${
											path === "account" && "bg-blue100"
										}`}
									>
										<img
											src="images/admin/account.png"
											className="w-4 h-4 mt-1 mr-4"
											alt="dash"
										/>
										<p>Account</p>
									</li>
								</Link>
								<Link to="/admin-contact">
									<li
										className={`flex  py-3 px-4  ${
											path === "admin-contact" && "bg-blue100"
										}`}
									>
										<img
											src="https://img.icons8.com/?size=80&id=PyVmwJx682vD&format=png"
											className="w-4 h-4 mt-1 mr-4 text-white"
											alt="dash"
										/>
										<p>Contact Us</p>
									</li>
								</Link>
							</ul>
						</div>
					</div>
				</div>
				<div className="relative col-span-12 md:col-span-9 xl:col-span-10">
					<div className="lg:h-80 h-200 flex items-center justify-end mr-1 bg-[--body_bg] text-[--body_color]">
						<div className="flex items-center">
							<div className="absolute block p-1 text-3xl border-0 top-6 left-1 border-blue100 lg:hidden">
								<HiMenuAlt2
									className="text-2xl font-bold cursor-pointer logo-brand"
									onClick={() => setToggleSidebar(!toggleSidebar)}
								/>
							</div>

							<DarkMode />
							<div className="relative flex items-center">
								<div className="mr-4">
									<h3 className="text-xs font-medium lg:text-base">
										{userInfo?.user?.f_name} {userInfo?.user?.l_name}
									</h3>
									{/* <p className="text-xs text-gray-300 lg:text-base">
										{userInfo?.user?.c_name}
									</p> */}
								</div>
								<div className="w-10 h-10 lg:w-50 lg:h-50 ">
									<img
										className="object-cover w-full h-full rounded-full"
										src={userInfo?.user?.avatar}
										alt="profile"
									/>
								</div>
								<div className="relative group ">
									<button
										id="dropdownUsersButton"
										onClick={toggleDropdown}
										className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
										type="button"
									>
										<svg
											className={`w-2.5 h-2.5 ms-3  transition-transform duration-300 transform ${
												isDropdownVisible ? "rotate-180" : ""
											}`}
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 10 6"
										>
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="m1 1 4 4 4-4"
											/>
										</svg>
									</button>
									<div
										id="dropdownDots"
										className={`${
											isDropdownVisible ? "block" : "hidden"
										} origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-[--body_bg] ring-1 ring-black ring-opacity-5 `}
									>
										<div
											className="py-1"
											role="menu"
											aria-orientation="vertical"
											aria-labelledby="options-menu"
										>
											<Link
												to="/dashboard"
												className="block px-4 py-2 text-sm hover:bg-blue-800"
											>
												Dashboard
											</Link>
											<Link
												to="/account"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
											>
												Accounts
											</Link>
										</div>
										<div className="border-t border-gray-100"></div>
										<div
											className="py-1"
											role="menu"
											aria-orientation="vertical"
											aria-labelledby="options-menu"
										>
											<div
												onClick={() => handleLogout()}
												className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
											>
												Logout
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* pages for admin */}
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
};

export default AdminSidebar;
