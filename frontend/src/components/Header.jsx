import React from 'react';
import { Search as SearchIcon, Brightness4, Brightness7 } from '@mui/icons-material';
import { Typography, Button } from '@mui/material';

const Header = () => {
    // Placeholder function for theme toggle
    const toggleTheme = () => {
      console.log('Theme toggled');
    };
  
    return (
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Typography variant="h6">
            <span className="text-red-500">L</span>
            <span className="text-blue-500">a</span>
            <span className="text-yellow-500">z</span>
            <span className="text-green-500">z</span>
            <span className="text-purple-500">y</span> 
            <span className="text-pink-500">C</span>
            <span className="text-indigo-500">o</span>
            <span className="text-orange-500">d</span>
            <span className="text-teal-500">e</span>
          </Typography>
          <div className="ml-10 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon style={{ color: "gray" }} />
            </div>
            <input
              className="bg-gray-700 text-white pl-10 p-2 rounded-md"
              placeholder="Search..."
            />
          </div>
        </div>
        <nav>
          <Typography variant="button">
            <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
          </Typography>
          <Typography variant="button">
            <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
          </Typography>
          <Typography variant="button">
            <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
          </Typography>
          <Typography variant="button">
            <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Pages</a>
          </Typography>
        </nav>
        <div>
          <Button onClick={toggleTheme}>
            <Brightness4 style={{ color: "white" }} />
          </Button>
          <Typography variant="button">
            <a href="#" className="ml-4 px-3 py-2 bg-gray-900 text-white rounded-md text-sm font-medium">Sign In</a>
          </Typography>
        </div>
      </header>
    );
};

export default Header; // Ensure default export
