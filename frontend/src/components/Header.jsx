import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiSun, FiMoon } from 'react-icons/fi'; // Assuming you have imported icons from react-icons library

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You can implement logic here to toggle dark mode
  };

  return (
    <header className="bg-gray-800 text-white py-3">
      <div className="container mx-10 flex gap-20 items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Lazzy Code
        </Link>

        <div className="flex items-center justify-center mt-4 md:mt-0 md:w-1/3">
          <input
            type="text"
            placeholder="Search"
            className="px-6 py-2 w-100 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button className="ml-2">
            <FiSearch className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex justify-end w-full md:w-auto mt-4 md:mt-0 md:ml-auto">
          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-300 ml-4">
            About
          </Link>
          <Link to="/projects" className="hover:text-yellow-300 ml-4">
            Projects
          </Link>
        </nav>

        <div className="flex gap-7 ms-auto items-center mt-4 md:mt-0">
          <button onClick={toggleDarkMode} className="text-white hover:text-yellow-300">
            {darkMode ? <FiMoon className="w-6 h-6" /> : <FiSun className="w-6 h-6" />}
          </button>
          <Link to="/signin" className="bg-green-500 text-white px-4 py-2 rounded-md ml-4 md:ml-0 hover:bg-yellow-600">
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
