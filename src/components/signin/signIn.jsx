import React from "react";
import { Link } from "react-router-dom";

const SignInComponent = (props) => {
	return (
		<div className="grid grid-cols-2 py-8 md:py-16 gap-10 w-full">
			<div>
				<h1
					className="text-5xl bg-gradient-to-r inline-block text-transparent bg-clip-text font-semibold"
					style={{
						"background-image":
							"linear-gradient(to right, white 0%, #002E5D 20%, #002E5D 67%, white 100%)",
					}}
				>
					SIGN IN
				</h1>
				<form
					class="space-y-4 md:space-y-6 py-16 flex flex-col gap-4 pr-4"
					action="#"
				>
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
					<div class="flex items-center justify-between">
						<label class="inline-flex items-center cursor-pointer">
							<input type="checkbox" value="" class="sr-only peer" />
							<div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
							<span class="ms-3 text-md font-semibold text-gray-900 dark:text-gray-300">
								Remember me
							</span>
						</label>

						<Link
							href="#"
							class="text-md font-semibold text-[#002E5D] text-primary-600 dark:text-primary-500"
						>
							Forgotten?
						</Link>
					</div>
					<button
						type="submit"
						class="w-full bg-[#002E5D] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-lg py-3 px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>
						Sign in
					</button>
					<div className="grid grid-cols-2">
						<div className="flex flex-row items-start text-gray-700">
							<p>New to MFG?</p>
						</div>
						<Link
							to="/signup"
							className="flex flex-row-reverse items-start text-[#002E5D] font-semibold"
						>
							<p>Join Now</p>
						</Link>
					</div>
				</form>
			</div>
			<div className="flex flex-row-reverse">
				<img src="images/signin/handshake.png"></img>
			</div>
		</div>
	);
};

export default SignInComponent;
