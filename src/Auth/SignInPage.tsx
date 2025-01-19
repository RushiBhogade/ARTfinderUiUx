import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { postData } from "../apiService";


const SignInPage: React.FC = () => {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook to redirect after login

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = { username, password };

    try {
      // Call the API for sign-in
      const response = await postData('login', userData);

      if (response.access_token) {
        // Store authentication token (JWT) and user info in AsyncStorage
        await AsyncStorage.setItem("email", username);
        await AsyncStorage.setItem("password", password);
        await AsyncStorage.setItem("isAuthenticated", "true");
        await AsyncStorage.setItem("isStarted", "true");
        await AsyncStorage.setItem("jwt_token", response.access_token);

 

        alert("Login successful");
        window.location.reload(); // Refresh the page
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      alert("An error occurred while signing in. Please try again.");
    }
  };

  const handleSignUpRedirect = () => {
    navigate("/signup"); // Redirect to the SignUp page
  };

  return (
    <div className="flex flex-1 min-h-screen flex items-center justify-center p-8 bg-white">
      <div className="max-w-md w-full bg-white border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] p-10 transform hover:translate-y-2 transition-all">
        <h1 className="text-5xl font-extrabold text-black mb-6 text-center">Sign In</h1>

        <form onSubmit={handleSignIn} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-black font-semibold">Email</label>
            <input
              type="email"
              value={username}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border-4 border-black bg-white text-black rounded-md focus:outline-none focus:border-yellow-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-black font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border-4 border-black bg-white text-black rounded-md focus:outline-none focus:border-yellow-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black text-lg py-4 rounded-md hover:bg-yellow-400 transition-all duration-300 border-2 border-black"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-black">
          Don't have an account?{" "}
          <span
            onClick={handleSignUpRedirect}
            className="text-yellow-500 hover:text-yellow-400 font-semibold cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
