import React from "react";

const services = [
  {
    title: "Today's Horoscope",
    icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
    description:
      "Unsure about how your day will unfold? Get free Aries horoscope online prediction from top astrologer. Read your Aries Zodiac Sign Horoscope today!",
  },
  {
    title: "Free Kundli",
    icon: "https://cdn-icons-png.flaticon.com/512/252/252035.png",
    description:
      "Generate your free online kundli report from Astrotalk. Our Kundli software can help you predict the future for yourself by reading the birth chart.",
  },
  {
    title: "Compatibility",
    icon: "https://cdn-icons-png.flaticon.com/512/1077/1077063.png",
    description:
      "Confused by love? Remove the doubts & find the sparks! Check the compatibility with your partner using our tool and ignite a love that lasts forever.",
  },
  {
    title: "Festival 2024",
    icon: "https://cdn-icons-png.flaticon.com/512/3703/3703249.png",
    description:
      "Festivals are myriad celebrations, each a unique form of joy. Explore the diverse world of festivities – a realm of celebration.",
  },
];

const ComplimentaryServices = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 uppercase">
        Complimentary Astrology Services
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition relative"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-400 rounded-full p-5 w-20 h-20 flex items-center justify-center">
                <img src={service.icon} alt={service.title} className="w-10 h-10" />
              </div>
            </div>
            <h3 className="text-md font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>

            {/* yellow bottom line to match screenshot */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400 rounded-b-xl" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComplimentaryServices;
