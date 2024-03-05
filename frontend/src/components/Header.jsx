import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 header">
      {" "}
      {/* Added 'header' class */}
      <Link
        to="/"
        className="flex items-center font-serif text-3xl font-bold text-gray-800"
      >
        <span className="text-yellow-500">L</span>
        <span>a</span>
        <span className="text-red-500">z</span>
        <span>z</span>
        <span className="text-green-500">y</span>
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
        <Link to="/signin">
          <Button gradientDuoTone="purpleToBlue">Sign In</Button>
        </Link>
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
