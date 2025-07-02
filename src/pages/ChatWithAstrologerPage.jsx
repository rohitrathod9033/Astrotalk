// src/pages/ChatWithAstrologerPage.jsx
import React from "react";
import { FaSearch } from "react-icons/fa";

const ChatWithAstrologerPage = () => {
  const sections = [
    {
      title: "Consult Astrologer",
      items: ["Talk to Astrologer", "Chat with Astrologer", "Online Puja"],
    },
    {
      title: "Indian (City-wise)",
      items: [
        "Astrologers in Delhi",
        "Astrologers in Mumbai",
        "Astrologers in Kolkata",
        "Astrologers in Bangalore",
      ],
    },
    {
      title: "International",
      items: [
        "Astrologers in USA",
        "Astrologers in California",
        "Astrologers in Chicago",
      ],
    },
    {
      title: "Category wise",
      items: [
        "Vastu",
        "Gemology",
        "KP Astrology",
        "Lal Kitab",
        "Western Astrology",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl font-bold bg-yellow-400 text-black px-6 py-2 rounded">
          Chat with Astrologer
        </h1>

        <div className="flex flex-wrap gap-2 items-center mt-2 sm:mt-0">
          <p className="text-gray-700">Available balance: ₹ 0</p>
          <button className="border border-green-500 text-green-600 px-3 py-1 rounded hover:bg-green-50">
            Recharge
          </button>
          <button className="border px-3 py-1 rounded hover:bg-gray-100">Filter</button>
          <button className="border px-3 py-1 rounded hover:bg-gray-100">Sort by</button>

          {/* Search Bar with Rounded Corners */}
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
            <input
              type="text"
              placeholder="Search astrologer..."
              className="px-4 py-2 w-40 sm:w-56 text-sm outline-none"
            />
            <button className="px-3 py-2 bg-yellow-400 hover:bg-yellow-500 text-white">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>

      {/* Astrologer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array(12)
          .fill()
          .map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src="https://aws.astrotalk.com/consultant_pic/p-106873.jpg"
                  alt="Astrologer"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="font-semibold text-lg">Astrologer Name</h2>
                  <p className="text-sm text-gray-500">Tarot, Vedic</p>
                  <p className="text-sm text-gray-400">Exp: 5 Years</p>
                  <p className="text-sm font-semibold text-green-600">₹ 25/min</p>
                </div>
              </div>
              <button className="px-4 py-2 border border-green-600 text-green-600 rounded hover:bg-green-50">
                Chat
              </button>
            </div>
          ))}
      </div>

      {/* Scrollable Section */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
          FIND BEST ASTROLOGERS
        </h2>

        <div className="flex gap-6 overflow-x-auto whitespace-nowrap pb-2">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white w-64 p-4 rounded-lg shadow flex-shrink-0 max-h-60 overflow-y-auto"
            >
              <h3 className="font-bold text-yellow-500 mb-2">{section.title}</h3>
              <ul className="space-y-1">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-700 hover:underline cursor-pointer"
                  >
                    ➜ {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatWithAstrologerPage;
