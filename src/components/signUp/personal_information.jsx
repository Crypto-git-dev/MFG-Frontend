import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const PersonalInformation = () => {
	return (
		<div className="flex flex-col">
			<h1
				className="text-5xl bg-gradient-to-r inline-block text-transparent bg-clip-text font-semibold"
				style={{
					"background-image":
						"linear-gradient(to right, white 0%, #002E5D 20%, #002E5D 67%, white 100%)",
				}}
			>
				1. PERSONAL INFORMATION
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
				<Link to="#" className="text-[#002E5D] text-2xl font-semibold">
					Why Do We Need An Account Set?
				</Link>
				<div id="ssn/ein">
					<label
						for="ssn/ein"
						class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
					>
						SSN/EIN
					</label>
					<input
						type="text"
						name="zip_code"
						id="zip_code"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Enter your SSN/EIN"
						required=""
					/>
				</div>
				<div id="birthDate">
					<label
						for="ssn/ein"
						class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
					>
						SSN/EIN
					</label>
					<div className="flex justify-between gap-16">
						<select
							id="year"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						>
							<option selected>Choose a year</option>
							<option value="US">United States</option>
							<option value="CA">Canada</option>
							<option value="FR">France</option>
							<option value="DE">Germany</option>
						</select>
						<select
							id="month"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						>
							<option selected>Choose a month</option>
							<option value="US">United States</option>
							<option value="CA">Canada</option>
							<option value="FR">France</option>
							<option value="DE">Germany</option>
						</select>
						<select
							id="day"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						>
							<option selected>Choose a day</option>
							<option value="US">United States</option>
							<option value="CA">Canada</option>
							<option value="FR">France</option>
							<option value="DE">Germany</option>
						</select>
					</div>
					<label class="block mt-3 text-md text-gray-700 dark:text-white">
						You must 18 to sign up with FEG
					</label>
				</div>
				<div className="flex flex-col">
					<label class="block text-md text-gray-700 dark:text-white">
						After you finish the signup you will receive a login to the Back
						Office We Need You To Pick a password for this login.
					</label>
					<label class="block mt-3 text-md text-gray-700 dark:text-white">
						You Password must be at least 8 characters long be no more than 32
						characters long contain at least 1 number to be valid.
					</label>
				</div>
				<div>
					<label
						for="password"
						class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
					>
						PASSWORD
					</label>
					<div className="relative" data-hs-toggle-password="">
						<input
							id="hs-toggle-password-multi-toggle"
							type="password"
							class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Enter your password"
						/>
						<button
							type="button"
							data-hs-toggle-password='{
          						"target": ["#hs-toggle-password-multi-toggle"]
        					}'
							class="absolute top-0 end-0 p-3.5 rounded-e-md"
						>
							<svg
								class="flex-shrink-0 size-3.5 text-gray-400 dark:text-neutral-600"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path
									class="hs-password-active:hidden"
									d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
								></path>
								<path
									class="hs-password-active:hidden"
									d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
								></path>
								<path
									class="hs-password-active:hidden"
									d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
								></path>
								<line
									class="hs-password-active:hidden"
									x1="2"
									x2="22"
									y1="2"
									y2="22"
								></line>
								<path
									class="hidden hs-password-active:block"
									d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
								></path>
								<circle
									class="hidden hs-password-active:block"
									cx="12"
									cy="12"
									r="3"
								></circle>
							</svg>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default PersonalInformation;
