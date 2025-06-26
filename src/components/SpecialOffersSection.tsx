import React from 'react';

interface SpecialOffer {
  fromPrice: string;
  title: string;
  description: string;
  imageUrl: string;
  textColor: string;
  buttonColor: string; 
}

interface SpecialOffersSectionProps {
  offers: SpecialOffer[];
}

const SpecialOffersSection: React.FC<SpecialOffersSectionProps> = ({ offers }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Special offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative rounded-lg shadow-sm overflow-hidden h-[300px] group"
            >
            
              <div className="absolute inset-0">
                <img
                  src={offer.imageUrl}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              <div className="relative h-full flex flex-col justify-center p-8 z-10">
                <p className={`${offer.textColor} text-sm font-semibold mb-2`}>{offer.fromPrice}</p>
                <h3 className={`${offer.textColor} text-2xl font-bold mb-3 leading-tight`}>{offer.title}</h3>
                <p className={`${offer.textColor} text-base mb-6`}>{offer.description}</p>
                <button className={`${offer.buttonColor} text-white py-2 px-8 rounded-full hover:opacity-90 transition duration-300 flex items-center w-fit`}>
                  Show now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;