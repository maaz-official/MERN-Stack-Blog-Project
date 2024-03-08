import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice.js";

export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const {theme} = useSelector((state) => state.theme); 

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
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill onClick={()=>dispatch(toggleTheme())}>
          {theme === 'light' ? <FaSun /> : <FaMoon />}
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