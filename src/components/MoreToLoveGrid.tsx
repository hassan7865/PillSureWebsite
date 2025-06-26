import React from 'react';

interface Product {
  imageUrl: string;
  category?: string;
  name: string;
  originalPrice?: number;
  currentPrice: number;
  onSale?: boolean;
}

interface MoreToLoveGridProps {
  products: Product[];
}

const MoreToLoveGrid: React.FC<MoreToLoveGridProps> = ({ products }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">More to love</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-md"> 
            
              <div className="bg-gray-100 p-2 rounded-md mr-4 flex-shrink-0">
                <img src={product.imageUrl} alt={product.name} className="w-20 h-20 object-contain" />
              </div>
              
              {/* Product details */}
              <div>
                <h4 className="font-semibold text-blue-900 leading-tight mb-1">{product.name}</h4>
                <div className="flex items-baseline">
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through mr-2">${product.originalPrice.toFixed(2)}</span>
                  )}
                  <span className="text-blue-800 font-bold">${product.currentPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreToLoveGrid;