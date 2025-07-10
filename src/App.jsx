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

  // Calculator 1 calculations (updated)
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

  // Calculator 2 calculations (updated)
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
  const cpmRange = channel === "CTV" ? "$5-$15" : "$15-$35";
  const cpvRange = channel === "CTV" ? "$0.01-$0.02" : "$0.01-$0.04";

  return <div className="min-h-screen font-[baikal] bg-[#e50C00]">{/* same JSX content as before, no change in visual structure */}</div>;
}
