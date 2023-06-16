import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
  const { toggleD, d, user } = useContext(UserContext);
  const handleLogin = (e) => {
    toggleD(() => !d);
  };
  return (
    <header className="bg-blue-500 py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold">Government Forum</div>
        <nav>
          {!user ? (
            <button
              className="bg-blue-500 text-white font-medium border-b-2 border-transparent py-1 px-3 rounded-full hover:bg-blue-600"
              onClick={() => handleLogin("register")}
            >
              Log In
            </button>
          ) : (
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-white hover:text-blue-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/issue" className="text-white hover:text-blue-200">
                  Forum
                </a>
              </li>
              <li>
                <a href="!#" className="text-white hover:text-blue-200">
                  About
                </a>
              </li>
              <li>
                <a href="!#" className="text-white hover:text-blue-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="/register" className="text-white hover:text-blue-200">
                  Login/Register
                </a>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
