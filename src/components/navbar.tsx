import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">

          <img src="src\assets\Pilllogo.png" alt="Pill Sure Logo" className="h-8" />
          <span className="text-lg md:text-2xl font-bold text-blue-900 leading-tight">Pill Sure</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-blue-900 font-medium">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">Shop by Brand</a>
          <a href="#" className="hover:text-blue-500">Shop by Category</a>
          <a href="#" className="hover:text-blue-500">Blog</a>
          <a href="#" className="hover:text-blue-500">Shop</a>
          <a href="#" className="hover:text-blue-500">Elements</a>
          <a href="#" className="hover:text-blue-500">Features</a>
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-6 text-gray-600 text-xl">
          <button className="hover:text-blue-500" aria-label="Compare or Reload">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.836 10.73a20.088 20.088 0 00-2.542-4.74M4 13v3m7-6h.01M16 16v-4m-7-6h.01M4 18l3-2.5M16 18l3-2.5" />
            </svg> 
          </button>
          <button className="hover:text-blue-500" aria-label="Wishlist">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg> 
          </button>
          <button className="relative hover:text-blue-500" aria-label="Shopping Cart">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.769.746 1.769H17a2 2 0 002-2V4a2 2 0 00-2-2H5.4M7 13l-2.293 2.293" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span> 
          </button>
        </div>

        <div className="md:hidden">
          <button className="text-gray-600 hover:text-blue-500" aria-label="Open mobile menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;