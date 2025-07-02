import React, { useState } from "react";

const NumerologyCalculator = () => {
  const [formData, setFormData] = useState({
    name: "",
    day: "",
    month: "",
    year: "",
    type: "Chiero / Chaldean",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFormData({ name: "", day: "", month: "", year: "", type: "Chiero / Chaldean" });
  };

  return (
    <div className="text-gray-800">
      {/* Title & Description */}
      <div className="text-center py-10 max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Name Numerology Calculator | Accurate Name Number Calculator Online
        </h1>
        <p className="text-sm text-gray-600">
          Want to uncover the powerful secrets about your personality and life path? ALL FROM YOUR NAME? Use our free numerology calculator.
        </p>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto bg-white border shadow-sm rounded-md p-6">
        <h2 className="font-semibold mb-4 flex items-center">
          <span className="text-lg mr-2">📝</span> Enter Your Details
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name in English Only"
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Date (DD)
            </label>
            <input
              type="number"
              name="day"
              value={formData.day}
              onChange={handleChange}
              placeholder="Enter your birth date"
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Month (MM)
            </label>
            <input
              type="number"
              name="month"
              value={formData.month}
              onChange={handleChange}
              placeholder="Enter your birth month"
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Year (YYYY)
            </label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="Enter your birth year"
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option>Chiero / Chaldean</option>
            <option>Pythagorean</option>
          </select>
        </div>

        <div className="flex gap-4">
          <button className="bg-yellow-500 text-white px-6 py-2 rounded font-semibold">
            SUBMIT
          </button>
          <button
            onClick={handleReset}
            className="border border-yellow-500 text-yellow-600 px-6 py-2 rounded font-semibold"
          >
            RESET
          </button>
        </div>
      </div>

      {/* Recalculate Button */}
      <div className="text-center mt-8">
        <button className="bg-yellow-500 text-white px-6 py-2 rounded font-semibold">
          CALCULATE AGAIN
        </button>
      </div>

      {/* What Is a Numerology Calculator? */}
      <div className="max-w-3xl mx-auto mt-12 px-4">
        <h2 className="text-xl font-bold mb-4">What Is a Numerology Calculator?</h2>
        <p className="text-sm text-gray-700 mb-4">
          A numerology calculator is a tool that converts letters in your name into numbers. These numbers reveal aspects of your character, talents, and life purpose.
        </p>
        <p className="text-sm text-gray-700 mb-4">
          This ancient tool uses systems to uncover the vibrations and meanings of your name. Even if you've changed your name, each version can give deep insights.
        </p>
        <p className="text-sm text-gray-700">
          Understanding your name number helps you make better decisions about career, relationships, and growth.
        </p>
      </div>

      {/* How Does It Work? */}
      <div className="max-w-3xl mx-auto mt-12 px-4">
        <h2 className="text-xl font-bold mb-4">
          How Does a Name Numerology Calculator Work?
        </h2>
        <p className="text-sm text-gray-700 mb-4">
          Each letter in the alphabet is assigned a number. When you enter your full name, the calculator adds the numbers to reveal your numerology number.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          Pythagorean System (Western Numerology)
        </h3>
        <p className="text-sm text-gray-700 mb-2">
          The most popular system in the Western world:
        </p>
        <ul className="text-sm text-gray-700 list-disc ml-6">
          <li>1 = A, J, S</li>
          <li>2 = B, K, T</li>
          <li>3 = C, L, U</li>
          <li>4 = D, M, V</li>
          <li>5 = E, N, W</li>
          <li>6 = F, O, X</li>
          <li>7 = G, P, Y</li>
          <li>8 = H, Q, Z</li>
          <li>9 = I, R</li>
        </ul>
        <p className="text-sm text-gray-700 mt-2  mb-3">
          For example, if your name is “RUJATA”: R = 9, U = 3, J = 1, A = 1, T = 2, A = 1 → Total = 17.
        </p>
      </div>
    </div>
  );
};

export default NumerologyCalculator;
