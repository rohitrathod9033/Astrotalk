import React from 'react';
import ComplimentaryService from './MyComponents/ComplimentaryService'; // Adjust the path as needed

const FreeKundliPage = () => {
  return (
    <div className="free-kundli-page-container">
      <h1>Free Kundli Page</h1>
      <p>This is where all the Free Kundli specific content will go.</p>

      {/* You can add more specific content for the Free Kundli page here */}
      <section className="my-8">
        <h2>Generate Your Free Kundli Now!</h2>
        {/* Placeholder for Kundli generation form or instructions */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p>Please enter your birth details to generate your personalized Kundli.</p>
          {/* Add form elements like input fields for name, date of birth, time, place */}
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Generate Kundli
          </button>
        </div>
      </section>

      {/* Render the ComplimentaryService component here */}
      <ComplimentaryService />

      {/* You can add more content below the services if needed */}
    </div>
  );
};

export default FreeKundliPage;