import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-100 to-blue-200 py-16 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,192L48,170.7C96,149,192,107,288,112C384,117,480,171,576,192C672,213,768,203,864,186.7C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between ml-20px">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/4 mb-8 md:mb-0 ml-60">
          <p className="text-blue-800 text-lg mb-2">Pyridoxine Vitamin B6</p>
          <h1 className="text-5xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-6">
            Vitamins & Supplements
          </h1>
          <button className="bg-white text-blue-800 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            Buy it now
          </button>
        </div>

        {/* Right Product Images */}
        <div className="relative md:w-1/2 flex justify-center items-center">
          <img
            src="src\assets\g11.png"
            alt="Glass Bottle 1"
            className="w-48 md:w-64 transform rotate-6 hover:rotate-0 transition-transform duration-500 z-10"
          />
          <div className="absolute bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20" style={{ top: '50%', left: '50%' }}>
            SAVE 65% OFF
          </div>
    
          <img
            src="src\assets\g12.png"
            alt="Glass Bottle 2"
            className="w-48 md:w-64 transform -rotate-6 hover:rotate-0 transition-transform duration-500 ml-8 z-10"
          />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <span className="h-2 w-2 bg-blue-800 rounded-full"></span>
        <span className="h-2 w-2 bg-blue-300 rounded-full"></span>
        <span className="h-2 w-2 bg-blue-300 rounded-full"></span>
      </div>
    </section>
  );
};

export default HeroSection;
