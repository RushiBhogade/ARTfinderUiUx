import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the navigate hook

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook to redirect to sign-in page

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-up logic here
    // You can store the user info or authentication token in AsyncStorage or make an API call
    alert("Account created successfully!");
    navigate("/signin"); // Redirect to the SignIn page after successful sign-up
  };

  const handleSignInRedirect = () => {
    navigate("/"); // Redirect to the SignIn page
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-white">
      <div className="max-w-md w-full bg-white border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] p-10 transform hover:translate-y-2 transition-all">
        <h1 className="text-5xl font-extrabold text-black mb-6 text-center">Sign Up</h1>

        <form onSubmit={handleSignUp} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-black font-semibold">Email</label>
            <input
              type="email"
              value={email}
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
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-black">
          Already have an account?{" "}
          <span
            onClick={handleSignInRedirect}
            className="text-yellow-500 hover:text-yellow-400 font-semibold cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
