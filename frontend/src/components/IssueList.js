import React, { useContext } from "react";
import { PostContext } from "../contexts/PostContext";
import Issue from "./Issue";

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
          <Issue 
          key={issue.id}
            id={issue.id}
            author={issue.author.name}
            authorimg={issue.author.photo}
            authorid={issue.author.id}
            caption={issue.caption}
            upvotes={issue.likeCount}
          />
        ))}
      </div>
    )}
  </div>
  );
};

export default IssueList;