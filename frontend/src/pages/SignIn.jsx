import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button } from "flowbite-react"; // Assuming you're using Flowbite for styling
import logo from "../assets/Logo/logo.png"; // Importing the logo image

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage("Please fill in all the fields");
    }
    setLoading(true);
    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      console.log("Signin successful");
      // Redirect to dashboard or any other page after successful signin
      navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row p-1">
      {/* Logo and Description Side */}
      <div className="md:w-1/2 lg:w-2/5 bg-gradient-to-br from-purple-600 to-pink-500 flex flex-col justify-center items-center px-5 py-10 rounded-lg">
        <img
          src={logo}
          alt="Logo"
          className="mb-5 w-32 h-32 rounded-full border-4 border-white"
        />
        <h1 className="text-white text-center text-2xl md:text-3xl lg:text-4xl font-bold">
          Welcome Back!
        </h1>
        <p className="text-white text-center mt-2 mb-6">
          Sign in to continue.
        </p>
      </div>

      {/* Sign In Form Side */}
      <div className="flex-1 flex flex-col justify-center items-center px-5 py-10">
        <form
          className="w-full max-w-md bg-white rounded-lg shadow-lg p-8"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-6">
            Sign In
          </h2>
          {errorMessage && (
            <div className="text-red-500 mb-6">{errorMessage}</div>
          )}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-3"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-3"
              placeholder="Password"
              required
            />
          </div>
          <Button
            gradientDuoTone="purpleToPink"
            type="submit"
            disabled={loading}
            className="w-full mb-3"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="mr-2 border-t-2 border-b-2 border-white w-4 h-4 animate-spin"></div>
                <span>Signing In...</span>
              </div>
            ) : (
              "Sign In"
            )}
          </Button>
          <div className="text-center">
            <span className="text-gray-600">Don't have an account?</span>
            <Link to="/signup" className="text-blue-500 ml-1">
              Sign Up Here
            </Link>
          </div>
        </form>
        {errorMessage && (
          <Alert className="mt-5" color="danger">
            {errorMessage}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default SignIn;
