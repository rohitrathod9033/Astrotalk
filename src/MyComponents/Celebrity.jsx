import React, { useRef } from 'react';

// Main App component
const App = () => {
  // Array of celebrity customer data to display
  const celebrityCustomers = [
    {
      id: 1,
      name: 'MANDIRA BEDI',
      description: "Secret of Mandira Bedi's success 🤯",
      videoThumbnail: 'https://i3.ytimg.com/vi/i1KL9-vcB7w/maxresdefault.jpg',
      videoLabel: 'MANDIRA BEDI',
    },
    {
      id: 2,
      name: 'SHWETA TIWARI',
      description: "Shweta Tiwari has a message for you. Tap to watch 👍",
      videoThumbnail: 'https://i3.ytimg.com/vi/wSmmPNmnVMM/maxresdefault.jpg', 
      videoLabel: 'SHWETA TIWARI',
    },
    {
      id: 3,
      name: 'BHARTI SINGH',
      description: "Bharti Singh never thought to come on television 😲",
      videoThumbnail: 'https://i3.ytimg.com/vi/4Wyr0AAW2Sk/maxresdefault.jpg', 
      videoLabel: 'BHARTI SINGH',
    },
    {
      id: 4,
      name: 'Ranbir Kapoor',
      description: "Ranbir Kapoor talk about astrology",
      videoThumbnail: 'https://i3.ytimg.com/vi/HHYIZQ_giXM/maxresdefault.jpg', 
      videoLabel: 'JOHN DOE',
    },
  ];

  // Ref for the scrollable container
  const scrollContainerRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320, // Adjust scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320, // Adjust scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">OUR CELEBRITY CUSTOMERS</h1>

      {/* Changed max-w-5xl to max-w-7xl for a wider container */}
      <div className="relative w-full max-w-7xl"> 
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10 hidden sm:block"
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-scroll no-scrollbar py-4 px-2 space-x-6 scroll-smooth snap-x snap-mandatory"
        >
          {celebrityCustomers.map((customer) => (
            <div
              key={customer.id}
              className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 snap-center"
            >
              <div className="relative w-full h-48 rounded-t-xl overflow-hidden">
                <img
                  src={customer.videoThumbnail}
                  alt={`Thumbnail for ${customer.name}`}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/cccccc/000000?text=Video+Unavailable"; }} // Fallback image
                />
                {/* Play Button Icon (SVG) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-red-600 p-4 rounded-full text-white hover:bg-red-700 transition-colors duration-200">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </button>
                </div>
                {/* Video Label */}
                <span className="absolute bottom-2 left-2 bg-yellow-400 text-gray-800 text-xs font-semibold px-2 py-1 rounded">
                  {customer.videoLabel}
                </span>
              </div>

              {/* Customer Description */}
              <div className="p-4">
                <p className="text-gray-700 text-lg text-center">{customer.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10 hidden sm:block"
          aria-label="Scroll right"
        >
          {/* Right Arrow Icon (SVG) */}
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
      {/* Tailwind CSS scrollbar hide utility (for cleaner look) */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default App;