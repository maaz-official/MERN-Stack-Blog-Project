import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { app } from "../firebase.js";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/user/userSlice.js";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

export const OAuth = () => {
    const auth = getAuth(app);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false); // Loading state
  
    const handleGoogleClick = async () => {
      setIsLoading(true); // Start loading
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      try {
        const resultFromGoogle = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resultFromGoogle.user.displayName,
          email: resultFromGoogle.user.email,
          googlePhotoUrl: resultFromGoogle.user.photoURL,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(loginSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <Button
      onClick={handleGoogleClick} 
      gradientDuoTone="purpleToBlue" 
      outline
      disabled={isLoading} // Disable button when loading
      className="w-full" // Applying Tailwind CSS class directly if supported
    >
      {isLoading ? (
        <span>Loading...</span> // Placeholder for loading state
      ) : (
        <>
          <AiFillGoogleCircle className="w-6 h-6 mr-2" /> Sign in with Google
        </>
      )}
    </Button>
  );
};