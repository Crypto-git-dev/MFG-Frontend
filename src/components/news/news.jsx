import React from "react";

const News = (props) => {
	return (
		<div className="flex flex-col gap-8">
			<div className="grid grid-cols-2 border border-gray-300 rounded-3xl p-8">
				<img src="images/news/presentation.jpg"></img>
				<div className="flex flex-col gap-4 py-8 px-16">
					<p className="text-4xl text-black font-semibold">
						BUSINESS OPPORTUNITY PRESENTATIONS. BOP
					</p>
					<div class="border-t border-gray-300"></div>
					<p className="text-sm text-gray-700">
						A business opportunity presentation is apm formal presentation made
						to potential investors or partners about a new business venture. It
						should include information about the company, its products or
						services, and its plans for the future. It may also include
						financial projections and marketing plans so please invite guesses
						and attend BOP nights to grown your team members.
					</p>
					<div class="border-t border-gray-300"></div>
					<div class="flex flex-col gap-4">
						<p className="text-1xl text-black">STARTING EVERY</p>
						<div className="grid grid-cols-3 gap-4">
							<div className="text-md text-black">
								<span class="mx-2">&middot;</span>
								<span>Tuesday</span>
							</div>
							<div className="text-md text-black">
								<span class="mx-2">&middot;</span>
								<span>Wednesday</span>
							</div>
							<div className="text-md text-black">
								<span class="mx-2">&middot;</span>
								<span>Thursday</span>
							</div>
							<div className="text-md text-black">
								<span class="mx-2">&middot;</span>
								<span>8pm to 9pm</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<img src="images/news/meeting.jpg"></img>
			</div>
			<div className="mt-16">
				<img src="images/news/dream.jpg"></img>
			</div>
		</div>
	);
};

export default News;
