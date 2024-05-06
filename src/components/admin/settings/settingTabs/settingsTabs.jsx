const SettingsTabs = ({ setTab, tab }) => {
	return (
		<div>
			<div className="border border-gray50 dark:border-gray30"></div>
			<div
				className={`text-sm font-medium text-center  dark:border-gray-700 pl-8 pt-4`}
			>
				<ul className="flex flex-wrap -mb-px">
					<li
						onClick={() => setTab("crm")}
						className={`me-2 inline-block p-4 text-md xl:cursor-pointer ${
							tab === "crm"
								? "border-b-4 text-red-500 dark:border-gray-300"
								: "border-none"
						} rounded-t-lg text-[--graph-title]`}
					>
						CRM APPS
					</li>
					<li
						onClick={() => setTab("dashboard")}
						className={`me-2 inline-block cursor-pointer text-md xl:p-4 ${
							tab === "dashboard"
								? "border-b-4 dark:border-gray-300"
								: "border-none"
						} text-[--graph-title]`}
					>
						Dashboard
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SettingsTabs;
