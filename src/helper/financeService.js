import axios from "axios";
import { api } from "./api";
const token = localStorage.getItem("token");
export const handleGetFinanceData = async () => {
	try {
		const response = await axios.get(`${api}/graphs/finance`, {
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
export const handleUpdateFinanceData = async (finance) => {
	try {
		const response = await axios.post(`${api}/graphs/finance/update`, finance, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (response.status === 200) {
			return response.data; // Return the response data instead of the entire response
		}
	} catch (error) {
		// Handle error, show error notification, etc.
		//console.error("Error updating finances:", error);
		throw error; // Re-throw the error to be handled by the calling code
	}
};
