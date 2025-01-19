import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WordCloudScreen from "./WordCloudScreen";
import YouTubeResults from "./YouTubeResults";
import ContentIdeas from "./ContentIdeas";
import CtaSuggestions from "./CtaSuggestions";
import KeyTriggers from "./KeyTriggers";
import RecommendedHooks from "./RecommandedBooks";
import SentimentSummary from "./SentimentSummary";
import RedditResults from "./RedditResults";

const ImpactInsights: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [youtube, setYoutube] = useState<any>(null);
  const [reddit, setReddit] = useState<any>(null);

  useEffect(() => {
    const getDataFromStorage = async () => {
      try {
        const storedData = await AsyncStorage.getItem("analysis");
        const youtubeData = await AsyncStorage.getItem("youtube");
        const redditData = await AsyncStorage.getItem("reddit");

        if (storedData && youtubeData && redditData) {
          const parsedData = JSON.parse(storedData); // Parse the string into an object
          const parsedYoutube = JSON.parse(youtubeData);
          const parsedReddit = JSON.parse(redditData);

          console.log(parsedData, "data");
          setData(parsedData); 
          setYoutube(parsedYoutube); // Store the parsed YouTube data
          setReddit(parsedReddit); // Store the parsed Reddit data
        }
      } catch (error) {
        console.error("Error fetching data from AsyncStorage:", error);
      } finally {
        setLoading(false); // Stop loading after data is fetched
      }
    };

    getDataFromStorage();
  }, []);

  // Check if data is loaded and the structure is correct
  if (loading) {
    return <div>Loading...</div>;
  }

  // Ensure that data.analysis.contentIdeas exists before passing to ContentIdeas
  if (!data || !data.content_ideas) {
    return <div>Error: No data available</div>;
  }

  return (
    <div className="flex">
      <div className="ml-64 p-8 w-full">
        <ContentIdeas contentIdeas={data.content_ideas} />
        <CtaSuggestions ctaSuggestions={data.cta_suggestions} />
        <WordCloudScreen />
        <KeyTriggers keyTriggers={data.key_triggers} />
        <RecommendedHooks recommendedHooks={data.recommended_hooks} />
        <SentimentSummary sentimentSummary={data.sentiment_summary} />
        
        {/* Conditionally render Reddit and YouTube results if they exist */}
        {reddit && <RedditResults redditResults={reddit} />}
        {youtube && <YouTubeResults youtubeResults={youtube} />}
      </div>
    </div>
  );
};

export default ImpactInsights;
