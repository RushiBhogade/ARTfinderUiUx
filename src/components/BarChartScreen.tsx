import React from "react";

interface BarChartData {
  label: string;
  value: number;
}

const BarChartScreen: React.FC = () => {
  const barChartData: BarChartData[] = [
    { label: "January", value: 300 },
    { label: "February", value: 250 },
    { label: "March", value: 400 },
    { label: "April", value: 350 },
  ];

  const maxValue = Math.max(...barChartData.map(item => item.value));

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Bar Chart</h2>
      <div className="flex justify-around items-end h-72 bg-gray-200 p-4 rounded-lg">
        {barChartData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-12"
            style={{ height: `${(item.value / maxValue) * 100}%` }}
          >
            <div className="bg-blue-500 w-full rounded-b-lg">
              <span className="text-white text-xs">{item.label}</span>
            </div>
            <span className="text-xs mt-2">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChartScreen;
