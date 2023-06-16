import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-4">Welcome to the Government Forum</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Featured Issues</h2>
          <p className="text-gray-500 mb-4">Check out some important and popular issues of the residents.</p>
          {/* Featured */}
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Latest Issues</h2>
          <p className="text-gray-500 mb-4">Browse the most recent issues posted by residents.</p>
          {/* Latest */}
        </div>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 mt-8 rounded-lg shadow-md hover:bg-blue-600">
        Create New Issue
      </button>
    </div>
  );
};

export default HomePage;
