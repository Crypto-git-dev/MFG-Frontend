import React from "react";

const Investor = (props) => {
	return (
		<div class="bg-white py-12">
			<div class="grid grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="grid grid-cols-2 gap-8">
					<div class="space-y-2 text-center bg-gray20 rounded-2xl p-5">
						<div class="w-20 h-20 rounded-full bg-[#F7C926] bg-yellow-300 mx-auto flex items-center justify-center">
							<i class="icon-class">🏦</i>
						</div>
						<p class="font-semibold">Checking Accounts</p>
					</div>
					<div class="space-y-2 text-center bg-gray20 rounded-2xl p-5">
						<div class="w-20 h-20 rounded-full bg-[#F7C926] bg-yellow-300 mx-auto flex items-center justify-center">
							<i class="icon-class">💳</i>
						</div>
						<p class="font-semibold">Credit Cards</p>
					</div>
					<div class="space-y-2 text-center bg-gray20 rounded-2xl p-5">
						<div class="w-20 h-20 rounded-full bg-[#F7C926] bg-yellow-300 mx-auto flex items-center justify-center">
							<i class="icon-class">💰</i>
						</div>
						<p class="font-semibold">Loans and Credit</p>
					</div>
					<div class="space-y-2 text-center bg-gray20 rounded-2xl p-5">
						<div class="w-20 h-20 rounded-full bg-[#F7C926] bg-yellow-300 mx-auto flex items-center justify-center">
							<i class="icon-class">📈</i>
						</div>
						<p class="font-semibold">Wealth Management</p>
					</div>
				</div>
				<div class="text-center mt-12 items-center grid">
					<h2 class="text-5xl text-left font-extrabold">
						MANY INVESTORES AS FINANCIERS
					</h2>
					<p class="mt-4 text-gray40 max-w-2xl mx-auto text-left">
						At Myth Financial Group, we believe in fearless investments in the
						future of families. At Myth Financial Group, we believe in fearless
						investments in the future of families.
					</p>
					<button class="mt-4 px-6 py-2 bg-[#000000] text-white10 rounded-full hover:bg-gray-900 w-1/2">
						Looking For a Financier
					</button>
				</div>
			</div>
		</div>
	);
};

export default Investor;
