function SearchBox({ crop, setCrop }) {
  return (
    <div className="flex justify-center mt-10">
      <input
        type="text"
        placeholder="Search Crop..."
        value={crop}
        onChange={(e) => setCrop(e.target.value)}
        className="border p-3 rounded-lg w-80"
      />
    </div>
  );
}

export default SearchBox;