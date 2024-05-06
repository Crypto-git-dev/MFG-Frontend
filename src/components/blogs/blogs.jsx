import React from "react";

const blogs = [
	{
		title: "Life Insurance Awareness Month",
		date: "September 1, 2021",
		subcaption: "How to Choose the Right Life Insurance Coverage",
		imgurl: "images/205002500 1.jpg",
	},
	{
		title:
			"Why Myth Financial Group is the Best Choice for Life Insurance Coverage",
		date: "September 10, 2021",
		subcaption: "September 20, 2021",
		imgurl: "images/528447540 1.jpg",
	},
];

const Blogs = () => {
	return (
		<div class="bg-white py-12">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 class="text-2xl font-extrabold text-gray-900 mb-8 text-center">
					OUR BLOGS
				</h2>
				<div class="grid grid-cols-2 gap-16">
					{blogs.map((blog) => (
						<div class="bg-gray-100 p-4 px-10 rounded-2xl border-grey10 border">
							<div class="h-54 bg-gray-300 rounded-md mb-4">
								<img src={blog.imgurl}></img>
							</div>
							<div class="flex justify-between text-center gap-8">
								<div class="text-sm font-semibold text-left">{blog.title}</div>
								<div class="text-xs text-grey10 text-center">{blog.date}</div>
							</div>
							<div class="border-grey10 border"></div>
							<div class="text-grey10 pt-4 w-2/3">{blog.subcaption}</div>
						</div>
					))}
				</div>
				<div class="text-center mt-8">
					<button class="bg-dark10 hover:bg-blue-700 text-white10 py-2 px-4 rounded-full">
						See More News
					</button>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
