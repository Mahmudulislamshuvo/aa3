import { getUniqueCategories } from "../../utils/getUniqueCategory";

const FilterOptions = ({ setSelectedFilter, closeMenu, data, displayData }) => {
  const uniqueCategory = getUniqueCategories(data);
  const handleSelect = (category) => {
    setSelectedFilter(category);
    closeMenu();
  };

  return (
    <>
      <div
        className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40"
        data-menu
      >
        <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Filter by tag
        </p>
        <button
          onClick={() => handleSelect(null)}
          type="button"
          className="w-full text-left px-4 py-2 hover:bg-gray-50"
        >
          Show All
        </button>
        {uniqueCategory?.map((category) => (
          <button
            key={category}
            onClick={() => handleSelect(category)}
            type="button"
            className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${displayData[0]?.category}`}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default FilterOptions;
