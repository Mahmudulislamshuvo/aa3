const SortBy = ({ setSortOrder, setShowSort, sortOrder }) => {
  const handleSort = (e) => {
    setSortOrder(e);
    setShowSort(false);
  };
  return (
    <>
      <div
        className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40"
        id="inprogress-sort-menu"
        data-menu
      >
        <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Sort by date
        </p>
        <button
          onClick={() => handleSort("newest")}
          type="button"
          className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${
            sortOrder === "newest" ? "bg-green-300 font-bold" : ""
          }`}
        >
          Newest first
        </button>
        <button
          onClick={() => handleSort("oldest")}
          type="button"
          className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${
            sortOrder === "oldest" ? "bg-green-300 font-bold" : ""
          }`}
        >
          Oldest first
        </button>
      </div>
    </>
  );
};

export default SortBy;
