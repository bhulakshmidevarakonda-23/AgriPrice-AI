function Features() {
  return (
    <section className="py-16 bg-gray-100">

      <h2 className="text-4xl font-bold text-center text-green-700">
        Why Choose AgriPrice AI?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto px-8">

        <div className="bg-white rounded-xl shadow-xl p-8 hover:scale-105 transition">
          <h3 className="text-2xl font-bold">
            💰 Live Crop Prices
          </h3>

          <p className="mt-4 text-gray-600">
            Get the latest crop prices from different markets.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 hover:scale-105 transition">
          <h3 className="text-2xl font-bold">
            🤖 AI Prediction
          </h3>

          <p className="mt-4 text-gray-600">
            Predict tomorrow's crop prices with AI.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 hover:scale-105 transition">
          <h3 className="text-2xl font-bold">
            📊 Market Comparison
          </h3>

          <p className="mt-4 text-gray-600">
            Compare crop prices across multiple markets.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;