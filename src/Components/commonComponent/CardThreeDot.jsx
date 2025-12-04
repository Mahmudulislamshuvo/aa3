const CardThreeDot = () => {
  return (
    <>
      <div
        class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 hidden z-40"
        id="software-installation-menu"
        data-card-menu
      >
        <p class="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Move to
        </p>
        <button
          type="button"
          class="w-full text-left px-4 py-2 hover:bg-gray-50"
        >
          To-do
        </button>
        <button
          type="button"
          class="w-full text-left px-4 py-2 hover:bg-gray-50"
        >
          In Progress
        </button>
        <div class="border-t border-gray-100 mt-2 pt-2 space-y-1">
          <button
            type="button"
            class="w-full text-left px-4 py-2 hover:bg-gray-50"
          >
            Edit Card
          </button>
          <button
            type="button"
            class="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
          >
            Delete Card
          </button>
        </div>
      </div>
    </>
  );
};

export default CardThreeDot;
