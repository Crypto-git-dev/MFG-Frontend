import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const PrivacyPolicy = () => {
	return (
		<div>
			<div className="px-8 md:px-28  py-8">
				<Header />

				<main className="md:px-24 mt-8">
					<div className="md:px-24 mx-auto pb-8 px-4 sm:px-6 lg:px-8">
						<div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
							<h2 className="text-2xl font-extrabold text-gray-900">
								Privacy Policy
							</h2>
						</div>

						<div className="mt-6 bg-white rounded-lg  shadow-lg px-2 py-2 sm:px-6">
							<div className="container mx-auto p-8">
								<p>
									This privacy policy ("policy") will help you understand how
									[company name] ("us", "we", "our") uses and protects the data
									you provide to us when you visit and use [blog URL] ("blog",
									"service").
								</p>

								<p>
									We reserve the right to change this policy at any given time,
									of which you will be promptly updated. If you want to make
									sure that you are up to date with the latest changes, we
									advise you to frequently visit this page.
								</p>

								<h2 className="text-2xl font-bold my-4">
									What User Data We Collect
								</h2>
								<ul className="list-disc ml-8">
									<li>Your IP address.</li>
									<li>Your contact information and email address.</li>
									<li>Other information such as interests and preferences.</li>
									<li>
										Data profile regarding your online behavior on our blog.
									</li>
								</ul>

								<h2 className="text-2xl font-bold my-4">
									Why We Collect Your Data
								</h2>
								<ul className="list-disc ml-8">
									<li>To better understand your needs.</li>
									<li>To improve our services and products.</li>
									<li>
										To send you promotional emails containing the information we
										think you will find interesting.
									</li>
									<li>
										To contact you to fill out surveys and participate in other
										types of market research.
									</li>
									<li>
										To customize our blog according to your online behavior and
										personal preferences.
									</li>
								</ul>

								<h2 className="text-2xl font-bold my-4">
									Safeguarding and Securing the Data
								</h2>
								<p>
									[company name] is committed to securing your data and keeping
									it confidential. [company name] has done all in its power to
									prevent data theft, unauthorized access, and disclosure by
									implementing the latest technologies and software, which help
									us safeguard all the information we collect online.
								</p>

								<h2 className="text-2xl font-bold my-4">Our Cookie Policy</h2>
								<p>
									Once you agree to allow our blog to use cookies, you also
									agree to use the data it collects regarding your online
									behavior (analyze web traffic, web pages you visit and spend
									the most time on).
								</p>
								<p>
									The data we collect by using cookies is used to customize our
									blog to your needs. After we use the data for statistical
									analysis, the data is completely removed from our systems.
								</p>
								<p>
									Please note that cookies don't allow us to gain control of
									your computer in any way. They are strictly used to monitor
									which pages you find useful and which you do not so that we
									can provide a better experience for you.
								</p>
								<p>
									If you want to disable cookies, you can do it by accessing the
									settings of your internet browser.
								</p>

								<h2 className="text-2xl font-bold my-4">
									Links to Other Websites
								</h2>
								<p>
									Our blog contains links that lead to other websites. If you
									click on these links [company name] is not held responsible
									for your data and privacy protection. Visiting those websites
									is not governed by this privacy policy agreement. Make sure to
									read the privacy policy documentation of the website you go to
									from our website.
								</p>

								<h2 className="text-2xl font-bold my-4">
									Restricting the Collection of your Personal Data
								</h2>
								<p>
									At some point, you might wish to restrict the use and
									collection of your personal data. You can achieve this by
									doing the following:
								</p>
								<ul className="list-disc ml-8">
									<li>
										When you are filling the forms on the blog, make sure to
										check if there is a box which you can leave unchecked, if
										you don't want to disclose your personal information.
									</li>
									<li>
										If you have already agreed to share your information with
										us, feel free to contact us via email and we will be more
										than happy to change this for you.
									</li>
								</ul>

								<p>
									[company name] will not lease, sell or distribute your
									personal information to any third parties unless we have your
									permission. We might do so if the law forces us. Your personal
									information will be used when we need to send you promotional
									materials if you agree to this privacy policy.
								</p>

								<p className="mt-8">
									PRO TIP: Save your time and take the guesswork out of the
									legal jargon with the professional privacy policy generator
									trusted by thousands of businesses.
								</p>
							</div>
						</div>
					</div>
				</main>
			</div>
			<div className="">
				<Footer />
			</div>
		</div>
	);
};

export default PrivacyPolicy;
