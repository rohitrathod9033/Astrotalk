import React, { useState } from "react";

// Zodiac signs data (12 signs)
const zodiacSigns = [
  {
    name: "Aries Weekly Horoscope",
    description:
      "This week stirs your inner fire, Aries...",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-01.webp",
  },
  {
    name: "Taurus Weekly Horoscope",
    description:
      "The planets are urging you to slow down and reflect...",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-02.webp",
  },
  {
    name: "Gemini Weekly Horoscope",
    description:
      "This week spins your head and heart in different directions...",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-03.webp",
  },
  {
    name: "Cancer Weekly Horoscope",
    description:
      "It’s your season, Cancer, and emotions are riding high...",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-04.webp",
  },
  {
    name: "Leo Weekly Horoscope",
    description:
      "You’re preparing for a powerful comeback, Leo...",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-05.webp",
  },
  {
    name: "Virgo Weekly Horoscope",
    description:
      "You're stepping into a week of alignment and awareness...",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-06.webp",
  },
  {
    name: "Libra Weekly Horoscope",
    description:
      "Big choices loom on the horizon, Libra...",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-07.webp",
  },
  {
    name: "Scorpio Weekly Horoscope",
    description:
      "This week brings growth—but only if you're willing to let go...",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-08.webp",
  },
  {
    name: "Sagittarius Weekly Horoscope",
    description:
      "This week asks you to go deeper, Sagittarius...",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-09.webp",
  },
  {
    name: "Capricorn Weekly Horoscope",
    description:
      "Partnerships take center stage this week...",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-10.webp",
  },
  {
    name: "Aquarius Weekly Horoscope",
    description:
      "This is your reset week, Aquarius...",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-11.webp",
  },
  {
    name: "Pisces Weekly Horoscope",
    description:
      "This week calls you back to your creative, romantic, and expressive self...",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-12.webp",
  },
];

// Life Path Number calculator
const calculateLifePath = (dob) => {
  const digits = dob.replace(/\D/g, "").split("").map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split("").reduce((a, b) => a + +b, 0);
  }
  return sum;
};

const DailyHoroscope = () => {
  const [dob, setDob] = useState("");
  const [lifePath, setLifePath] = useState(null);

  const handleCalculate = () => {
    if (dob) {
      const number = calculateLifePath(dob);
      setLifePath(number);
    }
  };

  return (
    <div className="text-gray-800">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold mb-1">Weekly Horoscope</h1>
        <p className="text-sm text-gray-500">Sunday - Saturday</p>
        <p className="text-sm mt-1 text-gray-600">
          Total Zodiac Signs: <span className="font-semibold">{zodiacSigns.length}</span>
        </p>
      </header>

      {/* Life Path Calculator */}
      <section className="max-w-xl mx-auto mb-10 px-4">
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-lg font-semibold mb-2">Discover Your Life Path Number</h2>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="border px-3 py-2 rounded mr-2"
          />
          <button
            onClick={handleCalculate}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Calculate
          </button>
          {lifePath && (
            <p className="mt-4 text-green-600 font-medium">
              Your Life Path Number is: {lifePath}
            </p>
          )}
        </div>
      </section>

      {/* Horoscope Cards */}
      <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {zodiacSigns.map((sign, index) => (
          <div
            key={index}
            className="bg-white p-4 border rounded-lg shadow hover:shadow-lg transition-transform hover:scale-105 flex items-start gap-4"
          >
            <img
              src={sign.image}
              alt={sign.name}
              className="w-16 h-16 object-cover rounded-full border"
            />
            <div>
              <h3 className="font-semibold text-sm mb-1">{sign.name}</h3>
              <p className="text-xs text-gray-600">{sign.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-yellow-400 text-center py-10 mt-12 px-4">
        <h2 className="text-xl font-semibold mb-3">
          Talk to an Astrologer for personalized guidance
        </h2>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-5 py-2 rounded">
            Talk to Astrologer
          </button>
          <button className="bg-black text-white px-5 py-2 rounded">
            Chat with Astrologer
          </button>
        </div>
      </section>
    </div>
  );
};

export default DailyHoroscope;
