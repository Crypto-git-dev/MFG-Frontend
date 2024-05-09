import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const PersonalInformation = () => {
	return (
		<div className="flex flex-col gap-4 py-16">
			<div className="flex flex-row">
				<span className="text-9xl font-semibold text-[#002E5D]">WELCOME</span>
				<span className="text-9xl font-semibold text-[#F7C926]">.</span>
			</div>
			<div className="flex flex-row left-1/3 relative">
				<h1 className="text-4xl font-semibold">YOUR JOURNEY STARTS </h1>
				<p className="text-4xl font-extrabold text-[#002E5D] pl-2">NOW.</p>
			</div>
			<div className="flex flex-col gap-4">
				<h1
					className="text-5xl bg-gradient-to-r inline-block text-transparent bg-clip-text font-semibold mt-5 md:mt-10"
					style={{
						"background-image":
							"linear-gradient(to right, white 0%, #002E5D 20%, #002E5D 67%, white 100%)",
					}}
				>
					NFG NEW AGENT SIGNUP
				</h1>
				<p className="text-gray-700 text-md">
					Thank you for making the decision to join MFG! You have the
					opportunity to change your life
					<br /> by being part of one of the fastest growing companies in the
					financial services industry.
				</p>
				<p className="text-md font-semibold">
					You must complete everything on this page to continue.
				</p>
				<p className="text-md font-semibold text-[#002E5D]">
					You must be 18 years old to sign up with MFG.
				</p>
				<div>
					<p className="text-md text-gray-700 flex">
						If you have any questions or need help, email
						<p className="text-[#002E5D] pl-1">agentsupport@MFGcorp.com</p>
					</p>
					<p className="text-[#002E5D]">or call us at (877) 329-6608.</p>
				</div>
				<p className="text-md font-semibold">Your Sponsor:</p>

				<p className="text-md font-semibold">Kon Heu MFGB1125</p>
				<p className="text-md text-gray-700">
					If this is not correct, click here to select your sponsor.
				</p>
			</div>
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
				<div>
					<label
						for="repassword"
						class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
					>
						RE-ENTER YOUR PASSWORD
					</label>
					<div className="relative" data-hs-toggle-password="">
						<input
							id="hs-toggle-password-multi-toggle"
							type="repassword"
							class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Re-enter your password"
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
			<h1
				className="text-5xl bg-gradient-to-r inline-block text-transparent bg-clip-text font-semibold"
				style={{
					"background-image":
						"linear-gradient(to right, white 0%, #002E5D 20%, #002E5D 67%, white 100%)",
				}}
			>
				2. AGENT AGREEMENTS
			</h1>
			<div className="flex flex-col py-16 gap-8">
				<div className="grid grid-cols-2 gap-10">
					<div className="flex flex-col gap-8">
						<h1 className="text-lg font-semibold">
							MFG AGENT AGREEMENT MARCH 2022
						</h1>
						<h1 className="text-md text-gray-700">
							I have read, understand and agree to the terms of the MFG
							<br /> Agent Agreement March 2022
						</h1>
						<div className="flex flex-row gap-4">
							<div class="flex items-center">
								<input
									id="default-checkbox"
									type="checkbox"
									value=""
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="default-checkbox"
									class="ms-2 text-md font-semibold text-gray-900 dark:text-gray-300"
								>
									YES
								</label>
							</div>
							<div class="flex items-center">
								<input
									id="checked-checkbox"
									type="checkbox"
									value=""
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="checked-checkbox"
									class="ms-2 text-md font-semibold text-gray-900 dark:text-gray-300"
								>
									NO
								</label>
							</div>
						</div>

						<Link to="#" className="text-[#002E5D] text-md font-semibold">
							DOWNLOAD THE MFG AGENT AGREEMENT MARCH 2022
						</Link>
						<div className="border rounded-2xl flex flex-col flex-1 gap-4 py-8 px-8 relative">
							<h1 className="text-lg font-semibold">
								MYTH FINANCIAL GROUP INDEPENDENT AGENT AGREEMENT
							</h1>
							<h1 className="text-lg font-semibold text-[#002E5D]">
								Effective: 03/11/2022
							</h1>
							<div className="border-t border-gray-300"></div>
							<h1
								className="text-md bg-gradient-to-r inline-block text-transparent bg-clip-text mt-5 md:mt-10"
								style={{
									"background-image":
										"linear-gradient(to bottom, gray 0%, gray 70%, white 100%)",
								}}
							>
								This Independent Agent Agreement is entered into by and between
								Myth Financial Group, LLC (“MFG”), and the individual who has
								electronically signed and submitted this Independent Agent
								Agreement (the “Agent”) to MFG. MFG and Agent are collectively
								referred to as the “Parties” and may be individually referred to
								as a “Party.” In consideration of the mutual promises and
								covenants set forth below, MFG and Agent agree as follows:{" "}
								<br />
								<br />
								1. Commencement of Agreement, Relationship of the Parties <br />{" "}
								<br />
								A. Agent agrees and understands that this Independent Agent
								Agreement shall not become effective until it has been accepted
								by MFG. The Independent Agent Agreement shall be deemed to be
								accepted by MFG when Agent has been issued an MFG Agent code.
								<br></br>
								<br />
								B. Upon acceptance by FEG, this Independent Agent Agreement,
								together with the MFG Policies & Procedures, the Commission
								Schedules published in Agent’s back office, the MFG Agent
								Compliance Declarations, the FEG Social Media Policy, the MFG
							</h1>
							<Link
								to="#"
								className="px-8 py-4 bg-dark10 text-white10 m-auto rounded-full"
							>
								Read More
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-8">
						<h1 className="text-lg font-semibold">
							MFG AGENT POLICIES AND PROCEDURES FEBRUARY 2024
						</h1>
						<h1 className="text-md text-gray-700">
							I have read, understand and agree to the terms of the MFG Agent
							<br></br>
							Policies and Procedures February 2024
						</h1>
						<div className="flex flex-row gap-4">
							<div class="flex items-center">
								<input
									id="default-checkbox"
									type="checkbox"
									value=""
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="default-checkbox"
									class="ms-2 text-md font-semibold text-gray-900 dark:text-gray-300"
								>
									YES
								</label>
							</div>
							<div class="flex items-center">
								<input
									id="checked-checkbox"
									type="checkbox"
									value=""
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="checked-checkbox"
									class="ms-2 text-md font-semibold text-gray-900 dark:text-gray-300"
								>
									NO
								</label>
							</div>
						</div>

						<Link to="#" className="text-[#002E5D] text-md font-semibold">
							DOWNLOAD THE MFG AGENT POLICIES AND PROCEDURES FEBRUARY 2024
						</Link>
						<div className="border rounded-2xl flex flex-col flex-1 gap-4 py-8 px-8 relative">
							<h1 className="text-lg font-semibold">
								MYTH FINANCIAL GROUP POLICIES AND <br></br>PROCEDURES
							</h1>
							<h1 className="text-lg font-semibold text-[#002E5D]">
								Effective: February 14, 2024
							</h1>
							<div className="border-t border-gray-300"></div>
							<h1
								className="text-md bg-gradient-to-r inline-block text-transparent bg-clip-text mt-5 md:mt-10"
								style={{
									"background-image":
										"linear-gradient(to bottom, gray 0%, gray 70%, white 100%)",
								}}
							>
								These policies and procedures are the rules under which Myth
								Financial Group operates. The Policies and Procedures are
								incorporated by reference into the MFG Agent Agreement. All
								agents must adhere to all of the provisions of both documents.
								In order to create an even playing field for all current and
								future MFG agents, no exceptions shall be made. Some of the
								terms used are defined at the end of this document.
								<br />
								<br />
								These policies and procedures may be updated by the board of
								Myth Financial Group at any time. Agents will be alerted to
								changes by a notice sent via email, sms, and an alert on the MFG
								back office. Agents will have 30-days to acknowledge any changes
								by logging into the MFG back office and approving them. Agents
								that do not acknowledge updated policies and procedures may have
								their commissions on new policies held until they do so. Levels
								and Promotions
								<br /> <br />
								New non-licensed agents:
							</h1>
							<Link
								to="#"
								className="px-8 py-4 bg-dark10 text-white10 m-auto mt-6 rounded-full"
							>
								Read More
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-8">
						<h1 className="text-lg font-semibold">
							MFG COMPIANCE DECLARATIONS FEBRURARY 2022
						</h1>
						<h1 className="text-md text-gray-700">
							I have read, understand and agree to the terms of the MFG<br></br>
							Compliance Declarations February 2022.
						</h1>
						<div className="flex flex-row gap-4">
							<div class="flex items-center">
								<input
									id="default-checkbox"
									type="checkbox"
									value=""
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="default-checkbox"
									class="ms-2 text-md font-semibold text-gray-900 dark:text-gray-300"
								>
									YES
								</label>
							</div>
							<div class="flex items-center">
								<input
									id="checked-checkbox"
									type="checkbox"
									value=""
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="checked-checkbox"
									class="ms-2 text-md font-semibold text-gray-900 dark:text-gray-300"
								>
									NO
								</label>
							</div>
						</div>

						<Link to="#" className="text-[#002E5D] text-md font-semibold">
							DOWNLOAD THE MFG COMPILANCE DECLARATIONS FEBRURARY 2022
						</Link>
						<div className="border rounded-2xl flex flex-col flex-1 gap-4 py-8 px-8 relative">
							<h1 className="text-lg font-semibold">
								MYTH FINANCIAL GROUP COMPILANCE<br></br> DECLARATIONS
							</h1>
							<h1 className="text-lg font-semibold text-[#002E5D]">
								Effective: 02/05/2022
							</h1>
							<div className="border-t border-gray-300"></div>
							<h1
								className="text-md bg-gradient-to-r inline-block text-transparent bg-clip-text mt-5 md:mt-10"
								style={{
									"background-image":
										"linear-gradient(to bottom, gray 0%, gray 70%, white 100%)",
								}}
							>
								The Compliance Declarations are incorporated by reference into
								the FEG Agent Agreement. All agents must adhere to all of the
								provisions of both documents.
								<br />
								<br />
								I agree to comply with the terms of the Myth Financial Group ,
								LLC (“MFG”) sales and conduct guidelines and I acknowledge all
								of the following: <br /> <br />
								1. I have read and understand the provisions of the MFG Agent
								Agreement. I understand that I must comply with the terms of
								this Agreement and any Insurance Carrier guidelines in my
								business activities as an MFG Agent.
								<br></br>
								<br />
								2. I understand that I am not an employee of MFG and my
								relationship with MFG is that of an independent contractor. Even
								though I may sometimes be given special titles or incorrectly
								referenced to as an employee by third parties, this will not
								change the fact that, by definition and by practice, I am an
								independent contractor. As an independent contractor, I
								understand that I will be responsible for paying for my own
								expenses as well as any and all
							</h1>
							<Link
								to="#"
								className="px-8 py-4 bg-dark10 text-white10 m-auto rounded-full"
							>
								Read More
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-8">
						<h1 className="text-lg font-semibold">
							MFG SOCIAL MEDIA POLICY FEBRUARY 2022
						</h1>
						<h1 className="text-md text-gray-700">
							I have read, understand and agree to the terms of the MFG<br></br>{" "}
							Social Media Policy February 2022.
						</h1>
						<div className="flex flex-row gap-4">
							<div class="flex items-center">
								<input
									id="default-checkbox"
									type="checkbox"
									value=""
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="default-checkbox"
									class="ms-2 text-md font-semibold text-gray-900 dark:text-gray-300"
								>
									YES
								</label>
							</div>
							<div class="flex items-center">
								<input
									id="checked-checkbox"
									type="checkbox"
									value=""
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="checked-checkbox"
									class="ms-2 text-md font-semibold text-gray-900 dark:text-gray-300"
								>
									NO
								</label>
							</div>
						</div>

						<Link to="#" className="text-[#002E5D] text-md font-semibold">
							DOWNLOAD THE MFG SOCIAL MEDIA POLICY FEBRUARY 2022
						</Link>
						<div className="border rounded-2xl flex flex-col flex-1 gap-4 py-8 px-8 relative">
							<h1 className="text-lg font-semibold">
								MYTH FINANCIAL GROUP SOCIAL MEDIA <br></br>POLICY
							</h1>
							<h1 className="text-lg font-semibold text-[#002E5D]">
								Effective: 02/05/2022
							</h1>
							<div className="border-t border-gray-300"></div>
							<h1
								className="text-md bg-gradient-to-r inline-block text-transparent bg-clip-text mt-5 md:mt-10"
								style={{
									"background-image":
										"linear-gradient(to bottom, gray 0%, gray 70%, white 100%)",
								}}
							>
								MFG operates in a highly regulated industry. Our business model
								also receives additional scrutiny from States Attorneys’ General
								and the FTC, along with private organizations such as Truth in
								Advertising.
								<br />
								<br />
								MFG developed this policy to avoid any problems with agencies
								and organizations that may use social media posts as evidence of
								MFG not being in compliance. Remember, with MFG’s ESP program,
								we are all in this together.
								<br /> <br />
								Who Does This Apply To? This social media policy applies to MFG
								managed corporate social media pages. This policy also applies
								to MFG employees, MFG agents, and MFG agent group social media
								pages - if a substantial use of those pages is to recruit new
								agents to join MFG. This policy is incorporated into and a part
								of the MFG Independent Agent Agreement.
								<br></br>
								<br />
								Think Before Posting You are personally responsible for the
								content you publish on social
							</h1>
							<Link
								to="#"
								className="px-8 py-4 bg-dark10 text-white10 mx-auto mt-8 rounded-full"
							>
								Read More
							</Link>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-8">
					<h1 className="text-lg font-semibold">NCOME DISCLOSURE STATEMENT</h1>
					<h1 className="text-md text-gray-700">
						I have read and understand the MFG Income Disclosure<br></br>{" "}
						Statement.
					</h1>
					<div className="flex flex-row gap-4">
						<div class="flex items-center">
							<input
								id="default-checkbox"
								type="checkbox"
								value=""
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label
								for="default-checkbox"
								class="ms-2 text-md font-semibold text-gray-900 dark:text-gray-300"
							>
								YES
							</label>
						</div>
						<div class="flex items-center">
							<input
								id="checked-checkbox"
								type="checkbox"
								value=""
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label
								for="checked-checkbox"
								class="ms-2 text-md font-semibold text-gray-900 dark:text-gray-300"
							>
								NO
							</label>
						</div>
					</div>

					<Link to="#" className="text-[#002E5D] text-md font-semibold">
						VIEW THE MFG INCOME DISCLOSURE
					</Link>
					<div className="border rounded-2xl flex flex-col flex-1 gap-4 py-8 px-8 relative">
						<h1 className="text-lg font-semibold">
							2023 INCOME DISCLOSURE STATEMENT
						</h1>
						<h1 className="text-lg font-semibold text-[#002E5D]">
							Effective: 02/05/2022
						</h1>
						<div className="border-t border-gray-300"></div>
						<h1 className="text-md text-gray-700 mt-5 md:mt-10">
							Myth Financial Group offers a business opportunity that involves
							the sale of life insurance and other financial services products.
							MFG independent representatives are independent contractors, not
							employees. MFG independent representative earnings are based on
							the sale of products offered by MFG through one of several
							contracted life insurance companies. MFG independent
							representatives must obtain state insurance licenses and E&O
							insurance before they are eligible to sell MFG products or earn
							income from MFG.
						</h1>
						<h1 className="text-md text-gray-700 mt-20 md:mt-20">
							For the period January 1, 2023 through December 31, 2023, the
							average earnings of all licensed MFG independent representatives
							was $8,788.
						</h1>
						<h1 className="text-md text-gray-700 mt-5 md:mt-10">
							The cost to enroll as a MFG independent representative is $100.
							The cost for insurance license training is $30. The cost for a
							state insurance license varies by state and is between $80 and
							$200. The annual cost to maintain E&O insurance is $450.
						</h1>
						<Link
							to="#"
							className="px-8 py-4 bg-dark10 text-white10 mx-auto mt-8 rounded-full"
						>
							Read More
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-8">
					<h1 className="text-2xl font-semibold">AGENT PAY GRID</h1>
					<h1 className="text-md text-gray-700">
						I have read, understand and agree to the terms of the MFG
						<br /> Agreement July 2022
					</h1>
					<div className="flex flex-row gap-4">
						<div class="flex items-center">
							<input
								id="default-checkbox"
								type="checkbox"
								value=""
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label
								for="default-checkbox"
								class="ms-2 text-md font-semibold text-gray-900 dark:text-gray-300"
							>
								YES
							</label>
						</div>
						<div class="flex items-center">
							<input
								id="checked-checkbox"
								type="checkbox"
								value=""
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label
								for="checked-checkbox"
								class="ms-2 text-md font-semibold text-gray-900 dark:text-gray-300"
							>
								NO
							</label>
						</div>
					</div>

					<Link to="#" className="text-[#002E5D] text-md font-semibold">
						DOWNLOAD THE MFG AGENT PAY GRID
					</Link>
					<img src="images/signup/promotion_header.png" className="mx-20"></img>
					<img src="images/signup/promotion.jpg" className="my-8"></img>
					<img src="images/signup/promotion_description.jpg"></img>
				</div>
			</div>
			<h1
				className="text-5xl bg-gradient-to-r inline-block text-transparent bg-clip-text font-semibold"
				style={{
					"background-image":
						"linear-gradient(to right, white 0%, #002E5D 20%, #002E5D 67%, white 100%)",
				}}
			>
				3. INSRUANCE LICENSE AND<br></br> CONTRACTING ELIGIBILITY
			</h1>
			<div className="flex flex-col gap-8">
				<h1 className="text-md text-gray-700">
					Do you currently hold an Insurance license in any state?
				</h1>
				<div className="flex flex-row gap-4">
					<div class="flex items-center">
						<input
							id="default-checkbox"
							type="checkbox"
							value=""
							class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>
						<label
							for="default-checkbox"
							class="ms-2 text-md font-semibold text-gray-900 dark:text-gray-300"
						>
							YES
						</label>
					</div>
					<div class="flex items-center">
						<input
							id="checked-checkbox"
							type="checkbox"
							value=""
							class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>
						<label
							for="checked-checkbox"
							class="ms-2 text-md font-semibold text-gray-900 dark:text-gray-300"
						>
							NO
						</label>
					</div>
				</div>

				<h1 className="text-black text-md">
					If yes, please provide the following:
				</h1>
				<h1 className="text-black text-md">
					if more than one license, add the license for your state of residence
				</h1>
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
				<div className="grid grid-cols-2 gap-8">
					<div>
						<label
							for="license_number"
							class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
						>
							LICENSE NUMBER
						</label>
						<input
							type="text"
							name="license_number"
							id="license_number"
							class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Enter your License Number"
							required=""
						/>
					</div>
					<div>
						<label
							for="prior_imo"
							class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
						>
							PRIOR IMO (WFG, PRIMERICA, ETC)
						</label>
						<input
							type="text"
							name="prior_imo"
							id="prior_imo"
							class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Enter your Prior imo"
							required=""
						/>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<label class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white">
						IS THE ANSWER TO ANY OF THE FOLLOWING QUESTIONS 'YES'?
					</label>
					<div className="flex flex-row gap-4">
						<div class="flex items-center">
							<input
								id="default-checkbox"
								type="checkbox"
								value=""
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label
								for="default-checkbox"
								class="ms-2 text-md font-semibold text-gray-900 dark:text-gray-300"
							>
								YES
							</label>
						</div>
						<div class="flex items-center">
							<input
								id="checked-checkbox"
								type="checkbox"
								value=""
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label
								for="checked-checkbox"
								class="ms-2 text-md font-semibold text-gray-900 dark:text-gray-300"
							>
								NO
							</label>
						</div>
					</div>
				</div>
				<h1 className="text-gray-700 text-md">
					Have you personally or a firm that you exercised management control
					over or owned 10% or more of the securities of a company that failed
					in business, made a compromise with creditors, filed a bankruptcy
					petition or was declared bankrupt? <br /> <br />
					Has any State Insurance Department, any other State or Federal
					Regulatory Agency or any Self Regulatory Organization ever: entered an
					order against you relative to a violation of insurance or
					investment-related regulations or statutes? B. fined, denied,
					suspended or revoked your license or registration? <br />
					<br />
					Has a bonding company denied, paid out or revoked a bond for you?
					<br />
					<br /> Have you been discharged or permitted to resign, or otherwise
					had your relationship with a company terminated, because you were
					accused of violating investment related statutes, regulatory rules or
					industry standard of conduct, fraud or wrongful taking of property?
					<br />
					<br />
					Have you ever been convicted of, or plead guilty or nolo contendere
					("no contest") to: A. a felony or misdemeanor involving: insurance,
					investments, or a related business, fraud, theft, breach of trust,
					false statements or omissions, wrongful taking of property, bribery,
					forgery, counterfeiting or extortion? B. any other felony? <br />
					<br />
					Do you have any debit balances with another insurance agency, or
					unsatisfied judgements or liens, including tax liens, against you? If
					yes, provide details, supporting documentation including dollar amount
					outstanding, and schedule of repayment plan or final disposition.{" "}
					<br />
					<br />
					Are you an employee, officer, director or agent of any bank, savings
					and loan association, mortgage company, investment adviser firm,
					insurance company/agency, broker/dealer, or other lending or financial
					institution? <br />
					<br />
					Are you now the subject of any complaint, investigation, or proceeding
					that could result in a "yes" answer to the above questions?
				</h1>
			</div>
			<h1
				className="text-5xl bg-gradient-to-r inline-block text-transparent bg-clip-text font-semibold mt-8"
				style={{
					"background-image":
						"linear-gradient(to right, white 0%, #002E5D 20%, #002E5D 67%, white 100%)",
				}}
			>
				4. BASE TECHNOLOGY PACKAGE
			</h1>
			<div className="flex flex-col gap-8">
				<h1 className="text-lg text-black font-semibold">
					ONE TIME COST: $100.00
				</h1>
				<h1 className="text-md text-gray-700">
					There is a one-time $100.00 charge to join MFG. This is for the MFG
					base technology package.
					<span className="text-[#175390] px-2">
						This is the only payment required by MFG to join.
					</span>
				</h1>
				<h1 className="text-md text-gray-700">
					No other payments will be required or collected by MFG or any other
					party affiliated with MFG as a requirement to join.
					<span className="text-black px-2">
						There may be a cost to attend some MFG events. Some MFG agents may
						charge for training classes. These are not required to join MFG.
					</span>
					<span className="text-[#175390] px-2">
						You are not required to buy a Insurance policy to join MFG.
					</span>
				</h1>
				<h1 className="text-md text-gray-700">
					I agree to pay the $100.00 for the MFG Base Technology Fee. I
					understand that there are no refunds from the one-time purchase of the
					MFG Base Technology package.
				</h1>
				<div className="flex flex-row gap-4">
					<div class="flex items-center">
						<input
							id="default-checkbox"
							type="checkbox"
							value=""
							class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>
						<label
							for="default-checkbox"
							class="ms-2 text-md font-semibold text-gray-900 dark:text-gray-300"
						>
							YES
						</label>
					</div>
					<div class="flex items-center">
						<input
							id="checked-checkbox"
							type="checkbox"
							value=""
							class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>
						<label
							for="checked-checkbox"
							class="ms-2 text-md font-semibold text-gray-900 dark:text-gray-300"
						>
							NO
						</label>
					</div>
				</div>
				<h1 className="text-md text-gray-700">
					Note that to collect commissions and overrides on product sales, you
					must be a licensed insurance agent in your state. There are some costs
					associated with this. The cost for insurance license training is $30.
					The cost for a state insurance license varies by state and is between
					$80 and $200. The annual cost to maintain E&O insurance is $450. These
					payments are not collected by MFG, they are collected by the license
					training company, the states' insurance offices and E&O insurance
					companies.
				</h1>
			</div>
			<h1
				className="text-5xl bg-gradient-to-r inline-block text-transparent bg-clip-text font-semibold mt-8"
				style={{
					"background-image":
						"linear-gradient(to right, white 0%, #002E5D 20%, #002E5D 67%, white 100%)",
				}}
			>
				5. PAY BY CREDIT CARD
			</h1>
			<div className="flex flex-col gap-8">
				<h1 className="text-md text-black">
					Enter your credit card information exactly as it appears on your card.
				</h1>
				<h1 className="text-lg text-black font-semibold">
					Total Amount to Pay Today{" "}
					<span className="text-[#175390]">: $100.00</span>
				</h1>
				<div className="grid grid-cols-2 gap-8">
					<input
						type="text"
						name="firstName"
						id="firstName"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="First Name on Card"
						required=""
					/>
					<input
						type="text"
						name="lastName"
						id="lastName"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Last Name on Card"
						required=""
					/>
					<input
						type="text"
						name="cardNumber"
						id="cardNumber"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Card Number"
						required=""
					/>
					<div className="grid grid-cols-2 gap-8">
						<select
							id="expire_date_1"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						>
							<option selected>Expiration Date</option>
						</select>
						<select
							id="expire_date_2"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						>
							<option selected>Expiration Date</option>
						</select>
					</div>
					<input
						type="text"
						name="firstName"
						id="firstName"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="First Name on Card"
						required=""
					/>
					<input
						type="text"
						name="lastName"
						id="lastName"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Last Name on Card"
						required=""
					/>
				</div>
				<input
					type="text"
					name="cvv_code"
					id="cvv_code"
					class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="CVV Code"
					required=""
				/>
				<div class="flex items-center">
					<input
						id="checked-checkbox"
						type="checkbox"
						value=""
						class="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>
					<label
						for="checked-checkbox"
						class="ms-2 text-md font-semibold text-black dark:text-gray-300"
					>
						Use primary address as biling address
					</label>
				</div>
				<div className="grid grid-cols-2 gap-8">
					<input
						type="text"
						name="billing_address"
						id="billing_address"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Billing Address"
						required=""
					/>
					<input
						type="text"
						name="billing_city"
						id="billing_city"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Billing City"
						required=""
					/>
					<input
						type="text"
						name="billing_state"
						id="billing_state"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Billing State"
						required=""
					/>
					<input
						type="text"
						name="billing_zip_code"
						id="billing_zip_code"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Billing Zip Code"
						required=""
					/>
				</div>
			</div>
			<h1
				className="text-5xl bg-gradient-to-r inline-block text-transparent bg-clip-text font-semibold mt-8"
				style={{
					"background-image":
						"linear-gradient(to right, white 0%, #002E5D 20%, #002E5D 67%, white 100%)",
				}}
			>
				6. SUBMIT APPLICATION
			</h1>
			<div className="flex flex-col gap-10">
				<h1 className="text-md text-gray-700">
					By typing your name in this box
					<span>
						<input
							type="text"
							name="application_name"
							id="application_name"
							class="bg-gray-50 border border-gray-300 text-md mx-2 px-2"
							placeholder=""
							required=""
						/>
					</span>
					and clicking on theJOIN MFG!button below I: (i) signify my acceptance
					to all of the terms, and conditions and restrictions contained or
					referenced in the MFG Agent Agreement with Myth Financial Group LLC;
					(ii) agree that upon acceptance by Myth Financial Group LLC, the MFG
					Agent Agreement be a valid and enforceable agreement between us in its
					electronic form; and (iii) consent to the record of the MFG Agent
					Agreement being maintained in its electronic form, (iv) and that I
					have read the terms and I agree to be bound by their contents.
				</h1>
				<h1 className="text-md text-black">
					If you have any questions, before signing up, call MFG Agent Support
					at 877-329-6608.
				</h1>
				<h1 className="text-md text-black">Prove you are a human:</h1>
				<h1 className="text-md text-black">What is 4 + 2?</h1>
				<h1 className="text-md text-[#175390]">
					Only click the Join button below once and wait for the page to
					re-load. Please be patient.
				</h1>
				<div className="flex">
					<button className="px-8 py-4 bg-dark10 text-white10 rounded-full">
						Join MFG!
					</button>
				</div>
			</div>
			<img src="images/signup/footer.jpg" className="mt-16"></img>
		</div>
	);
};

export default PersonalInformation;
