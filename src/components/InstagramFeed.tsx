import React from 'react';

const InstagramFeed: React.FC = () => {
  const instagramImages = [
    'src/assets/d1.jpg',
    'src/assets/d2.jpg',
    'src/assets/d3.jpg',
    'src/assets/d4.jpg',
    'src/assets/d5.jpg',
    'src/assets/d6.jpg',
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
          Follow us on Instagram <span className="text-blue-500">@pillSure_87</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {instagramImages.map((src, index) => (
            <div 
              key={index}
              className="relative h-64 w-full" 
            >
              <img
                src={src}
                alt={`Instagram post ${index + 1}`}
                className="absolute h-full w-full object-contain p-1 bg-white transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;