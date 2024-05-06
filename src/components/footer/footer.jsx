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
		<div class="flex bg-blue-900 text-white py-12">
			<div class="grid w-full">
				<div class="flex items-center justify-center gap-10 px-20 py-5 bg-[#F7C926]">
					<div class="text-5xl font-bold mb-4">
						JOIN THE DISCUSSION WITH OUR TEAM
					</div>
					<div class="bg-[#F7C926] font-bold py-4 px-4 rounded-full border-black border">
						<img src="images/Gotocontact.svg"></img>
					</div>
					<div class="w-1/6"></div>
				</div>
				<div class="bg-[#002E5D] text-right px-20 grid py-10">
					<div class="flex gap-5 justify-between items-center">
						<div class="flex items-center">
							<img src="images/group2.svg" alt="MFG Logo" class="h-8" />{" "}
							{/* Adjust the path and size as needed */}
							<div class="flex flex-col py-3 text-white10">
								<div class="text-lg">MFG</div>
								<span class="text-xs">Myth Financial Group</span>
							</div>
						</div>
						<div class="text-white10">
							500 Terry Francine Street, San Francisco, CA 94158
						</div>
						<div class="flex gap-2">
							<a
								href="#"
								class="bg-gray-700 px-5 py-2 rounded-full text-white10 text-3xl border-[#ffffff] border"
							>
								<i class="fa fa-facebook">f</i>
							</a>
							<a
								href="#"
								class="bg-gray-700 px-5 py-2 rounded-full text-white10 text-3xl border-[#ffffff] border"
							>
								<i class="fa fa-xing">x</i>
							</a>
							<a
								href="#"
								class="bg-gray-700 px-5 py-2 rounded-full text-white10 text-3xl border-[#ffffff] border"
							>
								<i class="fa fa-linkedin">in</i>
							</a>
						</div>
					</div>
					<div class="flex items-center border-y-2 border-[#204871] py-5 justify-between">
						<div class="text-grey10 text-xs w-1/3 text-left">
							At Myth Financial Group, we believe in fearless investments in the
							future of families. We specialize in providing life insurance
							coverage in over 5 industries, including healthcare, education,
							and technology. Our team of experts is dedicated to providing you
							with the best life insurance solutions that are tailored to your
							specific needs and requirements.
						</div>
						<div class="bg-[#F7C926] font-bold py-4 px-4 rounded-full border-black border">
							<img src="images/DownArrow.svg"></img>
						</div>
					</div>
					<div class="flex text-white10 justify-between text-xs py-5">
						<div>© 2024 by Roland VC. Powered and secured by Wix</div>
						<div>info@mysite.com</div>
						<div>123-456-7890</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
