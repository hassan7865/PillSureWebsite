// src/pages/Home.tsx
import React from 'react';
import Navbar from '../components/navbar';
import HeroSection from '../components/HeroSection';
import ProductFilterAndCategories from '../components/ProductFilterAndCategories';
import ProductGridSection from '../components/ProductGridSection';
import InstagramFeed from '../components/InstagramFeed';
import Footer from '../components/Footer';
import MoreToLoveGrid from '../components/MoreToLoveGrid';
import DealOfTheWeekSection from '../components/DealOfTheWeekSection'; 
import SpecialOffersSection from '../components/SpecialOffersSection'; 
import ProductCard from '../components/ProductCard';

interface Product {
  imageUrl: string;
  category?: string;
  name: string;
  originalPrice?: number;
  currentPrice: number;
  onSale?: boolean;
}

interface DealProduct {
  imageUrl: string;
  name: string;
  priceRange: string;
  features: string[];
  onSale?: boolean;
}

interface SpecialOffer {
  fromPrice: string;
  title: string;
  description: string;
  imageUrl: string;
  imagePosition: 'left' | 'right';
  bgColor: string;
  textColor: string;
  buttonColor: string;
}

const Home: React.FC = () => {
  // Dummy data for "Best Selling Products"
  const bestSellingProducts: Product[] = [
    {
      imageUrl: 'src/assets/Med.png',
      category: 'Protein',
      name: 'Nutren Diabetes Vanilla',
      currentPrice: 34.50,
    },
    {
      imageUrl: 'src/assets/cos.png',
      category: 'Herbs',
      name: 'Henry Blooms One Night',
      originalPrice: 44.00,
      currentPrice: 39.00,
      onSale: true,
    },
    {
      imageUrl: 'src/assets/pills.png',
      category: 'Pets',
      name: 'Spring Leaf Kids Fish Oil 750mg',
      currentPrice: 24.95,
    },
    {
      imageUrl: 'src/assets/Bonas.webp',
      category: 'Pets',
      name: 'Nordic Naturals Arctic-D Cod',
      originalPrice: 42.95,
      currentPrice: 37.45,
      onSale: true,
    },
    {
      imageUrl: 'src/assets/revi.png',
      category: 'Beauty',
      name: 'Nair Precision Facial Hair',
      currentPrice: 5.50,
      originalPrice: 4.40,
      onSale: true,
    },
  ];

  // Dummy data for "New Products"
  const newProducts: Product[] = [
    {
      imageUrl: 'src/assets/p1.png',
      category: 'Vitamins',
      name: 'Buscopan Forte Tab 20mg X 10',
      currentPrice: 8.95,
    },
    {
      imageUrl: 'src/assets/Med.png',
      category: 'Protein',
      name: 'Nutren Diabetes Vanilla',
      currentPrice: 34.50,
    },
    {
      imageUrl: 'src/assets/p2.png',
      category: 'Protein',
      name: 'FatBlaster Keto-Fit Whey Protein',
      currentPrice: 25.95,
    },
    {
      imageUrl: 'src/assets/p3.png',
      category: 'Sports Nutrition',
      name: 'Nature\'s Way Instant Natural',
      originalPrice: 18.50,
      currentPrice: 11.15,
      onSale: true,
    },
    {
      imageUrl: 'src/assets/p9.png',
      category: 'Sports Nutrition',
      name: 'Musashi Intra Workout',
      currentPrice: 39.95,
    },
    {
      imageUrl: 'src/assets/p4.png',
      category: 'Vitamins',
      name: 'Gastro Soothe Tab 10mg X 20',
      currentPrice: 5.95,
    },
    {
      imageUrl: 'src/assets/p5.png',
      category: 'Protein',
      name: 'Tropeaka Lean Protein Salted',
      originalPrice: 41.95,
      currentPrice: 34.15,
      onSale: true,
    },
    {
      imageUrl: 'src/assets/p6.png',
      category: 'Supplements',
      name: 'Protein Supplies Australia',
      originalPrice: 35.95,
      currentPrice: 24.18,
      onSale: true,
    },
    {
      imageUrl: 'src/assets/p7.png',
      category: 'Sports Nutrition',
      name: 'Vital Protein Strawberry',
      originalPrice: 45.95,
      currentPrice: 40.01,
      onSale: true,
    },
    {
      imageUrl: 'src/assets/p8.png',
      category: 'Sports Nutrition',
      name: 'Musashi 100% Whey Vanilla',
      originalPrice: 45.95,
      currentPrice: 40.15,
      onSale: true,
    },
  ];

  // Dummy data for "More to Love"
  const moreToLoveProducts: Product[] = [
    {
      imageUrl: 'src/assets/cos.png',
      name: 'Henry Blooms One Night Collagen',
      originalPrice: 44.00,
      currentPrice: 39.00,
    },
    {
      imageUrl: 'src/assets/m3.png',
      name: 'Nair Precision Facial Hair Removal',
      originalPrice: 5.50,
      currentPrice: 4.40,
    },
    {
      imageUrl: 'src/assets/p8.png',
      name: 'Musashi 100% Whey Vanilla',
      originalPrice: 45.95,
      currentPrice: 40.15,
    },
    {
      imageUrl: 'src/assets/m1.png',
      name: 'Spring Leaf Kids Fish Oil 750mg',
      currentPrice: 24.95,
    },
    {
      imageUrl: 'src/assets/m4.png',
      name: 'Pain Away Forte + Arthritis Cream',
      originalPrice: 22.95,
      currentPrice: 20.95,
    },
    {
      imageUrl: 'src/assets/m6.png',
      name: 'Nature\'s Goodness Manuka Honey',
      currentPrice: 36.95,
    },
    {
      imageUrl: 'src/assets/m2.png',
      name: 'Nordic Naturals Arctic-D Cod Liver Oil',
      originalPrice: 42.95,
      currentPrice: 37.45,
    },
    {
      imageUrl: 'src/assets/m5.png',
      name: 'More like this Martin & Pleasance',
      currentPrice: 6.95,
    },
    {
      imageUrl: 'src/assets/m7.png',
      name: 'Nuzest Clean Lean Protein Smooth',
      originalPrice: 39.95,
      currentPrice: 30.15,
    },
  ];

  // Dummy data for "Deal Of The Week"
  const dealOfTheWeekProducts: DealProduct[] = [
    {
      imageUrl: 'src/assets/wf.png',
      name: 'Vitamin C 500mg Sugarless', 
      priceRange: '$16.00 - $35.00', 
      features: ['3 cleaning programs', 'Digital display', 'Memory for 1 user'], 
      onSale: true, 
    },
    {
      imageUrl: 'src/assets/wf2.png',
      name: 'Insulin Lispro Kwikpen', 
      priceRange: '$18.88 - $32.88', 
      features: ['3 cleaning programs', 'Digital display', 'Memory for 1 user'], 
      onSale: false,
    },
  ];

  // Dummy data for "Special Offers"
  const specialOffers: SpecialOffer[] = [
    {
      fromPrice: 'From $0.99',
      title: 'Breathable Face Mask',
      description: 'Get it now 45% Off', 
      imageUrl: 'src/assets/sf.avif', 
      imagePosition: 'right', 
      bgColor: 'bg-gray-200', 
      textColor: 'text-blue-900',
      buttonColor: 'bg-blue-900', 
    },
    {
      fromPrice: 'From $9.99', 
      title: 'Covid 19 pack', 
      description: 'Get it now 45% Off', 
      imageUrl: 'src/assets/sf2.jpg', 
      imagePosition: 'left', 
      bgColor: 'bg-blue-100', 
      textColor: 'text-blue-900', 
      buttonColor: 'bg-blue-900', 
    },
  ];

  return (
    <div className="font-sans antialiased">
      <Navbar />
      <HeroSection />
      <ProductFilterAndCategories />
      
      {/* New sections added here */}
      <DealOfTheWeekSection products={dealOfTheWeekProducts} />
      <SpecialOffersSection offers={specialOffers} />

      <ProductGridSection title="Best Selling Products" products={bestSellingProducts} />
      <ProductGridSection title="New Products" products={newProducts} />
      <ProductCard />
      <MoreToLoveGrid products={moreToLoveProducts} />
      <InstagramFeed />
      <Footer />
    </div>
  );
};

export default Home;