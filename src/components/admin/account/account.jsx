import React, { useState } from "react";

import AdminSidebar from "../adminSidebar/adminSidebar";
import Profile from "./profile";
import Password from "./password";

const Account = () => {
	const [tabs, setTabs] = useState("profile");
	
	return (
		<AdminSidebar height="h-screen">
			<div className="border border-gray50 dark:border-gray30"></div>
			<div>
				<div>
					<div className={`text-sm font-medium text-center ml-8 text-gray-500`}>
						<ul className="flex flex-wrap -mb-px">
							<li
								onClick={() => setTabs("profile")}
								className={`me-2 inline-block p-4 text-smxl cursor-pointer ${
									tabs === "profile"
										? "border-b-4 border-red50 dark:border-gray30"
										: "border-none"
								}rounded-t-lg text-[--graph-title]`}
							>
								Profile
							</li>
							<li
								onClick={() => setTabs("account")}
								className={`me-2 inline-block cursor-pointer text-smxl p-4 ${
									tabs === "account"
										? "border-b-4 dark:border-gray30"
										: "border-none"
								} text-[--graph-title]`}
							>
								Password
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="bg-[--admin-bg] h-screen">
				{tabs === "profile" ? <Profile /> : <Password />}
			</div>
		</AdminSidebar>
	);
};

export default Account;
