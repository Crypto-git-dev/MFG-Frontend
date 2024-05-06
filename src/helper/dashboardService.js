import axios from "axios";
import { api } from "./api";
const token = localStorage.getItem("token");

export const handleGetDashboard = async () => {
	try {
		const response = await axios.get(`${api}/dashboard`, {
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
