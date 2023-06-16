import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import Register from "./Register";
import Header from './Header';
import { PostContext } from "../contexts/PostContext";
import { BACKEND_URI } from "../config";

const HomePage = () => {
  const [user, setUser] = useState();
  const [d, toggleD] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    () =>
      async function () {
        if (
          localStorage.theme === "light" ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
          document.documentElement.classList.add("light");
        } else {
          document.documentElement.classList.remove("light");
        }

        try {
          const res = axios.get(`${BACKEND_URI}/api/v1/posts`, {
            withCredentials: true,
          });

          const resPosts = await res;
          setPosts(resPosts.data.data.posts);
          setLoading(false);

          const data = axios.get(`${BACKEND_URI}/api/v1/users/me`, {
            withCredentials: true,
          });

          const dataUser = await data;
          setLoading(false);
          setUser(dataUser.data.data);
        } catch (err) {
          console.log(err.response);
          setLoading(false);
        }
      },
    []
  );

  return (
    <PostContext.Provider value={{ posts, setPosts, loading }}>
        <UserContext.Provider value={{ user, setUser, d, toggleD }}>
          
          {d && <Register />}
          <>
            {!loading && (
                <div className="w-full fixed top-0 left-0 border-b-2 border-blue-400">
                  <Header />
                </div>
              )}
            <div className="container mx-auto p-8">
              <h1 className="text-3xl font-semibold mb-4">Welcome to the Government Forum</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 mt-8 rounded-lg shadow-md hover:bg-blue-600">
                Create New Issue
              </button>
            </div>
          </>
          </UserContext.Provider>
    </PostContext.Provider>
  );
};

export default HomePage;
