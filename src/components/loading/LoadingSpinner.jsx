
const LoadingSpinner = () => {
	return (
		<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
			<img src="/images/loader.gif" className="w-40 h-full" alt=""/>
		</div>
	);
};

export default LoadingSpinner;
