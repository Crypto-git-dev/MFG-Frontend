import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <img src="images/group2.svg" alt="MFG Logo" className="h-8" /> {/* Adjust the path and size as needed */}
          <span className="text-lg font-semibold">MFG</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-full border-[#002E5D] border-1">Home</a>
          <a href="#" className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-full border-[#D8D8D8] border-1">About Us</a>
          <a href="#" className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-full border-[#D8D8D8]">News</a>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
          Join Team
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
