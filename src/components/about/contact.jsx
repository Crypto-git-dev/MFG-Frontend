import React from "react";

const Contact = (props) => {
	return (
		<div className="flex flex-col py-20 bg-[#F9F9F9] -mx-32 md:-mx-96 gap-20">
			<div className="grid grid-cols-2 px-32 md:px-96">
				<div className="flex flex-col gap-4">
					<p className="text-lg text-gray-700">Contact us</p>
					<h1 className="text-5xl text-black font-semibold">
						CHAT TO OUR
						<br />
						FRIENDLY TEAM
					</h1>
					<p className="text-1xl text-gray-700">
						We'd love to hear from you! Please get in touch.
					</p>
				</div>
				<div className="grid grid-rows-2 items-center">
					<div className="flex flex-row gap-4">
						<div>
							<img src="images/phone.svg" className="w-8"></img>
						</div>
						<div className="flex flex-col gap-4 py-1">
							<p className="text-xl text-black font-semibold">Phone</p>
							<h1 className="text-xl text-gray-700">
								098-765-4321 | 123-456-7890
							</h1>
						</div>
					</div>
					<div className="flex flex-row gap-4">
						<div>
							<img src="images/email.svg" className="w-8"></img>
						</div>
						<div className="flex flex-col gap-4 py-1">
							<p className="text-xl text-black font-semibold">E-mail</p>
							<h1 className="text-xl text-gray-700">
								info@mythfinancial.com | support@mythfinancial.com
							</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="px-32 md:px-96">
				<img src="images/contact.jpg"></img>
			</div>
		</div>
	);
};

export default Contact;
