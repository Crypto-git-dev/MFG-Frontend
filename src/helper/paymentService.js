import axios from "axios";
import { api } from "./api";
import { loadStripe } from "@stripe/stripe-js";
import {
	getToasterErrors,
	getToasterNotifications,
} from "../components/toaster/toaster";
const token = localStorage.getItem("token");
const stripePublishableKey = process.env.REACT_APP_BACKENDURL;

const callStripe = async () => {
	try {
		const stripe = await loadStripe(stripePublishableKey);
		return stripe;
	} catch (error) {
		getToasterErrors(error.message?.replace(".js", ""));
		throw error; // rethrow the error to propagate it up
	}
};

export const checkoutStripe = async (plan, navigate, getToasterErrors) => {
	if (token) {
		await callStripe();
		try {
			const response = await axios.post(
				`${api}/payment/create-subscription-checkout-session`,
				{
					plan: plan,
				},
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);
			const { session } = response.data;
			window.location = session.url;
		} catch (error) {
			getToasterErrors(error.response.data.error);
			setTimeout(() => {
				navigate(0);
			}, 1000);
		}
	} else {
		localStorage.setItem("pricing", true);
		window.location.href = "/signup";
	}
};
export const handlePaymentSuccessService = async (navigate) => {
	if (token) {
		try {
			const response = await axios.post(
				`${api}/payment/payment-success`,
				{},
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (response.status === 200) {
				getToasterNotifications(response.data.message || "Payment successful");
				setTimeout(() => {
					window.location.href = "/subscription";
				}, 1000);
			}
		} catch (error) {
			getToasterErrors(error.response.data.error, "Payment failed");
			setTimeout(() => {
				window.location.href = "/subscription";
			}, 1000);
		}
	} else {
		navigate("/login");
	}
};

export const unsubscribeStripe = async (id) => {
	if (token) {
		await callStripe();
		try {
			const response = await axios.post(
				`${api}/payment/create-cancellation-checkout-session`,
				{
					id: id,
				},
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);

			const res = response.data;
			getToasterNotifications(res.message || "Unsubscribed");
			return res;
		} catch (error) {
			getToasterErrors(error.response.data.error?.replace(".js", ""));
		}
	} else {
		window.location.reload();
	}
};
