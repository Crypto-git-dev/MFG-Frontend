import React from 'react'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const TermsOfUse = () => {
  return (
		<div>
			<div className="px-8 md:px-28  py-8">
				<Header />

				<main className="md:px-24 mt-8">
					<div className="md:px-24 mx-auto pb-8 px-4 sm:px-6 lg:px-8">
						<div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
							<h2 className="text-2xl font-extrabold text-gray-900">
								Terms of Service
							</h2>
						</div>

						<div className="mt-6 bg-white rounded-lg  shadow-lg px-2 py-2 sm:px-6">
							<div className="container mx-auto p-8">
								<p>
									Please read these terms of service ("terms of service",
									"terms") carefully before using [website] website (“website”,
									"service") operated by [name] ("us", 'we", "our").
								</p>

								<h2 className="text-2xl font-bold my-4">Conditions of Use</h2>
								<p>
									By using this website, you certify that you have read and
									reviewed this Agreement and that you agree to comply with its
									terms. If you do not want to be bound by the terms of this
									Agreement, you are advised to leave the website accordingly.
									[name] only grants use and access to this website, its
									products, and its services to those who have accepted its
									terms.
								</p>

								<h2 className="text-2xl font-bold my-4">Privacy Policy</h2>
								<p>
									Before you continue using our website, we advise you to read
									our <a href="[link to privacy policy]">privacy policy</a>{" "}
									regarding our user data collection. It will help you better
									understand our practices.
								</p>

								<h2 className="text-2xl font-bold my-4">Age Restriction</h2>
								<p>
									You must be at least 18 (eighteen) years of age before you can
									use this website. By using this website, you warrant that you
									are at least 18 years of age and you may legally adhere to
									this Agreement. [name] assumes no responsibility for
									liabilities related to age misrepresentation.
								</p>

								<h2 className="text-2xl font-bold my-4">Intellectual Property</h2>
								<p>
									You agree that all materials, products, and services provided
									on this website are the property of [name], its affiliates,
									directors, officers, employees, agents, suppliers, or
									licensors including all copyrights, trade secrets, trademarks,
									patents, and other intellectual property. You also agree that
									you will not reproduce or redistribute the [name]’s
									intellectual property in any way, including electronic,
									digital, or new trademark registrations.
								</p>
								<p>
									You grant [name] a royalty-free and non-exclusive license to
									display, use, copy, transmit, and broadcast the content you
									upload and publish. For issues regarding intellectual property
									claims, you should contact the company to come to an
									agreement.
								</p>

								<h2 className="text-2xl font-bold my-4">User Accounts</h2>
								<p>
									As a user of this website, you may be asked to register with
									us and provide private information. You are responsible for
									ensuring the accuracy of this information, and you are
									responsible for maintaining the safety and security of your
									identifying information. You are also responsible for all
									activities that occur under your account or password.
								</p>
								<p>
									If you think there are any possible issues regarding the
									security of your account on the website, inform us immediately
									so we may address it accordingly. We reserve all rights to
									terminate accounts, edit or remove content and cancel orders
									in their sole discretion.
								</p>

								<h2 className="text-2xl font-bold my-4">Applicable Law</h2>
								<p>
									By visiting this website, you agree that the laws of the
									[location], without regard to principles of conflict laws,
									will govern these terms and conditions, or any dispute of any
									sort that might come between [name] and you, or its business
									partners and associates.
								</p>

								<h2 className="text-2xl font-bold my-4">Disputes</h2>
								<p>
									Any dispute related in any way to your visit to this website
									or to products you purchase from us shall be arbitrated by
									state or federal court [location] and you consent to the
									exclusive jurisdiction and venue of such courts.
								</p>

								<h2 className="text-2xl font-bold my-4">Indemnification</h2>
								<p>
									You agree to indemnify [name] and its affiliates and hold
									[name] harmless against legal claims and demands that may
									arise from your use or misuse of our services. We reserve the
									right to select our own legal counsel.
								</p>

								<h2 className="text-2xl font-bold my-4">Limitation on Liability</h2>
								<p>
									[name] is not liable for any damages that may occur to you as
									a result of your misuse of our website.
								</p>

								<p>
									[name] reserves the right to edit, modify, and change this
									Agreement any time. We shall let our users know of these
									changes through electronic mail. This Agreement is an
									understanding between [name] and the user, and this supersedes
									and replaces all prior agreements regarding the use of this
									website.
								</p>

								<p className="mt-8">
									Save your time and take the guesswork out of the legal jargon
									with our smart generators trusted by thousands. Create
									bulletproof terms of service personalized to your needs in
									minutes.
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
}

export default TermsOfUse