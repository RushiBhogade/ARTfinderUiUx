import { Sparkles, TrendingUp, Users } from "lucide-react";

const MarketingInsights = () => {
    const marketingInsights = [
      {
        title: "Unconventional Uses of Cryptocurrency",
        description:
          "There's a strong interest in unconventional uses of cryptocurrency, such as purchasing luxury items. This could be leveraged in marketing campaigns to attract a more affluent and risk-tolerant audience.",
        icon: <TrendingUp className="text-green-500" />,
      },
      {
        title: "Aspirational Goals and Financial Gains",
        description:
          "The emphasis on success stories and high returns suggests that users are motivated by aspirational goals and financial gains. Marketing should focus on potential benefits and real-life examples of successful investments.",
        icon: <Sparkles className="text-yellow-500" />,
      },
      {
        title: "Building a Strong Community",
        description:
          "The community aspect is crucial in this market. Building and nurturing an online community on platforms like Reddit, Instagram, and Discord could significantly enhance user engagement and brand loyalty.",
        icon: <Users className="text-blue-500" />,
      },
    ];
  
    return (
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {marketingInsights.map((insight, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <div className="text-2xl text-white font-bold mb-4 flex items-center gap-2">
              {insight.icon}
              {insight.title}
            </div>
            <p className="text-white">{insight.description}</p>
          </div>
        ))}
      </div>
    );
  };
  export default MarketingInsights;