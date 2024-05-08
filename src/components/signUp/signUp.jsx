import React from "react";
import { Link } from "react-router-dom";

const SignUpForms = (props) => {
	return (
		<div className=" py-8 md:py-16">
			<h1
				className="text-5xl bg-gradient-to-r inline-block text-transparent bg-clip-text font-semibold"
				style={{
					"background-image":
						"linear-gradient(to right, white 0%, #002E5D 20%, #002E5D 67%, white 100%)",
				}}
			>
				SIGN UP
			</h1>
			<div className="grid grid-cols-2 gap-10 w-full">
				<div>
					<form
						class="space-y-4 md:space-y-6 py-8 flex flex-col gap-4 pr-4"
						action="#"
					>
						<div>
							<label
								for="full_name"
								class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
							>
								FULL NAME
							</label>
							<input
								type="fullname"
								name="fullname"
								id="fullname"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Enter your Full name"
								required=""
							/>
						</div>
						<div>
							<label
								for="email"
								class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
							>
								EMAIL
							</label>
							<input
								type="email"
								name="email"
								id="email"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Enter your email"
								required=""
							/>
						</div>
						<div>
							<label
								for="password"
								class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
							>
								PASSWORD
							</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Enter your password"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required=""
							/>
						</div>
						<div>
							<label
								for="business_name"
								class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
							>
								BUSINESS NAME
							</label>
							<input
								type="business_name"
								name="business_name"
								id="business_name"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Enter your Business name"
								required=""
							/>
						</div>
						<div>
							<label
								for="phone"
								class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
							>
								PHONE NUMBER
							</label>
							<input
								type="phone"
								name="phone"
								id="phone"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Enter your Phone number"
								required=""
							/>
						</div>
						<div>
							<label
								for="location"
								class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
							>
								LOCATION
							</label>
							<input
								type="location"
								name="location"
								id="location"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Enter your location"
								required=""
							/>
						</div>
						<button
							type="submit"
							class="w-full bg-[#002E5D] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-lg py-3 px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						>
							Sign Up
						</button>
						<div className="flex flex-row justify-between items-center">
							<div class="border-t border-gray-400 w-2/5"></div>
							<p class="text-gray-700 text-sm">or continue with</p>
							<div class="border-t border-gray-400 w-2/5"></div>
						</div>
						<div class="flex items-center justify-center dark:bg-gray-800">
							<button class="px-4 py-2 border flex gap-2 w-full justify-center border-gray-300 dark:border-slate-700 rounded-full font-semibold text-black dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
								<img
									class="w-6 h-6"
									src="https://www.svgrepo.com/show/475656/google-color.svg"
									loading="lazy"
									alt="google logo"
								/>
								<span>Sign in with Google</span>
							</button>
						</div>
						<div className="grid grid-cols-2">
							<div className="flex flex-row items-start text-gray-700">
								<p>Already have an Account?</p>
							</div>
							<Link
								to="/signin"
								className="flex flex-row-reverse items-start text-[#002E5D] font-semibold"
							>
								<p>Log in</p>
							</Link>
						</div>
					</form>
				</div>
				<div className="flex flex-row-reverse items-start py-8">
					<img
						src="images/signin/handshake.png"
						className="object-contain"
					></img>
				</div>
			</div>
		</div>
	);
};

export default SignUpForms;
