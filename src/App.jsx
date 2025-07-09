import { useState } from "react";

export default function App() {
  const [budget, setBudget] = useState(50000);
  const [option, setOption] = useState("1");

  const values = {
    1: {
      cpm: 15,
      cpv: 0.01,
      impressionsFactor: 28,
      householdsFactor: 0.1986,
      webVisitsFactor: 0.00685,
      salesFactor: 0.0854,
    },
    2: {
      cpm: 35,
      cpv: 0.04,
      impressionsFactor: 66,
      householdsFactor: 0.3333,
      webVisitsFactor: 0.01485,
      salesFactor: 0.0429,
    },
  };

  const selected = values[option];

  const impressions = budget * selected.impressionsFactor;
  const impressionsHigh = budget * values[2].impressionsFactor;
  const households = impressions * selected.householdsFactor;
  const householdsHigh = impressionsHigh * values[2].householdsFactor;
  const webVisits = impressions * selected.webVisitsFactor;
  const webVisitsHigh = impressionsHigh * values[2].webVisitsFactor;
  const sales = webVisits * selected.salesFactor;
  const salesHigh = webVisitsHigh * values[2].salesFactor;
  const cac = budget / sales;
  const cacHigh = budget / salesHigh;
  const roas = (sales * 100) / budget;
  const roasHigh = (salesHigh * 100) / budget;

  const formatNumber = (num) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return Math.round(num).toString();
  };

  return (
    <div className="min-h-screen font-[baikal] bg-white">
      {/* Top Section - Red with Logo and Title */}
      <div className="bg-[#e50C00] text-white flex flex-col justify-center items-center pt-32 pb-20 px-4">
        <img src="/Edge Logo_1 line_White.png" alt="Havas Edge Logo" className="max-w-xs mb-10" />
        <h1 className="text-4xl font-medium text-center">Positive Proforma Estimates</h1>
        <p className="text-md text-white mt-2 mb-14">Simulate your campaign results instantly.</p>
      </div>

      {/* Bottom Section - Inputs and Outputs */}
      <div className="relative -mt-20 z-10 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          {/* Input Box */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-bold text-center mb-6">Inputs</h2>
            <div className="mb-6">
              <label className="block text-sm font-medium">Budget (6 Weeks)</label>
              <input
                type="range"
                min="10000"
                max="1000000"
                step="5000"
                className="w-full mt-1 accent-[#e50C00]"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
              />
              <div className="text-sm text-gray-700 mt-1">${budget.toLocaleString()}</div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Channel</label>
              <select
                className="w-full border p-2 rounded"
                value={option}
                onChange={(e) => setOption(e.target.value)}
              >
                <option value="1">Linear TV</option>
                <option value="2">CTV</option>
              </select>
            </div>
          </div>

          {/* Output Box */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-bold text-center mb-6">Estimated Results</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-[#e50C00] uppercase font-medium">CPM</p>
                <p className="text-2xl">${Math.round(values[1].cpm)} - ${Math.round(values[2].cpm)}</p>
              </div>
              <div>
                <p className="text-sm text-[#e50C00] uppercase font-medium">Cost per View</p>
                <p className="text-2xl">${values[1].cpv.toFixed(2)} - ${values[2].cpv.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-[#e50C00] uppercase font-medium">Impressions</p>
                <p className="text-2xl">{formatNumber(impressions)} - {formatNumber(impressionsHigh)}</p>
              </div>
              <div>
                <p className="text-sm text-[#e50C00] uppercase font-medium">Households</p>
                <p className="text-2xl">{formatNumber(households)} - {formatNumber(householdsHigh)}</p>
              </div>
              <div>
                <p className="text-sm text-[#e50C00] uppercase font-medium">Web Visits</p>
                <p className="text-2xl">{formatNumber(webVisits)} - {formatNumber(webVisitsHigh)}</p>
              </div>
              <div>
                <p className="text-sm text-[#e50C00] uppercase font-medium">Sales</p>
                <p className="text-2xl">{formatNumber(sales)} - {formatNumber(salesHigh)}</p>
              </div>
              <div>
                <p className="text-sm text-[#e50C00] uppercase font-medium">CAC</p>
                <p className="text-2xl">${Math.round(cac)} - ${Math.round(cacHigh)}</p>
              </div>
              <div>
                <p className="text-sm text-[#e50C00] uppercase font-medium">ROAS</p>
                <p className="text-2xl">{roas.toFixed(1)} - {roasHigh.toFixed(1)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-action Box */}
        <div className="max-w-3xl mx-auto mt-8 px-6">
          <div className="bg-gray-100 rounded-xl shadow-md p-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-md text-black mb-4 md:mb-0">Want to see how this plays out for your brand?</p>
            <a
              href="https://www.havasedge.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e50C00] hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
