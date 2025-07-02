import React from "react";
import {
  FaSun,
  FaCalendarDay,
  FaCalendarWeek,
  FaCalendarAlt,
} from "react-icons/fa";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";

const zodiacCards = [
  {
    title: "Aries Yearly Horoscope",
    img: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-01.webp",
    desc: "Love and Relationships This year brings clarity and growth in your personal relationships...",
  },
  {
    title: "Taurus Yearly Horoscope",
    img: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-02.webp",
    desc: "Love and Relationships 2025 promises emotional growth and stability in your relationships...",
  },
  {
    title: "Gemini Yearly Horoscope",
    img: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-03.webp",
    desc: "Love and Relationships 2025 is a year of exploration and connection for Gemini...",
  },
  {
    title: "Cancer Yearly Horoscope",
    img: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-04.webp",
    desc: "Love and Relationships 2025 brings emotional depth and harmony to your relationships...",
  },
  {
    title: "Leo Yearly Horoscope",
    img: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-05.webp",
    desc: "Love and Relationships 2025 will be a year of passion and transformation for Leos...",
  },
  {
    title: "Virgo Yearly Horoscope",
    img: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-06.webp",
    desc: "Love and Relationships 2025 will be a year of emotional growth and understanding...",
  },
  {
    title: "Libra Yearly Horoscope",
    img: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-07.webp",
    desc: "Love and Relationships 2025 will be a year of harmony and deep connection for Libras...",
  },
  {
    title: "Scorpio Yearly Horoscope",
    img: "	https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-08.webp",
    desc: "Love and Relationships 2025 promises deep emotional connections and transformative growth...",
  },
];

const alsoCheckItems = [
  { icon: <BsFillSunriseFill size={32} />, label: "Today's Horoscope" },
  { icon: <BsFillSunsetFill size={32} />, label: "Yesterday's Horoscope" },
  { icon: <TbCalendarTime size={32} />, label: "Tomorrow's Horoscope" },
  { icon: <FaCalendarWeek size={32} />, label: "Weekly Horoscope" },
  { icon: <FaCalendarAlt size={32} />, label: "Monthly Horoscope" },
  { icon: <FaCalendarDay size={32} />, label: "Horoscope 2023" },
];

const HoroscopesPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <div className="px-4 py-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Yearly Horoscope</h1>
        <p className="text-2xl font-semibold mb-6">2025</p>

        {/* Line with Sun Icon */}
        <div className="relative flex items-center justify-center my-8 w-full">
          <div className="absolute w-full border-t border-gray-300"></div>
          <div className="z-10 bg-white px-4">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-md border-4 border-white">
              <FaSun className="text-4xl text-black" />
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="mx-auto max-w-6xl text-left text-lg space-y-5 leading-relaxed">
          <p>
            The new year brings a lot of new opportunities... <br />
            (Use the full text here as before)
          </p>
        </div>
      </div>

      {/* Zodiac Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pb-16">
        {zodiacCards.map((card, index) => (
          <div
            key={index}
            className="flex items-start bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition-all duration-300"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-28 h-28 object-cover p-2"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{card.title}</h2>
              <p className="text-sm text-gray-700">
                {card.desc}{" "}
                <span className="text-blue-500 cursor-pointer">read more</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Also Check Section */}
      <div className="bg-yellow-400 py-12 px-4 text-center">
        <h2 className="text-xl font-semibold mb-6 tracking-wider text-gray-800">
          ALSO CHECK
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {alsoCheckItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center space-y-2">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border border-black">
                {item.icon}
              </div>
              <p className="text-sm font-medium text-gray-900">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoroscopesPage;
