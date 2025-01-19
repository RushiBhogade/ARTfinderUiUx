import React from "react";

interface WordCloudData {
  text: string;
  frequency: number;
}

const WordCloudScreen: React.FC = () => {
  const wordCloudData: WordCloudData[] = [
    { text: "React", frequency: 12 },
    { text: "JavaScript", frequency: 8 },
    { text: "Tailwind", frequency: 6 },
    { text: "CSS", frequency: 4 },
    { text: "Frontend", frequency: 10 },
  ];

  const maxFrequency = Math.max(...wordCloudData.map(word => word.frequency));

  // Function to generate contrasting color
  const getContrastingColor = (frequency: number) => {
    // Use bright colors for higher frequencies and muted tones for lower frequencies
    return frequency > 8 ? "#FF6F61" : "#607D8B"; // Red for high, Blue-Grey for low
  };

  return (
    <div className="min-h-screen bg-gray-200 p-2 flex flex-col justify-center items-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Word Cloud</h2>
      <div className="flex flex-wrap justify-center items-center">
        {wordCloudData.map((word, index) => (
          <span
            key={index}
            style={{
              fontSize: `${(word.frequency / maxFrequency) * 60 + 16}px`,
              margin: "10px",
              color: getContrastingColor(word.frequency),
              cursor: "pointer",
              fontWeight: "bold",
              letterSpacing: "1px",
              textTransform: "uppercase",
              transition: "transform 0.3s ease, color 0.3s ease",
            }}
            className="hover:scale-110 hover:text-yellow-400"
          >
            {word.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordCloudScreen;
