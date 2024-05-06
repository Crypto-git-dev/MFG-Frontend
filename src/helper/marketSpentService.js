import axios from "axios";
import { api } from "./api";
const token = localStorage.getItem("token");

export const handleGetMarketSpent = async (data) => {
	try {
		const { data } = await axios.get(`${api}/market-spent`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return data;
	} catch (error) {}
};

export const handleCreateMarketSpent = async (data) => {
	try {
		await axios.post(`${api}/market-spent`, data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	} catch (error) {}
};

export const handleUpdateMarketSpent = async ({ id, amount }) => {
	try {
		await axios.patch(
			`${api}/market-spent/${id}`,
			{ amount },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
	} catch (error) {}
};
