import {
	faFacebookF,
	faGithub,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="bg-blue">
			<div className="pt-20 pb-14">
				<div className="grid grid-cols-12">
					<div className="col-span-12 mb-8 md:mb-0  md:col-span-5 flex justify-center  ">
						<img
							src="/images/logo.png"
							onClick={() => (window.location.href = "/")}
							className="md:w-1/3 xl:w-1/4 p-3 text-white10 cursor-pointer"
							alt="no-logo"
						/>
					</div>
					<div className="col-span-12 px-12 md:p-0 sm:col-span-6 md:col-span-3  text-white10 font-medium items-center flex justify-between">
						<div>Product</div>
						<div
							className="cursor-pointer"
							onClick={() => (window.location.href = "/#pricing-section")}
						>
							Pricing
						</div>
						<div>
							<Link to="/contact">Contact Us</Link>
						</div>
					</div>
					<div className="col-span-12 mt-8 md:mt-0 md:col-span-4  items-center text-2xl  gap-8 flex justify-center">
						<FontAwesomeIcon
							color="white"
							icon={faTwitter}
							onClick={() => {
								window.open("https://twitter.com/", "_blank");
							}}
							className="cursor-pointer"
						/>
						<FontAwesomeIcon
							color="white"
							icon={faFacebookF}
							className="cursor-pointer"
							onClick={() => {
								window.open("https://meta.com/", "_blank");
							}}
						/>
						<FontAwesomeIcon
							color="white"
							onClick={() => {
								window.open("https://instagram.com/", "_blank");
							}}
							icon={faInstagram}
							className="cursor-pointer"
						/>
						<FontAwesomeIcon
							color="white"
							icon={faGithub}
							onClick={() => {
								window.open("https://github.com/", "_blank");
							}}
							className="cursor-pointer"
						/>
					</div>
				</div>
			</div>
			{/*  */}
			<div className="grid pb-8 grid-cols-12">
				{/* <div className="col-span-6 px-4 md:px-0 md:col-span-5  text-white10 flex justify-center">
					<div className="flex flex-col text-center">
						MarketNyze:
						<div>7952 Nagle Avenue</div>
						<span>North Hollywood, CA 91605</span>
					</div>
				</div> */}
				<div className="col-span-6 px-4 md:px-0 md:col-span-3  text-white10 flex justify-end">
					<div className="flex flex-col">
						Email
						<div>info@marketnyze.com</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-4  ml-12 mt-6 md:m-0  flex md:justify-center">
					<div className="flex text-white10 flex-col">
						Phone:
						<div>(209)-123-4567</div>
					</div>
				</div>
			</div>
			<div className="border-b border-white10 pt-8 pb-4" />
			<div className="flex items-center justify-center ">
				<p className="text-white10 p-4">
					© COPYRIGHT 2023. ALL RIGHTS RESERVED
				</p>
			</div>
		</div>
	);
};

export default Footer;
