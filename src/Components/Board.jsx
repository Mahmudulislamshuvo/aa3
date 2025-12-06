import { categoryColors } from "../data/data";
import DoneColumn from "./DoneColumn";
import InProgress from "./InProgress";
import TodoColumn from "./TodoColumn";

const Board = ({ handleEdit }) => {
  const categoryColor = categoryColors;

  return (
    <div>
      <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
        <div className="flex flex-col gap-6 xl:flex-row h-full">
          {/* <!-- Todo Column --> */}
          <TodoColumn
            categoryColors={categoryColor}
            handleEdit={handleEdit}
          />

          {/* <!-- In Progress Column --> */}
          <InProgress categoryColors={categoryColor} handleEdit={handleEdit} />

          {/* <!-- Done Column --> */}
          <DoneColumn categoryColors={categoryColor} handleEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
};

export default Board;
