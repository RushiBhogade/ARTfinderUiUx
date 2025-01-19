import React from "react";


// Define the structure of a single key trigger
interface KeyTrigger {
  icon: React.ReactNode; // Icon element
  title: string; // Title of the trigger
  description: string; // Description of the trigger
}

// Define the props interface for the component
interface KeyTriggersProps {
  keyTriggers: KeyTrigger[]; // Array of key triggers
}

const KeyTriggers: React.FC<KeyTriggersProps> = ({ keyTriggers }) => {
  return (
    <div className="min-h-screen from-blue-500 via-purple-600 to-pink-600 p-8">
      <div className="mt-12 mx-auto max-w-3xl bg-[#1a1a1a] text-white p-8 rounded-xl border-4 border-[#00FF00] shadow-[0px_0px_10px_#00FF00, 0px_0px_40px_#00FF00] hover:scale-105 transition-transform transform">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white uppercase tracking-widest">
            Key Triggers
          </h2>
        </div>
        <div className="space-y-6">
          {keyTriggers.map((trigger, index) => (
            <div key={index} className="space-y-4">
              <div className="text-2xl font-extrabold mb-4 flex items-center gap-2">
                {trigger.icon}
                {trigger.title}
              </div>
              <p className="text-xl">{trigger.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyTriggers;
