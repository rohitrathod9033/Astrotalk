// src/MyComponents/AstrologerCallCard.jsx
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const AstrologerCard = ({ astrologer }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-md border p-4 flex items-start gap-4 w-full max-w-md mx-auto">
      {/* Verified Badge */}
      <div className="absolute top-2 right-2 text-green-500 text-lg">
        <FaCheckCircle />
      </div>

      {/* Profile Image */}
      <img
        src={astrologer.image}
        alt={astrologer.name}
        className="w-16 h-16 rounded-full object-cover"
      />

      {/* Info Section */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-800">{astrologer.name}</h2>
        <p className="text-sm text-gray-600">{astrologer.skills}</p>
        <p className="text-sm text-gray-500">{astrologer.languages}</p>
        <p className="text-sm text-gray-500">Exp: {astrologer.experience} Years</p>

        {/* Ratings + New Badge */}
        <div className="flex items-center gap-3 mt-2">
          <div className="text-yellow-500 text-sm">
            {'★'.repeat(astrologer.rating)}{'☆'.repeat(5 - astrologer.rating)}
          </div>
          {astrologer.isNew && !astrologer.isCelebrity && (
            <span className="text-xs text-red-600 font-semibold">New!</span>
          )}
        </div>

        {/* Price and Chat Button */}
        <div className="flex justify-between items-center mt-3">
          <p className="text-sm font-medium text-green-600">₹ {astrologer.price}/<span className="text-xs">min</span></p>
          <button className="border border-green-600 text-green-600 text-sm px-4 py-1 rounded hover:bg-green-50">
            Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default AstrologerCard;
