import { useEffect, useState } from "react";

const initialState = {
  title: "",
  description: "",
  status: "Pending",
};

const TaskForm = ({ editingTask, onAdd, onUpdate }) => {
  const [task, setTask] = useState(initialState);
  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    } else {
      setTask(initialState);
    }
  }, [editingTask]);
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.title.trim() || !task.description.trim()) {
      alert("Title and Description are required.");
      return;
    }
    if (editingTask) {
      onUpdate(editingTask._id, task);
    } else {
      onAdd(task);
    }

    setTask(initialState); };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {editingTask ? "Edit Task" : "Add New Task"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-2 font-medium">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">
            Description
          </label>
          <textarea
            rows="5"
            name="description"
            value={task.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div>
          <label className="block mb-2 font-medium">
            Status
          </label>
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
            className="w-full border rounded-lg p-3" >
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>

        <button
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-3 transition" >
          {editingTask ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;