import React from "react";
import Sidebar from "./Sidebar"; // import Sidebar component
import { Download, FileText, Sparkles } from "lucide-react";

const ImpactInsights: React.FC = () => {
  const handleDownloadReport = () => {
    // Logic to generate and download the PDF report
    alert("Downloading Impact Report (PDF)...");
  };

  const handleExportData = () => {
    // Logic to export raw data as CSV
    alert("Exporting Raw Data (CSV)...");
  };

  return (
    <div className="flex">
      <Sidebar /> {/* Sidebar on the left */}
      <div className="ml-64 p-8 w-full">
        <div className="bg-white border-4 border-black p-6 mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Sparkles /> Social Impact Insights
          </h2>

          {/* Theme: Neobrutalism */}
          <div className="mb-6">
            <h3 className="text-xl font-bold">Theme: Neobrutalism</h3>
            <p className="text-gray-600">
              A radical approach to social impact, emphasizing community action over polished aesthetics.
            </p>
          </div>

          {/* Community Impacts */}
          <div className="mb-6">
            <h3 className="text-xl font-bold">Community Impacts</h3>
            <ul className="list-disc pl-6">
              <li>Improved local economy</li>
              <li>Strengthened social ties</li>
              <li>Increased community engagement</li>
            </ul>
          </div>

          {/* Key Impact Areas */}
          <div className="mb-6">
            <h3 className="text-xl font-bold">Key Impact Areas</h3>
            <ul className="list-disc pl-6">
              <li>Economic Growth</li>
              <li>Social Welfare</li>
              <li>Environmental Sustainability</li>
            </ul>
          </div>

          {/* Community Sentiments */}
          <div className="mb-6">
            <h3 className="text-xl font-bold">Community Sentiments</h3>
            <p className="text-gray-600">
              The community is optimistic about the long-term benefits of this initiative, with a strong sense of solidarity.
            </p>
          </div>

          {/* Buttons to Download Report or Export Data */}
          <div className="flex gap-4">
            <button
              onClick={handleDownloadReport}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-6 py-2 flex items-center gap-2"
            >
              <FileText /> Download Impact Report (PDF)
            </button>

            <button
              onClick={handleExportData}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-2 flex items-center gap-2"
            >
              <Download /> Export Raw Data (CSV)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactInsights;
