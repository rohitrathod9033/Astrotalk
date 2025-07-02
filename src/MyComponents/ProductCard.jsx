import React from "react";

const ProductCard = ({ image, title, tag }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {tag && (
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded z-10">
          {tag}
        </div>
      )}
      <img src={image} alt={title} className="w-full h-44 object-cover" />
      <div className="p-3">
        <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
