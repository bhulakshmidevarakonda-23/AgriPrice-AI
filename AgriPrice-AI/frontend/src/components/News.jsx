function News() {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-green-700">
        📰 Latest Agriculture News
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 px-8">

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold">🌾 Paddy Prices Rising</h3>
          <p className="mt-3 text-gray-600">
            Paddy prices are expected to increase during the coming week.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold">🌶️ Chilli Export Demand</h3>
          <p className="mt-3 text-gray-600">
            Export demand for chilli has increased in Guntur market.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold">🌧️ Weather Update</h3>
          <p className="mt-3 text-gray-600">
            Moderate rainfall is expected across Andhra Pradesh this week.
          </p>
        </div>

      </div>
    </section>
  );
}

export default News;