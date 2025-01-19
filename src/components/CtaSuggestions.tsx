import React from "react";
import { Sparkle } from "lucide-react";

// Define the props interface
interface CtaSuggestionsProps {
  ctaSuggestions: string[]; // Array of CTA suggestions
}

const CtaSuggestions: React.FC<CtaSuggestionsProps> = ({ ctaSuggestions }) => {
    console.log(ctaSuggestions)
  return (
    <div className="from-blue-500 via-purple-600 to-pink-600">
      <div className="mt-12 mx-auto max-w-3xl bg-[#1a1a1a] text-white p-5 rounded-xl border-4 border-[#00FF00] shadow-[0px_0px_10px_#00FF00, 0px_0px_40px_#00FF00] hover:scale-105 transition-transform transform">
        <div className="text-2xl font-extrabold mb-6 flex items-center gap-2">
          <Sparkle className="text-[#00FF00]" />
          Call to Action Suggestions
        </div>
        <ul className="space-y-4 text-xl font-semibold">
          {ctaSuggestions.map((cta, index) => (
            <li key={index} className="flex items-start">
              <span className="text-xl mr-3 text-[#00FF00]">•</span>
              <span>{cta}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CtaSuggestions;
