import React, { useState } from "react";

interface YouTubeVideo {
  title: string;
  url: string; // Must be in the format: https://www.youtube.com/watch?v=VIDEO_ID
}

interface YouTubeResultsProps {
  youtubeResults: YouTubeVideo[];
}

const YouTubeResults: React.FC<YouTubeResultsProps> = ({ youtubeResults }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Helper function to extract YouTube Video ID from the URL
  const getYouTubeVideoId = (url: string) => {
    const match = url.match(/v=([^&]+)/); // Extract ID after 'v='
    return match ? match[1] : null;
  };

  return (
    <div className="mt-8 space-y-6">
      {youtubeResults.map((video, index) => {
        const videoId = getYouTubeVideoId(video.url);
        if (!videoId) {
          return <div key={index}>Invalid YouTube URL</div>;
        }

        return (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            onMouseEnter={() => setHoveredIndex(index)} // Set index on hover
            onMouseLeave={() => setHoveredIndex(null)} // Reset on mouse leave
          >
            <h3 className="text-2xl font-bold text-teal-600 mb-4">{video.title}</h3>

            <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
              {hoveredIndex === index ? (
                // Display iframe when hovered
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  frameBorder="0"
                  allow="encrypted-media"
                  allowFullScreen
                  title={video.title}
                />
              ) : (
                // Show thumbnail when not hovered
                <div className="relative w-full h-full cursor-pointer bg-gray-300 flex items-center justify-center">
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <span className="text-white text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-full">
                    ▶ Play
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default YouTubeResults;
