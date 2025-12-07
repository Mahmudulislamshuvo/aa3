import { useState } from "react";
import { DataContext, SearchContext } from "../Context";
import Board from "./Board";
import Header from "./Header";
import { data } from "../data/data";
import ModalComponent from "./commonComponent/ModalComponent";

const Contents = () => {
  // context data providor
  const [allData, setAlldata] = useState(data);
  const [searchTitle, setSearchTitle] = useState("");
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
  const [onModalCloseAction, setOnModalCloseAction] = useState(null);

  // handle Add Task
  const handleAdd = (onClose) => {
    setFormData({
      id: null,
      title: "",
      description: "",
      category: "design",
      date: "",
      status: "todo",
    });
    setOpen(true);
    if (onClose) {
      setOnModalCloseAction(() => onClose);
    }
  };
  // Handle Edit Task
  const handleEdit = (item, onClose) => {
    setFormData(item);
    setOpen(true);
    if (onClose) {
      setOnModalCloseAction(() => onClose);
    }
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
    if (onModalCloseAction) {
      onModalCloseAction();
      setOnModalCloseAction(null);
    }
  };

  const handleCloseModal = () => {
    setOpen(false);
    if (onModalCloseAction) {
      onModalCloseAction();
      setOnModalCloseAction(null);
    }
  };

  return (
    <>
      <main className="flex-1 flex flex-col min-h-0">
        <SearchContext.Provider value={{ searchTitle, setSearchTitle }}>
          <DataContext.Provider value={{ allData, setAlldata }}>
            {/* <!-- Header --> */}
            <Header handleAdd={handleAdd} />

            {/* <!-- Kanban Board --> */}
            <Board handleEdit={handleEdit} />
          </DataContext.Provider>
        </SearchContext.Provider>
      </main>
      <ModalComponent
        open={open}
        setOpen={handleCloseModal}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default Contents;
