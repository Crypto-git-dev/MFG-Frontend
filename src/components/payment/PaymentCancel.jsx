import React from "react";


const PaymentCancel = () => {
	return (
		<>
			<div className="m-0 p-0 bg-brand min-h-screen">
				<div className="w-full min-h-[80vh] flex flex-col justify-center items-center">
					<div className="my-10 text-red-600 text-2xl mx-auto flex flex-col justify-center items-center">
						<img
							src="/images/cancel.png"
							alt="cancel"
							width={220}
							height={220}
							className="mix-blend-multiply"
						/>
						<h3 className="text-4xl pt-20 font-bold text-center text-slate-700">
							Something Went Wrong
						</h3>
						<a
							href="/"
							className="w-auto uppercase bg-slate-900 text-white text-xl my-16 px-8 py-3 rounded"
						>
							Go To Homepage
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default PaymentCancel;
