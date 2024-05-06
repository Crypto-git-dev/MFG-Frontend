import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateProfile, updateUserAvatar } from "../../../helper/api";
import {
	getToasterErrors,
	getToasterNotifications,
} from "../../toaster/toaster";
import { useNavigate } from "react-router-dom";
const Profile = () => {
	const navigate= useNavigate();
	  const [preview, setPreview] = useState(null);
	const userInfo = JSON.parse(localStorage.getItem("userInfo"));
	const formik = useFormik({
		initialValues: {
			f_name: userInfo?.user?.f_name || "",
			l_name: userInfo?.user?.l_name || "",
			c_name: userInfo?.user?.c_name || "",
			phone: userInfo?.user?.phone || "",
			c_address: userInfo?.user?.c_address || "",
			city: userInfo?.user?.city || "",
			country: userInfo?.user?.country || "",
			zip: userInfo?.user?.zip || "",
			state: userInfo?.user?.state || "",
		},
		validationSchema: Yup.object({
			f_name: Yup.string().required("Required"),
			l_name: Yup.string().required("Required"),
			phone: Yup.string().required("Required"),
		}),
		onSubmit: async (values, { resetForm }) => {
			await updateProfile(
				values,
				navigate,
				getToasterNotifications,
				getToasterErrors
			);
		},
	});

	const onUpload = async (e) => {
		e.preventDefault();
		const selectedFile = e.target.files[0];
		if (!selectedFile) {
			return;
		}

		setPreview(URL.createObjectURL(selectedFile));

		try {
			// Assuming updateUserAvatar accepts the file as a parameter directly
			await updateUserAvatar(
				selectedFile,
				navigate,
				getToasterNotifications,
				getToasterErrors
			);
		} catch (error) {
			console.error("Error uploading avatar:", error);
			// Handle errors
		}
	};


	return (
		<div className=" bg-[--admin-bg] mb-4 ">
			<div className=" ">
				<div className="flex  ml-24 -mb-6 p-4">
					<div className="relative border border mr-4 w-32 h-32 rounded-full overflow-hidden">
						<label htmlFor="profile-image" className="cursor-pointer">
							<div className="lg:w-32 lg:h-34 w-32 h-32 ">
								<img
									className="object-cover rounded-full w-full h-full"
									src={
										preview ||
										userInfo?.user?.avatar ||
										"https://cdn-icons-png.flaticon.com/512/149/149071.png"
									}
									alt={userInfo?.user.name}
								/>
							</div>

							<div className="w-28 h-28">
								<div className="absolute object-cover inset-0 bg-gray-800 bg-opacity-50  opacity-0 hover:opacity-100 transition-opacity duration-300">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										className="w-6 h-6 text-white"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"
										/>
									</svg>
								</div>
							</div>

							<input
								name="avatar"
								onChange={onUpload}
								type="file"
								id="profile-image"
								className="hidden"
							/>
						</label>
					</div>
				</div>
				<form
					className="px-20 py-12 shadow w-full md:w-1/2 justify-center items-center bg-white40 border-[--card-text]"
					onSubmit={formik.handleSubmit}
				>
					<div className="grid grid-cols-12 gap-4">
						<div className="md:col-span-6 col-span-12">
							<div className="md:mb-3">
								<label
									htmlFor="f_name"
									className="font-medium text-[--card-text]"
								>
									First Name
								</label>
								<input
									type="text"
									id="f_name"
									name="f_name"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.f_name}
									className="w-full py-2 px-3 text-gray40  rounded-md border-1 border-brand_colorfocus:border-brand_color focus:outline-none focus:ring-2 focus:ring-brand_color-default"
								/>
								{formik.touched.f_name && formik.errors.f_name ? (
									<div className="text-red10">{formik.errors.f_name}</div>
								) : null}
							</div>
						</div>
						<div className="md:col-span-6 col-span-12">
							<label
								htmlFor="l_name"
								className="font-medium text-[--card-text]"
							>
								Last Name
							</label>
							<input
								type="text"
								id="l_name"
								name="l_name"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.l_name}
								className="w-full py-2 px-3 text-gray40 rounded-md border-1 border-brand_colorfocus:border-brand_color focus:outline-none focus:ring-2 focus:ring-brand_color-default"
							/>
							{formik.touched.l_name && formik.errors.l_name ? (
								<div className="text-red10">{formik.errors.l_name}</div>
							) : null}
						</div>
						<div className="md:col-span-6 col-span-12 ">
							<label
								htmlFor="c_name"
								className="font-medium text-[--card-text]"
							>
								Company Name
							</label>
							<input
								type="text"
								id="c_name"
								name="c_name"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.c_name}
								className="w-full py-2 px-3 rounded-md text-gray40  border-1 border-brand_colorfocus:border-brand_color focus:outline-none focus:ring-2 focus:ring-brand_color-default"
							/>
							{formik.touched.c_name && formik.errors.c_name ? (
								<div className="text-red10">{formik.errors.c_name}</div>
							) : null}
						</div>
						<div className="md:col-span-6 col-span-12">
							<label htmlFor="phone" className="font-medium text-[--card-text]">
								Phone Number
							</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.phone}
								className="w-full py-2 px-3 text-gray40 rounded-md border-1 border-brand_colorfocus:border-brand_color focus:outline-none focus:ring-2 focus:ring-brand_color-default"
							/>
							{formik.touched.phone && formik.errors.phone ? (
								<div className="text-red10">{formik.errors.phone}</div>
							) : null}
						</div>
						<div className="md:col-span-12 col-span-12">
							<label
								htmlFor="c_address"
								className="font-medium text-[--card-text]"
							>
								Company Address
							</label>
							<input
								type="text"
								id="c_address"
								name="c_address"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.c_address}
								className="w-full py-2 px-3 text-gray40 rounded-md border-1 border-brand_color focus:border-brand_color focus:outline-none focus:ring-2 focus:ring-brand_color-default"
							/>
							{formik.touched.c_address && formik.errors.c_address ? (
								<div className="text-red10">{formik.errors.c_address}</div>
							) : null}
						</div>
						<div className="md:col-span-6 col-span-12">
							<label htmlFor="city" className="font-medium text-[--card-text]">
								City
							</label>
							<input
								type="text"
								id="city"
								name="city"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.city}
								className="w-full py-2 px-3 rounded-md border-1 text-gray40 border-brand_colorfocus:border-brand_color focus:outline-none focus:ring-2 focus:ring-brand_color-default"
							/>
							{formik.touched.city && formik.errors.city ? (
								<div className="text-red10">{formik.errors.city}</div>
							) : null}
						</div>
						<div className="md:col-span-6 col-span-12">
							<label htmlFor="zip" className="font-medium text-[--card-text]">
								Zip / Postal Code
							</label>
							<input
								type="text"
								id="zip"
								name="zip"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.zip}
								className="w-full py-2 px-3 rounded-md border-1 border-brand_colorfocus:border-brand_color focus:outline-none focus:ring-2 focus:ring-brand_color-default"
							/>
							{formik.touched.zip && formik.errors.zip ? (
								<div className="text-red10">{formik.errors.zip}</div>
							) : null}
						</div>
						<div className="md:col-span-6 col-span-12">
							<label
								htmlFor="country"
								className="font-medium text-[--card-text]"
							>
								Country
							</label>
							<input
								type="text"
								id="country"
								name="country"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.country}
								className="w-full py-2 px-3 rounded-md text-gray40 border-1 border-brand_colorfocus:border-brand_color focus:outline-none focus:ring-2 focus:ring-brand_color-default"
							/>
							{formik.touched.country && formik.errors.country ? (
								<div className="text-red10">{formik.errors.country}</div>
							) : null}
						</div>
						<div className="md:col-span-6 col-span-12">
							<label htmlFor="state" className="font-medium text-[--card-text]">
								State/Province
							</label>
							<input
								type="text"
								id="state"
								name="state"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.state}
								className="w-full py-2 px-3 text-gray40 rounded-md border-1 border-brand_colorfocus:border-brand_color focus:outline-none focus:ring-2 focus:ring-brand_color-default"
							/>
							{formik.touched.state && formik.errors.state ? (
								<div className="text-red10">{formik.errors.state}</div>
							) : null}
						</div>
					</div>
					<div className="px-3 py-2 mt-4 text-right sm:px-6 ">
						<button
							type="submit"
							className="bg-blue inline-flex justify-center py-2 px-4 border border-transparent shadow-lg text-md font-medium rounded-md text-white10 hover:bg-brand_color"
						>
							Update Profile
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Profile;
