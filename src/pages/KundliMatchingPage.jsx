// src/pages/KundliMatchingPage.jsx
import React from "react";

const KundliMatchingPage = () => (
  <>
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-white py-6 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800">Kundli Matching</h1>
          <p className="mt-2 text-gray-600">
            Find your right one, through matchmaking
          </p>
          <div className="mt-4">
            <img
              src="https://aws.astrotalk.com/assets/images/astrotalk-mini-logo.webp"
              alt="Logo"
              className="mx-auto h-16 w-16"
            />{" "}
            {/* Replace with your logo path */}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Free Match Making - Kundli Milan & Gun Milan to Check Possibilities
            of Marriage
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Kundli milan or kundali matching is an important consideration to
            make when you decide to get married. Kundli matching, also called
            Gun matching or Horoscope matching is the first step towards
            marriage when the parents decide to match the kundlis of the girl
            and the boy to ensure the couple is compatible. The gun milan
            exercise has been a part of India's culture for 1000s of years now
            and continues to be so.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Fill Up Partner's Detail Section */}
          <section className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Fill Up Partner's Detail
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Boy's Detail */}
              <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  Boy's Detail
                </h3>
                <div className="mb-4">
                  <label
                    htmlFor="boyName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="boyName"
                    placeholder="Enter name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Birth Details
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <select className="p-2 border border-gray-300 rounded-md">
                      {[...Array(31).keys()].map((i) => (
                        <option key={`boy-day-${i + 1}`} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    <select className="p-2 border border-gray-300 rounded-md">
                      {[
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ].map((month, index) => (
                        <option key={`boy-month-${month}`} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                    <select className="p-2 border border-gray-300 rounded-md">
                      {[...Array(40).keys()].map((i) => (
                        <option key={`boy-year-${1980 + i}`} value={1980 + i}>
                          {1980 + i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Hour
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <select className="p-2 border border-gray-300 rounded-md">
                      {[...Array(24).keys()].map((i) => (
                        <option key={`boy-hour-${i}`} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Minute
                    </label>
                    <select className="p-2 border border-gray-300 rounded-md">
                      {[...Array(60).keys()].map((i) => (
                        <option key={`boy-minute-${i}`} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Second
                    </label>
                    <select className="p-2 border border-gray-300 rounded-md">
                      {[...Array(60).keys()].map((i) => (
                        <option key={`boy-second-${i}`} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="boyBirthPlace"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Birth Place
                  </label>
                  <input
                    type="text"
                    id="boyBirthPlace"
                    defaultValue="New Delhi, Delhi, India"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
              </div>

              {/* Girl's Detail */}
              <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  Girl's Detail
                </h3>
                <div className="mb-4">
                  <label
                    htmlFor="girlName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="girlName"
                    placeholder="Enter name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Birth Details
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <select className="p-2 border border-gray-300 rounded-md">
                      {[...Array(31).keys()].map((i) => (
                        <option key={`girl-day-${i + 1}`} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    <select className="p-2 border border-gray-300 rounded-md">
                      {[
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ].map((month, index) => (
                        <option key={`girl-month-${month}`} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                    <select className="p-2 border border-gray-300 rounded-md">
                      {[...Array(40).keys()].map((i) => (
                        <option key={`girl-year-${1992 + i}`} value={1992 + i}>
                          {1992 + i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Hour
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <select className="p-2 border border-gray-300 rounded-md">
                      {[...Array(24).keys()].map((i) => (
                        <option key={`girl-hour-${i}`} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Minute
                    </label>
                    <select className="p-2 border border-gray-300 rounded-md">
                      {[...Array(60).keys()].map((i) => (
                        <option key={`girl-minute-${i}`} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Second
                    </label>
                    <select className="p-2 border border-gray-300 rounded-md">
                      {[...Array(60).keys()].map((i) => (
                        <option key={`girl-second-${i}`} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="girlBirthPlace"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Birth Place
                  </label>
                  <input
                    type="text"
                    id="girlBirthPlace"
                    defaultValue="New Delhi, Delhi, India"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button className="bg-gray-800 text-white py-3 px-8 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                Match Horoscope
              </button>
            </div>
          </section>

          {/* Saved Matches Section */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Saved Matches
            </h2>
            <div className="text-center py-10 border border-dashed border-gray-300 rounded-md">
              <p className="text-gray-500 mb-4">
                Please login to check your saved horoscope!
              </p>
              <button className="bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 flex items-center justify-center mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                login
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  </>
);

export default KundliMatchingPage;
