import React from "react";

const zodiacSigns = [
  {
    name: "Aries Weekly Horoscope",
    description:
     "This week stirs your inner fire, Aries. Venus and Mars are energizing your love life and ambition, but Mercury retrograde may bring a few surprises. It’s a powerful time for bold moves—if you're brave enough. But one decision might change everything...",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-01.webp",
  },
  {
    name: "Taurus Weekly Horoscope",
    description:
      "The planets are urging you to slow down and reflect. Your relationships, finances, and inner self all need your attention—but not in the way you expect. A powerful realization is coming, and when it arrives…",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/150x150/assets/images/horoscope_page/horoscope-02.webp",
  },
  {
    name: "Gemini Weekly Horoscope",
    description:
      "This week spins your head and heart in different directions. While your curiosity pulls you forward, Mercury's tricky moves may cloud your judgment. A choice you make now could ripple into your future...",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/100x100/assets/images/horoscope_page/horoscope-03.webp",
  },
  {
    name: "Cancer Weekly Horoscope",
    description:
      "It’s your season, Cancer, and emotions are riding high. With the Sun lighting up your sign, you're glowing—but Pluto’s influence might stir something hidden. A chapter is closing, and another is quietly knocking…",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/100x100/assets/images/horoscope_page/horoscope-04.webp",
  },
  {
    name: "Leo Weekly Horoscope",
    description:
      "You’re preparing for a powerful comeback, Leo. This week pushes you inward to reflect before your solar season begins. Old patterns surface, but so does a new kind of strength. What you do now sets the tone for what’s coming...",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/100x100/assets/images/horoscope_page/horoscope-05.webp",
  },
  {
    name: "Virgo Weekly Horoscope",
    description:
      "You're stepping into a week of alignment and awareness. Friendships, plans, and long-term goals all come into focus—but not without some reality checks. The universe is clearing space... but what’s it clearing it for?",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/100x100/assets/images/horoscope_page/horoscope-06.webp",
  },
  {
    name: "Libra Weekly Horoscope",
    description:
      "Big choices loom on the horizon, Libra. This week shines a light on your public life, reputation, and long-term path. You’re being nudged out of your comfort zone—but is it the right time to leap?",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/100x100/assets/images/horoscope_page/horoscope-07.webp",
  },
  {
    name: "Scorpio Weekly Horoscope",
    description:
      "This week brings growth—but only if you're willing to let go. The cosmos wants you to expand your vision, challenge your beliefs, and embrace something new. A risk may open a door you never expected...",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/100x100/assets/images/horoscope_page/horoscope-08.webp",
  },
  {
    name: "Sagittarius Weekly Horoscope",
    description:
      "This week asks you to go deeper, Sagittarius. While your instinct is to roam, the cosmos wants you to sit still and reflect. Something powerful is shifting within you… and it begins with one honest conversation.",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/100x100/assets/images/horoscope_page/horoscope-09.webp",
  },
  {
    name: "Capricorn Weekly Horoscope",
    description:
      "Partnerships take center stage this week. Whether in love or work, you’re being asked to compromise—but without losing yourself. A major relationship shift is coming… and how you respond will define everything.",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/100x100/assets/images/horoscope_page/horoscope-10.webp",
  },
  {
    name: "Aquarius Weekly Horoscope",
    description:
      "This is your reset  week, Aquarius. Routines, health, and daily habits are under cosmic review. You're being nudged to realign your time and energy—but one change may lead to a domino effect...",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/100x100/assets/images/horoscope_page/horoscope-11.webp",
  },
  {
    name: "Pisces Weekly Horoscope",
    description:
      "This week calls you back to your creative, romantic, and expressive self. It’s time to feel more, dream more—but also act more. Love and inspiration are within reach… but are you ready to receive them?",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/100x100/assets/images/horoscope_page/horoscope-12.webp",
  },
];

