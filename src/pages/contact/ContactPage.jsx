import { useFormik } from "formik";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import * as Yup from "yup";
import { sendEmail } from "../../helper/contactService";
import {
	getToasterErrors,
	getToasterNotifications,
} from "../../components/toaster/toaster";
import { useState } from "react";
import LoadingSpinner from "../../components/loading/LoadingSpinner";
const ContactPage = () => {

	const [loading, setLoading] = useState(false);
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			phone: "",
			message: "",
		},
		validationSchema: Yup.object({
			name: Yup.string().required("Required"),
			email: Yup.string().required("Required"),
			phone: Yup.string().required("Required"),
			message: Yup.string().required("Required"),
		}),
		onSubmit: async (values, rese) => {
			setLoading(true);
			try {
				await sendEmail(values, getToasterNotifications, getToasterErrors);
				setTimeout(() => {
					window.location.reload();
				}, 2000);
			} catch (error) {
				if (error) {
					setLoading(false);
				}
			}
			setLoading(false);
		},
	});

	return (
		<div>
			<div className="px-8 md:px-24  py-8 bg-white10">
				<Header /> 
				<div className="justify-center transparent z-10 mt-5">
					{loading && <LoadingSpinner />}
				</div>
				<div
					className={`${
						loading ? "bg-gray20 opacity-40 backdrop-blur-2xl transparent" : ""
					}`}
				>
					<h3 className="text-center text-2xl text-[--card-header]">
						Contact us
					</h3>
					<div className="grid grid-cols-12 my-20 h-screen">
						<div className="col-span-12 md:col-span-6">
							<img src="images/contact.png" alt="contact" />
						</div>
						<div className="col-span-12 mt-6 md:mt-0 md:col-span-6">
							<div className="col-span-12  px-8 md:col-span-7 px-0">
								<form onSubmit={formik.handleSubmit}>
									<div className="w-full mb-4">
										<input
											type="text"
											id="name"
											name="name"
											placeholder="Name"
											className="text-gray-500 mt-2 w-full border border-gray-900 p-2 mt-1  rounded-md"
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.name}
										/>
										{formik.touched.name && formik.errors.name ? (
											<div className="text-red20">{formik.errors.name}</div>
										) : null}
									</div>
									<div className="w-full mb-4">
										<input
											type="text"
											id="email"
											placeholder="Email"
											name="email"
											className="text-gray-500 mt-2 w-full border border-gray-900 p-2 mt-1  rounded-md"
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.email}
										/>
										{formik.touched.email && formik.errors.email ? (
											<div className="text-red20">{formik.errors.email}</div>
										) : null}
									</div>
									<div className="w-full mb-4">
										<input
											type="text"
											id="phone"
											placeholder="Phone Number"
											name="phone"
											className="text-gray-500 mt-2 w-full border border-gray-900 p-2 mt-1  rounded-md"
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.phone}
										/>
										{formik.touched.phone && formik.errors.phone ? (
											<div className="text-red20">{formik.errors.phone}</div>
										) : null}
									</div>
									<div className="w-full mb-4">
										<textarea
											type="text"
											id="message"
											placeholder="Message"
											rows={5}
											name="message"
											className="text-gray-500 mt-2 w-full border border-gray-900 p-2 mt-1  rounded-md"
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.message}
										/>
										{formik.touched.message && formik.errors.message ? (
											<div className="text-red20">{formik.errors.message}</div>
										) : null}
									</div>
									<button
										type="submit"
										className="px-8  w-full md:w-fit mt-4 py-2 text-white10 rounded bg-blue"
									>
										Send message
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer /> 
		</div>
	);
};

export default ContactPage;
