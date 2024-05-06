import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handlePaymentSuccessService } from "../../helper/paymentService";
import LoadingSpinner from "../loading/LoadingSpinner";

const PaymentSuccess = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		// Disable the ability to go back to the payment success page
		const handleNavigation = (e) => {
			e.preventDefault();
			// Optionally show a warning or perform any other action
		};

		window.addEventListener("popstate", handleNavigation);

		// Cleanup the event listener when the component is unmounted
		return () => {
			window.removeEventListener("popstate", handleNavigation);
		};
	}, []);

	const handlePaymentSuccess = async () => {
		setLoading(true);
		await handlePaymentSuccessService(navigate);
		setLoading(false);
	};

	return (
		<div className="justify-center">
			<div className="justify-center transparent z-10 mt-5">
				{loading && <LoadingSpinner />}
			</div>
			<div
				className={`${
					loading ? "bg-gray20 opacity-40 backdrop-blur-2xl transparent" : ""
				}`}
			>
				<div className="m-0 p-0">
					<div className="w-full min-h-[80vh] flex flex-col justify-center items-center">
						<div className="my-10 text-green-600 text-2xl mx-auto flex flex-col justify-center items-center">
							<img src="/images/success.png" alt="" width={220} height={220} />
							<h3 className="text-4xl pt-20 lg:pt-0 font-bold text-center text-slate-700">
								Confirm Payment
							</h3>
							<button
								onClick={() => handlePaymentSuccess()}
								className="w-40 uppercase bg-brand text-white10 text-xl my-16 px-2 py-2 rounded"
							>
								Proceed
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentSuccess;
