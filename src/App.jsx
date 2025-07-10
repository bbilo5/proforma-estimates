import { useState } from "react";

const logo = "/Edge Logo_1 line_White.png";

export default function App() {
  const [budget, setBudget] = useState(50000);
  const [channel, setChannel] = useState("Linear TV");
  const [cpmSlider, setCpmSlider] = useState(0);
  const [cr1, setCr1] = useState(0);
  const [cr2, setCr2] = useState(0);

  const values = {
    "Linear TV": {
      cpm: 15,
      cpv: 0.04,
      impressionsFactor: 66,
      householdsFactor: 0.3333,
      webVisitsFactor: 0.01485,
      salesFactor: 0.0429,
    },
    "CTV": {
      cpm: 5,
      cpv: 0.01,
      impressionsFactor: 66,
      householdsFactor: 0.3333,
      webVisitsFactor: 0.01485,
      salesFactor: 0.0429,
    },
  };

  const selected = values[channel];

  const impressions = budget * selected.impressionsFactor;
  const impressionsHigh = budget * values["Linear TV"].impressionsFactor;
  const households = impressions * selected.householdsFactor;
  const householdsHigh = impressionsHigh * values["Linear TV"].householdsFactor;
  const webVisits = impressions * selected.webVisitsFactor;
  const webVisitsHigh = impressionsHigh * values["Linear TV"].webVisitsFactor;
  const sales = webVisits * selected.salesFactor;
  const salesHigh = webVisitsHigh * values["Linear TV"].salesFactor;
  const cac = budget / sales;
  const cacHigh = budget / salesHigh;
  const roas = (sales * 100) / budget;
  const roasHigh = (salesHigh * 100) / budget;

  const AOV = 100;
  const impressionsAlt = (budget / cpmSlider) * 1000 || 0;
  const visitsAlt = impressionsAlt * (cr1 / 100) || 0;
  const salesAlt = visitsAlt * (cr2 / 100) || 0;
  const roasAlt = (salesAlt * AOV) / budget || 0;

  const formatNumber = (num) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return Math.round(num).toString();
  };

  return (
    <div className="min-h-screen font-[baikal] bg-[#e50C00]">
      <div className="text-white flex flex-col justify-center items-center pt-32 pb-20 px-4">
        <img src={logo} alt="Havas Edge Logo" className="max-w-xs mb-10" />
        <h1 className="text-4xl font-medium text-center">Positive Proforma Estimates</h1>
      </div>

      <div className="relative -mt-20 z-10 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
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
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Channel</label>
              <select
                className="w-full border p-2 rounded"
                value={channel}
                onChange={(e) => setChannel(e.target.value)}
              >
                <option value="Linear TV">Linear TV</option>
                <option value="CTV">CTV</option>
              </select>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-bold text-center mb-6">Estimated Results</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-[#e50C00] uppercase font-medium">CPM</p>
                <p className="text-2xl">${Math.round(values["CTV"].cpm)} - ${Math.round(values["Linear TV"].cpm)}</p>
              </div>
              <div>
                <p className="text-sm text-[#e50C00] uppercase font-medium">Cost per View</p>
                <p className="text-2xl">${values["CTV"].cpv.toFixed(2)} - ${values["Linear TV"].cpv.toFixed(2)}</p>
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

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 mt-20">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-bold text-center mb-6">Inputs</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium">Budget (6 Weeks)</label>
              <input
                type="range"
                min="20000"
                max="1000000"
                step="5000"
                className="w-full mt-1 accent-[#e50C00]"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
              />
              <div className="text-sm text-gray-700 mt-1">${budget.toLocaleString()}</div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Blended CPM</label>
              <input
                type="range"
                min="2"
                max="50"
                step="0.5"
                className="w-full mt-1 accent-[#e50C00]"
                value={cpmSlider}
                onChange={(e) => setCpmSlider(Number(e.target.value))}
              />
              <div className="text-sm text-gray-700 mt-1">${cpmSlider.toFixed(2)}</div>
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium">Impressions to Visits CR %</label>
                <input
                  type="number"
                  className="w-full mt-1 p-2 border rounded"
                  value={cr1}
                  onChange={(e) => setCr1(Number(e.target.value))}
                />
                <div className="text-sm text-gray-700 mt-1">{cr1.toFixed(2)}%</div>
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium">Visits to Orders CR %</label>
                <input
                  type="number"
                  className="w-full mt-1 p-2 border rounded"
                  value={cr2}
                  onChange={(e) => setCr2(Number(e.target.value))}
                />
                <div className="text-sm text-gray-700 mt-1">{cr2.toFixed(2)}%</div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-bold text-center mb-6">Estimated Results</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-[#e50C00] uppercase font-medium">Impressions</p>
                <p className="text-3xl font-normal text-black">{Math.round(impressionsAlt).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-[#e50C00] uppercase font-medium">Estimated Visits</p>
                <p className="text-3xl font-normal text-black">{Math.round(visitsAlt).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-[#e50C00] uppercase font-medium">Estimated Sales</p>
                <p className="text-3xl font-normal text-black">{Math.round(salesAlt).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-[#e50C00] uppercase font-medium">ROAS</p>
                <p className="text-3xl font-normal text-black">{roasAlt.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
