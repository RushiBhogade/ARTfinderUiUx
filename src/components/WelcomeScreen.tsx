import React from "react";
import { Heart, Shield, Globe, ArrowRight } from "lucide-react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  
  const handleStart = async () => {
    try {
      // Set a flag in AsyncStorage to indicate the start action
      await AsyncStorage.setItem('isStarted', 'true');
      // Trigger the onStart function if provided
      onStart();
    } catch (error) {
      console.error("Error saving to AsyncStorage: ", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-white">
      <div className="max-w-4xl w-full bg-white border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] p-10 transform hover:translate-y-2 transition-all">
        {/* Header Section */}
        <div className="flex items-center gap-6 mb-12">
          <h1 className="text-7xl font-extrabold text-black tracking-widest bg-transparent border-b-4 border-yellow-500 inline-block p-4 transform">
            ART FINDER
          </h1>
          <div className="text-2xl font-bold text-black tracking-wide py-2 px-6 bg-transparent border-2 border-yellow-500">
            Tech for Good
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="border-4 border-black p-6 bg-white hover:bg-gray-100 transform transition duration-300">
            <Heart className="w-10 h-10 mb-4 text-black" />
            <h3 className="font-semibold mb-4 text-black">Kindness First</h3>
            <p className="text-base text-gray-800">
              Building technology that promotes compassion and understanding
            </p>
          </div>
          <div className="border-4 border-black p-6 bg-white hover:bg-gray-100 transform transition duration-300">
            <Shield className="w-10 h-10 mb-4 text-black" />
            <h3 className="font-semibold mb-4 text-black">Fight Social Injustice</h3>
            <p className="text-base text-gray-800">
              Using AI to identify and address social inequalities
            </p>
          </div>
          <div className="border-4 border-black p-6 bg-white hover:bg-gray-100 transform transition duration-300">
            <Globe className="w-10 h-10 mb-4 text-black" />
            <h3 className="font-semibold mb-4 text-black">Global Impact</h3>
            <p className="text-base text-gray-800">
              Creating positive change through innovative solutions
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-12 text-center text-black text-lg">
          <p className="font-semibold text-lg">Crafted with Care by:</p>
          <div className="flex flex-wrap justify-center gap-10 mt-6">
            <a
              href="https://www.findcoder.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-yellow-500 font-medium"
            >
              FindCoder
            </a>
            <a
              href="https://aws.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-yellow-500 font-medium"
            >
              AWS
            </a>
            <a
              href="https://www.langflow.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-yellow-500 font-medium"
            >
              Langflow
            </a>
            <a
              href="https://neusec.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-yellow-500 font-medium"
            >
              NeuSec
            </a>
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={handleStart}  // Use the modified function to save to AsyncStorage
          className="bg-yellow-500 text-black text-lg px-8 py-4 mt-8 flex items-center gap-4 hover:bg-yellow-400 transform transition-all duration-300 border-2 border-black"
        >
          START MAKING AN IMPACT
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
