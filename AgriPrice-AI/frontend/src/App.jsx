import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import crops from "./data/crops";
import SearchBox from "./components/SearchBox";

function App() {
  const [state, setState] = useState("");
  const [crop, setCrop] = useState("");

  const crops = {
    chilli: {
      name: "🌶️ Chilli",
      price: "₹15,500 / Quintal",
      market: "Guntur Market",
    },
    paddy: {
      name: "🌾 Paddy",
      price: "₹2,280 / Quintal",
      market: "Nellore Market",
    },
    cotton: {
      name: "☁️ Cotton",
      price: "₹7,500 / Quintal",
      market: "Warangal Market",
    },
  };

  const result = crops[crop.toLowerCase()];

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <Hero />

      <div className="flex justify-center mt-10">
        <input
          type="text"
          placeholder="Search Crop..."
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
          className="border p-3 rounded-lg w-80"
        />
      </div>
      <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="border p-3 rounded-lg w-64 mt-4"
      >
      <option value="">Select State</option>
      <option value="Andhra Pradesh">Andhra Pradesh</option>
      <option value="Telangana">Telangana</option>
      </select>
      {state && (
       <p className="mt-4 text-lg font-semibold">
       Selected State: {state}
       </p>
       )}

      <div className="text-center mt-6">
        {result ? (
          <div className="bg-white shadow-lg rounded-lg p-6 inline-block">
            <h2 className="text-2xl font-bold">{result.name}</h2>
            <p className="text-green-700 text-xl mt-2">{result.price}</p>
            <p>{result.market}</p>
          </div>
        ) : (
          <p className="text-gray-600">
            Search: <b>chilli</b>, <b>paddy</b>, <b>cotton</b>
          </p>
        )}
      </div>
    </div>
  );
}

export default App;