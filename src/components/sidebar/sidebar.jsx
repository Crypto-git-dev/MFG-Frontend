const SideBar = ({ children }) => {
	return (
		<div className="grid grid-cols-12">
			<div className="bg-blue h-full  flex justify-center items-center h-custom1 col-span-12 md:col-span-3">
				<div className="flex flex-col">
					<div className="flex justify-center">
						<img
							onClick={() => (window.location.href = "/")}
							src="/images/logo.png"
							className="w-1/2 h-1/2 rounded-2xl cursor-pointer p-3 text-white10"
							alt="no-logo"
						/>
					</div>
					<div className="text-center text-white10 p-4">
						CRM-powered analytics for instant insights into your marketing
						strategies
					</div>
				</div>
			</div>
			<div className="col-span-12 md:col-span-9">{children}</div>
		</div>
	);
};

export default SideBar;
