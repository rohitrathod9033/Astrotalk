// src/components/NewsCard.jsx
import React from 'react';

const NewsCard = ({ image, title, source, date }) => {
  return (
    <div className="flex-none w-80 bg-white rounded-lg shadow-lg overflow-hidden m-4 transform transition-transform duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-3">{title}</h3>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>{source}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;