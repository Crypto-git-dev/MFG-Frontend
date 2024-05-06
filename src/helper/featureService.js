import axios from "axios";
import { api } from "./api";
import {
	getToasterErrors,
	getToasterNotifications,
} from "../components/toaster/toaster";
const token = localStorage.getItem("token");
export const handleGetFeatures = async () => {
	try {
		const response = await axios.get(`${api}/features`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (response.status === 200) {
			return response.data;
		}
	} catch (error) {
		//console.log(error);
	}
};
export const handleGetActiveFeatures = async () => {
	try {
		const response = await axios.get(`${api}/features`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (response.status === 200) {
			const filteredData = response.data.filter((item) => item.active === true);

			return filteredData;
		}
	} catch (error) {
		//console.log(error);
	}
};

export const updateFeature = async (id, status) => {
	const token = localStorage.getItem("token");
	try {
		const response = await axios.post(
			`${api}/features/status`,
			{ status: status, id: id },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		if (response.status === 200) {
			getToasterNotifications(response?.data?.message || "Profile updated !!");
		}
	} catch (error) {
		getToasterErrors(error?.response?.data?.message || "Something went wrong");
	}
};
