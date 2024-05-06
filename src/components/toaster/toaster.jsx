import toast from "react-hot-toast";

export const getToasterErrors = (title) => {
	return toast.error(title);
};

export const getToasterNotifications = (title) => {
	return toast.success(title);
};
