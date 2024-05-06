import axios from "axios";
import { api } from "./api";
const token = localStorage.getItem("token");
export const handleGetServices = async () => {
	try {
		const response = await axios.get(`${api}/service`);
		if (response.status === 200) {
			return response.data;
		}
	} catch (error) {
		//console.log(error);
	}
};
export const handleGetServicesForUser = async () => {
	try {
		const response = await axios.get(`${api}/service/for-user`, {
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
