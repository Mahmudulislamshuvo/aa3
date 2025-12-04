import CardThreeDot from "./commonComponent/CardThreeDot";
import ColumnToolbar from "./commonComponent/ColumnToolbar";

const TodoColumn = ({ allData, setAlldata }) => {
  const data = allData.filter((item) => item.status === "todo");
  return (
    <>
      <div class="flex-1 flex flex-col min-w-0 w-full">
        <ColumnToolbar />

        <div class="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
          {/* <!-- Card 1 --> */}
          {data.map((items) => (
            <div
              class="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow relative"
              data-card="wireframes"
              data-column="todo"
            >
              <div
                class="absolute top-4 right-4 text-gray-500"
                data-card-menu-container
              >
                <button
                  type="button"
                  class="p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
                  data-card-menu-toggle="wireframes-menu"
                  aria-label="Open card menu"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 3a1.25 1.25 0 110-2.5A1.25 1.25 0 018 3zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
                  </svg>
                </button>
                <CardThreeDot />
              </div>
              <div class="mb-3">
                <h3 class="font-semibold text-gray-900 text-sm">
                  {items.title}
                </h3>
              </div>
              <p class="text-xs text-gray-600 mb-4">{items.description}</p>
              <div class="flex items-center gap-2 mb-3">
                <span class="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">
                  {items.category}
                </span>
              </div>
              <div class="flex items-center gap-1 text-xs text-gray-500">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                {items.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoColumn;
