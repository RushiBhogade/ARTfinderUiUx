import React, { useState } from 'react';

interface YouTubeVideo {
  title: string;
  url: string;
}

interface YouTubeResultsProps {
  youtubeResults: YouTubeVideo[];
}

const YouTubeResults: React.FC<YouTubeResultsProps> = ({ youtubeResults }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="mt-8 space-y-6">
      {youtubeResults.map((video, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          onMouseEnter={() => setHoveredIndex(index)} // Set index on hover
          onMouseLeave={() => setHoveredIndex(null)} // Reset on mouse leave
        >
          <h3 className="text-2xl font-bold text-teal-600 mb-4">{video.title}</h3>

          <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
            {hoveredIndex === index ? (
              <iframe
                width="560"
                height="315"
                src={video.url}
                frameBorder="0"
                allow="encrypted-media"
                allowFullScreen
                title={video.title}
              />
            ) : (
              <div className="bg-gray-300 w-full h-full flex justify-center items-center">
                <span className="text-white text-xl"> Play</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default YouTubeResults;
