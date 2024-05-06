import React from "react";

const Contact = (props) => {
	return (
		<div class="bg-white border-grey10 border p-8 rounded-3xl shadow-lg max-w-4xl mx-auto my-10">
			<div class="text-2xl font-semibold text-center mb-6">
				FOR ANY INQUIRIES, PLEASE CALL OR EMAIL US MYTH
			</div>

			<div class="grid gap-6 border-t border-grey10 py-5">
				<div class="flex justify-between text-grey10">
					<div>123-456-7890</div>
					<div>info@mythfinancialgroup.com</div>
				</div>
				<div class="grid grid-cols-2">
					<div class="grid">
						<p class="font-bold">OUR ADDRESS</p>
						<p class="text-grey10">
							123 main street, suite 100, san francisco, ca 94158
						</p>
					</div>
					<div class="grid">
						<p class="font-bold">ALTERNATIVELY</p>
						<p class="text-grey10">
							you can fill in the following contact form:
						</p>
					</div>
				</div>
				<div>
					<form action="#" method="POST">
						<div class="grid grid-cols-2 gap-5">
							<input
								type="text"
								placeholder="Name"
								class="w-full mb-4 px-4 py-2 border rounded-full bg-[#F7C926] focus:outline-none focus:border-yellow-500"
							/>
							<input
								type="email"
								placeholder="Email"
								class="w-full mb-4 px-4 py-2 border rounded-full text-gray-700 focus:outline-none focus:border-yellow-500"
							/>
							<input
								type="tel"
								placeholder="Phone"
								class="w-full mb-4 px-4 py-2 border rounded-full text-gray-700 focus:outline-none focus:border-yellow-500"
							/>
							<input
								type="text"
								placeholder="Code"
								class="w-full mb-4 px-4 py-2 border rounded-full text-gray-700 focus:outline-none focus:border-yellow-500"
							/>
						</div>
						<div class="flex justify-center">
							<button
								type="submit"
								class="bg-dark10 text-white10 w-1/3 px-4 py-2 rounded-full hover:bg-gray-800"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
