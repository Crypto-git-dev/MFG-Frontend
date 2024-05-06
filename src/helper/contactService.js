import axios from "axios";
import { api } from "./api";

export const sendEmail = async (
	values,
	getToasterNotifications,
	getToasterErrors
) => {
	try {
		const response = await axios.post(`${api}/contact/send`, values);
		if (response.status === 200) {
			getToasterNotifications(`${response.data.message}`);
		}
		return response.data;
	} catch (error) {
		//console.error("API error:", error);
		getToasterErrors("Error While sending emails");
		throw error;
	}
};
