import React from "react";
import { Heart, Shield, Globe, ArrowRight } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform hover:-translate-y-1 transition-transform">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-7xl font-black bg-yellow-400 inline-block p-4 transform -rotate-2">
            ART FINDER
          </h1>
          <div className="text-xl font-bold bg-green-400 p-2 transform rotate-2">
            Tech for Good
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="border-4 border-black p-4 bg-pink-100">
            <Heart className="w-8 h-8 mb-2" />
            <h3 className="font-bold mb-2">Kindness First</h3>
            <p className="text-sm">Building technology that promotes compassion and understanding</p>
          </div>
          <div className="border-4 border-black p-4 bg-blue-100">
            <Shield className="w-8 h-8 mb-2" />
            <h3 className="font-bold mb-2">Fight Social Injustice</h3>
            <p className="text-sm">Using AI to identify and address social inequalities</p>
          </div>
          <div className="border-4 border-black p-4 bg-green-100">
            <Globe className="w-8 h-8 mb-2" />
            <h3 className="font-bold mb-2">Global Impact</h3>
            <p className="text-sm">Creating positive change through innovative solutions</p>
          </div>
        </div>

        <button
          onClick={onStart}
          className="bg-black text-white text-xl px-8 py-4 flex items-center gap-2 hover:bg-gray-800 transform hover:translate-x-1 transition-all border-2 border-black"
        >
          START MAKING AN IMPACT
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
