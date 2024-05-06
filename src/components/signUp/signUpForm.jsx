import React, { useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getToasterErrors, getToasterNotifications } from "../toaster/toaster";
import { Link, useNavigate } from "react-router-dom";
import { api, registerUser } from "../../helper/api";
import LoadingSpinner from "../loading/LoadingSpinner";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const SignUpForms = () => {
	const [loading, setLoading] = useState(false);
	const inputRefs = useRef([]);
 const [togglePassword, setTogglePassword] = useState(false);
	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			const currentIndex = inputRefs.current.findIndex(
				(ref) => ref === event.target
			);
			if (currentIndex < inputRefs.current.length - 1) {
				inputRefs.current[currentIndex + 1]?.focus();
			}
		}
	};

	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			f_name: "",
			l_name: "",
			c_name: "",
			phone: "",
			c_address: "",
			city: "",
			state: "",
			password: "",
			email: "",
			country: "",
			zip: "",
		},
		validationSchema: Yup.object({
			f_name: Yup.string().required("Required"),
			l_name: Yup.string().required("Required"),
			password: Yup.string()
				.min(8, "Password must be at least 8 characters")
				.required("Required"),
			email: Yup.string().email("Invalid email address").required("Required"),
			country: Yup.string().required("Required"),
			zip: Yup.string().required("Required"),
			c_name: Yup.string(),
			phone: Yup.string(),
			c_address: Yup.string(),
			city: Yup.string(),
			state: Yup.string(),
		}),
		onSubmit: async (values, { resetForm }) => {
			setLoading(true);

			await registerUser(
				api,
				values,
				navigate,
				resetForm,
				getToasterNotifications,
				getToasterErrors
			);
			setLoading(false);
		},
	});

 useEffect(() => {
		const googleApiKey = process.env.REACT_APP_GOOGLEAPIKEY;

		const loadGoogleMapsScript = () => {
			const script = document.createElement("script");
			script.src = `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&libraries=places`;
			script.async = true;
			script.defer = true;
			document.head.appendChild(script);
			script.onload = initializeAutocomplete;
		};

		const initializeAutocomplete = () => {
			const addressInput = document.getElementById("c_address");

			const autocomplete = new window.google.maps.places.Autocomplete(
				addressInput,
				{
					types: ["address"],
					componentRestrictions: { country: "us" },
				}
			);

			autocomplete.addListener("place_changed", () => {
				const place = autocomplete.getPlace();
				const addressComponents = place.address_components || [];

				addressComponents.forEach((component) => {
					const type = component.types[0];
					switch (type) {
						case "locality": // City
							formik.setFieldValue("city", component.long_name);
							break;
						case "administrative_area_level_1": // State
							formik.setFieldValue("state", component.short_name);
							break;
						case "country": // Country
							formik.setFieldValue("country", component.long_name);
							break;
						case "postal_code": // Postal Code
							formik.setFieldValue("zip", component.long_name);
							break;
						default:
							break;
					}
				});

				// Set the complete address
				formik.setFieldValue("c_address", place.formatted_address);
			});
		};

		if (!window.google) {
			loadGoogleMapsScript();
		} else {
			initializeAutocomplete();
		}
;
 }, [formik]);

	return (
		<div className="justify-center">
			<div className="justify-center transparent z-10 mt-5">
				{loading && <LoadingSpinner />}
			</div>
			<div
				className={`${
					loading ? "bg-gray20 opacity-40 backdrop-blur-2xl transparent" : ""
				}`}
			>
				<div className={`py-8 px-8 md:pt-24 pb-16 `}>
					<div className="grid grid-cols-12 ">
						<div className="col-span-1 flex md:none" />
						<div className="col-span-12  px-8 md:col-span-7 px-0 shadow-md p-4 bg-gray50">
							<h3 className="pb-4 font-bold text-2xl text-center">
								Welcome To MarkeyNyze
							</h3>
							<p className="pb-4 text-center">
								Already have an account{" "}
								<span className="font-medium">
									<Link to="/login" className="brand_color text-md font-bold ">
										{" "}
										Sign In
									</Link>
								</span>
							</p>

							<form onSubmit={formik.handleSubmit} className="">
								<div className="grid grid-cols-12 gap-4 ">
									<div className="col-span-6">
										<div className="mb-6">
											<label htmlFor="f_name">First Name:</label>
											<input
												type="text"
												id="f_name"
												name="f_name"
												className="text-gray-500 w-full border border-gray-900 p-2 mt-1  rounded-md"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.f_name}
												onKeyDown={handleKeyDown}
												ref={(el) => (inputRefs.current[0] = el)}
												tabIndex={1}
											/>
											{formik.touched.f_name && formik.errors.f_name ? (
												<div className="text-red10">{formik.errors.f_name}</div>
											) : null}
										</div>
										<div className="mb-6">
											<label htmlFor="c_name">Company Name</label>
											<input
												type="text"
												id="c_name"
												className="text-gray-500 w-full border border-gray-900 p-2 mt-1  rounded-md"
												name="c_name"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.c_name}
												onKeyDown={handleKeyDown}
												ref={(el) => (inputRefs.current[2] = el)}
												tabIndex={3}
											/>
											{formik.touched.c_name && formik.errors.c_name ? (
												<div className="text-red10">{formik.errors.c_name}</div>
											) : null}
										</div>
									</div>
									<div className="col-span-6">
										<div className="mb-6">
											<label htmlFor="f_name">Last Name:</label>
											<input
												type="text"
												id="l_name"
												name="l_name"
												className="text-gray-500 w-full border border-gray-900 p-2 mt-1  rounded-md"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.l_name}
												onKeyDown={handleKeyDown}
												ref={(el) => (inputRefs.current[1] = el)}
												tabIndex={2}
											/>
											{formik.touched.l_name && formik.errors.l_name ? (
												<div className="text-red10">{formik.errors.l_name}</div>
											) : null}
										</div>
										<div className="mb-6">
											<label htmlFor="l_name">Phone Number</label>
											<input
												type="text"
												id="phone"
												className="text-gray-500 w-full border border-gray-900 p-2 mt-1  rounded-md"
												name="phone"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.phone}
												onKeyDown={handleKeyDown}
												ref={(el) => (inputRefs.current[3] = el)}
												tabIndex={3}
											/>
											{formik.touched.phone && formik.errors.phone ? (
												<div className="text-red10">{formik.errors.phone}</div>
											) : null}
										</div>
									</div>
								</div>
								<div className="col-span-12 mb-6">
									<label htmlFor="email">Company Address</label>
									<input
										type="text"
										id="c_address"
										name="c_address"
										className="text-gray-500 w-width-full border border-gray-900 p-2 mt-1  rounded-md"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.c_address}
										onKeyDown={handleKeyDown}
										ref={(el) => (inputRefs.current[5] = el)}
										tabIndex={5}
									/>
									{formik.touched.c_address && formik.errors.c_address ? (
										<div>{formik.errors.c_address}</div>
									) : null}
								</div>
								<div className="grid grid-cols-12 gap-4">
									<div className="col-span-6">
										<div className="mb-6">
											<label htmlFor="email">City</label>
											<input
												type="text"
												id="city"
												name="city"
												className="text-gray-500 w-width-full border border-gray-900 p-2 mt-1  rounded-md"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.city}
												onKeyDown={handleKeyDown}
												ref={(el) => (inputRefs.current[6] = el)}
												tabIndex={6}
											/>
											{formik.touched.city && formik.errors.city ? (
												<div className="text-red10">{formik.errors.city}</div>
											) : null}
										</div>
										<div className="mb-6">
											<label htmlFor="email">Country/Region</label>
											<input
												type="text"
												id="country"
												className="text-gray-500 w-width-full border border-gray-900 p-2 mt-1  rounded-md"
												name="country"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.country}
												onKeyDown={handleKeyDown}
												ref={(el) => (inputRefs.current[8] = el)}
												tabIndex={8}
											/>
											{formik.touched.country && formik.errors.country ? (
												<div className="text-red10">
													{formik.errors.country}
												</div>
											) : null}
										</div>
									</div>
									<div className="col-span-6">
										<div className="mb-6">
											<label htmlFor="email"> zip/postal code</label>
											<input
												type="text"
												id="zip"
												className="text-gray-500 w-width-full border border-gray-900 p-2 mt-1  rounded-md"
												name="zip"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.zip}
												onKeyDown={handleKeyDown}
												ref={(el) => (inputRefs.current[7] = el)}
												tabIndex={7}
											/>
											{formik.touched.zip && formik.errors.zip ? (
												<div className="text-red10">{formik.errors.zip}</div>
											) : null}
										</div>
										<div className="mb-6">
											<label htmlFor="email">State/Province</label>
											<input
												type="text"
												id="state"
												name="state"
												className="text-gray-500 w-width-full border border-gray-900 p-2 mt-1  rounded-md"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.state}
												onKeyDown={handleKeyDown}
												ref={(el) => (inputRefs.current[9] = el)}
												tabIndex={9}
											/>
											{formik.touched.state && formik.errors.state ? (
												<div className="text-red10">{formik.errors.state}</div>
											) : null}
										</div>
									</div>
								</div>
								<div className="col-span-12 mb-6">
									<label htmlFor="email">Email:</label>
									<input
										type="text"
										id="email"
										className="w-width-full text-gray-500 w-width-full border border-gray-900 p-2 mt-1  rounded-md"
										name="email"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.email}
										onKeyDown={handleKeyDown}
										ref={(el) => (inputRefs.current[10] = el)}
										tabIndex={10}
									/>
									{formik.touched.email && formik.errors.email ? (
										<div className="text-red10">{formik.errors.email}</div>
									) : null}
								</div>
								<div className="col-span-12 mb-6 relative">
									<label htmlFor="password">Password</label>
									<div className="relative w-full">
										<input
											type={togglePassword ? "text" : "password"}
											id="password"
											className="w-full text-gray-500 border border-gray-900 p-2 mt-1 rounded-md"
											name="password"
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.password}
											onKeyDown={handleKeyDown}
											ref={(el) => (inputRefs.current[11] = el)}
											tabIndex={11}
										/>
										<div
											className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
											onClick={() => setTogglePassword(!togglePassword)}
										>
											{togglePassword ? <FaEyeSlash /> : <FaRegEye />}
										</div>
									</div>
									{formik.touched.password && formik.errors.password ? (
										<div className="text-red-500">{formik.errors.password}</div>
									) : null}
								</div>

								<div className="w-100">
									By clicking the{" "}
									<span className="logo-brand font-bold">“Sign Up”</span>
									button, you are creating a MarketNyze account, and you agree
									to marketNyze’s{" "}
									<span
										className="logo-brand font-bold hover:underline cursor-pointer"
										onClick={() => (window.location.href = "/terms_of_use")}
									>
										Terms of Use
									</span>{" "}
									and{" "}
									<span
										className="logo-brand font-bold hover:underline cursor-pointer"
										onClick={() => (window.location.href = "/privacy_policy")}
									>
										Privacy Policy
									</span>
									.
								</div>
								<button
									type="submit"
									className="px-4  mt-4 py-2 text-white10 rounded bg-blue"
								>
									Continue
								</button>
							</form>
						</div>
						<div className="col-span-4" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpForms;
