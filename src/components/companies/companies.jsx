const Companies = () => {
	return (
		<div className="my-24 bg-gray10 w-full rounded-lg md:p-0 p-2">
			<div className="font-bold  text-center mb-16 text-2xl md:text-3xl">
				Compatible Companies
			</div>
			<div className="flex  justify-between  flex-wrap gap-12 md:gap-4">
				<img
					src="images/strategies/marketsharpe.svg"
					className="w-width-100 md:w-width-200"
					alt="MarketSharp"
				/>
				<img
					src="images/strategies/pipedrive-svgrepo-com.svg"
					className="w-width-100 md:w-width-200"
					alt="Pipedrive"
				/>
				<img
					src="images/strategies/AccuLynx.svg"
					className="w-width-100 md:w-width-200"
					alt="AccuLynx"
				/>
				<img
					src="images/strategies/hubspot.svg"
					className="w-width-100 md:w-width-200"
					alt="HubSpot"
				/>
				<img
					src="/images/strategies/housecall.svg"
					className="w-width-100 md:w-width-200"
					alt="Housecall"
				/>
			</div>
			<div className="flex justify-between gap-4 flex-wrap mt-0  px-0 lg:px-24 mt-4 ">
				<img
					src="images/strategies/salesforce-2.svg"
					className="w-width-100 md:w-width-200"
					alt="Salesforce"
				/>
				<img
					src="images/strategies/zoho-1.svg"
					className="w-width-100 md:w-width-200"
					alt="Salesforce"
				/>
				
				<img
					src="images/strategies/procore-vector-logo.svg"
					className="w-width-100 md:w-width-200"
					alt="Pipedrive"
				/>
				
				<img
					src="images/strategies/servicetitan-logo-vector.svg"
					className="w-width-100 md:w-width-200"
					alt="Service Titan"
				/>
			</div>
		</div>
	);
};

export default Companies;
