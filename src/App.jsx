import { useState } from "react";

export default function App() {
  const [budget, setBudget] = useState(50000);
  const [option, setOption] = useState("Option 1");

  return (
    <div className="min-h-screen font-sans bg-white">
      <div className="bg-[#e50C00] text-white text-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-2">Proforma Estimates</h1>
        <p className="text-md">Simulate your campaign results instantly.</p>
      </div>

      <div className="max-w-5xl mx-auto -mt-16 px-4 pb-16 grid md:grid-cols-2 gap-10 relative z-10">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Budget (6 Weeks)</label>
            <input
              type="range"
              min="20000"
              max="1000000"
              step="5000"
              className="w-full accent-[#e50C00]"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
            />
            <div className="text-sm mt-2">${budget.toLocaleString()}</div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Scenario</label>
            <select
              value={option}
              onChange={(e) => setOption(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-center mb-6">Estimated Results</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-[#e50C00] uppercase font-medium">Metric A</p>
              <p className="text-3xl text-black font-normal">123,456</p>
            </div>
            <div>
              <p className="text-sm text-[#e50C00] uppercase font-medium">Metric B</p>
              <p className="text-3xl text-black font-normal">78,910</p>
            </div>
            <div>
              <p className="text-sm text-[#e50C00] uppercase font-medium">Metric C</p>
              <p className="text-3xl text-black font-normal">11,121</p>
            </div>
            <div>
              <p className="text-sm text-[#e50C00] uppercase font-medium">Metric D</p>
              <p className="text-3xl text-black font-normal">13.37</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
