import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpForms = () => {
	return (
		<div className="flex flex-col">
			<h1
				className="text-5xl bg-gradient-to-r inline-block text-transparent bg-clip-text font-semibold"
				style={{
					"background-image":
						"linear-gradient(to right, white 0%, #002E5D 20%, #002E5D 67%, white 100%)",
				}}
			>
				SIGN UP
			</h1>
			<form className="py-8 flex flex-col gap-8">
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
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Enter your password"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
						<p>Already have an account?</p>
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
	);
};

export default SignUpForms;
