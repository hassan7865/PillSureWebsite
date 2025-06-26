import React from 'react';

interface Product {
  imageUrl: string;
  category?: string;
  name: string;
  originalPrice?: number;
  currentPrice: number;
  onSale?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { imageUrl, category, name, originalPrice, currentPrice, onSale } = product;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      {onSale && (
        <span className="absolute top-3 left-3 bg-blue-800 text-white text-xs font-semibold px-2 py-1 rounded z-10"> 
          Sale
        </span>
      )}

      <div className="bg-gray-100 p-4 flex justify-center items-center"> 
        <img src={imageUrl} alt={name} className="w-36 h-36 object-contain" /> 
      </div>

      {/* Product Details*/}
      <div className="p-4 flex flex-col items-start">
        {category && <p className="text-gray-500 text-sm mb-1">{category}</p>}
        <h4 className="text-md font-semibold text-blue-900 text-left mb-2">{name}</h4> 
        <div className="flex items-baseline mb-4">
          {originalPrice && (
            <span className="text-gray-400 line-through mr-2">${originalPrice.toFixed(2)}</span>
          )}
          <span className="text-blue-800 font-bold text-lg">${currentPrice.toFixed(2)}</span>
        </div>
        <button className="bg-gray-100 text-blue-800 py-2 px-4 rounded-full flex items-center justify-center hover:bg-gray-200 transition duration-300 w-full"> 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.769.746 1.769H17a2 2 0 002-2V4a2 2 0 00-2-2H5.4M7 13l-2.293 2.293" />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
};

// ProductGridSection
interface ProductGridSectionProps {
  title: string;
  products: Product[];
}

const ProductGridSection: React.FC<ProductGridSectionProps> = ({ title, products }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGridSection;