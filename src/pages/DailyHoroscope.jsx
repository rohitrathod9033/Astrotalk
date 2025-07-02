import React from "react";

const zodiacSigns = [
  {
    name: "Aries Daily Horoscope",
    description:
      "Today, Aries, you will radiate instances of focus, bravery, and natural leadership. Use this to tackle new challenges head-on...",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-01.webp",
  },
  {
    name: "Taurus Daily Horoscope",
    description:
      "Taurus, take it easy today. This is the time for a calm mindset and inner reflection. Stability is your superpower today.",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-02.webp",
  },
  {
    name: "Gemini Daily Horoscope",
    description:
      "Gemini, your dual nature takes centerstage. Think twice before making quick decisions. A great day for communication.",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/100x100/assets/images/horoscope_page/horoscope-03.webp",
  },
  {
    name: "Cancer Daily Horoscope",
    description:
      "Emotions may be strong today. Don’t ignore your needs. Connect with loved ones and engage in something artistic.",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/100x100/assets/images/horoscope_page/horoscope-04.webp",
  },
  {
    name: "Leo Daily Horoscope",
    description:
      "Step into the spotlight. Confidence suits you well today. Stay mindful of others' feelings while you shine.",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/100x100/assets/images/horoscope_page/horoscope-05.webp",
  },
  {
    name: "Virgo Daily Horoscope",
    description:
      "You may find yourself immersed in details. Don’t forget to zoom out and focus on the bigger picture today.",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/100x100/assets/images/horoscope_page/horoscope-06.webp",
  },
  {
    name: "Libra Daily Horoscope",
    description:
      "Focus on your needs in relationships. Bring balance to your routine and seek harmony wherever you go.",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/100x100/assets/images/horoscope_page/horoscope-07.webp",
  },
  {
    name: "Scorpio Daily Horoscope",
    description:
      "This is a great time to deepen your understanding of someone. Trust your instincts and avoid power struggles.",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/100x100/assets/images/horoscope_page/horoscope-08.webp",
  },
  {
    name: "Sagittarius Daily Horoscope",
    description:
      "Adventure is calling! Whether mentally or physically, step out of your comfort zone to expand your perspective.",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/100x100/assets/images/horoscope_page/horoscope-09.webp",
  },
  {
    name: "Capricorn Daily Horoscope",
    description:
      "Let your discipline shine. Make plans and stick to them. Today is good for long-term strategy.",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/100x100/assets/images/horoscope_page/horoscope-10.webp",
  },
  {
    name: "Aquarius Daily Horoscope",
    description:
      "You're full of bright ideas today. Find time to express your innovative thoughts. Community will bring value.",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/100x100/assets/images/horoscope_page/horoscope-11.webp",
  },
  {
    name: "Pisces Daily Horoscope",
    description:
      "Embrace your emotions. Use your intuition to help someone close to you. Art or music will uplift you.",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/100x100/assets/images/horoscope_page/horoscope-12.webp",
  },
];

