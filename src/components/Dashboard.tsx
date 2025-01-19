import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Sparkles, Palette, Zap } from "lucide-react";
import { postData } from "../apiService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Dashboard = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [usp, setUsp] = useState("");
  const [category, setCategory] = useState("");
  const [errors,] = useState({ businessName: "", uspCategory: "" });
  const navigate = useNavigate();

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    console.log("insideApi");
    const userData = { USP: usp, category };

    try {
      // Make the API call to fetch insights
      const response = await postData("fetch-insights", userData);
      console.log(response);

      if (response && response.analysis) {
        console.log("Insights fetched successfully:", response);

        // Directly store the analysis object in AsyncStorage
        await AsyncStorage.setItem("analysis", JSON.stringify(response.analysis));
        await AsyncStorage.setItem("reddit", JSON.stringify(response.reddit_results));
        await AsyncStorage.setItem("youtube", JSON.stringify(response.youtube_results));

        // Navigate to the insights page after storing data
        navigate("/impact-insights");
      } else {
        alert(response.message || "An error occurred while fetching insights.");
      }
    } catch (error) {
      console.error("Error during analysis:", error);
      alert("An error occurred while analyzing. Please try again.");
    } finally {
      setIsAnalyzing(false); // Stop loading indicator
    }
  };

  return (
    <div className="border-8 border-yellow-300 p-4">
      <h2 className="bg-cyan-400 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none mb-10 p-5">
        <span className="flex items-center gap-3 ">
          <Sparkles className="w-6 h-6" />
          ANALYZE SOCIAL IMPACT
        </span>
      </h2>

      <div>
        <label className="block text-lg font-black mb-2 bg-yellow-400 p-1 inline-block">
          <Palette className="w-5 h-5 inline-block mr-2" />
          Business Name *
        </label>
        <input
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className="w-full border-4 border-gray-700 p-3 text-lg font-bold bg-gray-100 focus:outline-none focus:bg-white"
          placeholder="Enter your business name"
        />
        {errors.businessName && (
          <p className="text-white font-bold mt-2 bg-red-400 p-2 inline-block">
            {errors.businessName}
          </p>
        )}
      </div>

      <div>
        <label className="block text-lg font-black mb-2 bg-yellow-400 p-1 inline-block">
          <Zap className="w-5 h-5 inline-block mr-2" />
          Unique Selling Proposition
        </label>
        <input
          type="text"
          value={usp}
          onChange={(e) => setUsp(e.target.value)}
          className="w-full border-4 border-gray-700 p-3 text-lg font-bold bg-indigo-100 focus:outline-none focus:bg-white"
          placeholder="What makes you unique?"
        />
      </div>

      <div>
        <label className="block text-lg font-black mb-2 bg-yellow-500 p-1 inline-block">
          Business Category
        </label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border-4 border-gray-700 p-3 text-lg font-bold bg-yellow-100 focus:outline-none focus:bg-white"
          placeholder="e.g., Non-profit, Tech, Healthcare"
        />
      </div>

      {errors.uspCategory && (
        <p className="text-white font-bold bg-red-500 p-2 inline-block">
          {errors.uspCategory}
        </p>
      )}

      <div className="text-center mt-6">
        <button
          onClick={() => handleAnalyze()}
          disabled={isAnalyzing}
          className={`${
            isAnalyzing ? "bg-gray-400" : "bg-purple-400 hover:bg-yellow-700"
          } text-white font-black text-lg px-6 py-3 border-4 border-gray-700 inline-flex items-center gap-2`}
        >
          {isAnalyzing ? (
            "ANALYZING..."
          ) : (
            <>
              <Search className="w-6 h-6" />
              ANALYZE IMPACT
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
