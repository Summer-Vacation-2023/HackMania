// IssueList.js

import React from 'react';

const IssueList = () => {
  const issues = [
    {
      id: 1,
      title: 'Issue 1',
      upvotes: 10,
      resident: 'John Doe',
    },
    {
      id: 2,
      title: 'Issue 2',
      upvotes: 5,
      resident: 'Hajar Churasir Maa',
    },
    {
      id: 3,
      title: 'Issue 3',
      upvotes: 7,
      resident: 'Hagru Das',
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-4">Issue List</h1>
      {issues.map((issue) => (
        <div key={issue.id} className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-semibold mb-2">{issue.title}</h2>
          <p className="text-gray-500 mb-2">Posted by: {issue.resident}</p>
          <p className="text-gray-500 mb-2">Upvotes: {issue.upvotes}</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default IssueList;