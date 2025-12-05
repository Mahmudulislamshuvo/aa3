import { useContext } from "react";
import CardThreeDot from "./commonComponent/CardThreeDot";
import ColumnToolbar from "./commonComponent/ColumnToolbar";
import { DataContext } from "../Context";

const TodoColumn = ({ categoryColors }) => {
  const { allData } = useContext(DataContext);
  const data = allData.filter((item) => item.status === "todo");

  return (
    <>
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <ColumnToolbar todoData={data} />

        <div className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
          {/* <!-- Card 1 --> */}
          {data?.map((items) => (
            <div
              key={items.id}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow relative"
              data-card="wireframes"
              data-column="todo"
            >
              <div
                className="absolute top-4 right-4 text-gray-500"
                data-card-menu-container
              >
                <button
                  type="button"
                  className="p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
                  data-card-menu-toggle="wireframes-menu"
                  aria-label="Open card menu"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3a1.25 1.25 0 110-2.5A1.25 1.25 0 018 3zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
                  </svg>
                </button>
                <CardThreeDot />
              </div>
              <div className="mb-3">
                <h3 className="font-semibold text-gray-900 text-sm">
                  {items.title}
                </h3>
              </div>
              <p className="text-xs text-gray-600 mb-4">{items.description}</p>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`inline-block px-2.5 py-1 text-xs font-medium rounded ${
                    categoryColors[items.category] ||
                    "bg-gray-100 text-gray-600"
                  }`}
                >
                  {items.category}
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
