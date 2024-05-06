import axios from "axios";
import { api } from "./api";
import {
	getToasterErrors,
	getToasterNotifications,
} from "../components/toaster/toaster";
const token = localStorage.getItem("token");
export const getAllCrmApps = async () => {
	try {
		const response = await axios.get(`${api}/crms`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (response.status === 200) {
			return response.data;
		}
		return response.data;
	} catch (error) {
		//console.error("API error:", error);
		throw error;
	}
};
export const getAllUsersCrmApps = async () => {
	try {
		const response = await axios.get(`${api}/crms/user`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (response.status === 200) {
			return response.data;
		}
		return response.data;
	} catch (error) {
		//console.error("API error:", error);
		throw error;
	}
};
export const connectCrmApps = async (app, tokenAccess, apiKey) => {
	try {
		const response = await axios.post(
			`${api}/crms/connect`,
			{ app, tokenAccess, apiKey },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		if (response.status === 201) {
			getToasterNotifications(response?.data?.message || "App Added !!");
		}
		return response;
	} catch (error) {
		getToasterErrors(error?.response?.data?.message || "Something went wrong");
		throw error;
	}
};
export const editCrmApps = async (app, tokenAccess, apiKey) => {
	try {
		const response = await axios.post(
			`${api}/crms/update`,
			{ app, tokenAccess, apiKey },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		if (response.status === 200) {
			getToasterNotifications(response?.data?.message || "App Updated !!");
		}
		return response;
	} catch (error) {
		getToasterErrors(error?.response?.data?.message || "Something went wrong");
		throw error;
	}
};
export const deleteCrmApp = async (appId) => {
	try {
		const response = await axios.delete(`${api}/crms/disconnect/${appId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (response.status === 200) {
			getToasterNotifications(response?.data?.message || "App Deleted !!");
		}

		return response;
	} catch (error) {
		getToasterErrors(error?.response?.data?.message || "Something went wrong");
		throw error;
	}
};
