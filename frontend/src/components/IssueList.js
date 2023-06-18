import React, { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

const IssueList = () => {
  const { posts, loading } = useContext(PostContext);

  return (
    <div>
    {loading ? (
      <div className="flex justify-center items-center h-screen">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gray-600 rounded-full animate-bounce dark:bg-gray-100"></div>
          <div className="w-6 h-6 bg-gray-600 rounded-full animate-bounce dark:bg-gray-100" style={{animationDelay: "75ms"}}></div>
          <div className="w-6 h-6 bg-gray-600 rounded-full animate-bounce  dark:bg-gray-100" style={{animationDelay: "150ms"}}></div>
        </div>
      </div>
    ) : (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-4">Issue List</h1>
        {posts.map((issue) => (
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
    )}
  </div>
  );
};

export default IssueList;