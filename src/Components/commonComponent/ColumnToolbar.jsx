import { useState } from "react";
import FilterOptions from "./FilterOptions";
import SortBy from "./SortBy";

const ColumnToolbar = ({
  title = "To-do",
  todoData,
  handleFilterMenu,
  showFilterMenu,
  setShowFilterMenu,
  setSelectedFilter,
  setSortOrder,
  sortOrder,
  displayData,
}) => {
  const [showSort, setShowSort] = useState(false);
  return (
    <>
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
            {todoData?.length}
          </span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="relative">
            <button
              onClick={(e) => handleFilterMenu(e)}
              type="button"
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none"
              data-menu-toggle="inprogress-filter-menu"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414V19a1 1 0 01-.553.894l-2 1A1 1 0 0110 20v-6.293L3.293 7.293A1 1 0 013 6.586V4z"
                ></path>
              </svg>
              Filter
            </button>
            {showFilterMenu && (
              <FilterOptions
                data={todoData}
                setSelectedFilter={setSelectedFilter}
                closeMenu={() => setShowFilterMenu(false)}
                displayData={displayData}
              />
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setShowSort(!showSort)}
              type="button"
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none"
              data-menu-toggle="inprogress-sort-menu"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M8 12h12M12 18h8"
                ></path>
              </svg>
              Sort
            </button>
            {showSort && (
              <SortBy
                setSortOrder={setSortOrder}
                setShowSort={setShowSort}
                sortOrder={sortOrder}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ColumnToolbar;
