import axios from "axios";
import { api } from "./api";
const token = localStorage.getItem("token");

export const handlegraphsData = async () => {
	try {
		const response = await axios.get(`${api}/graphs`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (response.status === 200) {
			return response.data;
		}
	} catch (error) {
		throw error;
	}
};
