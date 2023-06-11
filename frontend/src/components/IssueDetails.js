// IssueDetails.js

import React from 'react';

const IssueDetails = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-4">Issue Title</h1>
      <p className="text-gray-500 mb-6">Issue description goes here</p>
      <div className="flex items-center mb-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600">
          Upvote
        </button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md ml-4">
          Edit
        </button>
      </div>
      <div className="flex items-center">
        <p className="text-gray-500 mr-2">Status:</p>
        <span className="bg-green-500 text-white py-1 px-2 rounded-lg">Completed</span>
      </div>
    </div>
  );
};

export default IssueDetails;