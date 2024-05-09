import React from "react";
import { Link } from "react-router-dom";

const AgentInformation = (props) => {
	return (
		<div className="flex flex-col gap-8 p-8 bg-gray-300 rounded-3xl">
			<h1
				className="text-1xl bg-gradient-to-r inline-block text-transparent bg-clip-text font-semibold"
				style={{
					"background-image":
						"linear-gradient(to right, #004E7D 0%, #002E5D 20%, #002E5D 67%, white 100%)",
				}}
			>
				AGENT INFORMATION
			</h1>
			<form className="py-8 flex flex-col gap-4">
				<div className="grid grid-cols-2 gap-8">
					<div>
						<label
							for="firstName"
							class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
						>
							FIRST NAME
						</label>
						<input
							type="text"
							name="firstName"
							id="firstName"
							class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Enter your First name"
							required=""
						/>
					</div>
					<div>
						<label
							for="lastName"
							class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
						>
							LAST NAME
						</label>
						<input
							type="text"
							name="lastName"
							id="lastName"
							class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Enter your last name"
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
							for="phone"
							class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
						>
							PHONE
						</label>
						<input
							type="text"
							name="phone"
							id="phone"
							class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Enter your Phone"
							required=""
						/>
					</div>
					<div>
						<label
							for="address"
							class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
						>
							ADDRESS
						</label>
						<input
							type="text"
							name="address"
							id="address"
							class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Enter your address"
							required=""
						/>
					</div>
					<div>
						<label
							for="city"
							class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
						>
							CITY
						</label>
						<input
							type="text"
							name="city"
							id="city"
							class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Enter your city"
							required=""
						/>
					</div>
					<div>
						<label
							for="state"
							class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
						>
							STATE
						</label>
						<select
							id="countries"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						>
							<option selected>Choose a country</option>
							<option value="US">United States</option>
							<option value="CA">Canada</option>
							<option value="FR">France</option>
							<option value="DE">Germany</option>
						</select>
					</div>
					<div>
						<label
							for="zip_code"
							class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
						>
							ZIP CODE
						</label>
						<input
							type="text"
							name="zip_code"
							id="zip_code"
							class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Enter your zip code"
							required=""
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AgentInformation;
