import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Card } from 'flowbite-react';

export default function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Navbar className="border-b-2 header">
      {" "}
      <Link
        to="/"
        className="flex items-center font-serif text-3xl font-bold text-gray-800"
      >
        <span className="text-pink-500">L</span>
        <span>a</span>
        <span className="text-pink-500">z</span>
        <span>z</span>
        <span className="text-pink-500">y</span>
        <span className="ml-1">Code</span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        {" "}
        {/* Updated responsive classes */}
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">{currentUser.email}</span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item>Sign Out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/login">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {" "}
        {/* Collapsible Navbar section */}
        <Navbar.Link active={path === "/"} as={"div"} className="relative">
          <Link
            to="/"
            className="block py-2 px-4 text-gray-800 hover:text-blue-600 transition duration-300"
          >
            Home
          </Link>
          {path === "/" && (
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600"></div>
          )}
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"} className="relative">
          <Link
            to="/about"
            className="block py-2 px-4 text-gray-800 hover:text-blue-600 transition duration-300"
          >
            About
          </Link>
          {path === "/about" && (
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600"></div>
          )}
        </Navbar.Link>
        <Navbar.Link
          active={path === "/projects"}
          as={"div"}
          className="relative"
        >
          <Link
            to="/projects"
            className="block py-2 px-4 text-gray-800 hover:text-blue-600 transition duration-300"
          >
            Projects
          </Link>
          {path === "/projects" && (
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600"></div>
          )}
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

// 🚀 Master React In 20 Days 🚀

// Are you ready to level up your React skills? Join me on a 20-day journey to become a React master! Here's how we'll do it:

// 📅 Day 1-5: Foundations

// 📚 Dive into React fundamentals, including JSX, components, props, and state.
// 🧱 Build small projects to solidify your understanding of React basics.

// 🔧 Day 6-10: Advanced Concepts

// 🔄 Explore advanced topics like hooks, context API, and lifecycle methods.
// 🚀 Implement complex state management solutions using Redux or Context API.

// 💻 Day 11-15: Project Time

// 🛠️ Work on real-world projects to apply what you've learned.
// 🌐 Build interactive web applications with React, integrating APIs and handling user inputs.

// 🚀 Day 16-20: Optimization and Deployment

// ⚙️ Learn optimization techniques to improve performance.
// 🚀 Deploy your React applications to hosting services like Netlify or Vercel for the world to see.

// By the end of this 20-day journey, you'll have the skills and confidence to tackle any React project that comes your way!

// Let's embark on this exciting learning adventure together. Are you in?

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Follow Saurabh Pandey For More ✨
// Follow Saurabh Pandey For More ✨

// For Job Opportunities & Resources ✨
// Join Our Network Link In Comments 💬

// Source :- Thanks To BossCoder Academy ✅
// Learn More From W3Schools.com ⭐
