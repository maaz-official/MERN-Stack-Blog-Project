import React from "react";
import { Footer } from "flowbite-react"; // Importing Footer from Flowbite
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaGit } from "react-icons/fa";
import logo from "../assets/Logo/logo.png";

const CustomFooter = () => {
  return (
    <Footer className="border border-t-8 border-teal-500 bg-white-800 text-gray py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Logo and About Section */}
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="Logo"
                className="w-12 h-12 mr-2 rounded-full"
              />
              <p className="text-lg font-semibold">About Us</p>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              gravida turpis nec velit dictum, ut fermentum justo posuere.
            </p>
          </div>

          {/* Follow Us Section */}
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <p className="text-lg font-semibold mb-2">Follow Us</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-black">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-black">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-black">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-black">
                <FaGit />
              </a>
            </div>
          </div>

          {/* Legal Section */}
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <p className="text-lg font-semibold mb-2">Legal</p>
            <ul>
              <li>
                <Link to="/privacy" className="hover:text-gray-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-gray-400">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t-2 border-gray-700 pt-6 flex justify-between">
          <p>&copy; {new Date().getFullYear()} All rights reserved by @Lazzy Code</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-black">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-black">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-black">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;
