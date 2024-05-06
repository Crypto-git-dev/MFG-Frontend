import React from 'react';

const HeroSection = () => {
  return (
    <div className="text-center bg-white py-16">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">WELCOME TO MYTH FINANCIAL GROUP</h1>
      <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l-3.75-3.75m3.75 3.75L15.75 16.5" />
        </svg>
      </button>
      <div className="mt-16">
        <img src="/path-to-your-image.jpg" alt="Handshake" className="mx-auto" style={{ maxWidth: '80%', height: 'auto' }} />
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">ABOUT MYTH FINANCIAL GROUP</h2>
        <p className="text-gray-600 text-lg">
          At Myth Financial Group, we believe in fearless investments in the future of families. We specialize in providing life insurance coverage in over 5 industries, including healthcare, education, and technology. Our team of experts is dedicated to providing you with the best life insurance solutions that are tailored to your specific needs and requirements.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
