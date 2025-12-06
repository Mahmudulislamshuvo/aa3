const ThreeDot = ({
  item,
  handleEdit,
  onMoveToTodo,
  onMoveToInProgress,
  onMoveToDone,
  onDelete,
}) => {
  return (
    <>
      <div
        className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40"
        id="wireframes-menu"
        data-card-menu
      >
        <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Move to
        </p>
        {item.status !== "todo" && (
          <button
            onClick={onMoveToTodo}
            type="button"
            className="w-full text-left px-4 py-2 hover:bg-gray-50"
          >
            To-do
          </button>
        )}
        {item.status !== "in-progress" && (
          <button
            onClick={onMoveToInProgress}
            type="button"
            className="w-full text-left px-4 py-2 hover:bg-gray-50"
          >
            In Progress
          </button>
        )}
        {item.status !== "done" && (
          <button
            onClick={onMoveToDone}
            type="button"
            className="w-full text-left px-4 py-2 hover:bg-gray-50"
          >
            Done
          </button>
        )}
        <div className="border-t border-gray-100 mt-2 pt-2 space-y-1">
          <button
            onClick={() => handleEdit(item)}
            type="button"
            className="w-full text-left px-4 py-2 hover:bg-gray-50"
          >
            Edit Card
          </button>
          <button
            onClick={onDelete}
            type="button"
            className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
          >
            Delete Card
          </button>
        </div>
      </div>
    </>
  );
};

export default ThreeDot;
