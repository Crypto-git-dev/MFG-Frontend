// import React, { useState } from "react";
// import {
// 	useStripe,
// 	useElements,
// 	// CardNumberElement,
// 	// CardExpiryElement,
// 	// CardCvcElement,
// 	CardElement,
// } from "@stripe/react-stripe-js";
// import * as Yup from "yup";
// import { useFormik } from "formik";
// import {
// 	getToasterErrors,
// 	getToasterNotifications,
// } from "../../components/toaster/toaster";
// import { createSubscription } from "../../helper/paymentService";

// import LoadingSpinner from "../loading/LoadingSpinner";

// const PaymentForm = ({ data, closeModal }) => {
// 	const userInfo = JSON.parse(localStorage.getItem("userInfo"));
// 	const stripe = useStripe();
// 	const elements = useElements();
// 	const [loading, setLoading] = useState(false);
// 	const formik = useFormik({
// 		initialValues: {
// 			user: userInfo?.user?._id || "",
// 			email: userInfo?.user?.email || "",
// 			plan: data?.plan || "",
// 			amount: data?.amount || 0,
// 		},
// 		validationSchema: Yup.object({
// 			// name: Yup.string().required("Name is required"),
// 			email: Yup.string()
// 				.email("Invalid email address")
// 				.required("Email is required"),
// 		}),
// 		onSubmit: async (values) => {
// 			setLoading(true);
// 			if (!stripe || !elements) {
// 				return;
// 			}
// 			try {
// 				const result = await stripe.createPaymentMethod({
// 					type: "card",
// 					card: elements.getElement(CardElement),
// 					billing_details: {
// 						email: userInfo?.user?.email || values.email,
// 					},
// 				});

// 				if (result.error) {
// 					console.error(result.error.message);
// 				} else {
// 					const { client_secret, status } = await createSubscription(
// 						result.paymentMethod.id,
// 						values.email,
// 						values.plan,
// 						values.amount,
// 						getToasterNotifications,
// 						getToasterErrors
// 					);

// 					if (status === "requires_action") {
// 						stripe.confirmCardPayment(client_secret).then((result) => {
// 							if (result.error) {
// 								console.error("There was an issue!");
// 								console.error(result.error);
// 								getToasterErrors("Insufficient funds, card has expired");
// 							} else {
// 								closeModal();
// 							}
// 						});
// 					} else {
// 						closeModal();
// 					}
// 				}
// 			} catch (error) {
// 				console.error("An error occurred:", error);
// 			}
// 			setLoading(false);
// 		},
// 	});

// 	return (
// 		<div className="justify-center">
// 			<div className="justify-center transparent z-10 ">
// 				{loading && <LoadingSpinner />}
// 			</div>
// 			<div
// 				className={`${
// 					loading ? "bg-gray20 opacity-40 backdrop-blur-2xl transparent" : ""
// 				}`}
// 			>
// 				<h3 className="text-center w-1/2 text-sm shadow-lg justify-center items-center bg-gray40 text-white10 rounded-lg mb-4 text-lg font-bold capitalize">
// 					Pay for : {data?.plan}
// 				</h3>
// 				<form onSubmit={formik.handleSubmit} className="lg:w-[500px] w-[250px]">
// 					<CardElement />
// 					<button
// 						className="mt-5 px-4 py-2 mt-4 text-white10 rounded bg-brand"
// 						type="submit"
// 						disabled={loading}
// 					>
// 						{loading ? "Processing..." : "Pay Now"}
// 					</button>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default PaymentForm;
