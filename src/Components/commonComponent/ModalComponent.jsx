import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const ModalComponent = ({
  open,
  setOpen,
  formData,
  setFormData,
  onSubmit,
  title = "Add Task",
  des = " Create a card for your board.",
}) => {
  const isEditMode = Boolean(formData?.id);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Open modal</button>
      <Modal
        classNames={{
          modal: "w-full max-w-4xl p-0 rounded-2xl",
          overlay: "bg-black/40",
        }}
        open={open}
        onClose={() => setOpen(false)}
        center
      >
        <div className="max-w-4xl mx-auto px-4 py-10 sm:py-12">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <a
                href="./index.html"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  ></path>
                </svg>
                Back to board
              </a>

              <h1 className="text-3xl font-bold text-gray-900 mt-8">{title}</h1>
              <p className="text-sm text-gray-500">{des}</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
            <form className="space-y-8">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    for="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Task Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g. Wireframes"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label
                    for="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Task Subtitle / Description
                  </label>
                  <input
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Add context or acceptance criteria"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    for="category"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tag
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                  >
                    <option value="Design">Design</option>
                    <option value="Operations">Operations</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Creative">Creative</option>
                    <option value="Development">Development</option>
                    <option value="Backend">Backend</option>
                    <option value="Setup">Setup</option>
                    <option value="Infrastructure">Infrastructure</option>
                    <option value="Documentation">Documentation</option>
                  </select>
                </div>

                <div>
                  <label
                    for="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Due Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    for="status"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                  >
                    <option value="todo">To-do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="done">Done</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <a
                  href="./index.html"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </a>
                <button onClick={handleSubmit} type="submit">
                  {isEditMode ? "Update Task" : "Add Task"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
