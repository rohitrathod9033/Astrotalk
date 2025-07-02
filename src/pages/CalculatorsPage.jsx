import React, { useState } from 'react';

const CalculatorsPage = () => {
  const [yourName, setYourName] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [yourGender, setYourGender] = useState('');
  const [partnerGender, setPartnerGender] = useState('');
  const [lovePercentage, setLovePercentage] = useState(null);

  const calculateLove = () => {
    if (!yourName.trim() || !partnerName.trim()) {
      alert('Please enter both your name and your partner\'s name to calculate love percentage.');
      setLovePercentage(null); // Clear previous result if inputs are empty
      return;
    }

    // A more "fun" (but still not scientific) way to calculate love percentage.
    // This is purely for demonstration purposes and can be replaced with any logic.
    // We'll combine the names and then use a simple hash-like method.
    const combinedNames = (yourName.toLowerCase() + partnerName.toLowerCase()).replace(/\s/g, ''); // Remove spaces
    let sum = 0;
    for (let i = 0; i < combinedNames.length; i++) {
      sum += combinedNames.charCodeAt(i);
    }

    // A more dynamic way to get a percentage between 40% and 100% for a "positive" feel.
    // Adjust the offset and multiplier as you like.
    let percentage = (sum % 61) + 40; // Ensures a percentage between 40 and 100

    // Add a slight variance based on gender (just for fun, no real basis)
    if (yourGender === 'Male' && partnerGender === 'Female') {
      percentage = Math.min(100, percentage + 5);
    } else if (yourGender === 'Female' && partnerGender === 'Male') {
      percentage = Math.min(100, percentage + 3);
    } else if (yourGender && partnerGender && yourGender === partnerGender) {
        percentage = Math.max(10, percentage - 10); // A bit lower for same gender (arbitrary)
    }

    setLovePercentage(percentage);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="py-8 bg-white shadow-sm">
        <h1 className="text-4xl font-bold text-center text-gray-800">Love Calculator</h1>
        <div className="flex justify-center mt-4">
          {/* A placeholder for the icon from the screenshot */}
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-3xl">❤️</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6 md:p-12">
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Love Meter To Calculate Love Percentage</h2>
          <p className="text-gray-600 leading-relaxed">
            Are you eager to unravel the love mysteries of your future? Wondering if your love life's challenges will melt away like a morning mist?
            This exceptional Love Calculator offers you an extraordinary solution. Simply enter your names and let the magic unfold before your eyes.
            Whether you're starry-eyed lovers, inseparable soulmates, or kindred spirits waiting to collide, this love calculator will paint a vivid
            picture of your compatibility.
          </p>
        </section>

        <div className="flex flex-col lg:flex-row gap-8">
          <section className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Find Love (Percentage)% Between</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="yourName" className="block text-lg font-medium text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="yourName"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter Your Name"
                  value={yourName}
                  onChange={(e) => setYourName(e.target.value)}
                />
                <div className="flex gap-4 mt-4">
                  <button
                    className={`flex-1 py-2 px-4 rounded-md font-medium ${yourGender === 'Male' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    onClick={() => setYourGender('Male')}
                  >
                    Male
                  </button>
                  <button
                    className={`flex-1 py-2 px-4 rounded-md font-medium ${yourGender === 'Female' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    onClick={() => setYourGender('Female')}
                  >
                    Female
                  </button>
                </div>
              </div>

              {/* Heart icon positioning updated to be more inline with the design, centered */}
              <div className="flex items-center justify-center -order-1 md:order-none"> {/* Use -order-1 for mobile, order-none for larger screens */}
                <span className="text-red-500 text-4xl mr-2">❤️</span>
              </div>

              <div>
                <label htmlFor="partnerName" className="block text-lg font-medium text-gray-700 mb-2">Partner's Name</label>
                <input
                  type="text"
                  id="partnerName"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter Partner's Name"
                  value={partnerName}
                  onChange={(e) => setPartnerName(e.target.value)}
                />
                <div className="flex gap-4 mt-4">
                  <button
                    className={`flex-1 py-2 px-4 rounded-md font-medium ${partnerGender === 'Male' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    onClick={() => setPartnerGender('Male')}
                  >
                    Male
                  </button>
                  <button
                    className={`flex-1 py-2 px-4 rounded-md font-medium ${partnerGender === 'Female' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    onClick={() => setPartnerGender('Female')}
                  >
                    Female
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out"
                onClick={calculateLove}
              >
                Calculate Love%
              </button>
            </div>

            {lovePercentage !== null && (
              <div className="mt-8 text-center">
                <p className="text-3xl font-extrabold text-green-700 animate-pulse">
                  Your Love Percentage: {lovePercentage}%
                </p>
                {lovePercentage >= 80 && (
                  <p className="text-xl text-green-600 mt-2">A match made in heaven!</p>
                )}
                {lovePercentage < 80 && lovePercentage >= 60 && (
                  <p className="text-xl text-yellow-600 mt-2">Great potential!</p>
                )}
                {lovePercentage < 60 && lovePercentage >= 40 && (
                  <p className="text-xl text-orange-600 mt-2">There's hope!</p>
                )}
                {lovePercentage < 40 && (
                  <p className="text-xl text-red-600 mt-2">Might need some work! 😉</p>
                )}
              </div>
            )}
          </section>

          <aside className="bg-white p-8 rounded-lg shadow-lg lg:w-96 flex-shrink-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-700 mb-4">LOVE QUOTE OF THE DAY</h3>
              <p className="italic text-gray-600 text-lg">
                Together, you will build a sanctuary of love, a place where you can always find refuge.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CalculatorsPage;