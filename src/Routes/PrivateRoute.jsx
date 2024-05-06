import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { getToasterNotifications } from "../components/toaster/toaster";

const PrivateRoute = () => {
	const token = localStorage.getItem("token");
	const userInfo = JSON.parse(localStorage.getItem("userInfo"));
	
	const timeoutId = setTimeout(() => {
		if (token && !userInfo?.user?.isVerified) getToasterNotifications("Please verify your email first");
			
	}, 500);
	useEffect(() => {
		
		if (token && !userInfo?.user?.isVerified) {
			return () => clearTimeout(timeoutId);
		}
	}, [timeoutId, token, userInfo]);

	return token && userInfo?.user?.isVerified ? (
		<div>
			<Outlet />
		</div>
	) : token && !userInfo?.user.isVerified ? (
		<Navigate to="/" />
	) : (
		<Navigate to="/login" />
	);
};

export default PrivateRoute;
