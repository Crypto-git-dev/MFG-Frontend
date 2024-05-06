import axios from "axios";
import { jwtDecode } from "jwt-decode";
//export const api = "https://api.lifeflair.co/api/v1";
export const api = process.env.REACT_APP_BACKENDURL;

export const handleGetUserInfo = async (api, token, navigate) => {
	try {
		const response = await axios.get(`${api}/auth/user/profile`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (response.status === 200) {
			localStorage.setItem("userInfo", JSON.stringify(response.data));
		}
	} catch (error) {
		localStorage.removeItem("token");
		localStorage.removeItem("userInfo");
		navigate("/login");
	}
};

export const registerUser = async (
	api,
	values,
	navigate,
	resetForm,
	getToasterNotifications,
	getToasterErrors
) => {
	try {
		const response = await axios.post(`${api}/auth/register`, values);
		if (response.status === 201) {
			getToasterNotifications(response.data?.message || "User Registered !!");
			navigate("/login");
			resetForm();
		}
	} catch (error) {
		getToasterErrors(error?.response?.data?.message || error.message);
	}
};

export const handleEmailVerification = async (
	token,
	getToasterNotifications,
	getToasterErrors
) => {
	try {
		const response = await axios.get(`${api}/auth/verify-email`, {
			params: { token },
		});

		// Check the response status and handle accordingly
		if (response.status === 200) {
			getToasterNotifications("Email verified successfully.");
		} else {
			getToasterErrors("Failed to verify email.");
		}
	} catch (error) {
		console.log("Error verifying email:", error.message);
	}
};

export const loginUser = async (
	api,
	values,
	navigate,
	resetForm,
	getToasterNotifications,
	getToasterErrors
) => {
	try {
		const response = await axios.post(`${api}/auth/login`, values);
		if (response.status === 200) {
			localStorage.setItem("token", response.data.token);
			if (!response.data.isVerified) {
				window.location.href = "/";
				getToasterNotifications("Please verify your email first");
			} else {
				const token = localStorage.getItem("token");
				const userInfo = jwtDecode(token);
				localStorage.setItem("userInfo", JSON.stringify(userInfo));
				await handleGetUserInfo(api, token, navigate);
				const isOnPricingSection = Boolean(localStorage.getItem("pricing"));
				if (isOnPricingSection) {
					window.location.href = "/#pricing-section";
					localStorage.removeItem("pricing");
				} else {
					window.location.href = "/dashboard";
				}
				resetForm();
				getToasterNotifications(response?.data?.message || "User Logged !!");
			}
		}
	} catch (error) {
		getToasterErrors(error?.response?.data?.error || "Something went wrong");
	}
};
export const changePassword = async (
	api,
	values,
	resetForm,
	getToasterNotifications,
	getToasterErrors
) => {
	const token = localStorage.getItem("token");
	try {
		const response = await axios.post(`${api}/auth/change-password`, values, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (response.status === 200) {
			getToasterNotifications(response?.data?.message || "Password Changed !!");
			resetForm();
		}
	} catch (error) {
		getToasterErrors(error?.response?.data?.error || "Something went wrong");
	}
};
export const updateProfile = async (
	values,
	navigate,
	getToasterNotifications,
	getToasterErrors
) => {
	const token = localStorage.getItem("token");
	try {
		const response = await axios.post(`${api}/auth/profile`, values, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (response.status === 200) {
			getToasterNotifications(response?.data?.message || "Profile updated !!");
			localStorage.setItem("userInfo", JSON.stringify(response.data.user));
			await handleGetUserInfo(api, token, navigate);
			window.location.reload();
		}
	} catch (error) {
		getToasterErrors(error?.response?.data?.error || "Something went wrong");
	}
};
export const updateUserAvatar = async (
	avatarFile,
	navigate,
	getToasterNotifications,
	getToasterErrors
) => {
	const token = localStorage.getItem("token");

	try {
		const formData = new FormData();
		formData.append("avatar", avatarFile);

		const response = await axios.post(`${api}/user/avatar`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${token}`,
			},
		});
		if (response.status === 200) {
			getToasterNotifications(response?.data?.message || "Profile updated !!");
			localStorage.setItem("userInfo", JSON.stringify(response.data.user));
			await handleGetUserInfo(api, token, navigate);
			window.location.reload();
		}
	} catch (error) {
		getToasterErrors(error?.response?.data?.message || "Something went wrong");
	}
};
