import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
function App() {
  const [crop, setCrop] = useState("");
  const [search, setSearch] = useState("");
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

    <div className="flex justify-center mt-8 gap-4">
      <input
        type="text"
        placeholder="Search Crop..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-lg p-3 w-64"
      />

      <button
        onClick={() => setCrop(search)}
        className="bg-green-700 text-white px-6 py-3 rounded-lg"
      >
        Get Price
      </button>
    </div>

    {result && (
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-8">
        <h2 className="text-2xl font-bold">{result.name}</h2>
        <p className="text-green-700 text-xl">{result.price}</p>
        <p>{result.market}</p>
      </div>
    )}
  </div>
);
}
export default App;