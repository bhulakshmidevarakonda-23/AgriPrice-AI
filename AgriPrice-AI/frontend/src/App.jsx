import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import crops from "./data/crops";

function App() {
  const [crop, setCrop] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [market, setMarket] = useState("");

  const result = crops[crop.toLowerCase()];
  const cropExists = crop === "" || result;

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <section id="home">
      <Hero />
      </section>
      <Features />

      {/* Search Section */}
      <section
      id="crop-prices"
      className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 mt-10 flex flex-col items-center gap-4"
      >
        <input
          type="text"
          placeholder="Search Crop..."
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
          className="border-2 border-green-500 p-3 rounded-xl w-80 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-xl font-bold shadow-lg">
          🔍 Search Crop
        </button>

        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="border-2 border-green-500 p-3 rounded-xl w-80"
        >
          <option value="">Select State</option>
          <option>Andhra Pradesh</option>
          <option>Telangana</option>
        </select>

        <select
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          className="border-2 border-green-500 p-3 rounded-xl w-80"
        >
          <option value="">Select District</option>
          <option>Guntur</option>
          <option>Nellore</option>
          <option>Warangal</option>
          <option>Kurnool</option>
        </select>

        <select
          value={market}
          onChange={(e) => setMarket(e.target.value)}
          className="border-2 border-green-500 p-3 rounded-xl w-80"
        >
          <option value="">Select Market</option>
          <option>Guntur Market</option>
          <option>Nellore Market</option>
          <option>Warangal Market</option>
          <option>Kurnool Market</option>
        </select>

        {state && <p>📍 State: {state}</p>}
        {district && <p>📍 District: {district}</p>}
        {market && <p>🏪 Market: {market}</p>}
      </section>

      {/* Crop Result */}
      <section className="text-center mt-10">
        {result ? (
          <>
            <div className="bg-white shadow-xl rounded-xl p-6 max-w-md mx-auto hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-bold">{result.name}</h2>

              <p className="text-3xl font-bold text-green-700 mt-3">
                {result.price}
              </p>

              <p className="mt-2">{result.market}</p>
            </div>

            <div
             id="ai-prediction"
             className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-xl max-w-md mx-auto mt-6"
           >
              <h3 className="text-xl font-bold">
                🤖 AI Recommendation
              </h3>

              <p className="mt-3">
                <strong>Today's Price:</strong> {result.price}
              </p>

              <p>
                <strong>Tomorrow Prediction:</strong> +5%
              </p>

              <p className="text-green-700 font-bold mt-3">
                Recommendation: Wait 1 Day 📈
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-xl p-6 max-w-md mx-auto mt-6">
              <h3 className="text-xl font-bold text-green-700">
                📈 Price History
              </h3>

              <p className="mt-3">Yesterday : ₹14,800</p>
              <p>Today : {result.price}</p>
              <p>Tomorrow : ₹16,200</p>
            </div>
          </>
        ) : (
          <>
            {!cropExists ? (
              <p className="text-red-600 font-bold text-xl">
                ❌ Crop not found
              </p>
            ) : (
              <p className="text-lg">
                Search for <b>chilli</b>, <b>paddy</b>, <b>cotton</b>, <b>tomato</b>
              </p>
            )}
          </>
        )}
      </section>

      {/* Statistics */}
      <section
          id="market-comparison"
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 px-8"
      >
        <div className="bg-white p-6 rounded-xl shadow-xl text-center">
          <h2 className="text-4xl font-bold text-green-700">50+</h2>
          <p>Supported Crops</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-xl text-center">
          <h2 className="text-4xl font-bold text-green-700">100+</h2>
          <p>Markets</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-xl text-center">
          <h2 className="text-4xl font-bold text-green-700">10K+</h2>
          <p>Farmers Helped</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-xl text-center">
          <h2 className="text-4xl font-bold text-green-700">95%</h2>
          <p>Prediction Accuracy</p>
        </div>
      </section>
      <About />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;