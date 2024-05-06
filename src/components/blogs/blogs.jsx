import React from "react";

const blogs = [
	{
		title: "Life Insurance Awareness Month",
		date: "September 1, 2021",
		subcaption: "How to Choose the Right Life Insurance Coverage",
	},
	{
		title: "Life Insurance Awareness Month",
		date: "September 1, 2021",
		subcaption: "How to Choose the Right Life Insurance Coverage",
	},
];

const Blogs = () => {
	return (
		<div class="bg-white py-12">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 class="text-2xl font-extrabold text-gray-900 mb-8 text-center">
					OUR BLOGS
				</h2>
				<div class="grid md:grid-cols-2 gap-8">
					{blogs.map((blog) => (
						<div class="bg-gray-100 p-4 rounded-lg">
							<div class="h-48 bg-gray-300 rounded-md mb-4"></div>
							<h3 class="text-lg font-semibold">{blog.title}</h3>
							<p class="text-sm text-gray-600 mb-4">{blog.date}</p>
							<p class="text-gray-700">{blog.subcaption}</p>
						</div>
					))}
				</div>
				<div class="text-center mt-8">
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						See More News
					</button>
				</div>
			</div>
		</div>
	);
};

export default Features;
