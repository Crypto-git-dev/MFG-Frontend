

import React, { useState } from "react";

import AdminSidebar from "../adminSidebar/adminSidebar";
import "react-multi-carousel/lib/styles.css";
import CrmApp from "../settings/crmApp/crmApp";


import CrmDashboard from "../settings/crmDashboard/crmDashboard";
const Settings = () => {
	const [tabs, setTabs] = useState("crm");

	return (
		<AdminSidebar height="h-screen">
			<div className="border border-gray50 dark:border-gray30"></div>
			<div>
				<div>
					<div className={`text-sm font-medium text-center ml-8 text-gray-500`}>
						<ul className="flex flex-wrap -mb-px">
							<li
								onClick={() => setTabs("crm")}
								className={`me-2 inline-block p-4 text-smxl cursor-pointer ${
									tabs === "crm"
										? "border-b-4 border-red50 dark:border-gray30"
										: "border-none"
								}rounded-t-lg text-[--graph-title]`}
							>
								CRM APPS
							</li>
							<li
								onClick={() => setTabs("dashboard")}
								className={`me-2 inline-block cursor-pointer text-smxl p-4 ${
									tabs === "dashboard"
										? "border-b-4 dark:border-gray30"
										: "border-none"
								} text-[--graph-title]`}
							>
								Dashboard
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="bg-[--admin-bg] h-screen">
				{tabs === "crm" ? <CrmApp /> : <CrmDashboard />}
			</div>
		</AdminSidebar>
	);
};

export default Settings;
