import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Sparkles } from "lucide-react";

const Dashboard: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const [businessName, setBusinessName] = useState("");
  const [usp, setUsp] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState({ businessName: "", uspCategory: "" });

  const navigate = useNavigate();

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      navigate("/impact-insights");
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!businessName) {
      setErrors({ ...errors, businessName: "Business name is required" });
    } else if (!usp && !category) {
      setErrors({
        ...errors,
        uspCategory: "Either USP or category is required",
      });
    } else {
      handleAnalyze();
    }
  };

  return (
    <div className="ml-64 p-8 w-full sm:ml-16 md:ml-32 lg:ml-64">
      <div className="bg-white border-4 border-black p-6 mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Sparkles /> Analyze Social Impact
        </h2>

        {/* Form for Business Information */}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            {/* Business Name Input */}
            <label htmlFor="businessName" className="block text-lg mb-2">
              Business Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="businessName"
              placeholder="Enter your business name (e.g., 'Social Impact Co.')"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg p-4 text-xl font-mono focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
            {errors.businessName && (
              <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>
            )}
          </div>

          <div className="mb-6">
            {/* USP Input */}
            <label htmlFor="usp" className="block text-lg mb-2">
              Unique Selling Proposition (USP){" "}
              <span className="text-gray-500">(Optional)</span>
            </label>
            <input
              type="text"
              id="usp"
              placeholder="Enter your USP (e.g., 'Eco-friendly products')"
              value={usp}
              onChange={(e) => setUsp(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg p-4 text-xl font-mono focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          <div className="mb-6">
            {/* Category Input */}
            <label htmlFor="category" className="block text-lg mb-2">
              Business Category{" "}
              <span className="text-gray-500">(Optional)</span>
            </label>
            <input
              type="text"
              id="category"
              placeholder="Enter your business category (e.g., 'Non-profit')"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg p-4 text-xl font-mono focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          {/* Error message for USP or Category */}
          {errors.uspCategory && (
            <p className="text-red-500 text-sm mt-2">{errors.uspCategory}</p>
          )}

          {/* Analyze Button */}
          <div className="text-center mb-6">
            <button
              type="submit"
             
              className={`${
                isAnalyzing
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-pink-500 hover:bg-pink-600"
              } border-4 border-black px-8 py-2 font-bold flex items-center gap-2`}
            >
              {isAnalyzing ? (
                "Analyzing..."
              ) : (
                <>
                  <Search /> Analyze Impact
                </>
              )}
            </button>
            <div className="text-center text-gray-500 py-2">
              Enter your business details and click "Analyze Impact" to see
              insights.
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
