function Navbar() {
  return (
    <nav className="bg-green-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-3xl font-bold">🌾 AgriPrice AI</h1>

        <ul className="flex gap-8 font-semibold">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">Features</li>
          <li className="hover:text-yellow-300 cursor-pointer">News</li>
          <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;