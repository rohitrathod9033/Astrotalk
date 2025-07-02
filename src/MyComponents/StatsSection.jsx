import React from "react";

const stats = [
  {
    value: "45,575+",
    label: "Total Astrologers",
  },
  {
    value: "1326 Million Minutes",
    label: "Total Chat/Call Minutes",
  },
  {
    value: "96.4 Million",
    label: "Total Customers",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-gradient-to-b from-yellow-400 to-black py-3 text-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((item, index) => (
          <div key={index}>
            <h3 className="text-3xl md:text-4xl mb-5">{item.value}</h3>
            <p className="text-sm md:text-base text-white/80">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
