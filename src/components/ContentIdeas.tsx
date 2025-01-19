import { Sparkles } from "lucide-react";

interface ContentIdeasProps {
  contentIdeas: string[]; // Define contentIdeas as an array of strings
}

const ContentIdeas: React.FC<ContentIdeasProps> = ({ contentIdeas }) => { // Destructure correctly

  return (
    <div className="via-purple-600 to-pink-600">
      <div className="mt-12 mx-auto max-w-4xl bg-[#1a1a1a] text-[#f0f0f0] p-5 rounded-2xl border-4 border-[#00FF00] shadow-[0px_0px_10px_#00FF00, 0px_0px_40px_#00FF00] hover:scale-105 transition-transform transform">
        <div className="text-4xl font-bold flex items-center justify-center">
          <Sparkles className="inline-block mr-6 text-[#00FF00]" />
          Trending Content Ideas
        </div>
        <ul className="space-y-4 text-xl leading-relaxed">
          {contentIdeas?.map((idea, index) => (
            <li key={index} className="flex items-start">
              <span className="text-2xl font-semibold mr-3 text-[#00FF00]">•</span>
              <span>{idea}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContentIdeas;
