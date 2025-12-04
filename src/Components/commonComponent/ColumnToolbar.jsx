import CardThreeDot from "./CardThreeDot";

const ColumnToolbar = () => {
  return (
    <>
      <div class="flex items-center gap-3 mb-6">
        <div class="flex items-center gap-3">
          <h2 class="text-lg font-semibold text-gray-900">In Progress</h2>
          <span class="text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
            3
          </span>
        </div>
        <div class="ml-auto flex items-center gap-2">
          <div class="relative">
            <button
              type="button"
              class="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none"
              data-menu-toggle="inprogress-filter-menu"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414V19a1 1 0 01-.553.894l-2 1A1 1 0 0110 20v-6.293L3.293 7.293A1 1 0 013 6.586V4z"
                ></path>
              </svg>
              Filter
            </button>
            <CardThreeDot />
          </div>
          <div class="relative">
            <button
              type="button"
              class="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none"
              data-menu-toggle="inprogress-sort-menu"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M8 12h12M12 18h8"
                ></path>
              </svg>
              Sort
            </button>
            <div
              class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 hidden z-40"
              id="inprogress-sort-menu"
              data-menu
            >
              <p class="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Sort by date
              </p>
              <button
                type="button"
                class="w-full text-left px-4 py-2 hover:bg-gray-50"
              >
                Newest first
              </button>
              <button
                type="button"
                class="w-full text-left px-4 py-2 hover:bg-gray-50"
              >
                Oldest first
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColumnToolbar;
