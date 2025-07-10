import { useState } from "react";

const logo = "/Edge Logo_1 line_White.png";

export default function App() {
  // Calculator 1 state
  const [budget1, setBudget1] = useState(0);
  const [channel, setChannel] = useState("Linear TV");

  // Calculator 2 state
  const [budget2, setBudget2] = useState(0);
  const [cpm2, setCpm2] = useState(0);
  const [cr1_2, setCr1_2] = useState(0);
  const [cr2_2, setCr2_2] = useState(0);

  const AOV = 100;

  // Calculator 1 calculations
  const impressions1Low = channel === "CTV" ? (budget1 / 15) * 1000 : (budget1 / 35) * 1000;
  const impressions1High = channel === "CTV" ? (budget1 / 5) * 1000 : (budget1 / 15) * 1000;

  const householdsLow = impressions1Low * 0.1986;
  const householdsHigh = impressions1High * 0.3333;

  const visitsLow = impressions1Low * 0.00685;
  const visitsHigh = impressions1High * 0.01485;

  const salesLow = impressions1Low * 0.00854;
  const salesHigh = impressions1High * 0.0429;

  const cacLow = budget1 / salesHigh || 0;
  const cacHigh = budget1 / salesLow || 0;

  const roasLow = (salesLow * AOV) / budget1 || 0;
  const roasHigh = (salesHigh * AOV) / budget1 || 0;

  // Calculator 2 calculations
  const impressions2 = (budget2 / cpm2) * 1000 || 0;
  const visits2 = impressions2 * (cr1_2 / 100) || 0;
  const sales2 = visits2 * (cr2_2 / 100) || 0;
  const roas2 = (sales2 * AOV) / budget2 || 0;

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return Math.round(num).toLocaleString();
  };

  const formatDollar = (num) => "$" + Math.round(num).toLocaleString();
  const cpmRange = channel === "CTV" ? "$5-$15" : "$15-$35";
  const cpvRange = channel === "CTV" ? "$0.01-$0.02" : "$0.01-$0.04";

  return (
    <div className="min-h-screen font-[baikal] bg-[#e50C00]">
      <div className="text-white flex flex-col justify-center items-center pt-10 pb-4 px-4">
        <img src={logo} alt="Havas Edge Logo" className="max-w-xs mb-2" />
        <h1 className="text-4xl font-medium text-center">Positive Proforma Estimates</h1>
      </div>

      <h2 className="text-2xl text-white text-center font-semibold mt-4 mb-4">Calculator 1</h2>
      <div className="relative z-10 pb-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Inputs</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium">Budget (6 Weeks)</label>
              <input type="range" min="20000" max="1000000" step="5000" className="w-full mt-1 accent-[#e50C00]" value={budget1} onChange={(e) => setBudget1(Number(e.target.value))} />
              <div className="text-sm text-gray-700 mt-1">${budget1.toLocaleString()}</div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Channel</label>
              <select className="w-full mt-1 p-2 border rounded" value={channel} onChange={(e) => setChannel(e.target.value)}>
                <option>Linear TV</option>
                <option>CTV</option>
              </select>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-bold text-center mb-6">Estimated Results</h2>
            <div className="grid grid-cols-2 gap-6">
              <div><p className="text-sm text-[#e50C00] uppercase font-medium">CPM</p><p className="text-3xl font-normal text-black">{cpmRange}</p></div>
              <div><p className="text-sm text-[#e50C00] uppercase font-medium">Cost per View</p><p className="text-3xl font-normal text-black">{cpvRange}</p></div>
              <div><p className="text-sm text-[#e50C00] uppercase font-medium">Impressions</p><p className="text-3xl font-normal text-black">{formatNumber(impressions1Low)} - {formatNumber(impressions1High)}</p></div>
              <div><p className="text-sm text-[#e50C00] uppercase font-medium">Households</p><p className="text-3xl font-normal text-black">{formatNumber(householdsLow)} - {formatNumber(householdsHigh)}</p></div>
              <div><p className="text-sm text-[#e50C00] uppercase font-medium">Web Visits</p><p className="text-3xl font-normal text-black">{formatNumber(visitsLow)} - {formatNumber(visitsHigh)}</p></div>
              <div><p className="text-sm text-[#e50C00] uppercase font-medium">Sales</p><p className="text-3xl font-normal text-black">{formatNumber(salesLow)} - {formatNumber(salesHigh)}</p></div>
              <div><p className="text-sm text-[#e50C00] uppercase font-medium">CAC</p><p className="text-3xl font-normal text-black">{formatDollar(cacLow)} - {formatDollar(cacHigh)}</p></div>
              <div><p className="text-sm text-[#e50C00] uppercase font-medium">ROAS</p><p className="text-3xl font-normal text-black">{roasLow.toFixed(2)} - {roasHigh.toFixed(2)}</p></div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl text-white text-center font-semibold mt-6 mb-4">Calculator 2</h2>
      <div className="relative z-10 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Inputs</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium">Budget (6 Weeks)</label>
              <input type="range" min="20000" max="1000000" step="5000" className="w-full mt-1 accent-[#e50C00]" value={budget2} onChange={(e) => setBudget2(Number(e.target.value))} />
              <div className="text-sm text-gray-700 mt-1">${budget2.toLocaleString()}</div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Blended CPM</label>
              <input type="range" min="2" max="50" step="0.5" className="w-full mt-1 accent-[#e50C00]" value={cpm2} onChange={(e) => setCpm2(Number(e.target.value))} />
              <div className="text-sm text-gray-700 mt-1">${Math.round(cpm2)}</div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium">Impressions to Visits CR %</label>
                <input type="number" className="w-full mt-1 p-2 border rounded" value={cr1_2} onChange={(e) => setCr1_2(Number(e.target.value))} />
                <div className="text-sm text-gray-700 mt-1">{cr1_2.toFixed(2)}%</div>
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium">Visits to Orders CR %</label>
                <input type="number" className="w-full mt-1 p-2 border rounded" value={cr2_2} onChange={(e) => setCr2_2(Number(e.target.value))} />
                <div className="text-sm text-gray-700 mt-1">{cr2_2.toFixed(2)}%</div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-bold text-center mb-6">Estimated Results</h2>
            <div className="grid grid-cols-2 gap-6">
              <div><p className="text-sm text-[#e50C00] uppercase font-medium">Impressions</p><p className="text-3xl font-normal text-black">{formatNumber(impressions2)}</p></div>
              <div><p className="text-sm text-[#e50C00] uppercase font-medium">Estimated Visits</p><p className="text-3xl font-normal text-black">{formatNumber(visits2)}</p></div>
              <div><p className="text-sm text-[#e50C00] uppercase font-medium">Estimated Sales</p><p className="text-3xl font-normal text-black">{formatNumber(sales2)}</p></div>
              <div><p className="text-sm text-[#e50C00] uppercase font-medium">ROAS</p><p className="text-3xl font-normal text-black">{roas2.toFixed(2)}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
