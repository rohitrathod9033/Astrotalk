// src/pages/ChatWithAstrologerPage.jsx
import React from "react";
import { FaSearch } from "react-icons/fa";
import AstrologerCard from '../MyComponents/AstrologerCallCard';

const astrologers = [
  {
    name: 'Jasveen',
    skills: 'Tarot, Psychic',
    languages: 'English, Hindi, Punjabi',
    experience: 7,
    rating: 4,
    price: 22,
    isNew: true,
    image: 'https://randomuser.me/api/portraits/women/75.jpg',
  },
  {
    name: 'Thavam',
    skills: 'Vedic, Prashana, Lal Kitab',
    languages: 'English, Hindi, Tamil',
    experience: 3,
    rating: 5,
    price: 20,
    orders: 1457,
    image: 'https://randomuser.me/api/portraits/men/60.jpg',
  },
  {
    name: 'Viara',
    skills: 'Tarot',
    languages: 'English, Hindi',
    experience: 5,
    rating: 4,
    price: 19,
    orders: 3776,
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Parask',
    skills: 'Vedic, Vastu, Lal Kitab',
    languages: 'English, Hindi, Punjabi',
    experience: 13,
    rating: 5,
    price: 111,
    isNew: true,
    isCelebrity: true,
    image: 'https://randomuser.me/api/portraits/men/48.jpg',
  },
  {
    name: 'Anaya',
    skills: 'Tarot, Numerology',
    languages: 'Hindi, English',
    experience: 6,
    rating: 4,
    price: 25,
    image: 'https://randomuser.me/api/portraits/women/81.jpg',
  },
  {
    name: 'Rohit',
    skills: 'Vastu, Palmistry',
    languages: 'Hindi',
    experience: 10,
    rating: 5,
    price: 35,
    image: 'https://randomuser.me/api/portraits/men/85.jpg',
  },
  {
    name: 'Priya',
    skills: 'Tarot, Angel Reading',
    languages: 'English',
    experience: 4,
    rating: 3,
    price: 18,
    isNew: true,
    image: 'https://randomuser.me/api/portraits/women/41.jpg',
  },
  {
    name: 'Aryan',
    skills: 'Numerology, Kundli',
    languages: 'English, Hindi',
    experience: 8,
    rating: 4,
    price: 40,
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
  {
    name: 'Simran',
    skills: 'Psychic, Tarot',
    languages: 'Punjabi, Hindi',
    experience: 5,
    rating: 5,
    price: 30,
    image: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
  {
    name: 'Kunal',
    skills: 'Vedic Astrology',
    languages: 'Hindi, Tamil',
    experience: 12,
    rating: 4,
    price: 50,
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    name: 'Meera',
    skills: 'Tarot, Angel Cards',
    languages: 'English',
    experience: 3,
    rating: 4,
    price: 20,
    isNew: true,
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
  {
    name: 'Raj',
    skills: 'Lal Kitab, Face Reading',
    languages: 'Hindi, English',
    experience: 9,
    rating: 5,
    price: 60,
    isCelebrity: true,
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
];

const sections = [
  {
    title: "Top Astrologers",
    items: ["Jasveen", "Thavam", "Viara", "Parask", "Raj"],
  },
  {
    title: "Specializations",
    items: ["Tarot", "Vedic", "Lal Kitab", "Vastu", "Psychic", "Angel Reading", "Palmistry"],
  },
  {
    title: "Languages",
    items: ["English", "Hindi", "Punjabi", "Tamil"],
  },
  {
    title: "Experience Level",
    items: ["1-3 Years", "4-6 Years", "7+ Years", "10+ Years"],
  },
];

const ChatWithAstrologerPage = () => {
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

          {/* Search Bar */}
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
      <div className="py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {astrologers.map((astro, idx) => (
            <AstrologerCard key={idx} astrologer={astro} />
          ))}
        </div>
      </div>

      {/* Scrollable Section */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
          FIND BEST ASTROLOGERS
        </h2>

        <div className="flex gap-6 overflow-x-auto whitespace-nowrap pb-2 px-2">
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
