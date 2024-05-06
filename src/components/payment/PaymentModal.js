// import { Elements } from "@stripe/react-stripe-js";
// import React from "react";
// import PaymentForm from "./PaymentForm";

// const PaymentModal = ({
// 	modalPosition,
// 	isModalOpen,
// 	closeModal,
// 	data,
// 	stripePromise,
// }) => {
// 	return (
// 		<div className="relative lg:w-full">
// 			{isModalOpen && stripePromise && (
// 				<div
// 					className="absolute -top-72 lg:right-28 right-0 flex items-center shadow-2xl justify-center bg-gray20"
// 					onClick={closeModal}
// 				>
// 					<div
// 						className="shadow-lg p-6 z-40 backdrop-blur-sm"
// 						style={{
// 							top: modalPosition.top,
// 							left: modalPosition.left,
// 							zIndex: 100,
// 							background: "transparent",
// 						}}
// 						onClick={(e) => e.stopPropagation()}
// 					>
// 						<div className="flex items-center justify-end mb-2">
// 							<svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								className="w-6 h-6 cursor-pointer"
// 								fill="none"
// 								viewBox="0 0 24 24"
// 								stroke="currentColor"
// 								onClick={closeModal}
// 							>
// 								<path
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 									strokeWidth={2}
// 									d="M6 18L18 6M6 6l12 12"
// 								/>
// 							</svg>
// 						</div>
// 						<div className="w-full">
// 							<Elements stripe={stripePromise}>
// 								<PaymentForm data={data} closeModal={closeModal} />
// 							</Elements>
// 						</div>
// 					</div>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default PaymentModal;
