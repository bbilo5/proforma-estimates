import { useState } from "react";

const logo = "/Edge Logo_1 line_White.png";

export default function App() {
  // Calculator 1 state
  const [budget1, setBudget1] = useState(50000);
  const [channel, setChannel] = useState("Linear TV");

  // Calculator 2 state
  const [budget2, setBudget2] = useState(50000);
  const [cpm2, setCpm2] = useState(15);
  const [cr1_2, setCr1_2] = useState(1.9);
  const [cr2_2, setCr2_2] = useState(0.8);

  const AOV = 100;

  const impressions1Low = ((budget1 / 35) * 1000) * 0.925;
  const impressions1High = ((budget1 / 15) * 1000) * 1.075;
  const householdsLow = impressions1Low * 0.175;
  const householdsHigh = impressions1High * 0.275;
  const visitsLow = impressions1Low * 0.00685;
  const visitsHigh = impressions1High * 0.01485;
  const salesLow = visitsLow * 0.0854;
  const salesHigh = visitsHigh * 0.0429;
  const cacLow = budget1 / salesHigh || 0;
  const cacHigh = budget1 / salesLow || 0;
  const roasLow = (salesLow * AOV) / budget1 || 0;
  const roasHigh = (salesHigh * AOV) / budget1 || 0;

  const impressions2Low = ((budget2 / cpm2) * 1000) * 0.925 || 0;
  const impressions2High = ((budget2 / cpm2) * 1000) * 1.075 || 0;
  const households2Low = impressions2Low * 0.175;
  const households2High = impressions2High * 0.275;
  const visits2Low = impressions2Low * (cr1_2 / 100);
  const visits2High = impressions2High * (cr1_2 / 100);
  const sales2Low = visits2Low * (cr2_2 / 100);
  const sales2High = visits2High * (cr2_2 / 100);
  const cac2Low = budget2 / sales2High || 0;
  const cac2High = budget2 / sales2Low || 0;
  const roas2Low = (sales2Low * AOV) / budget2 || 0;
  const roas2High = (sales2High * AOV) / budget2 || 0;

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return Math.round(num).toLocaleString();
  };

  const formatDollar = (num) => "$" + Math.round(num).toLocaleString();
  const formatROAS = (num) => num.toFixed(1);
  const cpmRange = channel === "CTV" ? "$5-$15" : "$15-$35";
  const cpvRange = channel === "CTV" ? "$0.01-$0.02" : "$0.01-$0.04";

  const renderOutputBox = (outputs) => (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h3 className="text-base text-black mb-4 font-normal">Estimates</h3>
      <div className="grid grid-cols-2 gap-6 text-black text-lg">
        {outputs.map(([label, low, high, isDollar, isROAS]) => (
          <div key={label}>
            <p className="text-sm text-[#e50C00] uppercase font-medium">{label}</p>
            <p className="text-2xl font-medium">
              {label === "CAC"
                ? `${isDollar ? formatDollar(high) : formatNumber(high)} - ${isDollar ? formatDollar(low) : formatNumber(low)}`
                : isROAS
                ? `${formatROAS(low)} - ${formatROAS(high)}`
                : `${isDollar ? formatDollar(low) : formatNumber(low)} - ${isDollar ? formatDollar(high) : formatNumber(high)}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen font-[baikal] bg-[#e50C00] text-white">
      <div className="flex flex-col items-center py-10">
        <img src={logo} alt="Logo" className="w-64 mb-2" />
        <h1 className="text-3xl font-normal">Positive Proforma Estimates</h1>
      </div>

      <div className="text-center text-white text-xl font-light mb-4">Calculator 1</div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-12">
        <div className="bg-white text-black shadow-md rounded-xl p-6">
          <h3 className="text-base font-normal mb-4">Inputs</h3>
          <label className="block text-sm font-medium">Budget (6 Weeks)</label>
          <input type="range" min="20000" max="1000000" step="5000" value={budget1} onChange={(e) => setBudget1(Number(e.target.value))} className="w-full mt-1 accent-[#e50C00]" />
          <div className="text-sm text-gray-700 mt-1">${budget1.toLocaleString()}</div>

          <label className="block text-sm font-medium mt-4">Channel</label>
          <select className="w-full p-2 mt-1 border rounded" value={channel} onChange={(e) => setChannel(e.target.value)}>
            <option>Linear TV</option>
            <option>CTV</option>
          </select>
        </div>

        {renderOutputBox([
          ["CPM", 5, 15, true],
          ["Cost Per View", 0.01, 0.02, true],
          ["Impressions", impressions1Low, impressions1High],
          ["Households", householdsLow, householdsHigh],
          ["Web Visits", visitsLow, visitsHigh],
          ["Sales", salesLow, salesHigh],
          ["CAC", cacHigh, cacLow, true],
          ["ROAS", roasLow, roasHigh, false, true]
        ])}
      </div>

      <div className="text-center text-white text-xl font-light mb-4">Calculator 2</div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-20">
        <div className="bg-white text-black shadow-md rounded-xl p-6">
          <h3 className="text-base font-normal mb-4">Inputs</h3>
          <label className="block text-sm font-medium">Budget (6 Weeks)</label>
          <input type="range" min="20000" max="1000000" step="5000" value={budget2} onChange={(e) => setBudget2(Number(e.target.value))} className="w-full mt-1 accent-[#e50C00]" />
          <div className="text-sm text-gray-700 mt-1">${budget2.toLocaleString()}</div>

          <label className="block text-sm font-medium mt-4">Blended CPM</label>
          <input type="range" min="2" max="50" step="1" value={cpm2} onChange={(e) => setCpm2(Number(e.target.value))} className="w-full mt-1 accent-[#e50C00]" />
          <div className="text-sm text-gray-700 mt-1">${cpm2.toFixed(0)}</div>

          <div className="flex space-x-4 mt-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium">Impressions to Visits CR %</label>
              <input type="number" value={cr1_2} onChange={(e) => setCr1_2(Number(e.target.value))} className="w-full mt-1 p-2 border rounded" />
              <div className="text-sm text-gray-700 mt-1">{cr1_2.toFixed(2)}%</div>
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium">Visits to Orders CR %</label>
              <input type="number" value={cr2_2} onChange={(e) => setCr2_2(Number(e.target.value))} className="w-full mt-1 p-2 border rounded" />
              <div className="text-sm text-gray-700 mt-1">{cr2_2.toFixed(2)}%</div>
            </div>
          </div>
        </div>

        {renderOutputBox([
          ["Impressions", impressions2Low, impressions2High],
          ["Households", households2Low, households2High],
          ["Web Visits", visits2Low, visits2High],
          ["Sales", sales2Low, sales2High],
          ["CAC", cac2High, cac2Low, true],
          ["ROAS", roas2Low, roas2High, false, true]
        ])}
      </div>
    </div>
  );
}
