import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react'; // Assuming you're using Flowbite for styling
import logo from '../assets/Logo/logo.png'; // Importing the logo image

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Logo and Description Side */}
      <div className="md:w-1/2 lg:w-2/5 bg-gradient-to-br from-purple-600 to-pink-500 flex flex-col justify-center items-center px-5 py-10">
        <img src={logo} alt="Logo" className="mb-5 w-32 h-32 rounded-full border-4 border-white" />
        <h1 className="text-white text-center text-2xl md:text-3xl lg:text-4xl font-bold">Welcome to Our Service</h1>
        <p className="text-white text-center mt-2 mb-6">Sign up to get started!</p>
      </div>
      
      {/* Sign Up Form Side */}
      <div className="flex-1 flex flex-col justify-center items-center px-5 py-10">
        <form className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-center text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-6">Sign Up</h2>
          <div className="mb-6">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-800">Username</label>
            <input type="text" id="username" className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-3" placeholder="Username" required />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800">Email</label>
            <input type="email" id="email" className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-3" placeholder="example@gmail.com" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-800">Password</label>
            <input type="password" id="password" className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-3" placeholder="Password" required />
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit' className="w-full mb-3">
            Sign Up
          </Button>
          <div className='text-center'>
            <span className='text-gray-600'>Already have an account?</span>
            <Link to='/signin' className='text-blue-500 ml-1'>Login Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