const DailyHoroscope = () => {
  return (
    <div className="text-gray-800">
      {/* Header */}
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold mb-2">Daily Horoscope</h1>
        <p className="text-sm text-gray-600">Check your horoscope today</p>
      </div>

      {/* Intro Text */}
      <div className="max-w-3xl mx-auto px-4 mb-8 text-sm text-gray-700 text-center">
        <p>
        Looking for today's horoscope? Or yesterday's? Well, on Astrotalk we have covered everything right from Daily horoscope to weekly to monthly horoscope. What is the use of one's Daily horoscope you may ask? Well, as per our astrologers, the daily horoscope is one of the ways that you can use to plan out your day. As per astrology, our day to day life is influenced by the movements of planets, as they constantly shift their positions from one sign to another. The movement can bring both positive and negative influences in one's life, and you knowing such things in advance helps you in safeguarding yourself from the uncertainties.
        <br/>

So reading Today's horoscope is like a healthy habit one can consider adopting as it shall help in changing the outcomes of your life. The daily horoscope on Astrotalk is prepared by expert astrologers and thus is very insightful. The daily horoscope not only tells you what's coming for you in the future but also allows you remedies that you can adopt to tackle anything negative. The Today's horoscope is one of the ways that can help you in steering your life in the right direction. So make sure you give it a read.
        </p>
      </div>

      {/* Horoscope Cards */}
      <div className="max-w-5xl mx-auto px-4 grid sm:grid-cols-2 gap-6">
        {zodiacSigns.map((sign, index) => (
          <div
            key={index}
            className="border rounded-md p-4 flex gap-4 items-start bg-white shadow"
          >
            <img
              src={sign.image}
              alt={sign.name}
              className="w-16 h-16 object-cover rounded-full border"
            />
            <div>
              <h2 className="font-bold mb-1 text-sm">{sign.name}</h2>
              <p className="text-xs text-gray-600">{sign.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-400 text-center py-8 mt-12 px-4">
        <p className="text-lg font-semibold mb-3">
          Connect with an Astrologer on Call or Chat for more personalised detailed predictions.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-4 py-2 rounded">
            Talk to Astrologer
          </button>
          <button className="bg-black text-white px-4 py-2 rounded">
            Chat with Astrologer
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-4xl mx-auto mt-12 px-4 text-sm text-gray-700">
        <h2 className="text-xl font-bold mb-4 text-center">
          CHECK YOUR DAILY HOROSCOPE
        </h2>
      


         <p className="mb-4">Wondering what your day is going to be like? Many wonder how great it would have been if one was able to find what their future has for them. And interestingly, knowing your today’s horoscope can actually help you with that information. Daily horoscope is an unpluckable part of astrology. Your daily horoscope is a prediction about how your day would pan out (to find your today’s horoscope, you can use our app too). These predictions are based on the position of the celestial bodies like the Moon, the Sun and other planets. As the position of the planets changes, they tend to occupy different zodiac signs and different houses in your kundli. This occupancy results in diverse effects of the planet on an individual. You can check your kundli online.</p>

 <p className="mb-4">For example, if a particular planet, say, Mercury, is camping in a friendly zodiac sign, the daily horoscope of the person is to be on the positive side. Meanwhile, if the position of Mercury is in an enemy zodiac sign, then it could affect the native negatively. A study of all the planets and their position in space and time is taken into consideration to decide what the person's today’s horoscope would be like.  </p>

 <p className="mb-4">The daily horoscope of the person is usually based on their Sun Sign. The sun sign, for the unaware, is the exact position of the Sun at the time of your birth. Sun position is denoted by Sun Signs. Sun signs are nothing but the 12 zodiac signs in one of which the Sun was camping at the time of your birth. </p>

 <p className="mb-4">Sun spends at least a month in each zodiac sign. For example, Sun stays in Aries from March 21 to April 19, the Sun stays in Taurus from April 20 to May 20, etc. So if you were born between April 20 - May 20, then your Sun Sign is Taurus. If born between March 21 - April 19, then your Sun sign is Aries. If you are born between October 23 - November 21, then your Sun sign is Scorpio. You can get more details in our astrology blog section. </p>

 <p className="mb-4">Once you know what your Sun sign is, you can simply check your today’s horoscope by either visiting our website or downloading the AstroTalk app that offers many more features other than just helping you with daily horoscope astrology.</p>

 <p className="mb-4">Look, we have a free daily horoscope for each and every zodiac sign humanity is known to so you don’t have to wander around looking for my daily horoscope. All you can do is visit our website to get access to a daily horoscope.</p> 

 <p className="mb-4">Also, to ease the process, you can download our app and visit the daily horoscope astrology section to read not just about daily horoscopes but also about the compatibility you share with other zodiac signs. You can also talk to our astrologer or chat with our astrologer for more information.</p>
      </div>
    </div>
  );
};

export default DailyHoroscope;
