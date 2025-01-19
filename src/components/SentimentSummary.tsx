import { Sparkles } from "lucide-react";

// Define the props interface
interface SentimentSummaryProps {
  sentimentSummary: string; // The sentiment summary text to display
}

const SentimentSummary: React.FC<SentimentSummaryProps> = ({ sentimentSummary }) => {
  return (
    <div className="mt-8 p-6 bg-teal-100 rounded-lg shadow-lg">
      <div className="flex items-center space-x-4">
        <span className="text-4xl text-teal-500">
          <Sparkles /> {/* Example of a positive icon */}
        </span>
        <h2 className="text-2xl font-semibold text-teal-700">
          Sentiment Summary
        </h2>
      </div>
      <p className="mt-4 text-lg text-gray-700">{sentimentSummary}</p>
    </div>
  );
};

export default SentimentSummary;
