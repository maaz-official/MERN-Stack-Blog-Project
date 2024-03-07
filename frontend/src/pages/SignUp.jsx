import React from 'react';

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Logo and Description Side */}
      <div className="md:w-1/2 lg:w-2/5 bg-blue-500 flex flex-col justify-center items-center px-5 py-10">
        <img src="path/to/your/logo.png" alt="Logo" className="mb-5 w-32 h-32" />
        <p className="text-white text-center text-xl md:text-2xl lg:text-3xl">Welcome to Our Service</p>
        <p className="text-white text-center mt-3">Sign up to get started!</p>
      </div>
      
      {/* Sign Up Form Side */}
      <div className="flex-1 flex flex-col justify-center items-center px-5 py-10">
        <form className="w-full max-w-md">
          <div className="mb-6">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
            <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Username" required />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Email Address" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Password" required />
          </div>
          <button type="submit" className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
