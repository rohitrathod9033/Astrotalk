import React from "react";
import { FaEye } from "react-icons/fa";

const lifePaths = [
  {
    number: 9,
    title: "Life Path Number 18: Meaning, Numerology & Personality",
    author: "Astrologer Lakshita",
    views: 865,
    date: "June 29, 2025",
  },
  {
    number: 8,
    title: "Life Path Number 17: Meaning, Numerology, Karmic Life & Spirituality",
    author: "Astrologer Lakshita",
    views: 865,
    date: "June 29, 2025",
  },
  {
    number: 7,
    title: "Life Path Number 16: Meaning, Numerology & Karmic Debt",
    author: "Astrologer Lakshita",
    views: 549,
    date: "June 29, 2025",
  },
  {
    number: 6,
    title: "Life Path Number 15: Meaning, Personality & Compatibility",
    author: "Astrologer Lakshita",
    views: 795,
    date: "June 28, 2025",
  },
  {
    number: 5,
    title: "Life Path Number 14: Meaning, Numerology, Compatibility & Karmic Debt",
    author: "Astrologer Lakshita",
    views: 896,
    date: "June 28, 2025",
  },
  {
    number: 4,
    title: "Life Path Number 13: Meaning, Career, Numerology & Compatibility",
    author: "Astrologer Lakshita",
    views: 555,
    date: "June 28, 2025",
  },
  {
    number: 3,
    title: "Life Path Number 12: Meaning, Love Life, Career & Numerology",
    author: "Astrologer Lakshita",
    views: 599,
    date: "June 27, 2025",
  },
  {
    number: 2,
    title: "Life Path Number 10: Meaning, Career, Compatibility & Spiritual Meaning",
    author: "Astrologer Lakshita",
    views: 674,
    date: "June 27, 2025",
  },
  {
    number: 1,
    title: "Life Path Number 11: Meaning, Woman, Career, Numerology & Marriage Age",
    author: "Astrologer Lakshita",
    views: 777,
    date: "June 27, 2025",
  },
];

const categories = [
  "Home", "Tarot", "Vastu", "Vedic", "Kundli", "Sports", "Transits", "Festivals",
  "Business", "Gemstones", "Numerology", "Zodiac Signs", "Compatibility", "Entertainment",
  "Current Affairs", "Daily Horoscope", "Mythological Tales", "Web Stories"
];

const LifePathPage = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 border-r p-4 hidden md:block">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <ul className="space-y-2 text-gray-700">
          {categories.map((cat, i) => (
            <li
              key={i}
              className={`hover:text-indigo-600 ${
                cat === "Web Stories" ? "flex items-center gap-1 text-yellow-600 font-semibold" : ""
              }`}
            >
              {cat}
              {cat === "Web Stories" && <span className="text-xs bg-yellow-300 px-1 rounded">NEW</span>}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="🔍 Let's find what you're looking for..."
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        {/* Life Path Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifePaths.map((item) => (
            <div
              key={item.number}
              className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={`https://dummyimage.com/600x300/000/fff&text=Life+Path+${item.number}`}
                alt={`Life Path ${item.number}`}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="text-md font-semibold mb-1">{item.title}</div>
                <div className="text-sm text-gray-500 mb-2">{item.author}</div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{item.date}</span>
                  <span className="flex items-center gap-1">
                    <FaEye className="text-gray-500" />
                    {item.views}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LifePathPage;
