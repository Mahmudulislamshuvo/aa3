import Contents from "./Components/Contents";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50">
      <Sidebar />
      <Contents />
    </div>
  );
};

export default App;
