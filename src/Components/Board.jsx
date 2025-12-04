import { useState } from "react";
import DoneColumn from "./DoneColumn";
import InProgress from "./InProgress";
import TodoColumn from "./TodoColumn";
import { data } from "../data/data";

const Board = () => {
  const [allData, setAlldata] = useState(data);
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

  return (
    <div>
      <div class="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
        <div class="flex flex-col gap-6 xl:flex-row h-full">
          {/* <!-- Todo Column --> */}
          <TodoColumn
            allData={allData}
            setAlldata={setAlldata}
            categoryColors={categoryColors}
          />

          {/* <!-- In Progress Column --> */}
          <InProgress
            allData={allData}
            setAlldata={setAlldata}
            categoryColors={categoryColors}
          />

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
