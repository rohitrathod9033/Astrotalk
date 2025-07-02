import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const astrologers = [
  {
    name: 'Vvinod',
    specialty: 'Vedic Astrology',
    imageUrl: 'https://aws.astrotalk.com/consultant_pic/p-37584.jpg',
  },
  {
    name: 'Sujata',
    specialty: 'Vedic Astrology',
    imageUrl: 'https://aws.astrotalk.com/consultant_pic/p-37586.jpg',
  },
  {
    name: 'Dimple',
    specialty: 'Vedic Astrology',
    imageUrl: 'https://aws.astrotalk.com/consultant_pic/p-37587.jpg',
  },
  {
    name: 'Satyesh',
    specialty: 'Vedic Astrology',
    imageUrl: 'https://aws.astrotalk.com/consultant_pic/p-37649.jpg',
  },
  {
    name: 'Ramesh',
    specialty: 'Tarot Reading',
    imageUrl: 'https://aws.astrotalk.com/consultant_pic/p-37714.jpg',
  },
  {
    name: 'Priya',
    specialty: 'Numerology',
    imageUrl: 'https://aws.astrotalk.com/consultant_pic/p-37782.jpg',
  },
  {
    name: 'Anjali',
    specialty: 'Palmistry',
    imageUrl: 'https://aws.astrotalk.com/consultant_pic/p-37851.jpg',
  },
];

const AstrologerCard = ({ astrologer }) => (
  <div className="flex-shrink-0 w-72 h-[17.5rem] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center m-3 border border-gray-100">
    <img
      src={astrologer.imageUrl}
      alt={astrologer.name}
      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-200"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = 'https://placehold.co/128x128/CCCCCC/FFFFFF?text=Error';
      }}
    />
    <h3 className="mt-4 text-xl font-bold text-gray-800">{astrologer.name}</h3>
    <p className="mt-1 text-gray-500">{astrologer.specialty}</p>
  </div>
);

export default function App() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth * 0.8;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-yellow-400 min-h-screen flex items-center justify-center font-sans">
      <div className="w-full max-w-screen-xl mx-auto py-12 px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800">OUR ASTROLOGERS</h1>
          <p className="mt-3 text-lg text-gray-700">
            13000+ Best Astrologers from India for Online Consultation
          </p>
        </div>

        {/* Slider Section */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          {/* Scrollable Card Row */}
          <div
            ref={scrollContainerRef}
            className="flex items-stretch overflow-x-auto scroll-smooth p-4 -m-4 gap-4 scrollbar-hide snap-x snap-mandatory"
          >
            {astrologers.map((astro, index) => (
              <div key={index} className="snap-center">
                <AstrologerCard astrologer={astro} />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => handleScroll('right')}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

        </div>
      </div>
    </div>
  );
}
