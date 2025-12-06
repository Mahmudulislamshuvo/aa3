import { useState } from "react";
import { DataContext } from "../Context";
import Board from "./Board";
import Header from "./Header";
import { data } from "../data/data";
import ModalComponent from "./commonComponent/ModalComponent";

const Contents = () => {
  // context data providor
  const [allData, setAlldata] = useState(data);
  // Modal show state
  const [open, setOpen] = useState(false);
  // Modal form data manege state
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    description: "",
    category: "design",
    date: "",
    status: "todo",
  });
  // handle Add Task
  const handleAdd = () => {
    setFormData({
      id: null,
      title: "",
      description: "",
      category: "design",
      date: "",
      status: "todo",
    });
    setOpen(true);
  };
  // Handle Edit Task
  const handleEdit = (item) => {
    setFormData(item);
    setOpen(true);
  };
  // Handle submiting form FRESH or OLD
  const handleSubmit = (newData) => {
    if (newData.id) {
      // Update existing task
      setAlldata(
        allData.map((item) => (item.id === newData.id ? newData : item))
      );
    } else {
      // Add new task
      setAlldata([...allData, { ...newData, id: crypto.randomUUID() }]);
    }
  };

  return (
    <>
      <main className="flex-1 flex flex-col min-h-0">
        <DataContext.Provider value={{ allData, setAlldata }}>
          {/* <!-- Header --> */}
          <Header handleAdd={handleAdd} />

          {/* <!-- Kanban Board --> */}
          <Board handleEdit={handleEdit} />
        </DataContext.Provider>
      </main>
      <ModalComponent
        open={open}
        setOpen={setOpen}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default Contents;
