import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const handleStart = async () => {
    try {
      await AsyncStorage.setItem("isStarted", "true");
      onStart();
    } catch (error) {
      console.error("Error saving to AsyncStorage: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-300">
      {/* Hero Section */}
      <div className="h-screen flex flex-col p-8 border-b-8 border-black">
        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 className="text-8xl md:text-9xl font-black text-black mb-8 tracking-tighter">
            HOOK
            <span className="bg-purple-600 text-white px-4">SMITH</span>
          </h1>
          <div className="bg-black text-white px-8 py-4 text-2xl font-bold transform -rotate-2">
            #TECH FOR GOOD
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={handleStart}
            className="bg-black text-white text-2xl font-bold px-12 py-6 hover:bg-purple-600 transition-colors transform hover:-translate-y-1 hover:rotate-1"
          >
           Get Started →
           <p style={{fontSize:"small"}}>Forging high-performing hooks and CTAs</p>
          </button>
          
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-12 bg-white">
  {/* Box 1 */}
  <div className="neon-border bg-yellow-400 p-8 border-8 border-black transform hover:-translate-y-2 transition-transform">
    <h3 className="text-2xl font-black mb-4 text-black">Objective</h3>
    <p className="text-lg font-bold text-black">
      Streamlining research for ad creation by automating data gathering and analysis.
    </p>
  </div>

  {/* Box 2 */}
  <div className="neon-border bg-pink-400 p-8 border-8 border-black transform hover:-translate-y-2 transition-transform">
    <h3 className="text-2xl font-black mb-4 text-black">Key Features</h3>
    <p className="text-lg font-bold text-black">
      Comprehensive research automation and actionable insights for effective ads.
    </p>
  </div>

  {/* Box 3 */}
  <div className="neon-border bg-blue-400 p-8 border-8 border-black transform hover:-translate-y-2 transition-transform">
    <h3 className="text-2xl font-black mb-4 text-black">User-Centric Interface</h3>
    <p className="text-lg font-bold text-black">
      Intuitive interface with clear input fields and visualization of insights.
    </p>
  </div>
</div>



      {/* Partners Section */}
      <div className="bg-white p-12 border-t-8 border-black">
        <h2 className="text-4xl font-black mb-12 text-center">POWERED BY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[ 
            { name: "FindCoder", bg: "bg-pink-400" },
            { name: "AWS", bg: "bg-purple-500" },
            { name: "DataStax", bg: "bg-blue-500" },
          
          ].map((partner) => (
            <div
              key={partner.name}
              className={`${partner.bg} p-8 border-4 border-black transform hover:rotate-2 transition-transform`}
            >
             
              <span className="text-2xl font-black text-black">{partner.name}</span>
            </div>
          ))}
          
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white p-8 text-center">
        <p className="text-xl font-bold">© 2025 HOOKSMITH. All rights brutally reserved.</p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
 