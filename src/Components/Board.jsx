import { useState } from "react";
import DoneColumn from "./DoneColumn";
import InProgress from "./InProgress";
import TodoColumn from "./TodoColumn";
import data from "../data/data";

const Board = () => {
  const [allData, setAlldata] = useState(data);
  return (
    <div>
      <div class="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
        <div class="flex flex-col gap-6 xl:flex-row h-full">
          {/* <!-- Todo Column --> */}
          <TodoColumn allData={allData} setAlldata={setAlldata} />

          {/* <!-- In Progress Column --> */}
          <InProgress allData={allData} setAlldata={setAlldata} />

          {/* <!-- Done Column --> */}
          <DoneColumn allData={allData} setAlldata={setAlldata} />
        </div>
      </div>
    </div>
  );
};

export default Board;
