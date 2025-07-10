import { useState } from "react";

const logo = "/Edge Logo_1 line_White.png";

export default function App() {
  const [budget1, setBudget1] = useState(0);
  const [cpm1, setCpm1] = useState(0);
  const [cr1_1, setCr1_1] = useState(0);
  const [cr2_1, setCr2_1] = useState(0);

  const [budget2, setBudget2] = useState(0);
  const [cpm2, setCpm2] = useState(0);
  const [cr1_2, setCr1_2] = useState(0);
  const [cr2_2, setCr2_2] = useState(0);

  const AOV = 100;
  const impressions1 = (budget1 / cpm1) * 1000 || 0;
  const visits1 = impressions1 * (cr1_1 / 100) || 0;
  const sales1 = visits1 * (cr2_1 / 100) || 0;
  const roas1 = (sales1 * AOV) / budget1 || 0;

  const impressions2 = (budget2 / cpm2) * 1000 || 0;
  const visits2 = impressions2 * (cr1_2 / 100) || 0;
  const sales2 = visits2 * (cr2_2 / 100) || 0;
  const roas2 = (sales2 * AOV) / budget2 || 0;

  return (
    <div className="min-h-screen font-[baikal] bg-[#e50C00]">
      {/* Top Section - Red with Logo and Title */}
      <div className="text-white flex flex-col justify-center items-center pt-10 pb-6 px-4">
        <img src={logo} alt="Havas Edge Logo" className="max-w-xs mb-4" />
        <h1 className="text-4xl font-medium text-center">Positive Proforma Estimates</h1>
      </div>

      {/* Calculator 1 Header */}
      <h2 className="text-2xl text-white text-center font-semibold mt-6 mb-4">Calculator 1</h2>

      {/* Calculator 1 */}
      <div className="relative z-10 pb-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          {/* Input Box */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Inputs</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium">Budget (6 Weeks)</label>
              <input
                type="range"
                min="20000"
                max="1000000"
                step="5000"
                className="w-full mt-1 accent-[#e50C00]"
                value={budget1}
                onChange={(e) => setBudget1(Number(e.target.value))}
              />
              <div className="text-sm text-gray-700 mt-1">${budget1.toLocaleString()}</div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Blended CPM</label>
              <input
                type="range"
                min="2"
                max="50"
                step="0.5"
                className="w-full mt-1 accent-[#e50C00]"
                value={cpm1}
                onChange={(e) => setCpm1(Number(e.target.value))}
              />
              <div className="text-sm text-gray-700 mt-1">${cpm1.toFixed(2)}</div>
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium">Impressions to Visits CR %</label>
                <input
                  type="number"
                  className="w-full mt-1 p-2 border rounded"
                  value={cr1_1}
                  onChange={(e) => setCr1_1(Number(e.target.value))}
                />
                <div className="text-sm text-gray-700 mt-1">{cr1_1.toFixed(2)}%</div>
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium">Visits to Orders CR %</label>
                <input
                  type="number"
                  className="w-full mt-1 p-2 border rounded"
                  value={cr2_1}
                  onChange={(e) => setCr2_1(Number(e.target.value))}
                />
                <div className="text-sm text-gray-700 mt-1">{cr2_1.toFixed(2)}%</div>
              </div>
            </div>
          </div>

          {/* Output Box */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-bold text-center mb-6">Estimated Results</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-[#e50C00] uppercase font-medium">Impressions</p>
                <p className="text-3xl font-normal text-black">{Math.round(impressions1).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-[#e50C00] uppercase font-medium">Estimated Visits</p>
                <p className="text-3xl font-normal text-black">{Math.round(visits1).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-[#e50C00] uppercase font-medium">Estimated Sales</p>
                <p className="text-3xl font-normal text-black">{Math.round(sales1).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-[#e50C00] uppercase font-medium">ROAS</p>
                <p className="text-3xl font-normal text-black">{roas1.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator 2 Header */}
      <h2 className="text-2xl text-white text-center font-semibold mt-6 mb-4">Calculator 2</h2>

      {/* Calculator 2 */}
      <div className="relative z-10 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          {/* Input Box */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Inputs</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium">Budget (6 Weeks)</label>
              <input
                type="range"
                min="20000"
                max="1000000"
                step="5000"
                className="w-full mt-1 accent-[#e50C00]"
                value={budget2}
                onChange={(e) => setBudget2(Number(e.target.value))}
              />
              <div className="text-sm text-gray-700 mt-1">${budget2.toLocaleString()}</div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Blended CPM</label>
              <input
                type="range"
                min="2"
                max="50"
                step="0.5"
                className="w-full mt-1 accent-[#e50C00]"
                value={cpm2}
                onChange={(e) => setCpm2(Number(e.target.value))}
              />
              <div className="text-sm text-gray-700 mt-1">${cpm2.toFixed(2)}</div>
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium">Impressions to Visits CR %</label>
                <input
                  type="number"
                  className="w-full mt-1 p-2 border rounded"
                  value={cr1_2}
                  onChange={(e) => setCr1_2(Number(e.target.value))}
                />
                <div className="text-sm text-gray-700 mt-1">{cr1_2.toFixed(2)}%</div>
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium">Visits to Orders CR %</label>
                <input
                  type="number"
                  className="w-full mt-1 p-2 border rounded"
                  value={cr2_2}
                  onChange={(e) => setCr2_2(Number(e.target.value))}
                />
                <div className="text-sm text-gray-700 mt-1">{cr2_2.toFixed(2)}%</div>
              </div>
            </div>
          </div>

          {/* Output Box */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-bold text-center mb-6">Estimated Results</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-[#e50C00] uppercase font-medium">Impressions</p>
                <p className="text-3xl font-normal text-black">{Math.round(impressions2).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-[#e50C00] uppercase font-medium">Estimated Visits</p>
                <p className="text-3xl font-normal text-black">{Math.round(visits2).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-[#e50C00] uppercase font-medium">Estimated Sales</p>
                <p className="text-3xl font-normal text-black">{Math.round(sales2).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-[#e50C00] uppercase font-medium">ROAS</p>
                <p className="text-3xl font-normal text-black">{roas2.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
