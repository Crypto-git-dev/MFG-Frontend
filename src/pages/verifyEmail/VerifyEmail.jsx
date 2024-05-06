import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
	api,
	handleEmailVerification,
	handleGetUserInfo,
} from "../../helper/api";
import { getToasterErrors, getToasterNotifications } from "../../components/toaster/toaster";

const EmailVerification = () => {
	const { token } = useParams();
	const navigate = useNavigate();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const getUserInfo = async () => {
		await handleGetUserInfo(api, token, navigate);
	};
	const redirectUrl = () => {
		setTimeout(() => {
			window.location.href = "/login";
		}, 2000);
	};

	useEffect(() => {
		const fetchData = async () => {
			await getUserInfo();
			handleEmailVerification(
				token,
				getToasterNotifications,
				getToasterErrors
			);
		};

		fetchData();
	}, [token, getUserInfo]);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded shadow-md max-w-md w-full text-center">
				<p className="text-lg font-semibold mb-4">Verifying email...</p>
				<div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500 border-opacity-50 mx-auto mb-4"></div>
				<p className="text-sm text-gray-500">
					You will be redirected to the login page shortly.
				</p>
			</div>
			{redirectUrl()}
		</div>
	);
};

export default EmailVerification;
