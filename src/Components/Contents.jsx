import { useState } from "react";
import { DataContext } from "../Context";
import Board from "./Board";
import Header from "./Header";
import { data } from "../data/data";

const Contents = () => {
  const [allData, setAlldata] = useState(data);

  return (
    <>
      <main className="flex-1 flex flex-col min-h-0">
        <DataContext.Provider value={{ allData, setAlldata }}>
          {/* <!-- Header --> */}
          <Header />

          {/* <!-- Kanban Board --> */}
          <Board />
        </DataContext.Provider>
      </main>
    </>
  );
};

export default Contents;
