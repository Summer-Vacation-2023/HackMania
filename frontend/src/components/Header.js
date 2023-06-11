import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold">Government Forum</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white hover:text-blue-200">Home</a>
            </li>
            <li>
              <a href="/issue" className="text-white hover:text-blue-200">Forum</a>
            </li>
            <li>
              <a href="!#" className="text-white hover:text-blue-200">About</a>
            </li>
            <li>
              <a href="!#" className="text-white hover:text-blue-200">Contact</a>
            </li>
            <li>
              <a href="!#" className="text-white hover:text-blue-200">Login/Register</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
