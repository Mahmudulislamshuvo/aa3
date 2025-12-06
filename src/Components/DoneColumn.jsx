import { useContext, useState } from "react";
import ColumnToolbar from "./commonComponent/ColumnToolbar";
import { DataContext } from "../Context";
import { getFilteredData } from "../utils/displayData";
import { getSortedData } from "../utils/sortedData";
import ThreeDot from "./commonComponent/ThreeDot";
import EmptyCart from "./commonComponent/EmptyCart";

const DoneColumn = ({ categoryColors, handleEdit }) => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  //got data from context
  const { allData, setAlldata } = useContext(DataContext);
  // filtered todo data only
  const data = allData.filter((item) => item.status === "done");
  // mapping unique category to show

  // filtered data show or show whole data
  const displayData = getFilteredData(data, selectedFilter);

  // handle filter menu
  const handleFilterMenu = (e) => {
    e.stopPropagation();
    setShowFilterMenu(!showFilterMenu);
  };

  const finalSortedData = getSortedData(displayData, sortOrder);

  // Handle Toggle Modify Component
  const handleMenuToggle = (e, id) => {
    e.stopPropagation();
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  // status change (Move to)
  const handleMoveStatus = (id, newStatus) => {
    setAlldata((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
    setOpenMenuId(null);
  };

  // delete card
  const handleDelete = (id) => {
    setAlldata((prev) => prev.filter((item) => item.id !== id));
    setOpenMenuId(null);
  };

  return (
    <>
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <ColumnToolbar
          title={"Done"}
          todoData={data}
          handleFilterMenu={handleFilterMenu}
          showFilterMenu={showFilterMenu}
          setShowFilterMenu={setShowFilterMenu}
          setSelectedFilter={setSelectedFilter}
          setSortOrder={setSortOrder}
          sortOrder={sortOrder}
          displayData={displayData}
        />
        <div className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
          {/* <!-- Card 1 --> */}
          {finalSortedData.length === 0 && <EmptyCart />}
          {finalSortedData?.map((items) => (
            <div
              key={items.id}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow relative"
              data-card="software-installation"
              data-column="done"
            >
              <div
                className="absolute top-4 right-4 text-gray-500"
                data-card-menu-container
              >
                <button
                  onClick={(e) => handleMenuToggle(e, items.id)}
                  type="button"
                  className="p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
                  data-card-menu-toggle="software-installation-menu"
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
                {openMenuId === items.id && (
                  <ThreeDot
                    item={items}
                    onMoveToTodo={() => handleMoveStatus(items.id, "todo")}
                    onMoveToInProgress={() =>
                      handleMoveStatus(items.id, "in-progress")
                    }
                    onDelete={() => handleDelete(items.id)}
                    handleEdit={(item) =>
                      handleEdit(item, () => setOpenMenuId(null))
                    }
                  />
                )}
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

export default DoneColumn;
