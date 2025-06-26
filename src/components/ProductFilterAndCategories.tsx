import React from 'react';

interface CategoryCardProps {
    title: string;
    imageSrc: string;
    subCategories: string[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imageSrc, subCategories }) => (
    <div className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-start text-left relative overflow-hidden group"> 
        <div
            className="absolute bottom-0 right-0 w-1/4 h-1/2 opacity-50 z-0" 
            style={{
                backgroundImage: 'radial-gradient(rgba(0,0,0,0.2) 1px, transparent 2px)', 
                backgroundSize: '15px 15px', 
            }}
        ></div>

        <h3 className="text-xl font-bold text-blue-900 mb-4 relative z-10">{title}</h3>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-6">
            <img
                src={imageSrc}
                alt={title}
                className="w-40 h-40 object-contain relative z-10"
            />
        </div>

        <ul className="text-gray-600 space-y-2 mb-6 relative z-10 ml-0">
            {subCategories.map((item, index) => (
                <li key={index} className="text-sm flex items-center">
          
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    {item}
                </li>
            ))}
        </ul>

        <button className="bg-blue-900 text-white py-2 px-6 rounded-full flex items-center hover:bg-blue-700 transition duration-300 relative z-10">
            View all
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
    </div>
);

const ProductFilterAndCategories: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">

                <div className="flex flex-wrap justify-center items-center gap-4 mb-12 bg-white p-6 rounded-lg shadow-sm">

                    <div className="relative">
                        <select className="border border-gray-300 rounded-full py-2 pl-4 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Select a product</option>
                        </select>
                    
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                   
                    <div className="relative"> 
                        <select className="border border-gray-300 rounded-full py-2 pl-4 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Category</option>
                        </select>
                       
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                   
                    <div className="relative"> 
                        <select className="border border-gray-300 rounded-full py-2 pl-4 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Brand</option>
                        </select>
                        
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    <span className="text-gray-500 font-semibold">OR</span>
                    <input
                        type="text"
                        placeholder="Enter SKU"
                        className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-900 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                        Shop now
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <CategoryCard
                        title="Vitamins"
                        imageSrc="src/assets/Vit.png"
                        subCategories={["Analgesics", "Antimalarial Drugs", "Antipyretics", "Antibiotics"]}
                    />
                    <CategoryCard
                        title="Baby Accessories"
                        imageSrc="src/assets/Moc.png"
                        subCategories={["Meal Replacements", "Protein powder", "Muscle building", "Low Calorie Snacks"]}
                    />
                    <CategoryCard
                        title="Herbs"
                        imageSrc="src/assets/aloe.png"
                        subCategories={["Gluten Free", "Sun Care", "Sugar Free", "Super foods"]}
                    />
                </div>
            </div>
        </section>
    );
};


export default ProductFilterAndCategories;