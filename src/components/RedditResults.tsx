interface RedditResult {
    title: string;
    content: string;
    url: string;
  }
  
  interface RedditResultsProps {
    redditResults: RedditResult[]; // Array of Reddit result objects
  }
  
  const RedditResults: React.FC<RedditResultsProps> = ({ redditResults }) => {
    return (
      <div className="mt-8 space-y-6">
        {redditResults.map((result, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold text-teal-600 mb-4">
              <a href={result.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {result.title}
              </a>
            </h3>
            <p className="text-lg text-gray-700 line-clamp-3">
              {result.content}
            </p>
            <a
              href={result.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 mt-4 block text-lg font-semibold"
            >
              Read more on Reddit
            </a>
          </div>
        ))}
      </div>
    );
  };
  
  export default RedditResults;
  