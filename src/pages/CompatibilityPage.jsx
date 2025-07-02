// src/pages/CompatibilityPage.jsx
import React from "react";

const zodiacSigns = [
  {
    name: "Aries",
    date: "Mar 21 - Apr 19",
    img: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/assets/images/horoscope_page/horoscope-01.webp",
  },
  {
    name: "Taurus",
    date: "Apr 20 - May 20",
    img: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/assets/images/horoscope_page/horoscope-02.webp",
  },
  {
    name: "Gemini",
    date: "May 21 - Jun 21",
    img: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/assets/images/horoscope_page/horoscope-03.webp",
  },
  {
    name: "Cancer",
    date: "Jun 22 - Jul 22",
    img: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/assets/images/horoscope_page/horoscope-04.webp",
  },
  {
    name: "Leo",
    date: "Jul 23 - Aug 22",
    img: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/assets/images/horoscope_page/horoscope-06.webp",
  },
  {
    name: "Virgo",
    date: "Aug 23 - Sep 22",
    img: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/assets/images/horoscope_page/horoscope-05.webp",
  },
  {
    name: "Libra",
    date: "Sep 23 - Oct 23",
    img: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/assets/images/horoscope_page/horoscope-07.webp",
  },
  {
    name: "Scorpio",
    date: "Oct 24 - Nov 21",
    img: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/assets/images/horoscope_page/horoscope-08.webp",
  },
  {
    name: "Sagittarius",
    date: "Nov 22 - Dec 21",
    img: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/assets/images/horoscope_page/horoscope-09.webp",
  },
  {
    name: "Capricorn",
    date: "Dec 22 - Jan 19",
    img: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/assets/images/horoscope_page/horoscope-10.webp",
  },
  {
    name: "Aquarius",
    date: "Jan 20 - Feb 18",
    img: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/assets/images/horoscope_page/horoscope-11.webp",
  },
  {
    name: "Pisces",
    date: "Feb 19 - Mar 20",
    img: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/assets/images/horoscope_page/horoscope-12.webp",
  },
];

const CompatibilityPage = () => (
  <div className="min-h-screen bg-gray-100 p-4 w-full flex flex-col items-center">
    <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
      Compatibility Page
    </h1>
    <p className="text-lg text-gray-600 text-center max-w-5xl mx-auto mb-8">
      This is a placeholder for the compatibility content. You can add more
      detailed information, forms, or interactive elements here to check
      compatibility.
    </p>

    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
      Choose Your Sign
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl w-full">
      {zodiacSigns.map((sign) => (
        <div
          key={sign.name}
          className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-md border border-gray-200 cursor-pointer hover:shadow-lg transition duration-300 min-h-[200px] border-b-8 border-yellow-400"
        >
          <div className="w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center mb-3 overflow-hidden">
            <img
              src={sign.img}
              alt={`${sign.name} symbol`}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{sign.name}</h3>
          <p className="text-sm text-gray-500 text-center">{sign.date}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CompatibilityPage;
