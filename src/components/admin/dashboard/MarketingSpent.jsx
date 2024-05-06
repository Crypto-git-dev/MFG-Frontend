import { useState } from "react";
import moment from "moment";
import { handleUpdateMarketSpent } from "../../../helper/marketSpentService";
import LoadingSpinner from "../../loading/LoadingSpinner";

const MarketingSpent = ({ data, fetchData }) => {
	const [loading, setLoading] = useState(false);
	const [toggleInput, setToggleInput] = useState(null);
	const [inputValue, setInputValue] = useState(0);

	const total = data?.length
		? data.reduce((acc, cur) => (acc += cur.amount), 0)
		: 0;

	const handleToggleInput = (ind, spent) => {
		setToggleInput((prev) => (prev !== ind ? ind : null));
		setInputValue(spent.amount);
	};

	const updatedMarketingAmount = (spent) => {
		setLoading(true);
		try {
			handleUpdateMarketSpent({ id: spent._id, amount: inputValue });
			setToggleInput(null);
			setInputValue(0);
			fetchData();
		} finally {
			setLoading(false);
		}
	};

	const handleInputBlur = (_, spent) => updatedMarketingAmount(spent);

	return (
		<>
			<div className="z-10 justify-center mt-5 transparent ">
				{loading && <LoadingSpinner />}
			</div>
			<div className="p-4 rounded-lg shadow-lg bg-brand text-white10">
				<div className="text-center">
					<h1 className="text-lg font-semibold">Marketing Spent</h1>
					<p>{moment().format("MMMM")}</p>
				</div>

				<p className="py-2">Total: ${total}</p>
				<div className="mt-2 space-y-1">
					{data?.map((spent, index) => {
						const spentValue = spent?.amount || 0;
						const isInput = toggleInput === index;

						return (
							<div key={index} className="flex justify-between w-full">
								<p>{spent.leadSource}</p>
								{isInput ? (
									<input
										className="px-1 rounded-md text-dark10"
										value={isInput ? inputValue : spentValue}
										name="market_spent"
										onBlur={(e) => handleInputBlur(e, spent)}
										onChange={(e) => {
											setInputValue(e.target.value);
										}}
										onKeyDown={(e) => {
											if (e.key === "Enter") {
												updatedMarketingAmount(spent);
											}
										}}
									/>
								) : (
									<p
										role="button"
										onClick={() => handleToggleInput(index, spent)}
									>
										$ {spentValue}
									</p>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default MarketingSpent;
