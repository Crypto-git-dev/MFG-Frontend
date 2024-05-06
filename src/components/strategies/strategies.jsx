import { Link } from "react-router-dom";

const Strategies = () => {
	return (
		<div className="grid grid-cols-12 gap-4 mt-12  px-3 w-full rounded-lg p-1 bg-gray20 md:p-4">
			<div className="col-span-12 md:col-span-6 flex flex-col items-center justify-center md:items-start md:justify-start">
				<div className="font-bold text-2xl md:text-3xl lg:text-4xl text-center md:text-left text-gray-800 leading-tight">
					Elevate Your <br />
					<span className="logo-brand text-blue-500">Strategies,</span> Decode
					your Metrics
				</div>
				<div className="font-bold  text-center mb-16 text-1xl md:text-5xl mt-4 md:mt-8 text-lg md:text-xl text-center md:text-left">
					Gain actionable insights and optimize your marketing performance with
					our intuitive analytics platform. Join us and revolutionize your
					approach to success.
				</div>
				<Link to="signup">
					<div className="bg-blue text-white10 h-fit w-fit text-center rounded px-5 py-2 rounded-md mt-8">
						Get Started for Free
					</div>
				</Link>
			</div>
			<div className="col-span-12 md:col-span-6 flex items-center justify-center">
				<img
					src="/images/strategies.png"
					className="max-w-full h-auto rounded-lg"
					alt="strategies"
				/>
			</div>
		</div>
	);
};

export default Strategies;
