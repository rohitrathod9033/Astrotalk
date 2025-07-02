// src/pages/FreeKundliPage.jsx
import React from 'react';

const FreeKundliPage = () => (
  <>
  <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Main Title Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight rounded-lg p-2">
          Free Kundli Online
        </h1>
        <p className="mt-2 text-xl sm:text-2xl text-gray-600 rounded-lg p-1">
          Get instant & accurate, Janam Kundli
        </p>
      </header>

      {/* Container for Logo and Line - allows positioning the line behind the logo */}
   <div className="relative flex items-center justify-center mb-8">
  {/* Image container */}
  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg relative z-10 overflow-hidden">
    <img
      src="https://aws.astrotalk.com/assets/images/astrotalk-mini-logo.webp" // Replace with your image path
      alt="Kundli Icon"
      className="w-8 h-8 object-contain"
    />
  </div>

  {/* Line behind logo */}
  <div className="absolute w-64 h-0.5 bg-gray-300 rounded-full z-0"></div>
</div>

      {/* Content Section (Heading - remains outside the box) */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 leading-relaxed text-center max-w-4xl w-full mb-8">
        Free Kundli Online - Get Your Detailed Birth Chart with Predictions
      </h2>

      {/* Content Section (Paragraph - remains outside the container) */}
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify max-w-4xl w-full mb-12">
        Looking for your free Kundli from expert astrologers? Then you have come to the right place. The online free kundali available on Astrotalk is a 100% free and authentic free Kundli that has been prepared after consulting more than 50 expert astrologers on board. The free kundli is such that it can give you a glimpse into various aspects of your life such as your career, love life, marriage, business and much more. The online kundli prepared by the free Kundali software here is no less than any traditional Kundli and can also be used for purposes like matching making, kundali matching for marriage or simply making future predictions.
      </p>

      {/* New Kundli and Saved Kundli Sections */}
      {/* Increased max-width from max-w-5xl to max-w-7xl */}
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl w-full">
        {/* New Kundli Section */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">New Kundli</h3>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Name*</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-gray-700 text-sm font-medium mb-1">Gender*</label>
              <select
                id="gender"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="text-gray-700 text-sm font-medium mb-1">Birth Details</div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label htmlFor="day" className="block text-gray-700 text-xs font-medium mb-1">Day*</label>
                <select
                  id="day"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  {[...Array(31)].map((_, i) => <option key={i + 1}>{i + 1}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="month" className="block text-gray-700 text-xs font-medium mb-1">Month*</label>
                <select
                  id="month"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => <option key={i}>{month}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="year" className="block text-gray-700 text-xs font-medium mb-1">Year*</label>
                <select
                  id="year"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  {[...Array(100)].map((_, i) => <option key={1925 + i}>{1925 + i}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label htmlFor="hour" className="block text-gray-700 text-xs font-medium mb-1">Hour*</label>
                <select
                  id="hour"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  {[...Array(24)].map((_, i) => <option key={i}>{i.toString().padStart(2, '0')}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="minute" className="block text-gray-700 text-xs font-medium mb-1">Minute*</label>
                <select
                  id="minute"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  {[...Array(60)].map((_, i) => <option key={i}>{i.toString().padStart(2, '0')}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="second" className="block text-gray-700 text-xs font-medium mb-1">Second</label>
                <select
                  id="second"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  {[...Array(60)].map((_, i) => <option key={i}>{i.toString().padStart(2, '0')}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="birthPlace" className="block text-gray-700 text-sm font-medium mb-1">Birth Place*</label>
              <input
                type="text"
                id="birthPlace"
                placeholder="Enter your birth place"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-gray-800 text-white font-semibold rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Generate Horoscope
            </button>
          </form>
        </div>

        {/* Saved Kundli Section */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg flex-1 flex flex-col items-center justify-center text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">Saved Kundli</h3>
          <p className="text-gray-700 text-lg mb-6">
            Please login to check your saved horoscope!
          </p>
          <button
            type="button"
            className="flex items-center justify-center gap-2 py-2 px-6 bg-yellow-400 text-yellow-900 font-semibold rounded-full shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            {/* User Icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.438-.695Z"
                clipRule="evenodd"
              />
            </svg>
            Login
          </button>
        </div>
      </div>
    </div>
  </>
);

export default FreeKundliPage;