import React from "react";

interface SentimentProps {
  sentiment: string;
}

const SentimentAnalysisScreen: React.FC<SentimentProps> = ({ sentiment }) => {
  let sentimentColor;
  let sentimentLabel;

  if (sentiment === "positive") {
    sentimentColor = "green";
    sentimentLabel = "Positive";
  } else if (sentiment === "negative") {
    sentimentColor = "red";
    sentimentLabel = "Negative";
  } else {
    sentimentColor = "gray";
    sentimentLabel = "Neutral";
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Sentiment Analysis</h2>
      <div className="text-center p-4 rounded-lg bg-gray-100">
        <span className={`font-bold text-xl text-${sentimentColor}-600`}>
          {sentimentLabel}
        </span>
      </div>
    </div>
  );
};

export default SentimentAnalysisScreen;
