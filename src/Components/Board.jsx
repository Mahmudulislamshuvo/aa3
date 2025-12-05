import { useContext } from "react";
import DoneColumn from "./DoneColumn";
import InProgress from "./InProgress";
import TodoColumn from "./TodoColumn";

import { DataContext } from "../Context";

const Board = () => {
  const categoryColors = {
    Design: "bg-blue-50 text-blue-700",
    Operations: "bg-green-50 text-green-700",
    Marketing: "bg-pink-50 text-pink-700",
    Creative: "bg-purple-50 text-purple-700",
    Development: "bg-sky-50 text-sky-700",
    Backend: "bg-indigo-50 text-indigo-700",
    Setup: "bg-slate-50 text-slate-700",
    Infrastructure: "bg-teal-50 text-teal-700",
    Documentation: "bg-orange-50 text-orange-700",
  };

  const { allData, setAlldata } = useContext(DataContext);

  return (
    <div>
      <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
        <div className="flex flex-col gap-6 xl:flex-row h-full">
          {/* <!-- Todo Column --> */}
          <TodoColumn categoryColors={categoryColors} />

          {/* <!-- In Progress Column --> */}
          <InProgress categoryColors={categoryColors} />

          {/* <!-- Done Column --> */}
          <DoneColumn
            allData={allData}
            setAlldata={setAlldata}
            categoryColors={categoryColors}
          />
        </div>
      </div>
    </div>
  );
};

export default Board;
