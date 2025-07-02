import React from "react";
import { FaSearch } from "react-icons/fa";

const BookPooja = () => {
  return (
    <div className="text-gray-800">
      {/* Header Section */}
      <div className="flex justify-between items-center px-6 pt-6">
        <h1 className="text-xl sm:text-2xl font-bold">Book a Pooja</h1>
        {/* Search Bar */}
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Let's find what you're looking for..."
            className="w-full border border-yellow-400 rounded-full px-4 py-2 pr-10 focus:outline-none"
          />
          <FaSearch className="absolute right-3 top-2.5 text-yellow-500" />
        </div>
      </div>

      {/* Empty State */}
      <div className="flex justify-center items-center h-40 text-gray-400 text-xl font-medium mt-10">
        No sufficient data available!
      </div>

      {/* Description Section */}
      <div className="bg-gray-100 py-10 px-6 sm:px-16">
        <div className="max-w-4xl mx-auto text-sm sm:text-base space-y-6 text-gray-700 leading-relaxed">
          <p>
            Puja is an ancient Hindu ritual, a sacred act of worshiping the divine. It is a medium through which we connect with the divine energies to seek blessings, express gratitude, and make our wishes and prayers heard. We help you to experience divine blessings and spiritual harmony with our exclusive online puja services, conducted by learned pandits and astrologers. Whether you seek remedial measures, enhanced relationships, luck, financial prosperity, or a blissful marriage, our pujas cater to various aspects of life for your overall well-being.
          </p>
          <p>
            Astrotalk helps you embrace spirituality from the comfort of your home. With Astrotalk's user-friendly platform, booking an online puja session has never been easier. Our team of learned and experienced pandits and astrologers ensure that the rituals are performed with utmost sincerity and accuracy, adhering to traditional practices. They guide you through the process, making it a meaningful and transformative experience.
          </p>
          <p>
            Booking an online puja session with Astrotalk is just a few clicks away. Simply visit our website, browse through our list of puja services, select the one that resonates with your requirements, and immerse yourself in the spiritual vibrations of the puja.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookPooja;
