import Board from "./Board";
import Header from "./Header";

const Contents = () => {
  return (
    <>
      <main class="flex-1 flex flex-col min-h-0">
        {/* <!-- Header --> */}
        <Header />

        {/* <!-- Kanban Board --> */}
        <Board />
      </main>
    </>
  );
};

export default Contents;
