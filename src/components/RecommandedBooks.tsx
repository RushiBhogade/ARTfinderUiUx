import React from "react";

// Define the props interface
interface RecommendedHooksProps {
  recommendedHooks: string[]; // Array of recommended hooks (strings)
}

const RecommendedHooks: React.FC<RecommendedHooksProps> = ({ recommendedHooks }) => {
  return (
    <div className="from-blue-500 via-purple-600 to-pink-600">
      <div className="mx-auto max-w-3xl bg-[#1a1a1a] text-white p-8 rounded-xl border-4 border-[#00FF00] shadow-[0px_0px_10px_#00FF00, 0px_0px_40px_#00FF00] hover:scale-105 transition-transform transform">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white uppercase tracking-widest">
            Recommended Hooks
          </h2>
        </div>
        <div className="space-y-2">
          {recommendedHooks.map((hook, index) => (
            <div key={index} className="space-y-2">
              <p className="text-xl sm:text-1xl lg:text-3xl text-white font-regular text-center">
                {hook}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedHooks;
