import React from 'react';

const ProductCard: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-100 to-blue-200 py-16 overflow-visible" > 
      <div className="absolute inset-0 z-0 opacity-30 w-[100%] mx-auto left-0 right-0"> 
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,192L48,170.7C96,149,192,107,288,112C384,117,480,171,576,192C672,213,768,203,864,186.7C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      {/* Main content */}
      <div className="container max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between h-[90px]"> 
        
        {/* Left Section */}
        <div className="relative md:w-1/3 flex justify-center items-center py-10 -mt-16"> 
          <img
            src="src/assets/h1.png"
            alt="Amber Dispenser Bottle With Pump"
            className="w-48 md:w-64 object-contain z-10 mr-[-90px]"
          />
          <img
            src="src/assets/h2.png"
            alt="Amber Glass Dropper Bottle"
            className="w-40 md:w-56 object-contain z-10 -ml-8 translate-y-8 ml-[-90px]"
          />
        </div>

        {/* Center Section */}
        <div className="text-center md:w-1/4 mb-8 md:mb-0">
          <p className="text-blue-700 text-lg mb-2">Pyridoxine Vitamin B6</p>
          <h1 className="text-2xl md:text-2xl font-extrabold text-blue-900 leading-tight mb-6">
            Vitamins & Supplements
          </h1>
          <button className="bg-blue-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
            View more
          </button>
        </div>

        {/* Right Section*/}
        <div className="relative md:w-1/3 flex justify-center items-center py-10">
          <img
            src="src/assets/h3.png"
            alt="Pill Box Mockup"
            className="w-56 md:w-72 object-contain z-10 mr-[-40px]"
          />
          <img
            src="src/assets/h4.png"
            alt="Blister Pack"
            className="w-40 md:w-56 object-contain z-10 -ml-8 -translate-y-4 ml-[-40px]"
          />
        </div>
      </div>

      {/* Carousel Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <span className="h-2 w-2 bg-blue-800 rounded-full"></span>
        <span className="h-2 w-2 bg-blue-300 rounded-full"></span>
        <span className="h-2 w-2 bg-blue-300 rounded-full"></span>
      </div>
    </section>
  );
};

export default ProductCard;