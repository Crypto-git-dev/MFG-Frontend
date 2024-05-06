import { useFormik } from "formik";
import * as Yup from "yup";
import { api, changePassword } from "../../../helper/api";
import {
	getToasterErrors,
	getToasterNotifications,
} from "../../toaster/toaster";
import { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
const Password = () => {
	const userInfo = JSON.parse(localStorage.getItem("userInfo"));
		 const [togglePassword, setTogglePassword] = useState(false);
	const formik = useFormik({
		initialValues: {
			email: userInfo?.user?.email || "",
			password: "",
			newPassword: "",
			confirmNewPassword: "",
		},
		validationSchema: Yup.object({
			password: Yup.string().required("Required"),
			newPassword: Yup.string().required("Required"),
			email: Yup.string().email("Invalid email address").required("Required"),
			confirmNewPassword: Yup.string()
				.oneOf([Yup.ref("newPassword"), null], "Passwords must match")
				.required("Required"),
		}),
		onSubmit: async (values, { resetForm }) => {
			await changePassword(
				api,
				values,
				resetForm,
				getToasterNotifications,
				getToasterErrors
			);
		},
	});
	return (
		<div className="">
			<form
				onSubmit={formik.handleSubmit}
				className="lg:px-20 px-4 py-12 lg:w-1/2 justify-center"
			>
				<h1 className="text-xl mb-4 text-[--card-text]">Change Password</h1>
				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-12">
						<div className="mb-6">
							<label htmlFor="password" className="text-[--card-text]">
								Old Password :{" "}
							</label>
							<div className="relative flex items-center">
								<input
									type={togglePassword ? "text" : "password"}
									id="password"
									name="password"
									className="text-gray-500 w-full border border-gray-900 p-2 mt-1 rounded-md"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.password}
								/>
								<div
									onClick={() => setTogglePassword(!togglePassword)}
									className="font-bold absolute right-0 transform -translate-x-2 cursor-pointer"
								>
									{togglePassword ? <FaEyeSlash /> : <FaRegEye />}
								</div>
							</div>

							{formik.touched.password && formik.errors.password ? (
								<div className="text-red10">{formik.errors.password}</div>
							) : null}
						</div>
					</div>
				</div>
				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-12">
						<div className="mb-6">
							<label htmlFor="newPassword" className="text-[--card-text]">
								New Password (8+ characters)
							</label>
							<input
								type="password"
								id="newPassword"
								name="newPassword"
								className="text-gray-500 w-full border border-gray-900 p-2 mt-1  rounded-md"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.newPassword}
							/>
							{formik.touched.newPassword && formik.errors.newPassword ? (
								<div className="text-red10">{formik.errors.newPassword}</div>
							) : null}
						</div>
					</div>
				</div>
				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-12">
						<div className="mb-6">
							<label
								htmlFor="confirmNewPassword"
								className="text-[--card-text]"
							>
								Confirm New Password
							</label>
							<input
								type="password"
								id="confirmNewPassword"
								name="confirmNewPassword"
								className="text-gray-500 w-full border border-gray-900 p-2 mt-1  rounded-md"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.confirmNewPassword}
							/>
							{formik.touched.confirmNewPassword &&
							formik.errors.confirmNewPassword ? (
								<div className="text-red10">
									{formik.errors.confirmNewPassword}
								</div>
							) : null}
						</div>
					</div>
				</div>

				<div className="flex justify-end mb-4">
					<button
						type="submit"
						className="bg-blue inline-flex justify-center py-2 px-4 border border-transparent shadow-lg text-md font-medium rounded-md text-white10 hover:bg-brand_color"
					>
						Change
					</button>
				</div>
			</form>
		</div>
	);
};

export default Password;
