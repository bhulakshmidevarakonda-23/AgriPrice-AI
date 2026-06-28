function Navbar() {
  return (
    <nav className="bg-green-700 text-white flex justify-between items-center px-8 py-4 shadow-lg">
      <h1 className="text-2xl font-bold">🌾 AgriPrice AI</h1>

      <ul className="flex gap-6">
        <li>Home</li>
        <li>Crop Prices</li>
        <li>AI Prediction</li>
        <li>Market Comparison</li>
      </ul>
    </nav>
  );
}

export default Navbar;