const DailyHoroscope = () => {
  return (
    <div className="text-gray-800">
      {/* Header */}
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold mb-2">Weekly Horoscope</h1>
        <p className="text-sm text-gray-600">Sunday - Saturday</p>
      </div>

      {/* Intro Text */}
      <div className="max-w-3xl mx-auto px-4 mb-8 text-sm text-gray-700 text-center">
        <p>
   Looking for your weekly horoscope? Astrotalk can help you put an end to your search. On Astrotalk, the astrologers, on a regular basis, caters horoscopes, including weekly horoscopes, that are prepared after considering the movement of the planets in Vedic astrology. This movement of the Vedic planets can be both positive and negative for the native, and the work of the horoscopes for the week ahead is to highlight their influences, their effect, and the associated remedies that one can adopt to ensure that you are safeguarded from the negative effect of the planets.
   <br/>
The weekly horoscope, besides a dose of insights into the good and bad of the week, also brings you tips and tricks that you can consider to make your life happening. These tips, yet again, are suggested by expert astrologers and practising them, in some way or the other, will help you in making the best use of your week. With the weekly horoscope, we make sure you are well aware of what's going to come for you in the future so that you are well prepared for the uncertainties and can take actions that only better your life.
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
        Check Your Weekly Horoscope
        </h2>
 <p className="mb-4">
Wondering what the upcoming week is going to be like for you? Well, the insightful Weekly horoscope of yours on the AstroTalk platform can share a lot of information about the week to come for you. Weekly horoscope works on the scenario that with the change of dates, one’s fate also changes. The change in fate is driven by the shift of planets, especially the Moon and the Sun. Also, the remaining seven planets in astrology also change a lot for the person on a weekly basis. These planets not only move from one zodiac sign to another but also shift from one house of the kundli to another to change many prospects for you. 
</p>
 <p className="mb-4">
A good way to help you understand how the movement of planets influence one’s fate and the horoscope would be by an example. Consider the planet Sun. In astrology, the Sun is considered a very auspicious planet. The Sun occupies various houses in one’s kundli. These 12 houses denote different traits like love, money, enemies, career, foreign travel and much more. If Sun, for example, is occupying the second house of your kundli, which is the house of finance, then you are most likely to see gains in terms of your finances. However, if another dreaded planet such as Ketu and Rahu are occupying the second house, you may experience a fall in your financial stability. The same goes for other houses like the 4th house in Kundli, which is the house of Family, or the 8th house, which represents death, longevity, and unexpected incidents. 
</p>
 <p className="mb-4">
Similarly, different planets, as they move, transits and retrograde from one zodiac sign to another on a regular basis. This transition also has an effect on one’s fate. A study of all these phenomena is done by expert astrologers to prepare your weekly horoscope. The weekly horoscope for different zodiac signs gives one an insight into various aspects like your health, your financial prospects, relationship, travel and much more. The weekly horoscope is prepared after a deep study of the planet's movements and thus can better inform you about what's to come for you ahead in your life. Using the information, you shall plan your week accordingly to get the best results for yourself. 
</p>
Over the years, many people have found the weekly horoscope predictions by AstroTalk useful in planning their life accordingly. Especially in a week that has a festival or a big astronomical event, like a grahan, schedule, the astrologers share the best of their predictions to ensure you are able to absorb the best out of the auspiciousness of the day and acquire the blessings of the divine by doing exactly what they wish you to do. The weekly horoscope predictions made on the AstroTalk platform are for a period starting from Sunday of a week till Saturday.  
 <p className="mb-4">
Also, for your convenience, when you opt to read your weekly horoscope on AstroTalk, we ensure the language we use here is simple, insightful and allows you the best astrological logic and knowledge without any hassle. You can read your horoscope today on both the AstroTalk app and AstroTalk website absolutely free of cost. Our aim as a brand is to better the lives of anyone who decides to spend their precious time to find us and the weekly horoscope makes a part of it. Apart from the weekly horoscope, you can also read your daily horoscope and yearly horoscope, on AstroTalk, one of which covers even the minutest details of the day and the other, on the other hand, is a broad perspective of what the upcoming year is going to be like for you. 
</p>
 <p className="mb-4">
Moreover, if the weekly horoscope doesn’t quench your thirst for information, then you can always talk to astrologer to get more astrological predictions about your life. 

</p>


      </div>
    </div>
  );
};

export default DailyHoroscope;
