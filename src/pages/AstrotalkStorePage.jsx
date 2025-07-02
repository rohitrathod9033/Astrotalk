import React, { useState, useEffect, useRef } from 'react';

// Reusable ProductCard component
const ProductCard = ({ image, title, description, badge, onClick }) => (
  <div
    className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105"
    onClick={onClick}
  >
    <img src={image} alt={title} className="w-full h-64 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      {description && <p className="text-sm text-gray-600">{description}</p>}
    </div>
    {badge && (
      <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold uppercase rounded ${
        badge.includes('ONLY') ? 'bg-red-500 text-white' :
        badge.includes('GET 2') ? 'bg-orange-500 text-white' :
        badge.includes('RECOMMENDED') ? 'bg-green-500 text-white' :
        badge.includes('STARTS') ? 'bg-yellow-500 text-black' :
        'bg-gray-700 text-white'
      }`}>
        {badge}
      </span>
    )}
  </div>
);

// Astrotalk Store Page Component (merged functionality)
const AstrotalkStorePage = () => {
  // Data for horizontal scrolling sections
  const topSellingItems = [
    {
      id: 1,
      name: 'Rose Quartz Bracelet With Buddha',
      image: 'https://d1gcna0o0ldu5v.cloudfront.net/fit-in/230x230/images/b09a4d2b-f8d2-461a-a33a-0242143df3af.jpg',
    },
    {
      id: 2,
      name: 'Money Magnet Bracelet',
      image: 'https://d1gcna0o0ldu5v.cloudfront.net/fit-in/230x230/images/05250857-c282-4f4f-9c96-19c5ab77d686.jpg',
    },
    {
      id: 3,
      name: 'Dhan Yog Bracelet',
      image: '	https://d1gcna0o0ldu5v.cloudfront.net/fit-in/230x230/images/465266b3-c830-41e3-95cb-edfcf992f16f.jpg',
    },
    {
      id: 4,
      name: 'Raw Pyrite Bracelet',
      image: '	https://d1gcna0o0ldu5v.cloudfront.net/fit-in/230x230/images/14ea1c68-3a2f-4be7-95da-f5565b36d52e.jpg',
    },
    {
      id: 5,
      name: 'Love & Money Attractor Bracelet',
      image: 'https://d1gcna0o0ldu5v.cloudfront.net/fit-in/230x230/images/c56898a6-8c2c-4681-88b6-899bf05de0fd.jpg',
    },
    {
      id: 6,
      name: 'Amethyst Bracelet',
      image: 'https://d1gcna0o0ldu5v.cloudfront.net/fit-in/230x230/images/63cfd78a-1c70-4e9a-b359-31b83b6c77f9.jpg',
    },
    {
      id: 7,
      name: 'Black Tourmaline Bracelet',
      image: '	https://d1gcna0o0ldu5v.cloudfront.net/fit-in/230x230/images/05250857-c282-4f4f-9c96-19c5ab77d686.jpg',
    },
  ];

  const newlyLaunchedItems = [
    {
      id: 1,
      name: 'Tiger Eye Heart Pendant',
      image: 'https://d1gcna0o0ldu5v.cloudfront.net/fit-in/230x230/images/5fbbb617-3d73-4ef1-97a3-b91a0854ddde.jpg',
    },
    {
      id: 2,
      name: 'Grahan Dosh Shanti Pooja',
      image: 'https://d1gcna0o0ldu5v.cloudfront.net/fit-in/230x230/images/0572ce13-35cf-4720-84b2-da70b28e0d47.jpg',
    },
    {
      id: 3,
      name: 'Guru Chandal Dosh Nivaran Pooja',
      image: '	https://d1gcna0o0ldu5v.cloudfront.net/fit-in/230x230/images/3de90d33-aacc-492e-9aca-9b4d2bafc44f.jpg',
    },
    {
      id: 4,
      name: 'Green Jade Tulsi Bracelet',
      image: 'https://d1gcna0o0ldu5v.cloudfront.net/fit-in/230x230/images/6421bb5d-a2b0-4c66-a3ce-743a3143fca0.jpg',
    },
    {
      id: 5,
      name: '7 Ratti American Diamond (Zircon)',
      image: 'https://d1gcna0o0ldu5v.cloudfront.net/fit-in/230x230/images/97c0c7be-cf10-437d-8d5c-8f9bd9b279e0.jpg',
    },
    {
      id: 6,
      name: 'Navratna Ring',
      image: 'https://d1gcna0o0ldu5v.cloudfront.net/fit-in/230x230/images/67db4d21-df83-49ce-b334-b21e7c9c4cfe.jpg',
    },
  ];

  // Data for the main product grid
  const mainProducts = [
    {
      image: "	https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/ef161f10-285d-401f-8690-14caec0633fa.jpg",
      title: "First Remedy @499/-",
      description: "Remedies are powerful spiritual solutions...",
      badge: "ONLY AT 499",
    },
    {
      image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/dee073e4-0b4e-4b1c-935f-e9015350f747.jpg",
      title: "Problem Solving Remedy Combos",
      description: "",
      badge: "GET 2 @ 1100",
    },
    {
      image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/cd98ed44-5818-42cf-a30e-e18835d271e4.jpg",
      title: "First Pooja @499/-",
      description: "Pooja is a sacred ritual that performed to...",
      badge: "ONLY AT 499",
    },
    {
      image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/cd98ed44-5818-42cf-a30e-e18835d271e4.jpg",
      title: "Bracelets & Pendants",
      description: "Astrotalk is engaged in offering a quality...",
      badge: "STARTS AT 499",
    },
    {
      image: "	https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/e23c1500-db2c-4b62-9f75-c83fa9e44a18.jpg",
      title: "Gemstone",
      description: "A confused person always looks for a solution either is...",
      badge: "STARTS AT 800/-",
    },
    {
      image: "	https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/98862192-33a0-4318-9a8a-24f41297a697.jpg",
      title: "VIP E-Pooja",
      description: "Almost everything runs on blessed today and in order t...",
      badge: "STARTS AT 999/-",
    },
    {
      image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/74692713-e3ff-46c3-9021-8e9712e7d431.jpg",
      title: "Japall",
      description: "Japall is the process of taking up nature's grace in the...",
      badge: "STARTS AT 1100",
    },
    {
      image: "	https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/ecc0a04d-678f-450b-9bd4-c1ab275c6cf1.jpg",
      title: "Evil Eye Removal (Skull House Mantra)",
      description: "When you look at someone with affection, every...",
      badge: "STARTS AT 999/-",
    },
    {
      image: "	https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/f66b0ae5-82fe-4fa6-b969-949b407aedd4.jpg",
      title: "Reiki Healing",
      description: "Reiki Healing is the process of healing through energ...",
      badge: "STARTS AT 999",
    },
    {
      image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/070d308a-4b8d-44dd-8fa6-d5e0cdd71e10.jpg",
      title: "Rahu-Ketu Transit Remedies",
      description: "The Rahu-Ketu transit is a powerful cosmic shift that c...",
      badge: "HIGHLY RECOMMENDED",
    },
    {
      image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/1d823908-261a-4487-bdd2-27894d2b4f78.png",
      title: "Debt Cutting",
      description: "In every walk of life, we share energy with fellow...",
      badge: "STARTS AT 999",
    },
    {
      image: "	https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/74692713-e3ff-46c3-9021-8e9712e7d431.jpg",
      title: "Gemstone Consultation",
      description: "More significant than wearing a Gemstone, is to select...",
      badge: "STARTS AT 999",
    },
    {
      image: "	https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/5ef06576-9ce6-4417-a823-0db448ca3a30.jpg",
      title: "Rudraksha Consultation",
      description: "",
      badge: "STARTS AT 999",
    },
    {
      image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/e9a8a567-d43b-4c1b-b8cb-b5227aea9aba.jpg",
      title: "Palmistry",
      description: "Palmistry or Chiromancy is the process of depiction an...",
      badge: "STARTS AT 999",
    },
    {
      image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/b17837c6-f7bc-41f3-be3e-39eca3eadcb3.jpg",
      title: "Theta Healing",
      description: "Theta healing is a quick technique that creates a fast...",
      badge: "STARTS AT 999",
    },
    {
      image: "	https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/0a9821f0-da3d-4efd-ad71-039c7fc95d1c.jpg",
      title: "Evil Eye Removal Collection",
      description: "Evil Eye is a unique and influential branch of Vedic...",
      badge: "STARTS AT 999",
    },
    {
      image: "	https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/e55f11a5-50c2-4e6c-bebe-e32c8fbd9018.png",
      title: "Yantra",
      description: "The Horoscope of a person is the blueprint of their life...",
      badge: "STARTS AT 999",
    },
    {
      image: "	https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/74692713-e3ff-46c3-9021-8e9712e7d431.jpg",
      title: "Rudraksha",
      description: "Rudraksha is known for its mystical properties, it i...",
      badge: "STARTS AT 999",
    },
    {
      image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/02d8b204-e5f6-4772-b6c4-b5d0654727a4.jpg",
      title: "Healing Oil",
      description: "Healing Oil is a highly concentrated plant extracte...",
      badge: "STARTS AT 999",
    },
    {
      image: "	https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/8cb68324-ead2-4319-863e-6c633e4fad92.jpg",
      title: "Lal Kitab Remedies",
      description: "Lal Kitab is a unique and influential branch of Vedic...",
      badge: "STARTS AT 999",
    },
  ];

  const topSellingScrollRef = useRef(null);
  const newlyLaunchedScrollRef = useRef(null);

  // Function to scroll left for horizontal sections
  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  // Function to scroll right for horizontal sections
  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Simple handler for product clicks (no alert)
  const handleProductClick = (productName) => {
    console.log(`Clicked on ${productName}`);
    // In a real app, you might navigate to a product detail page or open a modal
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter antialiased">
      {/* Header Section */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex flex-col items-center max-w-6xl">
          <h1 className="text-3xl font-bold text-gray-800">Astromall Shop</h1>
          <p className="text-md text-gray-600 mt-1">Shop Best Online Astrology Products And Services</p>
          <div className="mt-4 w-full max-w-lg flex items-center bg-yellow-400 rounded-full overflow-hidden shadow-md">
            <input
              type="text"
              placeholder="Let's find what's you're looking for..."
              className="flex-grow py-2 px-4 outline-none text-gray-700 placeholder-gray-500 bg-white rounded-l-full"
            />
            <button className="p-3 bg-yellow-500 text-gray-800 rounded-r-full hover:bg-yellow-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        {/* Main Content Grid */}
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {mainProducts.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
              badge={product.badge}
              onClick={() => handleProductClick(product.title)}
            />
          ))}
        </main>

        {/* Top Selling Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">TOP SELLING</h2>
          <div className="relative flex items-center justify-center">
            <button
              onClick={() => scrollLeft(topSellingScrollRef)}
              className="absolute left-0 z-10 p-2 rounded-full bg-white bg-opacity-75 shadow-lg hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 transform -translate-x-1/2 sm:translate-x-0"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            <div
              ref={topSellingScrollRef}
              className="flex overflow-x-scroll no-scrollbar py-4 px-2 space-x-6 scrollbar-hidden"
            >
              {topSellingItems.map((item) => (
                <div key={item.id} className="flex-shrink-0 w-40 sm:w-48 text-center">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-3 rounded-full overflow-hidden border-4 border-yellow-500 flex items-center justify-center">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm sm:text-base font-medium text-gray-700">{item.name}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollRight(topSellingScrollRef)}
              className="absolute right-0 z-10 p-2 rounded-full bg-white bg-opacity-75 shadow-lg hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 transform translate-x-1/2 sm:translate-x-0"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </section>

        {/* Newly Launched Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">NEWLY LAUNCHED</h2>
          <div className="relative flex items-center justify-center">
            <button
              onClick={() => scrollLeft(newlyLaunchedScrollRef)}
              className="absolute left-0 z-10 p-2 rounded-full bg-white bg-opacity-75 shadow-lg hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 transform -translate-x-1/2 sm:translate-x-0"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            <div
              ref={newlyLaunchedScrollRef}
              className="flex overflow-x-scroll no-scrollbar py-4 px-2 space-x-6 scrollbar-hidden"
            >
              {newlyLaunchedItems.map((item) => (
                <div key={item.id} className="flex-shrink-0 w-40 sm:w-48 text-center">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-3 rounded-full overflow-hidden border-4 border-yellow-500 flex items-center justify-center">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm sm:text-base font-medium text-gray-700">{item.name}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollRight(newlyLaunchedScrollRef)}
              className="absolute right-0 z-10 p-2 rounded-full bg-white bg-opacity-75 shadow-lg hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 transform translate-x-1/2 sm:translate-x-0"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

// Main App component
const App = () => {
  const [activePage, setActivePage] = useState('store');

  return (
    <div className="min-h-screen bg-gray-50 font-inter antialiased">
      {activePage === 'store' && <AstrotalkStorePage />}
    </div>
  );
};

export default App;
