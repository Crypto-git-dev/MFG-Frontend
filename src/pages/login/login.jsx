import SideBar from "../../components/sidebar/sidebar";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
	getToasterErrors,
	getToasterNotifications,
} from "../../components/toaster/toaster";
import { Link, useNavigate } from "react-router-dom";
import { api, loginUser } from "../../helper/api";
import { useState } from "react";
import LoadingSpinner from "../../components/loading/LoadingSpinner";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Login = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const [togglePassword, setTogglePassword] = useState(false);
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			password: Yup.string().required("Required"),
			email: Yup.string().email("Invalid email address").required("Required"),
		}),
		onSubmit: async (values, { resetForm }) => {
			setLoading(true);
			await loginUser(
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

	return (
		<div>
			<SideBar>
				<div className="z-10 justify-center mt-5 transparent">
					{loading && <LoadingSpinner />}
				</div>
				<div
					className={`${
						loading ? "bg-gray20 opacity-40 backdrop-blur-2xl transparent" : ""
					}`}
				>
					{" "}
					<div className="items-center h-screen md:py-52">
						<div className="grid grid-cols-12">
							<div className="flex col-span-1 md:none" />
							<div className="col-span-12 p-4 px-0 px-8 rounded-lg shadow-md md:col-span-7 bg-gray50">
								<h3 className="pb-4 mt-4 text-xl font-bold text-center md:text-2xl md:mt-0">
									Welcome To MarkeyNyze
								</h3>
								<p className="pb-4 text-center">
									Don't have an account{" "}
									<span className="font-medium">
										<Link
											to="/signup"
											className="font-bold brand_color text-md "
										>
											{" "}
											Sign up
										</Link>
									</span>
								</p>
								<form onSubmit={formik.handleSubmit}>
									<div className="col-span-12 mb-6">
										<label htmlFor="email">Email Address</label>
										<input
											type="text"
											id="email"
											name="email"
											className="p-2 mt-1 text-gray-500 border border-gray-900 rounded-md w-width-full"
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.email}
										/>
										{formik.touched.email && formik.errors.email ? (
											<div className="text-red10">{formik.errors.email}</div>
										) : null}
									</div>

									<div className="relative col-span-12 mb-6">
										<label htmlFor="password">Password</label>
										<input
											type={togglePassword ? "text" : "password"}
											id="password"
											className="p-2 mt-1 text-gray-500 border border-gray-900 rounded-md w-width-full"
											name="password"
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.password}
										/>
										<div
											onClick={() => setTogglePassword(!togglePassword)}
											className="fixed absolute z-10 font-bold transform -translate-y-1/2 cursor-pointer right-4 top-2/3"
										>
											{togglePassword ? <FaEyeSlash /> : <FaRegEye />}
										</div>
										{formik.touched.password && formik.errors.password ? (
											<div className="text-red-500">
												{formik.errors.password}
											</div>
										) : null}
									</div>

									<button
										type="submit"
										className="px-4 py-3 mt-4 rounded text-white10 bg-blue"
										id="sign-in"
									>
										Sign In
									</button>
								</form>
							</div>
							<div className="col-span-4" />
						</div>
					</div>
				</div>
			</SideBar>
		</div>
	);
};

export default Login;
