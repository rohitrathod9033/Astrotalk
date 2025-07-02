import React from "react";
import { FaComments, FaPhoneAlt, FaShoppingCart } from "react-icons/fa";
import { GiPrayerBeads } from "react-icons/gi";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-center text-white py-10 px-4">
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-xl shadow-lg px-20 py-1 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto  min-h-60">
        <img
          src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/320x410/assets/images/astrologer_baba.webp"
          alt="Astrologer"
          className="w-80 md:w-96 rounded-lg"
        />

        {/* Text */}
        <div className="text-start mr-20">
          <h2 className="text-lg md:text-xl font-bold text-gray-700">
            200+ Celebs recommend Astrotalk
          </h2>
          <h1 className="text-3xl md:text-5xl font-semibold text-black mt-2">
            Chat With Astrologer
          </h1>
          <button className="mt-4 px-6 py-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition">
            Chat Now
          </button>
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-6xl mx-auto">
        <div className="bg-white text-black rounded-lg shadow p-4 flex flex-col items-center">
          <FaComments className="text-pink-500 text-4xl mb-2" />
          <p className="text-sm font-medium">Chat with Astrologer</p>
        </div>

        <div className="bg-white text-black rounded-lg shadow p-4 flex flex-col items-center">
          <FaPhoneAlt className="text-teal-500 text-4xl mb-2" />
          <p className="text-sm font-medium">Talk to Astrologer</p>
        </div>

        <div className="bg-white text-black rounded-lg shadow p-4 flex flex-col items-center">
          <FaShoppingCart className="text-blue-500 text-4xl mb-2" />
          <p className="text-sm font-medium">Astromall Shop</p>
        </div>

        <div className="bg-white text-black rounded-lg shadow p-4 flex flex-col items-center">
          <GiPrayerBeads className="text-orange-400 text-4xl mb-2" />
          <p className="text-sm font-medium">Book A Pooja</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;