import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
const CrmAppModal = ({
	selectedItem,
	onClose,
	onConnect,
	editAppClick,
	handleEditSubmitApp,
}) => {
	const [togglePassword, setTogglePassword] = useState(!editAppClick);
	const [toggleToken, setToggleToken] = useState(!editAppClick);
	const formik = useFormik({
		initialValues: {
			tokenAccess: selectedItem?.tokenAccess || "",
			apiKey: selectedItem?.apiKey || "",
			marketSpent: "",
		},

		validationSchema: Yup.object({
			tokenAccess: Yup.string().required("Required"),
			apiKey: Yup.string().required("Required"),
			marketSpent: Yup.string(),
		}),
		onSubmit: (values) => {
			if (editAppClick) {
				handleEditSubmitApp(selectedItem, values);
			} else {
				onConnect(selectedItem, values);
			}
		},
	});

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl transparent ">
			<div className="z-40 p-6 border shadow-lg backdrop-blur-xl transparent border-white10">
				<div className="max-w-lg p-8 rounded-lg z-200">
					<h2 className="text-2xl font-bold mb-2 text-[--card-header]">
						{editAppClick ? "Update " : "Connect to"}{" "}
						{selectedItem?.app?.name || selectedItem?.name}
					</h2>

					<form onSubmit={formik.handleSubmit} className="w-96">
						<div className="mb-4">
							<label
								htmlFor="tokenAccess"
								className="block text-sm font-medium text-[--card-header]"
							>
								Token Access
							</label>
							<input
								type={toggleToken ? "text" : "password"}
								id="tokenAccess"
								name="tokenAccess"
								onChange={formik.handleChange}
								value={formik.values.tokenAccess}
								className="w-full p-2 mt-1 border rounded-md"
							/>
							{formik.touched.tokenAccess && formik.errors.tokenAccess ? (
								<div className="text-red10">{formik.errors.tokenAccess}</div>
							) : null}
							<div
								onClick={() => setToggleToken(!toggleToken)}
								className="font-bold text-[--card-header] absolute right-8 top-9/10 -mt-5 ml-2 transform -translate-y-1/2 z-10 cursor-pointer"
							>
								{!toggleToken ? <FaEyeSlash /> : <FaRegEye />}
							</div>
						</div>

						<div className="mb-4">
							<label
								htmlFor="apiKey"
								className="block text-sm font-medium text-[--card-header]"
							>
								API Key
							</label>
							<input
								id="apiKey"
								name="apiKey"
								type={togglePassword ? "text" : "password"}
								onChange={formik.handleChange}
								value={formik.values.apiKey}
								className="w-full p-2 mt-1 text-gray-500 border border-gray-900 rounded-md"
							/>
							{formik.touched.apiKey && formik.errors.apiKey ? (
								<div className="text-red10">{formik.errors.apiKey}</div>
							) : null}
							<div
								onClick={() => setTogglePassword(!togglePassword)}
								className="absolute z-10 -mt-5 font-bold transform -translate-y-1/2 cursor-pointer right-8 top-9/10"
							>
								{!togglePassword ? <FaEyeSlash /> : <FaRegEye />}
							</div>
						</div>

						{/* {!editAppClick ? (
							<div className="mb-4">
								<label
									htmlFor="apiKey"
									className="block text-sm font-medium text-[--card-header]"
								>
									Market Spent
								</label>
								<input
									id="marketSpent"
									name="marketSpent"
									type="number"
									onChange={formik.handleChange}
									value={formik.values.marketSpent}
									className="w-full p-2 mt-1 text-gray-500 border border-gray-900 rounded-md"
								/>
								{formik.touched.marketSpent && formik.errors.marketSpent ? (
									<div className="text-red10">{formik.errors.marketSpent}</div>
								) : null}
							</div>
						) : null} */}

						<div className="flex justify-end">
							<button
								type="button"
								onClick={onClose}
								className="mr-4 text-[--card-header] hover:text-gray-700 focus:outline-none"
							>
								Cancel
							</button>
							<button
								type="submit"
								className="px-4 py-2 text-white rounded-lg bg-blue50 bg-blue text-white10 h-fit "
							>
								{editAppClick ? "Update " : "Connect"}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CrmAppModal;
