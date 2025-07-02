// src/components/NewsSection.jsx
import React, { useRef } from 'react';
import NewsCard from './NewsCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const newsData = [
  {
    id: 1,
    image: 'https://aws.astrotalk.com/images/7f9237e7-88eb-4aa7-b993-77b252f96735.png',
    title: "Decoding Astrotalk's Fortunes: How The Astrology Startup Hit 4X Profit Growth",
    source: 'inc42',
    date: 'Nov 7, 2023',
  },
  {
    id: 2,
    image: 'https://aws.astrotalk.com/images/8803fb32-453f-4531-8a48-3ed170d4a117.png',
    title: 'Astro tech Startup, Astrotalk, appoints Anmol Jain as the new Co-founder',
    source: 'CXO',
    date: 'Nov 3, 2023',
  },
  {
    id: 3,
    image: 'https://aws.astrotalk.com/images/eaa3d27e-38f6-49de-9024-47ee6cc1e3bc.jpg',
    title: 'EXCLUSIVE: Rs 37k salary to Rs 600 cr company - How an astrology prediction push...',
    source: 'ET NOW',
    date: 'Nov 4, 2023',
  },
  {
    id: 4,
    image: 'https://aws.astrotalk.com/images/e9e85f59-ac37-42bc-a283-52c2ce2dd5ff.jpg',
    title: "Another exciting news about Astrotalk's growth and future plans.",
    source: 'Tech Daily',
    date: 'Nov 8, 2023',
  },
  {
    id: 5,
    image: 'https://aws.astrotalk.com/images/dcade233-c53c-4f29-a78b-32ee2b7e9d70.jpg',
    title: "Innovations in Astro-Tech: A look at Astrotalk's new features.",
    source: 'Future Biz',
    date: 'Nov 5, 2023',
  },
];

const NewsSection = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <div className="bg-yellow-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">ASTROTALK IN NEWS</h2>
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-4 space-x-4"
          style={{
            scrollbarWidth: 'none',        // Firefox
            msOverflowStyle: 'none',       // IE 10+
          }}
          onScroll={(e) => {
            // Remove scrollbar for webkit browsers
            e.target.style.scrollbarWidth = 'none';
          }}
        >
          {/* Hide scrollbar for Webkit browsers (Chrome, Safari) */}
          <style>
            {`
              ::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          {newsData.map((news) => (
            <NewsCard
              key={news.id}
              image={news.image}
              title={news.title}
              source={news.source}
              date={news.date}
            />
          ))}
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10 hidden md:block"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10 hidden md:block"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default NewsSection;
